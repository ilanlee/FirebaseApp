<script>
    import ImageInformation from "./ImageInformation.svelte";
    import { imageStore } from "$lib/stores/ImageUploadStore.js";
    import { db } from '$lib/firebase';
    import { collection, addDoc } from "firebase/firestore";
  
    let uploadedImages = [];
    imageStore.subscribe((value) => {
      uploadedImages = value;
    });
  
    async function saveArchive() {
      const archiveRef = collection(db, "archives");
      const archiveData = {
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
      {#each uploadedImages as image}
        <ImageInformation 
          imageName={image.name} 
          imageURL={image.url} 
          bind:imageDescription={image.description}
        />
      {/each}
    </ul>
    <button on:click={saveArchive}>Save Archive</button>
 
  </div>