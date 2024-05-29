<script>
  import { onMount } from 'svelte';
  import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
  import { storage } from '$lib/firebase.js'; // Import storage from firebase.js
  import { imageStore } from '$lib/stores/ImageUploadStore.js';
  import { user } from '$lib/stores/userStore.js'

  import { Input } from 'flowbite-svelte';

  let userId = ''; // Initialize userId variable
  let files = [];
  let previewUrls = [];
  let uploadProgress = {};
  export let images = [];
  imageStore.subscribe((value) => {
      images = value;
      });

    // Create a listener variable
    const unsubscribe = user.subscribe((firebaseUser) => {
      if (firebaseUser) {
        userId = firebaseUser.uid; // Assuming you have 'uid' available in the firebaseUser object
      } else {
        userId = 'noUserID';
      }
    });

  const handleFileChange = (e) => {
    files = e.target.files;
    previewUrls = [];
    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.onloadend = () => {
        previewUrls = [...previewUrls, reader.result];
      };
      reader.readAsDataURL(files[i]);
    }
  };

  const uploadImages = async () => {
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const storageRef = ref(storage, `usersUploads/${userId}/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on('state_changed', 
        (snapshot) => {
          uploadProgress[file.name] = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        }, 
        (error) => {
          console.error("Upload failed:", error);
        }, 
        async () => {
          // Upload completed successfully, get the download URL
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          console.log("ImageUpload: An image downadURL:", downloadURL);
          imageStore.update((images) => [...images, { name: file.name, url: downloadURL }]);
          console.log("ImageUpload: imageStore:", imageStore);
          // Clear previewUrls after successful upload
          previewUrls = []; 
        }
      );
    }
  };
</script>

<div class="container mx-auto p-4">
  <h1 class="text-2xl font-bold mb-4">Image Upload</h1>
  <input type="file" multiple on:change={handleFileChange} class="mb-4" />
  {#if previewUrls.length > 0}
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {#each previewUrls as url}
        <img src={url} alt="preview" class="w-full h-auto rounded-lg" />
      {/each}
    </div>
  {/if}
  <button on:click={uploadImages} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Upload
  </button>

  {#if Object.keys(uploadProgress).length > 0 && Object.values(uploadProgress).every(progress => progress<100)}
    <div class="mt-4">
      <h2 class="text-lg font-bold">Upload Progress</h2>
      <ul>
        {#each Object.entries(uploadProgress) as [filename, progress]}
          <li>{filename}: {progress.toFixed(2)}%</li>
        {/each}
      </ul>
    </div>
  {/if}
</div>