const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

let carouselVp = document.querySelector("#carousel-vp");

let cCarouselInner = document.querySelector("#cCarousel-inner");
let carouselInnerWidth = cCarouselInner.getBoundingClientRect().width;

let leftValue = 0;

// Variable used to set the carousel movement value (card's width + gap)
const totalMovementSize =
  parseFloat(
    document.querySelector(".cCarousel-item").getBoundingClientRect().width,
    10
  ) +
  parseFloat(
    window.getComputedStyle(cCarouselInner).getPropertyValue("gap"),
    10
  );

prev.addEventListener("click", () => {
  if (!leftValue == 0) {
    leftValue -= -totalMovementSize;
    cCarouselInner.style.left = leftValue + "px";
  }
});

next.addEventListener("click", () => {
  const carouselVpWidth = carouselVp.getBoundingClientRect().width;
  if (carouselInnerWidth - Math.abs(leftValue) > carouselVpWidth) {
    leftValue -= totalMovementSize;
    cCarouselInner.style.left = leftValue + "px";
  }
});

const mediaQuery510 = window.matchMedia("(max-width: 510px)");
const mediaQuery770 = window.matchMedia("(max-width: 770px)");

mediaQuery510.addEventListener("change", mediaManagement);
mediaQuery770.addEventListener("change", mediaManagement);

let oldViewportWidth = window.innerWidth;

function mediaManagement() {
  const newViewportWidth = window.innerWidth;

  if (leftValue <= -totalMovementSize && oldViewportWidth < newViewportWidth) {
    leftValue += totalMovementSize;
    cCarouselInner.style.left = leftValue + "px";
    oldViewportWidth = newViewportWidth;
  } else if (
    leftValue <= -totalMovementSize &&
    oldViewportWidth > newViewportWidth
  ) {
    leftValue -= totalMovementSize;
    cCarouselInner.style.left = leftValue + "px";
    oldViewportWidth = newViewportWidth;
  }
}

const previous = document.querySelector("#previous");
const nextSlide = document.querySelector("#nextSlide");

let sliderViewport = document.querySelector("#sliderViewport");
let sliderContent = document.querySelector("#sliderContent");
let sliderWidth = sliderContent.getBoundingClientRect().width;

let positionOffset = 0;

const slideMovement =
  parseFloat(
    document.querySelector(".sliderItem").getBoundingClientRect().width,
    10
  ) +
  parseFloat(
    window.getComputedStyle(sliderContent).getPropertyValue("gap"),
    10
  );

previous.addEventListener("click", () => {
  if (positionOffset !== 0) {
    positionOffset += slideMovement;
    sliderContent.style.left = positionOffset + "px";
  }
});

nextSlide.addEventListener("click", () => {
  const viewportWidth = sliderViewport.getBoundingClientRect().width;
  if (sliderWidth - Math.abs(positionOffset) > viewportWidth) {
    positionOffset -= slideMovement;
    sliderContent.style.left = positionOffset + "px";
  }
});

const mediaQuerySmall = window.matchMedia("(max-width: 510px)");
const mediaQueryMedium = window.matchMedia("(max-width: 770px)");

mediaQuerySmall.addEventListener("change", updateMedia);
mediaQueryMedium.addEventListener("change", updateMedia);

let previousViewportWidth = window.innerWidth;

function updateMedia() {
  const newViewportWidth = window.innerWidth;

  if (positionOffset <= -slideMovement && previousViewportWidth < newViewportWidth) {
    positionOffset += slideMovement;
    sliderContent.style.left = positionOffset + "px";
    previousViewportWidth = newViewportWidth;
  } else if (
    positionOffset <= -slideMovement &&
    previousViewportWidth > newViewportWidth
  ) {
    positionOffset -= slideMovement;
    sliderContent.style.left = positionOffset + "px";
    previousViewportWidth = newViewportWidth;
  }
}
