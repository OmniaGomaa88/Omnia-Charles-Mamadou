let navBar = document.querySelector("nav");
 
function stickyNav(){
     
    if (window.scrollY > navBar.offsetTop) {
        document.body.style.paddingTop = navBar.offsetHeight + 'px';
        document.body.classList.add('fex-nav');
} else {
        document.body.classList.remove('fex-nav');
        document.body.style.paddingTop = 0;
}
}
// function de section équipe
//buttonsArray
let btnArr = Array.from(document.querySelectorAll('button'));
//array from object of profile
let imgArr = [{image:"AvatarProfile.jpeg",nom:"Mamadou",poste:"Guide touristique"},{image:"AvatarOmnia.jpeg",nom:"Omnia",poste:"Directrice d'agence"},{image:"AvatarProfile.jpeg",nom:"Charles",poste:"Chargé des réservations"}]
function changeProfile(){
   let profile = imgArr[btnArr.indexOf(this)];
   document.querySelector("#image").src = profile.image;
   document.querySelector("#nom").textContent = profile.nom;
   document.querySelector("#poste").textContent = profile.poste;
   console.log(profile.nom);
}
btnArr.forEach(btn => btn.addEventListener('click',changeProfile))

//.........
//  qui text movment
let QuiText = document.querySelector("#text")
 let QuiSection=document.querySelector("#Qui")

function textApear(){
 if(window.scrollY>QuiSection.getBoundingClientRect().top){
        QuiText.style.transform="translateX(0px)"
                QuiText.style.opacity=1
               console.log("QuiTex") 
 }
         
 }
    
// services movment slide
let serviceBlock= document.querySelector("#servicesContainer")
let figcationSlides=Array.from(document.querySelectorAll(".figSlide"))
function sliding(){
    if(window.scrollY>serviceBlock.offsetTop){
       figcationSlides.forEach(figcationSlide => figcationSlide.classList.add("figcationSlide"))
     }
     
     
}
window.addEventListener('scroll',sliding)
window.addEventListener('scroll',stickyNav)
window.addEventListener('scroll',textApear)
