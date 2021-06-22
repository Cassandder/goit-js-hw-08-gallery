import galleryItems from "./app.js";
console.log(galleryItems);

const galleryList = document.querySelector('.js-gallery')
const galleryModal = document.querySelector('.js-lightbox')
const btnCloseModal = document.querySelector('.lightbox__button')
const modalPicture = document.querySelector('.lightbox__image')
const overlay = document.querySelector('.lightbox__overlay')
console.log(galleryList);

galleryItems.forEach(el=>{
 const listRef = `<li class='gallery__item'>
<a
  class='gallery__link'
  href=${el.original}
>
  <img
    class= 'gallery__image'
    src=${el.preview}
    data-source=${el.original}
    alt=${el.description}
  />
</a>
</li>`
galleryList.insertAdjacentHTML('beforeend', listRef)
});

const makeMarkupModal = (e)=>{
e.preventDefault();
if(e.target.nodeName!== 'IMG'){
return
}
modalPicture.src = e.target.dataset.source;
modalPicture.alt = e.target.alt
onModalOpen();
}
const onModalOpen = ()=>{
    galleryModal.classList.add('is-open')
    window.addEventListener('keydown', onEscPress)
}

const closeModal = (event)=>{

    if(event.target === modalPicture) {
        return
    }
    window.removeEventListener('click', onEscPress);
    galleryModal.classList.remove('is-open');
    modalPicture.src = "";
    modalPicture.alt = "";
   
}


galleryList.addEventListener('click', makeMarkupModal)

galleryModal.addEventListener('click', closeModal,);

const onEscPress = e => {
  if (e.key === 'Escape') {
    galleryModal.classList.remove('is-open');
  }
};
galleryModal.addEventListener('keydown', onEscPress);



overlay.addEventListener('click', onClick);
function onClick(event) {
    
    if (event.target.nodeName === event.target.classList.contains('.lightbox__overlay')){
        return
    }
     console.log(event.target.nodeName);
};