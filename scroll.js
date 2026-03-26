document.getElementById("cta").addEventListener("click", function () {
    const section = document.getElementById("contactSection");
  
    const yOffset = -80; // only needed if you have a fixed header
    const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
  
    window.scrollTo({
      top: y,
      behavior: "smooth"
    });
});
  