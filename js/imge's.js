let photos=document.querySelector('.photos-camera img');
let ph=document.querySelector('.ph-im');
let pho=document.querySelector('.pho');
let conte=document.querySelector('.conte');
let height=document.querySelector('.res-form');

photos.addEventListener('click', smphoto); 

function smphoto(){
    photos.classList.toggle('brand');
    ph.classList.toggle('pho');
    conte.classList.toggle('content');
    height.classList.toggle('res-form-height');
}
