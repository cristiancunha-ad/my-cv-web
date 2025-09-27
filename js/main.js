// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Reveal animation using IntersectionObserver
const sections = document.querySelectorAll('.section, .proyecto-card, .timeline-item');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add('in-view');
  });
}, { threshold: 0.12 });

sections.forEach(s => io.observe(s));


// Modal
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeModal = document.querySelector(".close-modal");

document.querySelectorAll(".open-modal").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const imgSrc = link.getAttribute("data-img");
    modalImg.src = imgSrc;
    modal.style.display = "block";
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Cerrar modal al hacer clic fuera de la imagen
modal.addEventListener("click", e => {
  if(e.target === modal) {
    modal.style.display = "none";
  }
});
