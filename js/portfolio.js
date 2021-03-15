const menu = document.querySelector('.nav');
const icon = document.querySelector('.icon');
const close = document.querySelector('.closebtn');
const search = document.getElementsByClassName('a.search');
const caption = document.querySelectorAll('.portfolio a');
const progress = document.querySelectorAll('.tag');


icon.addEventListener('click', () => {
  menu.style.width = "100%";
})

// close.addEventListener('click', () => {
//   menu.style.display = "none";
// })

menu.addEventListener('click', (e) => {
  let target = e.target.tagName;
  if(target === "A") {
    menu.style.width = "0%";
  }
})

for(let i = 0 ; i < search.length ; i++){
  search[i].addEventListener('click', function() {
    for ( let i = 0 ; i < caption.length ; i++){
        let str = caption[i].dataset.caption;
        if(str.includes('')){
            caption[i].style.display = "";
        }
        else{
            caption[i].style.display = "none";
        }
    }
  });
}

window.addEventListener('load', (event) => {
  console.log('page is fully loaded');
});