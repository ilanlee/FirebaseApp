<script> 
    export let imageName = '';
    export let imageURL = '';
    let imageDescription = '';
  </script>
  
  <div class="flex items-center">
    <div class="image">
      <img src={imageURL} alt={imageName} />
    </div>
  
    <div class="form-fields ml-4">
      <label for="imageName">Image Name:</label>
      <input type="text" id="imageName" placeholder={imageName} bind:value={imageName} />
  
      <label for="imageURL">Image URL:</label>
      <input type="text" id="imageURL" bind:value={imageURL} disabled readonly />
  
      <label for="imageDescription">Image Description:</label>
      <textarea id="imageDescription" placeholder="Image description" bind:value={imageDescription} />
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