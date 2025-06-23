const images = document.querySelectorAll(".gallery .image img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const filterButtons = document.querySelectorAll(".filters button");

let currentIndex = 0;

// Open lightbox
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
    currentIndex = index;
  });
});

// Close lightbox
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Next/Previous navigation
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  lightboxImg.src = images[currentIndex].src;
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  lightboxImg.src = images[currentIndex].src;
});

// Close on click outside image
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox || e.target === lightboxImg) return;
  lightbox.style.display = "none";
});

// Filtering
filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");
    document.querySelectorAll(".gallery .image").forEach(image => {
      const category = image.getAttribute("data-category");
      if (filter === "all" || category === filter) {
        image.style.display = "block";
      } else {
        image.style.display = "none";
      }
    });
  });
});
