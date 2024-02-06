// NAV OPEN AND  CLOSE

const body = document.querySelector('body');
const navOpen = document.getElementById('navOpen');
const navClose = document.getElementById('navClose');
const navMenu = document.getElementById('menuContent');
const NavLinks = document.querySelectorAll('.nav-link');

if (navOpen && navClose) {
    navOpen.addEventListener('click', () => {
        navMenu.classList.add('open');
        body.style.overflowY = 'hidden';
    });
}
if (navOpen && navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('open');
        body.style.overflowY = 'scroll';
    });
}

NavLinks.forEach((link) => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        body.style.overflowY = 'scroll';
    });
});

//NAVBAR ON SCROLL

const className = 'inverted';
const scrollTrigger = 60;

window.onscroll = () => {
    if (
        window.scrollY >= scrollTrigger ||
        window.pageYOffset >= scrollTrigger
    ) {
        document.getElementsByTagName('header')[0].classList.add(className);
    } else {
        document.getElementsByTagName('header')[0].classList.remove(className);
    }
};

//RATE SELECTION

const rateDiv = document.querySelector('.select-rate');
const rateLogo = document.querySelector('.rate-logo');
const rateList = document.querySelector('.options-list');
const rateValue = document.querySelector('.select-rate-value');

rateDiv.addEventListener('click', () => {
    if (rateLogo.classList.contains('rotate')) {
        rateList.classList.remove('reveal');
        rateLogo.classList.remove('rotate');
    } else {
        rateList.classList.add('reveal');
        rateLogo.classList.add('rotate');
    }
});

// SELECT RATE

const rateOptions = document.querySelectorAll('.options-list-rate');

rateOptions.forEach((Option) => {
    Option.addEventListener('click', () => {
        rateValue.textContent = Option.textContent;
        rateList.classList.remove('reveal');
        rateLogo.classList.remove('rotate');
    });
});

// SCROLL REVEAL ANIMATIONS

const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 3000,
    delay: 100,
});

sr.reveal(
    '.section-title, .section-subtitle, .section-decription,  .brand-img , .review-subtitle,  .footer-content',
    { interval: 16 }
);
sr.reveal('.home-rightside, .details-text, .market-text ', { origin: 'right' });
sr.reveal('.cta-card ', { origin: 'bottom' });
sr.reveal('.home-leftside, .details-image, .market-image ', { origin: 'left' });
