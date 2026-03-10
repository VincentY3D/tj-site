const track = document.getElementById("scrollTrack");

// duplicate cards
track.innerHTML += track.innerHTML;

const container = document.querySelector(".scroll-section");

let position = 0;
let speed = 0.4;
let targetSpeed = 0.4;

let contentWidth = track.scrollWidth / 2;

function animate(){

  speed += (targetSpeed - speed) * 0.05;

  position += speed;

  // wrap instead of reset
  if(position <= -contentWidth){
      position += contentWidth;
  }

  if(position >= 0){
      position -= contentWidth;
  }

  track.style.transform = `translateX(${position}px)`;

  requestAnimationFrame(animate);
}

animate();

container.addEventListener("mouseenter",()=>{
  targetSpeed = 0;
});

container.addEventListener("mouseleave",()=>{
  targetSpeed = 0.4;
});


const backToTop = document.getElementById("backToTop");

// Show button after scrolling down 300px
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.remove("hidden");
  } else {
    backToTop.classList.add("hidden");
  }
});

// Smooth scroll to top
backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
