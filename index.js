'use strict';
// filter portfolio items
const filterItems = document.querySelectorAll('.filter__item');
const portfolio = document.querySelector('.gallery');
filterItems.forEach((item) => {
  item.addEventListener('click', (event) => {
    //remove active class from all buttons
    filterItems.forEach(element => element.classList.remove('active'));
    // Add active class to the current button
    item.classList.add('active');
    // filter items
    const portfolio = document.querySelectorAll('.portfolio__column');
    let i = event.currentTarget.dataset.filters;
    if (i == 1) {
      // Show all columns for 'all' option
      portfolio.forEach(el => el.style.display = 'block');
    } else {
      // Hide elements that are not selected

      portfolio.forEach(el => el.style.display = 'none');

      // Show filtered elements
      let x = document.querySelectorAll(`.f_${i}`);
      x.forEach(el => el.style.display = 'block');
    }


  });
});
//parallax
window.addEventListener('scroll', (event) => {
  let scrolled = window.pageYOffset;
  const background = document.querySelector('.mainblock__image');
  background.style.top = -(scrolled * 0.3) + 'px';

});
