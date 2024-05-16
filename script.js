// let icon = document.getElementById("icon");
// const body = document.body;
// console.log(icon);
const icon = document.querySelector('#icon')
const dark = document.querySelector('.baba-vin')


icon.addEventListener('click', function(event){
    // event.preventDefault();
    dark.classList.toggle('darkTheme')
})