<script>
  import { Label, Input, Textarea, Img } from 'flowbite-svelte';

  export let imageName = '';
  export let imageURL = '';
  export let imageDescription = '';
  export let index = 0; // Receive the index from NewArchive.svelte

  import { imageStore } from '$lib/stores/ImageUploadStore.js';

  // Function to update the store with new values
  function updateImage(newImageName, newDescription) {
    imageStore.update((images) => {
      images[index].name = newImageName;
      images[index].description = newDescription;
      return images;
    });
  }
</script>

<form class="m-2">
  <div class="flex items-center">
    <div class="image">
      <Img src={imageURL} class="rounded-lg" alt={imageName} />
    </div>

    <div class="form-fields ml-4">
      <div>
        <Label for="imageName">Image Name:</Label>
        <Input type="text" id="imageName" placeholder="Image name" bind:value={imageName} 
               on:change={(e) => updateImage(e.target.value, imageDescription)} />
      </div>
      <div>
        <Label for="imageURL">Image URL:</Label>
        <Input type="text" id="imageURL" bind:value={imageURL} disabled readonly />
      </div>
      <div>
        <Label for="imageDescription">Image Description:</Label>
        <Textarea id="imageDescription" placeholder="Image description" bind:value={imageDescription} 
                  on:change={(e) => updateImage(imageName, e.target.value)} />
      </div>
    </div>
  </div>
</form>

<style>
  .image {
    width: 200px;
    overflow: hidden;
  }

  .image img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
</style>