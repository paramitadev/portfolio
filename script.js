// ===============================
// Smooth Scrolling Navigation
// ===============================

document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});


// ===============================
// Scroll Reveal Animation
// ===============================

const sections = document.querySelectorAll('section');

function revealSections() {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight - 100;

    if (sectionTop < triggerPoint) {
      section.classList.add('show');
    }
  });
}

window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);


// ===============================
// Typing Effect
// ===============================

const typingElement = document.getElementById('typing-text');

const text =
  "Web Developer | MERN Stack Developer | Java Programmer";

let index = 0;

function typeWriter() {

  if (!typingElement) return;

  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 80);
  }
}

window.addEventListener('load', () => {

  if (typingElement) {
    typingElement.textContent = '';
    typeWriter();
  }

});


// ===============================
// Active Navbar Link Highlight
// ===============================

const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {

  let current = '';

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }

  });

  navLinks.forEach(link => {

    link.classList.remove('active');

    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }

  });

});


// ===============================
// Profile Image Hover Glow
// ===============================

const profileImg = document.querySelector('.profile-img');

if (profileImg) {

  profileImg.addEventListener('mouseenter', () => {
    profileImg.style.boxShadow =
      '0 0 25px #00f2fe, 0 0 50px #00f2fe';
  });

  profileImg.addEventListener('mouseleave', () => {
    profileImg.style.boxShadow =
      '0 0 20px #00f2fe, 0 0 40px #00f2fe';
  });

}


// ===============================
// Console Welcome Message
// ===============================

console.log("Welcome to Paramita Paria's Portfolio 🚀");