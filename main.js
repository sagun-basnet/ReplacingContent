let btnText = document.querySelector('#btnText');
let text = document.querySelector('#text');
let htmle = document.querySelector('#htmle');
let btnHtml = document.querySelector('#btnHtml');

htmle.style.display='none';
text.style.display="";
btnText.addEventListener('click', () => {
    htmle.style.display='none';
    text.style.display="";
});
btnHtml.addEventListener('click', () => {
    text.style.display='none';
    htmle.style.display='';
});