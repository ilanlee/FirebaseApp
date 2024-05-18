<script>
    import ImageInformation from "./ImageInformation.svelte";
    import { imageStore } from "$lib/stores/ImageUploadStore.js";

    let uploadedImages = [];
    imageStore.subscribe((value) => {
      uploadedImages = value;
        });
</script>

<div>
    <ul>
      {#each uploadedImages as image}
          <ImageInformation imageName={image.name} imageURL={image.url} />
      {/each}
    </ul>
  </div>