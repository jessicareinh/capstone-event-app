export default function selectImage(images) {
  let selectedImage = null;

  for (let i = 0; i < images.length; i++) {
    if (images[i].url.includes("RETINA_PORTRAIT_16_9")) {
      selectedImage = images[i];
      return selectedImage;
    }
  }
}
