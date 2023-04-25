
let burger=document.querySelector('.burger');
let opct=document.querySelector('.opcity');
let op=document.querySelector('.opcit');
let hes=document.querySelector('.head')

burger.addEventListener('click' ,bugghead);

function bugghead(){
    opct.classList.toggle('opc');
    op.classList.toggle('opc');
    hes.classList.toggle('hes');
}