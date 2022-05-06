// more infomation first card
let carP = document.querySelector('.card-p');
let indo = document.querySelector('.card-indonesia');
let indoimg = document.querySelector('.img-indonesia-');
let txt =document.querySelector('.card-txt');
function moreClick(more) {
  if (document.getElementById(more).innerText == 'more information') {
    document.getElementById(more).innerText = 'less';
    indo.style.display = 'block'
    indoimg.style.display = 'block'
    
  } else if (document.getElementById(more).innerText == 'less') {
    document.getElementById(more).innerText = 'more information';
    indo.style.display = 'none'
    indoimg.style.display = 'none'
  }
}



// open - close navbar
function w3_open() {
  document.getElementById("main").style.marginLeft = "25%";
  document.getElementById("mySidebar").style.width = "25%";
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("openNav").style.display = 'none';
  document.getElementById('imgIndo').style.marginLeft = '15%';
}
function w3_close() {
  document.getElementById("main").style.marginLeft = "0%";
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("openNav").style.display = "inline-block";
  document.getElementById('imgIndo').style.marginLeft = '25%';
  

}


// event with scroll
let scrollValue = document.querySelector('#px');
let container1 = document.querySelector('.card-p');
let container2 =  document.querySelector('.card-p3');
let container3 =  document.querySelector('.card-p5');
let container4 =  document.querySelector('.card-p7');
let container5 =  document.querySelector('.card-p9');
let container6 =  document.querySelector('.card-p10');
let container7 =  document.querySelector('.card-p11');
let container8 =  document.querySelector('.card-p12');
let titleGoals = document.querySelector('#title-goals')
let solider = document.querySelector('.imgSolider');


window.addEventListener('scroll', (event) => {
  let scrollY1 = this.scrollY;

  if (scrollY1 >= 300 || scrollY1 <= 500) {
    container1.className = 'card-p2';
    container2.className = 'card-p4';
    container3.className = 'card-p6';
    container4.className = 'card-p8';
    container5.className = 'card-p2';
    container6.className = 'card-p4';
    container7.className = 'card-p6';
    container8.className = 'card-p8';
    titleGoals.className = 'title-goals-keyframes';
    solider.className = 'imgSolider-2';

  }
})

let contacts = document.querySelector('.contacts-2')
window.onscroll = () => {
  if((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight){
    contacts.style.opacity = '1';
  }
}



































