<script>
    import ImageInformation from "./ImageInformation.svelte";
    import { imageStore } from "$lib/stores/ImageUploadStore.js";
    import { db } from '$lib/firebase';
    import { collection, addDoc } from "firebase/firestore";
    import { user } from '$lib/stores/userStore.js';

    let uploadedImages = [];
    imageStore.subscribe((value) => {
      uploadedImages = value;
    });

    // Create a listener variable
    let creator = 'noUserID';
    const unsubscribe = user.subscribe((firebaseUser) => {
      if (firebaseUser) {
        creator = firebaseUser.uid; // Assuming you have 'uid' available in the firebaseUser object
      } else {
        creator = 'noUserID';
      }
    });
  
    async function saveArchive() {
      const archiveRef = collection(db, "archives");
      const archiveData = {
        creator: creator,
        images: uploadedImages.map((image) => ({
          imageName: image.name,
          imageURL: image.url,
          imageDescription: image.description || '', // Access imageDescription from ImageInformation
        })),
      };
      try {
        await addDoc(archiveRef, archiveData);
        console.log("Archive saved successfully!");
        // Optionally, clear the image store after saving
        imageStore.set([]);
      } catch (error) {
        console.error("Error saving archive: ", error);
      }
    }
  </script>
  
  <div>

    <ul>
      {#each uploadedImages as image, index}
      <ImageInformation 
      imageName={image.name} 
      imageURL={image.url} 
      imageDescription={image.description}
      index={index} 
      />
      {/each}
    </ul>
    <button on:click={saveArchive}>Save Archive</button>
 
  </div>