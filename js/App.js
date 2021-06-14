'use strict';

//header

// make transparency for fixed menu when scrolling

const heading = document.querySelector('.section-one__heading');
const secOne = document.querySelector('.section-one');

window.addEventListener('scroll', function () {
  window.pageYOffset >= 80
    ? heading.classList.add('heading-fill')
    : heading.classList.remove('heading-fill');
});

// scroll down clickin arrowDown
const arrowDown = document.querySelector('.section-one__arrow-down');

arrowDown.addEventListener('click', function () {
  const elementPosition = document.getElementById('section-two').offsetTop;

  window.scrollTo({
    top: elementPosition - 80,
  });
});

// scroll to products clickin Products, FAQ and Feedback

const productsBtn = document.querySelector('.products');
productsBtn.addEventListener('click', function () {
  const elementPosition = document.getElementById('section-three').offsetTop;

  window.scrollTo({
    top: elementPosition - 80,
  });
});

const faqsBtn = document.querySelector('.faqs');
faqsBtn.addEventListener('click', function () {
  const elementPosition = document.getElementById('section-four').offsetTop;

  window.scrollTo({
    top: elementPosition - 150,
  });
});

const transferBtns = document.querySelectorAll(
  '.section-one__content--transfer'
);

const feedbackBtn = document.querySelector('.feedback');
feedbackBtn.addEventListener('click', function () {
  const elementPosition = document.getElementById('section-five').offsetTop;

  window.scrollTo({
    top: elementPosition - 80,
  });
});
// scroll to products clickin on Header
transferBtns.forEach(e =>
  e.addEventListener('click', function () {
    const elementPosition = document.getElementById('section-three').offsetTop;

    window.scrollTo({
      top: elementPosition - 80,
    });
  })
);

// changing paginations of navbar

const sections = document.querySelectorAll('.section');

const isSectionVisible = e => {
  e.preventDefault();
  sections.forEach(section => {
    const sectionId = section.id;
    const sectionBottom = section.offsetTop + section.clientHeight * 0.1;
    const isHalfShown =
      window.scrollY + window.innerHeight - section.clientHeight / 1.5 >
      section.offsetTop;
    const isNotScrolledPast = window.scrollY < sectionBottom;

    if (isHalfShown && isNotScrolledPast) {
      document
        .querySelector(`[data-section='${sectionId}']`)
        .classList.add('active');
    } else {
      document
        .querySelector(`[data-section='${sectionId}']`)
        .classList.remove('active');
    }
  });
};

window.addEventListener('scroll', isSectionVisible);

// creating Modal Login
const modalCloseOutside = document.querySelector('section-one');
const login = document.querySelector('.login');
const modal = document.querySelector('#modal');
const modalClose = document.querySelector('.modal__close');

const openModal = () => {
  login.addEventListener('click', function () {
    modal.classList.toggle('modal--is-visible');
  });
};

openModal();

const closeTheModal = () => {
  modal.classList.remove('modal--is-visible');
};

closeTheModal();

modalClose.addEventListener('click', closeTheModal);

// tabs for Modal Login

const loginBtn = document.querySelector('.modal__inner--login');
const createAccBtn = document.querySelector('.modal__inner--newAcc');
const loginForm = document.querySelector('.loginForm');
const newAccForm = document.querySelector('.newAccForm');

loginBtn.addEventListener('click', () => {
  newAccForm.classList.add('notActiveForm');
  loginForm.classList.remove('notActiveForm');
});

createAccBtn.addEventListener('click', () => {
  newAccForm.classList.remove('notActiveForm');
  loginForm.classList.add('notActiveForm');
});

const allLogins = document.querySelectorAll('.tabcontent');

allLogins.forEach(form => {
  form.addEventListener('click', e => {
    allLogins.forEach(form => form.classList.remove('activeEnter'));
    e.target.classList.add('activeEnter');
  });
});

// creating Modal Search

const searchBtn = document.querySelector('.searchBtn');
const searchModal = document.querySelector('#search');

const openSearch = () => {
  searchBtn.addEventListener('click', function () {
    searchModal.classList.toggle('search--is-visible');
  });
};
openSearch();

// mobile Menu

const menuIcon = document.querySelector('.section-one__menu-icon');

const toggleMenu = () => {
  heading.classList.toggle('section-one__heading--is-visible');
  menuIcon.classList.toggle('section-one__menu-icon--close-x');
};

