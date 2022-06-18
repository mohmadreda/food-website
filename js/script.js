let bars = document.getElementById("bars");
let links = document.querySelector(".links");
bars.onclick = ()=>{
    bars.classList.toggle("fa-times");
    links.classList.toggle("active");
    searchForm.classList.remove("active");
}
let search =document.getElementById("search");
let searchForm=document.getElementById("search-form");
let searchClose = document.getElementById("close");
search.onclick = () =>{
    searchForm.classList.toggle("active");
    links.classList.remove("active");
}
searchClose.onclick = ()=>{
    searchForm.classList.remove("active");
}
  // edit loader
  let loader = document.querySelector(".loader");
  window.onload = setTimeout(() => {
    loader.classList.add("hidden");
    console.log(true)
  }, 3000);
  
var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop:true,
    breakpoints:{
      0:{
        slidesPerView: 1,
      },
      640:{
        slidesPerView: 2,
      },
     768:{
        slidesPerView: 2,
      },
      1024:{
        slidesPerView: 3,
      },
    }
  });

// edit scroll spy
let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".links a");
window.onscroll =()=>{
section.forEach((sec) =>{
  let top = window.scrollY;
  let height = sec.offsetHeight;
  let offset =sec.offsetTop;
  let id = sec.getAttribute("id");
  if(top >= offset && top <= offset+height){
    navLinks.forEach((a)=>{
      a.classList.remove("active");
      if(a.getAttribute("data-name") === id){
        a.classList.add("active");
        console.log(id)
      }
    })
  }

})
}