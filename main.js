// const header = document.querySelector('header');

// created to input the menu directly from the page
// const input =document.querySelector('input');
// const btn = document.querySelector('.btn');
// const lists = document.querySelector('.lists')



// btn.addEventListener('click', () =>{
// const inputSearch = input.value;

// if (inputSearch.length < 5) {
//   alert('too short length try encore')
//   input.value = "";
// }else {
//   const el = document.createElement('li')
//   el.innerText =inputSearch;
//   lists.appendChild(el);
//   input.value =''
// }
// })

// assignment

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
const btn = document.getElementById('btn');
const modal = document.getElementById('pop-up');

btn.addEventListener('click', () =>{
  modal.style.display = "block";

 
  
});

// window.addEventListener('scroll', () => {
//     if (window.scrollY > header.offsetHeight +60){
//         header.classList.add('sticky')

//     }else{
//         header.classList.remove('sticky')
//     }
// })




// $(window).scroll(function(){
//     if ($($window).scrollTop()){
//         $("header").addClass("sticky")
//     }else {
//         $('header').removeClass('stickey')
//     } 

    
// })


// function myburger() {
//   var x = document.getElementById("myLinks");
//   if (x.style.display === "header") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "header";
//   }
// }

