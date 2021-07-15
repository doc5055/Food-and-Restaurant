document.querySelectorAll('.header-nav__link').forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    let target = e.currentTarget.getAttribute('href');
    console.log(target);

    document.querySelectorAll('.header-nav__link').forEach(el => el.classList.remove('header-nav__link--current'));

    e.currentTarget.classList.add('header-nav__link--current');
  });
});

document.querySelectorAll('.delightful__item').forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    let target = e.currentTarget.getAttribute('href');

    if(e.currentTarget.classList.contains('delightful__item--current')){
      e.currentTarget.classList.remove('delightful__item--current');
    }else{
      e.currentTarget.classList.add('delightful__item--current');
    }
  });
});

document.querySelectorAll('.delightful__link').forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    let target = e.currentTarget.getAttribute('href');

    if(e.currentTarget.classList.contains('delightful__link--current')){
      e.currentTarget.classList.remove('delightful__link--current');
    }else{
      e.currentTarget.classList.add('delightful__link--current');
    }
  });
});
