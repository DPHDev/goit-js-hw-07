import { galleryItems } from "./gallery-items.js";
// Change code below this line

//-------------- Creo arrays del array de objetos para modificar más facilmente con su index --------------//
let urlPrev = [];
let urlOpen = [];
let altImg = [];

galleryItems.map((item) => {
  // Agregar cada propiedad al array correspondiente
  urlPrev.push(item.preview);
  urlOpen.push(item.original);
  altImg.push(item.description);
});

const gallery = document.querySelector(".gallery");

// ------------ Crear li html de el arreglo galleryItems-------------//

function createGallery(items) {
const itemsList = items
  .map(
    (image) =>
      `<li  class="gallery__item"><a class="gallery__link"><img class="gallery__image" src="${image.preview}" alt="${image.description}"/></a></li>`
  )
    .join("");
    
    return itemsList;     
}

gallery.innerHTML = createGallery(galleryItems);

// -------------------------------------------------------------------//
// ------------ Función abrir img modal con basicLightbox ------------//

gallery.addEventListener("click", (event) => {
    event.preventDefault();
    // console.log(event.target.src);
    const urlEvent = event.target.src;
    // console.log(urlPrev.indexOf(event.target.src));
    const  indexEvent = urlPrev.indexOf(event.target.src);
    // console.log(urlOpen[indexEvent]);
  basicLightbox.create(`<img width="1400" height="900" src="${urlOpen[indexEvent]}">`).show();
});
