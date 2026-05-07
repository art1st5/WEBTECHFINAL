window.addEventListener("scroll", () => {
    let scrollY= window.scrollY;

    document.querySelector(".first").style.transform =
            `translateY(${scrollY * 1.3}px)`;

    document.querySelector(".second").style.transform =
        `translateX(${scrollY * 0.8}px)`;

    document.querySelector(".sec1").style.transform = 
        `translateX(${scrollY * -0.8}px)`;

    document.querySelector(".third").style.transform =
        `translateY(${scrollY * 0.3}px)`;
    
    const heroText = document.getElementById("heroText");
    const heroSubtext = document.querySelector(".hero-subtext");
    const opacity = 1 - (scrollY / 500);
    
    if (heroText && heroSubtext) {
        heroText.style.opacity = Math.max(0, opacity);
        heroSubtext.style.opacity = Math.max(0, opacity);
    }
});

const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.about_me, .stat, .interest-title');
    const skillBoxes = document.querySelectorAll('.skill-box');
    const interestItems = document.querySelectorAll('.interest-item');
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });
    
    skillBoxes.forEach((box, index) => {
        box.style.opacity = '0';
        box.style.transform = 'translateY(30px)';
        box.style.transition = `opacity 0.8s ease ${index * 0.2}s, transform 0.8s ease ${index * 0.2}s`;
        observer.observe(box);
    });
    
    interestItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = `opacity 0.8s ease ${index * 0.1}s, transform 0.8s ease ${index * 0.1}s`;
        observer.observe(item);
    });
});

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const caption = document.getElementById("caption");
const closeBtn = document.querySelector(".close");

const images = document.querySelectorAll(".interest-box img");

images.forEach(img => {
    img.addEventListener("click", function () {
        modal.style.display = "block";
        modalImg.src = this.src;

         const textContainer = this.parentElement.querySelector(".interest-text");

        const title = textContainer.querySelector("h3").innerText;
        const description = textContainer.querySelector("p").innerText;

         caption.innerHTML = `<h2>${title}</h2><p>${description}</p>`;
    
    });
});

closeBtn.onclick = function () {
    modal.style.display = "none";
};

modal.onclick = function (e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
};


window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(0, 213, 255, 0.25)';
        navbar.style.backdropFilter = 'blur(15px)';
    } else {
        navbar.style.backgroundColor = 'rgba(0, 213, 255, 0.15)';
        navbar.style.backdropFilter = 'blur(10px)';
    }
});

// ─── HAMBURGER MENU ───────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
 
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
});
 
// Close menu when any nav link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
    document.body.classList.remove('no-scroll');
  });
});
 
// Close menu when clicking outside of it
document.addEventListener('click', (e) => {
  if (
    navLinks.classList.contains('active') &&
    !navLinks.contains(e.target) &&
    !hamburger.contains(e.target)
  ) {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
    document.body.classList.remove('no-scroll');
  }
});