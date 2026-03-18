// Space Canvas Logic with Spaceships
const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');
let width, height;
let stars = [];

function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}

function initStars() {
    stars = [];
    for (let i = 0; i < 200; i++) {
        stars.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 1.5 + 0.5,
            speed: Math.random() * 0.5 + 0.1,
            isShip: Math.random() > 0.96 // 4% are tiny spaceships
        });
    }
}

function animateStars() {
    ctx.clearRect(0, 0, width, height);

    stars.forEach(star => {
        ctx.beginPath();
        if (star.isShip) {
            // Draw a tiny minimalist spaceship (triangle pointing up)
            ctx.fillStyle = '#8090B8';
            ctx.moveTo(star.x, star.y - star.radius * 4);
            ctx.lineTo(star.x + star.radius * 2.5, star.y + star.radius * 2.5);
            ctx.lineTo(star.x - star.radius * 2.5, star.y + star.radius * 2.5);
            ctx.fill();
            star.y -= star.speed * 2.5; // Ships fly faster
        } else {
            ctx.fillStyle = '#ffffff';
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fill();
            star.y -= star.speed;
        }

        if (star.y < -10) {
            star.y = height + 10;
            star.x = Math.random() * width;
        }
    });
    requestAnimationFrame(animateStars);
}

window.addEventListener('resize', () => { resize(); initStars(); });
resize();
initStars();
animateStars();

// Data for the Creators
const creatorsData = [
    {
        name: "ARJAV\nJAIN", // Split with newline for formatting
        shortName: "ARJAV JAIN",
        role: "FullStack Developer",
        desc: "Turning coffee into codes and bugs into features.",
        cardImage: "images/Arjav_Jain.jpeg",
        heroImage: "images/Arjav_Jain_Model.png",
        skills: ["react", "Express.js", "Node.js", "MongoDB", "TailwindCSS", "Framer Motion"],
        social: { linkedin: "https://www.linkedin.com/in/arjav-jain-9a5199328/", github: "https://github.com/jainarjav80-sys", codeforces: "https://codeforces.com/profile/Arjavvvvv" }
    },
    {
        name: "NIMIT\nJAIN",
        shortName: "Nimit Jain",
        role: "Frontend Developer",
        desc: "Just me, my keyboard, and a mission to stand out online.",
        cardImage: "images/Nimit_Jain.jpeg",
        heroImage: "images/Nimit_Jain_Model.png",
        skills: ["GSAP", "Three.js", "Framer Motion", "react", "TailwindCSS"],
        social: { linkedin: "https://www.linkedin.com/in/nimitjain2025/", github: "https://github.com/Nimit0808", codeforces: "https://codeforces.com/profile/Nimit0808" }
    },
    {
        name: "NAGORAO DINKAR \n KUTE",
        shortName: "NAGORAO",
        role: "Animations Designer",
        desc: "Always a curious learner.",
        cardImage: "images/Nagorao.png",
        heroImage: "images/Nagorao_Model.png",
        skills: ["CP", "Framer Motion", "Web Animations", "MySQL", "WebGL"],
        social: { linkedin: "https://www.linkedin.com/in/nagorao-kute-b5183136b/", github: "https://github.com/Nagorao001", codeforces: "https://codeforces.com/profile/Shadowlesss" }
    }
];

// DOM Elements
const infoContainer = document.getElementById('info-container');
const imageContainer = document.getElementById('image-container');
const elName = document.getElementById('creator-name');
const elRole = document.getElementById('creator-role');
const elDesc = document.getElementById('creator-desc');
const elImage = document.getElementById('creator-image');
const elMobileImage = document.getElementById('mobile-creator-image');
const skillsContainer = document.getElementById('skills-container');
const cardsContainer = document.getElementById('cards-container');
const linkLinkedin = document.getElementById('link-linkedin');
const linkGithub = document.getElementById('link-github');
const linkCodeforces = document.getElementById('link-codeforces');
const mLinkLinkedin = document.getElementById('mobile-link-linkedin');
const mLinkGithub = document.getElementById('mobile-link-github');
const mLinkCodeforces = document.getElementById('mobile-link-codeforces');

