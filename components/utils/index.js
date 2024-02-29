export function selectImage(images) {
  let selectedImage = null;

  for (let i = 0; i < images.length; i++) {
    if (images[i].url.includes("RETINA_PORTRAIT_16_9")) {
      selectedImage = images[i];
      return selectedImage;
    }
  }
}

export function formatDate(apiDate) {
  const date = new Date(apiDate);
  const options = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };

  const dateFormatter = new Intl.DateTimeFormat("de-DE", options);
  const formattedDate = dateFormatter.format(date);
  return formattedDate;
}
