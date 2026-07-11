/* ===================================
        Typing Animation
=================================== */

const words = [
  "Python Developer",
  "Front-End Developer",
  "AI Enthusiast",
  "Flask Developer",
  "Web Developer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.querySelector(".typing");

function typeEffect() {

    if (!typing) return;

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent = currentWord.substring(0, charIndex);
        charIndex++;

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1200);

            return;
        }

    } else {

        typing.textContent = currentWord.substring(0, charIndex);

        charIndex--;

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

            charIndex = 0;

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();



/* ===================================
        Active Navbar
=================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});



/* ===================================
        Card Animation
=================================== */

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{
threshold:.2
});

cards.forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(50px)";
card.style.transition=".7s";

observer.observe(card);

});



/* ===================================
        Smooth Button Hover
=================================== */

const buttons = document.querySelectorAll("button");

buttons.forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="scale(1.08)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="scale(1)";

});

});



/* ===================================
        Back To Top Button
=================================== */

const topButton = document.createElement("button");

topButton.innerHTML = "⬆";

topButton.id = "topBtn";

document.body.appendChild(topButton);

topButton.style.position="fixed";
topButton.style.bottom="30px";
topButton.style.right="30px";
topButton.style.width="50px";
topButton.style.height="50px";
topButton.style.borderRadius="50%";
topButton.style.border="none";
topButton.style.background="cyan";
topButton.style.color="black";
topButton.style.fontSize="22px";
topButton.style.cursor="pointer";
topButton.style.display="none";
topButton.style.zIndex="999";
topButton.style.boxShadow="0 0 20px cyan";

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topButton.style.display="block";

}

else{

topButton.style.display="none";

}

});

topButton.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};



/* ===================================
        Console Message
=================================== */

console.log("Welcome to Likhitha's Portfolio 🚀");