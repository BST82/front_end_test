   // Array to store image URLs
   const images = ['./assets/oo.jpg', './assets/couple2.jpg', './assets/couple3.jpg'];
   let currentImageIndex = 0;

   function changeImage() {
       const imageContainer = document.getElementById('imageDisplay');
       // Hide the background image
       document.querySelector('.image-container').style.backgroundImage = 'none';
       currentImageIndex = (currentImageIndex + 1) % images.length;
       imageContainer.innerHTML = `<img src="${images[currentImageIndex]}" alt="Image">`;
   }

   function changeImageBack() {
       const imageContainer = document.getElementById('imageDisplay');
       // Hide the background image
       document.querySelector('.image-container').style.backgroundImage = 'none';
       // If currentImageIndex is 0, set it to the last index of the images array
       // Otherwise, decrement currentImageIndex
       currentImageIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
       imageContainer.innerHTML = `<img src="${images[currentImageIndex]}" alt="Image">`;
   }
   

   const changeImageButton = document.getElementById('changeImageBtn');
   changeImageButton.addEventListener('click', changeImage);

   const changeImageButton2 = document.getElementById('changeImageBtn2');
   changeImageButton2.addEventListener('click', changeImageBack); // Call changeImageBack function when the button is clicked