'use strict';

// 1 день
// Добавили открытие 2 модалок и закрытие 2 модалок, перезагрузка формы,
// блокировка кнопки отправить на форме, закрытие модалок с помощью ESC
// 2 день
// Сделали функцию closeModal и closeModalEsc, использовал метод spread, проверку валидации формы
// создали константу dataBase, добавили событие форме('submit')

const dataBase = [];

const modalAdd = document.querySelector('.modal__add'),
      addAd = document.querySelector('.add__ad'),
      modalBtnSubmit = document.querySelector('.modal__btn-submit'),
      modalSubmit = document.querySelector('.modal__submit'),
      catalog = document.querySelector('.catalog'),
      modalItem = document.querySelector('.modal__item'),
      modalBtnWarning = document.querySelector('.modal__btn-warning');

// Метод spread(...) коллекция разбивает на элементы, затем все элементы мы засовывает в массив, потом фильтруем элементы, чтоб не было BUTTON
const elementsModalSubmit = [...modalSubmit.elements].filter((elem) => elem.tagName !== 'BUTTON');

// Функция закрытия модального окна
const closeModal = function(event) {
  const target = event.target;

  if (target.closest('.modal__close') || target === this) {
    this.classList.add('hide');
    if (this === modalAdd) {
      modalSubmit.reset();
    }
  }
};
// Функия закрытия модального окна через Esc
const closeModalEsc = (event) => {
  if (event.code === 'Escape') {
    modalAdd.classList.add('hide');
    modalItem.classList.add('hide');
    modalSubmit.reset();
    document.body.removeEventListener('keydown', closeModalEsc);
  }
};
// Открытие модалки -добавления объявления и блокировки кнопки формы
addAd.addEventListener('click', () => {
  modalAdd.classList.remove('hide');
  modalBtnSubmit.disabled = true;
  document.body.addEventListener('keydown', closeModalEsc);
});
// Открытие модалки -  товара
catalog.addEventListener('click', (event) => {
  const target = event.target;

  if (target.closest('.card')) {
    modalItem.classList.remove('hide');
    document.body.addEventListener('keydown', closeModalEsc);
  }
});
// Закрытие модалки с помощью крестика и фона, перезагрузка формы
modalAdd.addEventListener('click', closeModal);
// Закрытие модалки - товара
modalItem.addEventListener('click', closeModal);
// Проверка валидации формы, разблокировка кнопки и убирание текста
// Every возвращает true если все элементы не пустые
modalSubmit.addEventListener('input', () => {
  const validForm = elementsModalSubmit.every(elem => elem.value);
  modalBtnSubmit.disabled = !validForm;
  modalBtnWarning.style.display = validForm ? 'none' : '';
});
// Отправка формы
modalSubmit.addEventListener('submit',(event) => {
  event.preventDefault();
  const itemObj = {};

  for (const elem of elementsModalSubmit) {
    itemObj[elem.name] = elem.value;
  }

  dataBase.push(itemObj);
  console.log(dataBase);
});