const closeSearch = () => {
  if (searchModal.classList.contains('search--is-visible')) {
    searchModal.classList.remove('search--is-visible');
  }
};

const closeModal = () => {
  if (modal.classList.contains('modal--is-visible')) {
    modal.classList.remove('modal--is-visible');
  }
};

menuIcon.addEventListener('click', toggleMenu);
menuIcon.addEventListener('click', closeSearch);
menuIcon.addEventListener('click', closeModal);
searchBtn.addEventListener('click', closeModal);
login.addEventListener('click', closeSearch);

// section two

// tabs

class TabList {
  constructor(buttonsContainer, tabs) {
    this.buttonsContainer = buttonsContainer;
    this.tabs = tabs;

    this.buttonsContainer.addEventListener('click', event => {
      const index = event.target.closest('.button').dataset.value;

      this.openTab(index);
    });
  }

  openTab(index) {
    this.tabs.querySelector('.activeTab').classList.remove('activeTab');
    this.tabs.querySelector(`.tab--${index}`).classList.add('activeTab');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const buttonsContainer = document.querySelector('.tabs__box');
  const tabs = document.querySelector('.information-tab');

  const tabList = new TabList(buttonsContainer, tabs);
});

// switch tab heading

const allTabs = document.querySelectorAll('.tabs__title');

allTabs.forEach(tab => {
  tab.addEventListener('click', e => {
    allTabs.forEach(tab => tab.classList.remove('tabs__active'));
    e.target.classList.add('tabs__active');
  });
});

// accordion
const accordion = document.querySelector('.accordion');
const items = document.querySelectorAll('.accordion__item');
const title = document.querySelectorAll('.accordion__title');
const titleSpans = document.querySelectorAll('.accordion__title--span');

function toggleAccordion() {
  let thisItem = this.parentNode;

  items.forEach(item => {
    if (thisItem == item) {
      thisItem.classList.toggle('activeCon');
      return;
    }
    item.classList.remove('activeCon');
  });
}

title.forEach(question => question.addEventListener('click', toggleAccordion));

///
// slider with testimonials

const prevBtn = document.querySelector('.section-five__arrows--leftArr');
const nextBtn = document.querySelector('.section-five__arrows--rightArr');

const carouselSlider = document.querySelector('.section-five__testimonials');
const carouselPart = document.querySelectorAll('.section-five__testimonial');

let counter = 0;
const size = carouselPart[0].clientWidth;

carouselSlider.style.transform = 'translateX(' + -size * counter + 'px)';

nextBtn.addEventListener('click', () => {
  counter++;
  carouselSlider.style.transform = 'translateX(' + -size * counter + 'px)';

  if (counter >= carouselPart.length) {
    carouselSlider.style.transform = 'translateX(0px)';
    counter = 0;
  }
});

prevBtn.addEventListener('click', () => {
  if (counter <= 0) return;
  counter--;
  carouselSlider.style.transform = 'translateX(' + -size * counter + 'px)';
});

// adding to Cart

const shopBtn = document.querySelectorAll('.obj__info--btn');
const cartCounter = document.querySelector(
  '.section-one__heading--userBlock__item--span'
);

let shopCounter = 0;

const cartIncrease = () => {
  shopCounter++;
  cartCounter.innerHTML = `${shopCounter}`;
};

shopBtn.forEach(shop => shop.addEventListener('click', cartIncrease));

// Slider
document.addEventListener('DOMContentLoaded', function () {
  new ChiefSlider('.slider', {
    loop: true,
    interval: 3000,
    swipe: true,
    refresh: false,
  });
});

// scroll reveal
ScrollReveal().reveal(
  '.section-two__banner',
  { delay: 300 },
  { duration: 500 },
  { interval: 600 }
);
ScrollReveal().reveal('.container', { delay: 300 }, { duration: 500 });
ScrollReveal().reveal(
  '.slider__container',
  { delay: 100, reset: true },
  { duration: 500 },
  { easing: 'ease-in' },
  { interval: 600 }
);
ScrollReveal().reveal(
  '.containerAcc',
  { delay: 300 },
  { duration: 300 },
  { easing: 'ease-in' },
  { interval: 900 }
);
ScrollReveal().reveal(
  '.section-five__slider',
  { easing: 'ease-in' },
  { delay: 700 },
  { duration: 500 }
);
