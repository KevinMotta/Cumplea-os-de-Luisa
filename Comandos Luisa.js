const images = ["imagen1.jpg", "imagen2.jpg", "imagen3.jpg", "imagen4.jpg", "imagen5.jpg"]; // Agrega aquí la ruta de tus imágenes

let currentImage = 0;
const imgElement = document.querySelector("img");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

function showImage() {
  imgElement.src = images[currentImage];
}

function nextImage() {
  currentImage = (currentImage + 1) % images.length;
  showImage();
}

function prevImage() {
  currentImage = (currentImage - 1 + images.length) % images.length;
  showImage();
}

prevBtn.addEventListener("click", prevImage);
nextBtn.addEventListener("click", nextImage);

showImage(); // Mostrar la primera imagen al cargar la página
