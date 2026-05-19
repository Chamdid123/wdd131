const navi = document.querySelector('.navi')
const hamburger = document.querySelector('#menu');

hamburger.addEventListener('click', () =>{
    navi.classList.toggle('open');
    hamburger.classList.toggle('open');

});
document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;