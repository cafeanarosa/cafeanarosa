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
  