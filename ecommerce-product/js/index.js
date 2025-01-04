const toggler = document.getElementById("menu-toggler");
const openIcon = document.getElementById("open-icon");
const closeIcon = document.getElementById("close-icon");
const menu = document.getElementById("menu");

// Toggle menu visibility
toggler.addEventListener("click", () => {
  menu.classList.toggle("active");
  const isMenuOpen = menu.classList.contains("active");

  openIcon.style.display = isMenuOpen ? "none" : "block";
  closeIcon.style.display = isMenuOpen ? "block" : "none";
});


// slider

const imgsliders = [
  "images/image-product-1.jpg",
  "images/image-product-2.jpg",
  "images/image-product-3.jpg",
  "images/image-product-4.jpg",
];

const mainImages = document.querySelectorAll(".main-image");
const pervBtns = document.querySelectorAll(".perv");
const nextBtns = document.querySelectorAll(".next");
const imgthumbs = document.querySelectorAll(".thumbnail-list img");
const close = document.querySelector(".ico");
const imgPro = document.getElementById("img_pro");
const thumbLists = document.querySelectorAll(".thumbnail-lists img");

let currentIndex = 0; // المتغير لتتبع الصورة الحالية

// وظيفة لتحديث الصورة الرئيسية في كل الأقسام
function updateMainImages() {
  mainImages.forEach((mainImage) => {
    if (mainImage) {
      mainImage.src = imgsliders[currentIndex];
    }
  });

  imgthumbs.forEach((img, index) => {
    img.classList.toggle("active", index === currentIndex);
  });

  thumbLists.forEach((img, index) => {
    img.classList.toggle("active", index === currentIndex);
  });
}

imgthumbs.forEach((thumb, index) => {
  thumb.addEventListener("click", () => {
    currentIndex = index;
    updateMainImages();
  });
});

thumbLists.forEach((thumbList, index) => {
  thumbList.addEventListener("click", () => {
    currentIndex = index;
    updateMainImages();
  });
});

pervBtns.forEach((pervBtn) => {
  pervBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + imgsliders.length) % imgsliders.length;
    updateMainImages();
  });
});

nextBtns.forEach((nextBtn) => {
  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % imgsliders.length;
    updateMainImages();
  });
});

if (close) {
  close.addEventListener("click", () => {
    if (imgPro) {
      imgPro.style.display = "none";
    }
  });
}

mainImages.forEach((mainImage) => {
  mainImage.addEventListener("click", () => {
    if (imgPro) {
      imgPro.style.display = "flex";
    }
  });
});

updateMainImages();

