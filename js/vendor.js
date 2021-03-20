
//Portofolio item filter
window.addEventListener("load", function(){
     document.querySelector(".preloader").classList.add("opacity-0");
     setTimeout(function(){
         document.querySelector(".preloader").style.display="none";
     },1000)
})

const FilterContainer = document.querySelector(".portfolio-filter");
const FilterBtns = FilterContainer.children;
const TotalFilterBtn = FilterBtns.length; //gives total filterbuttons length
const PortfolioItems = document.querySelectorAll(".portfolio-item");
const TotalPortfolioItem = PortfolioItems.length;

for (let i = 0; i < TotalFilterBtn; i++) {
  FilterBtns[i].addEventListener("click", function () {
    FilterContainer.querySelector(".active").classList.remove("active");
    this.classList.add("active");

    const filtervalue = this.getAttribute("data-filter");
    for (let k = 0; k < TotalPortfolioItem; k++) {
      if (filtervalue === PortfolioItems[k].getAttribute("data-category")) {
        PortfolioItems[k].classList.remove("hide");
        PortfolioItems[k].classList.add("show");
      } else {
        PortfolioItems[k].classList.remove("show");
        PortfolioItems[k].classList.add("hide");
      }
      if (filtervalue === "all") {
        PortfolioItems[k].classList.remove("hide");
        PortfolioItems[k].classList.add("show");
      }
    }
  });
}

// Portofolio LightBox

const LightBox = document.querySelector(".lightbox");
const LightBoxImg = LightBox.querySelector(".lightbox-img");
const LightBoxText = LightBox.querySelector(".caption-text");
const LightBoxCounter = LightBox.querySelector(".caption-counter");
const LightBoxCloseButton = LightBox.querySelector(".lightbox-close");

let itemIndex = 0;

for (let i = 0; i < TotalPortfolioItem; i++) {
  PortfolioItems[i].addEventListener("click", function () {
    itemIndex = i;
    changeItem();
    toggleLightBox();
  });
}

function toggleLightBox() {
  LightBox.classList.toggle("open");
}

function changeItem() {
  imgSrc = PortfolioItems[itemIndex]
    .querySelector(".portfolio-img img")
    .getAttribute("src");
  LightBoxImg.src = imgSrc;
  LightBoxText.innerHTML = PortfolioItems[itemIndex].querySelector(
    "h4"
  ).innerHTML;
  LightBoxCounter.innerHTML = itemIndex + 1 + " of " + TotalPortfolioItem;
}

function nextItem() {
  if (itemIndex === TotalPortfolioItem - 1) {
    itemIndex = 0;
  } else {
    itemIndex++;
  }
  changeItem();
}

function prevItem() {
  if (itemIndex === 0) {
    itemIndex = TotalPortfolioItem - 1;
  } else {
    itemIndex--;
  }
  changeItem();
}

//Closer Lightbox

LightBox.addEventListener("click", function (event) {
  if (event.target === LightBoxCloseButton || event.target === LightBox) {
    toggleLightBox();
  }
});

//Header NavBar
const Navigation = document.querySelector(".nav");
const navList = Navigation.querySelectorAll("li");
const totalNavList = navList.length;
const allSection = document.querySelectorAll(".section");
const totalSection = allSection.length;


for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function(){
        //remove back section 
        for(let i = 0; i< totalSection; i++){
            allSection[i].classList.remove("back-section");
        }
        for (let j = 0; j < totalNavList; j++) {
            if( navList[j].querySelector("a").classList.contains("active")){
                //add back section class
               allSection[j].classList.add("back-section");  
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");

        showSelection(this);
        if(window.innerWidth < 1200){
            headerSectionTogglerBtn();
        }
       })
}

function showSelection(element){
    // remove class active from all section
    for(let i = 0; i< totalSection; i++){
        allSection[i].classList.remove("active");
    }
       const target = element.getAttribute("href").split("#")[1];
       document.querySelector("#"+target).classList.add("active");
}

const navTogglerBtn = document.querySelector(".nav-toggler");
const header = document.querySelector(".header");

navTogglerBtn.addEventListener("click",headerSectionTogglerBtn);
// navTogglerBtn.addEventListener("click",()=>{
//     headerSectionTogglerBtn();
// })

function headerSectionTogglerBtn(){
    header.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for(let i = 0; i< totalSection; i++){
        allSection[i].classList.toggle("open");
    }
}

