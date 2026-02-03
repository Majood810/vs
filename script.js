const noBtn = document.getElementById("noBtn");
const popupImg = document.getElementById("popupImg");

// Images 5–9
const popupImages = [
  "photos/5.jpg",
  "photos/6.jpg",
  "photos/7.jpg",
  "photos/8.jpg",
  "photos/9.jpg"
];

function moveNoButton() {
  // Move No button
  const maxX = window.innerWidth - noBtn.offsetWidth - 10;
  const maxY = window.innerHeight - noBtn.offsetHeight - 10;

  noBtn.style.position = "fixed";
  noBtn.style.left = Math.random() * maxX + "px";
  noBtn.style.top = Math.random() * maxY + "px";

  // Show popup image
  const randomImg = popupImages[Math.floor(Math.random() * popupImages.length)];
  popupImg.src = randomImg;

  popupImg.style.left = Math.random() * (window.innerWidth - 200) + "px";
  popupImg.style.top = Math.random() * (window.innerHeight - 200) + "px";

  popupImg.classList.remove("hidden");
  popupImg.style.animation = "none";
  popupImg.offsetHeight; // reset animation
  popupImg.style.animation = "pop 1s ease forwards";

  // Hide after 1 second
  setTimeout(() => {
    popupImg.classList.add("hidden");
  }, 1000);
}

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

function sayYes() {
  document.getElementById("yesText").classList.remove("hidden");
}

// Scroll reveal
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  reveals.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < windowHeight - 120) {
      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();