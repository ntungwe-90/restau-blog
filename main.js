const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY >header.offsetHeight +60){
        header.classList.add('sticky')

    }else{
        header.classList.remove('sticky')
    }
})




$(window).scroll(function(){
    if ($($window).scrollTop()){
        $("header").addClass("sticky")
    }else {
        $('header').removeClass('stickey')
    } 

    
})