let currentIndex = 0;

// Render Bottom Cards
function renderCards() {
    cardsContainer.innerHTML = '';
    creatorsData.forEach((creator, index) => {
        const isActive = index === currentIndex ? 'active-card bg-[#0b0f19] border border-[#8090B8]' : 'bg-white/5 text-white backdrop-blur-md hover:bg-white/10 border border-white/10';
        const roleColor = index === currentIndex ? 'text-accent' : 'text-gray-400';
        const btnStyle = index === currentIndex ? 'bg-accent text-[#060608] font-bold border-none glow-button' : 'bg-transparent border border-white/30 text-white hover:bg-white/10';

        const cardHTML = `
            <div class="creator-card flex-shrink-0 w-80 rounded-xl overflow-hidden flex shadow-lg snap-center ${isActive}" onclick="changeCreator(${index})">
                <div class="w-1/3 h-full bg-[#111522]">
                    <img src="${creator.cardImage}" class="w-full h-full object-cover opacity-90" alt="${creator.shortName}">
                </div>
                <div class="w-2/3 p-4 flex flex-col justify-center">
                    <h3 class="font-heading font-bold text-xl leading-tight uppercase">${creator.shortName}</h3>
                    <p class="font-heading text-sm tracking-widest uppercase mb-3 ${roleColor}">${creator.role}</p>
                    <button class="${btnStyle} px-4 py-1.5 rounded-full text-sm font-heading tracking-widest transition-colors w-fit shadow-lg">
                        VIEW PROFILE
                    </button>
                </div>
            </div>
        `;
        cardsContainer.innerHTML += cardHTML;
    });
}

function renderSkills(data) {
    skillsContainer.innerHTML = '';
    data.skills.forEach(skill => {
        // Glowing button look
        skillsContainer.innerHTML += `
            <div class="lightning-glow text-texture font-bold px-6 py-2.5 rounded-full text-base md:text-lg font-heading tracking-widest w-fit cursor-default flex items-center justify-center mt-2">
                ${skill}
            </div>
        `;
    });
}

// Change Active Creator with Animations
window.changeCreator = function (index) {
    if (index === currentIndex) return;
    currentIndex = index;

    // Trigger exit animations
    infoContainer.classList.remove('active');
    imageContainer.classList.remove('active');

    // Re-render cards to update active state
    renderCards();

    // Wait for exit animation, then update content and animate in
    setTimeout(() => {
        const data = creatorsData[index];

        elName.innerHTML = data.name.replace('\n', '<br>') + '.';
        elRole.innerText = data.role;
        elDesc.innerText = data.desc;
        elImage.src = data.heroImage;
        if (elMobileImage) elMobileImage.src = data.heroImage;

        linkLinkedin.href = data.social.linkedin;
        linkGithub.href = data.social.github;
        linkCodeforces.href = data.social.codeforces;
        
        if (mLinkLinkedin) mLinkLinkedin.href = data.social.linkedin;
        if (mLinkGithub) mLinkGithub.href = data.social.github;
        if (mLinkCodeforces) mLinkCodeforces.href = data.social.codeforces;

        // Render specific skills for the active creator
        renderSkills(data);

        // Trigger enter animations
        infoContainer.classList.add('active');
        imageContainer.classList.add('active');

    }, 500); // Wait for CSS transition
}

// Initial Initialization
function init() {
    renderCards();
    // Render initial skills
    const data = creatorsData[currentIndex];
    renderSkills(data);
    linkLinkedin.href = data.social.linkedin;
    linkGithub.href = data.social.github;
    linkCodeforces.href = data.social.codeforces;
    
    if (mLinkLinkedin) mLinkLinkedin.href = data.social.linkedin;
    if (mLinkGithub) mLinkGithub.href = data.social.github;
    if (mLinkCodeforces) mLinkCodeforces.href = data.social.codeforces;
}

// Run Init
document.addEventListener('DOMContentLoaded', init);
