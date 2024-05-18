<script>
    import { onMount } from 'svelte';
    import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
    import { storage } from '$lib/firebase.js'; // Import storage from firebase.js
    import { imageStore } from '$lib/stores/ImageUploadStore.js';
  
    let files = [];
    let previewUrls = [];
    let uploadProgress = {};
    export let images = [];
    imageStore.subscribe((value) => {
        images = value;
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
        const storageRef = ref(storage, `images/${file.name}`);
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
  
    {#if Object.keys(uploadProgress).length > 0}
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