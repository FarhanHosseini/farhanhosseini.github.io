// Modal Box

$(document).ready(function ($) {
let openPopUp = $('.open-popup');
  if (openPopUp.length) {
      openPopUp.on('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          let contactPopUp = $('.popup');
          if (contactPopUp.length) {
              contactPopUp.addClass('show-contact-form');
              $('.contact-form-overlay').addClass('active');
          }
      });
  }
let closePopUp = $('.close-popup');
  if (closePopUp.length) {
      closePopUp.on('click', function (e) {
          e.preventDefault();
          let contactPopUp = $('.popup');
          let overlayElement = $('.contact-form-overlay');
          if (contactPopUp.length) {
              if (contactPopUp.hasClass('show-contact-form')) {
                  contactPopUp.removeClass('show-contact-form');
                  if (overlayElement.hasClass('active')){
                      overlayElement.removeClass('active');
                  }
              }
          }
      });
  }
let contactFormOverlay = $('.contact-form-overlay');
  if (contactFormOverlay.length) {
      contactFormOverlay.on('click', function (e) {
          e.stopPropagation();
          let overlayElement = $(this);
          let contactPopUp = $('.popup');
          if (contactPopUp.length) {
              if (contactPopUp.hasClass('show-contact-form')) {
                  contactPopUp.removeClass('show-contact-form');
                  overlayElement.removeClass('active');
              }
          }
      });
  }
});

// Scroll Up and Progress Line

const showOnPx = 200;
const backToTopButton = document.querySelector(".back-to-top");
const pageProgressBar = document.querySelector(".progress-bar");
const scrollContainer = () => {
return document.documentElement || document.body;
};
const goToTop = () => {
document.body.scrollIntoView({
  behavior: "smooth"
});
};
document.addEventListener("scroll", () => {
console.log("Scroll Height: ", scrollContainer().scrollHeight);
console.log("Client Height: ", scrollContainer().clientHeight);
const scrolledPercentage =
  (scrollContainer().scrollTop /
    (scrollContainer().scrollHeight - scrollContainer().clientHeight)) * 100;
pageProgressBar.style.width = `${scrolledPercentage}%`;
if (scrollContainer().scrollTop > showOnPx) {
  backToTopButton.classList.remove("hidden");
} else {
  backToTopButton.classList.add("hidden");
}
});
backToTopButton.addEventListener("click", goToTop);