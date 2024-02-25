export default function selectImage(images) {
  let selectedImage = null;

  for (let i = 0; i < images.length; i++) {
    if (images[i].url.includes("RETINA_PORTRAIT_16_9")) {
      selectedImage = images[i];
      return selectedImage;
    }
  }
}

export const apiKey = "KUfDtCZdKiqgRrrY7R9qumcHOH8tg1RA";
export const baseUrl =
  "https://app.ticketmaster.com/discovery/v2/events?apikey=";
