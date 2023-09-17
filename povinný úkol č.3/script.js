//Section Header

const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector("nav");
const hamburgerIcon = document.querySelector(".fa-solid");

menuIcon.addEventListener("click", () => {
  if (hamburgerIcon.classList[1] === "fa-bars") {
    hamburgerIcon.classList.add("fa-xmark");
    hamburgerIcon.classList.remove("fa-bars");
    menuList.style.display = "block";
  } else {
    hamburgerIcon.classList.add("fa-bars");
    hamburgerIcon.classList.remove("fa-xmark");
    menuList.style.display = "none";
  }
});



// section wallpaper
const toggle = document.getElementById('toggleDark');
const header = document.querySelector('header');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const modeHeader1 = document.querySelector('.modeHeader1');
const modeHeader2 = document.querySelector('.modeHeader2');
const modeHeader3 = document.querySelector('.modeHeader3');
const modeHeader4 = document.querySelector('.modeHeader4');
const headerNav = document.querySelector('header nav');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
      modeHeader1.style.color = 'black';
      modeHeader2.style.color = 'black';
      modeHeader3.style.color = 'black';
      modeHeader4.style.color = 'black';
      header.style.transition = '2s';
      header.style.background = '#c9c5c5';
      main.style.background = '#c9c5c5';
      main.style.color = 'black';
      main.style.transition = '2s';
      footer.style.background = '#c9c5c5';
      footer.style.color = 'black';
      headerNav.style.background = '#c9c5c5';
      headerNav.style.color = 'black';
      headerNav.style.transition = '2s';
    }else{
      modeHeader1.style.color = 'white';
      modeHeader2.style.color = 'white';
      modeHeader3.style.color = 'white';
      modeHeader4.style.color = 'white';
      header.style.transition = '2s';
      header.style.background = 'black';
      body.style.color = 'white';
      main.style.background = 'black';
      main.style.color = 'white';
      main.style.transition = '2s';
      footer.style.background = 'black';
      footer.style.color = 'white';
      headerNav.style.background = 'black';
      headerNav.style.color = 'white';
      headerNav.style.transition = '2s';
    }
});




//Formulář
const FullName = document.querySelector(".heslo2");
const email = document.querySelector(".heslo2");
const heslo1 = document.querySelector(".heslo1");
const heslo2 = document.querySelector(".heslo2");
const paragraph = document.querySelector(".result-text");

heslo1.addEventListener("input", () => {
  const heslo1Value = heslo1.value;
  const heslo2Value = heslo2.value;
  if (heslo1Value === heslo2Value) {
    paragraph.textContent = "Hesla jsou shodné";
    paragraph.classList.add("valid");
    paragraph.classList.remove("invalid");
  } else {
    paragraph.textContent = "Hesla nejsou shodné";
    paragraph.classList.add("invalid");
    paragraph.classList.remove("valid");
  }
  if (heslo1Value === "" && heslo2Value === "") {
    paragraph.textContent = "";
  }
});


heslo2.addEventListener("input", () => {
  const heslo1Value = heslo1.value;
  const heslo2Value = heslo2.value;

  if (heslo1Value === heslo2Value) {
    paragraph.textContent = "Hesla jsou shodné";
    paragraph.classList.add("valid");
    paragraph.classList.remove("invalid");
  } else {
    paragraph.textContent = "Hesla nejsou shodné";
    paragraph.classList.add("invalid");
    paragraph.classList.remove("valid");
  }
  if (heslo1Value === "" && heslo2Value === "") {
    paragraph.textContent = "";
  }
});



// scrollování
const scroll = document.querySelector(".top-page");
window.addEventListener("scroll", checkHeight)
function checkHeight (){
  if (window.scrollY > 300) {
    scroll.style.display = "flex"
  }else {
    scroll.style.display = "none"
  }
}


// section tipy na kola
const MTB = document.querySelector(".MTB")
const tipyMTB = document.querySelector(".tipyMTB")
const Gravel = document.querySelector(".Gravel")
const tipyGravel = document.querySelector(".tipyGravel")
const Silnice = document.querySelector(".Silnice")
const tipySilnice = document.querySelector(".tipySilnice")
const Elektro = document.querySelector(".Elektro")
const tipyElektro = document.querySelector(".tipyElektro")
const nahoru = document.querySelector(".top-page")

MTB.addEventListener("click", () => {
  tipyMTB.style.display = "block"
  tipyGravel.style.display = "none"
  tipySilnice.style.display = "none"
  tipyElektro.style.display = "none"
  })
Gravel.addEventListener("click", () => {
  tipyGravel.style.display = "block"
  tipyMTB.style.display = "none"
  tipySilnice.style.display = "none"
  tipyElektro.style.display = "none"
})
Silnice.addEventListener("click", () => {
  tipySilnice.style.display = "block"
  tipyGravel.style.display = "none"
  tipyMTB.style.display = "none"
  tipyElektro.style.display = "none"
})
Elektro.addEventListener("click", () => {
  tipyElektro.style.display = "block"
  tipyGravel.style.display = "none"
  tipySilnice.style.display = "none"
  tipyMTB.style.display = "none"
})
nahoru.addEventListener("click", () => {
  tipyElektro.style.display = "none"
  tipyGravel.style.display = "none"
  tipySilnice.style.display = "none"
  tipyMTB.style.display = "none"
})







