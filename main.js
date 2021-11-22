const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY >header.offsetHeight +60){
        header.classList.add('sticky')

    }else{
        header.classList.remove('sticky')
    }
})




// $(window).scroll(function(){
//     if ($($window).scrollTop()){
//         $("header").addClass("sticky")
//     }else {
//         $('header').removeClass('stickey')
//     } 

    
// })


function myburger() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "header") {
    x.style.display = "none";
  } else {
    x.style.display = "header";
  }
}

