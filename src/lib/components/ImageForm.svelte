<script>
    import { onMount } from 'svelte';
  
    export let imageName;
    export let imageURL;
    let imageDescription = '';
  
    onMount(() => {
      // Resize the image to match the form fields height
      const image = document.querySelector('.image');
      const formFields = document.querySelector('.form-fields');
      image.style.height = `${formFields.offsetHeight}px`;
    });
  </script>
  
  <div class="flex items-center">
    <div class="image">
      <img src={imageURL} alt={imageName} />
    </div>
  
    <div class="form-fields ml-4">
      <label for="imageName">Image Name:</label>
      <input type="text" id="imageName" bind:value={imageName} />
  
      <label for="imageURL">Image URL:</label>
      <input type="text" id="imageURL" bind:value={imageURL} />
  
      <label for="imageDescription">Image Description:</label>
      <textarea id="imageDescription" bind:value={imageDescription} />
    </div>
  </div>
  
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