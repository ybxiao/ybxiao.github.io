// Function to change the displayed image based on button clicked
function changeImage(image) {
  const imageDisplay = document.getElementById('imageDisplay');
  imageDisplay.src = `${image}.jpg`;  // The image files should be named as image1.jpg, image2.jpg, etc.
}
