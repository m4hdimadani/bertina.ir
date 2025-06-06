const swiper = new Swiper(".swiper", {
  loop: true,

  speed: 900,
  autoplay: {
    delay: 3000,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

////////////////////////////////////////////
const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const content = toggle.nextElementSibling;
    const icon = toggle.querySelector(".icon");

    const isOpen = content.style.maxHeight && content.style.maxHeight !== "0px";

    if (isOpen) {
      content.style.maxHeight = "0px";
      icon.textContent = "+";
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      icon.textContent = "−";
    }
  });
});
