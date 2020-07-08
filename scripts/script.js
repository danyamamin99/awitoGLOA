'use strict';

 const modalAdd = document.querySelector('.modal__add'),
      addAd = document.querySelector('.add__ad'),
      modalBtnSubmit = document.querySelector('.modal__btn-submit'),
      modalSubmit = document.querySelector('.modal__submit'),
      catalog = document.querySelector('.catalog'),
      modalItem = document.querySelector('.modal__item');
// Добавление объявления и блокировки кнопки отправки формы
addAd.addEventListener('click', () => {
  modalAdd.classList.remove('hide');
  modalBtnSubmit.disabled = true;
});
// Закрытие модалки с помощью крестика и фона, перезагрузка формы
modalAdd.addEventListener('click', (event) => {
  const target = event.target;

  if (target.classList.contains('modal__close') || target === modalAdd) {
    modalAdd.classList.add('hide');
    modalSubmit.reset();
  }
});
// Закрытие модалки с помощью ESC и перезагрузка формы
document.body.addEventListener('keydown', (event) => {
  if (event.keyCode === 27) {
    modalAdd.classList.add('hide');
    modalSubmit.reset();
    modalItem.classList.add('hide');
  }
});
// Открытие модалки -  товара
catalog.addEventListener('click', (event) => {
  const target = event.target;
  
  if (target.closest('.card')) {
    modalItem.classList.remove('hide');
  }
});
// Закрытие модалки - товара
modalItem.addEventListener('click', (event) => {
  const target = event.target;

  if (target.classList.contains('modal__close') || target === modalItem) {
    modalItem.classList.add('hide');
  }
});