document.addEventListener("scroll", function () {
    const header = document.getElementById("main-header");
    const heroHeight = document.getElementById("hero").offsetHeight;
  
    if (window.scrollY > heroHeight - 100) {
      header.classList.remove("transparent");
      header.classList.add("solid");
    } else {
      header.classList.remove("solid");
      header.classList.add("transparent");
    }
  });

  //carrossel
  const track = document.querySelector('.carousel-track');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  let currentIndex = 0;
  
  function updateCarousel() {
    const itemWidth = track.querySelector('.carousel-item').offsetWidth;
    track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  }
  
  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % track.children.length;
    updateCarousel();
  });
  
  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + track.children.length) % track.children.length;
    updateCarousel();
  });
  