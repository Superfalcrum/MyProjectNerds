//Модальное окно

const link = document.querySelector(".send-us-form-button");
const popup = document.querySelector(".modal");
const close = document.querySelector(".modal-close");
const login = popup.querySelector("[name=send-us-name]");
const email = popup.querySelector("[name=send-us-email]");
const fieldText = popup.querySelector("[name=send-us-text]");
const form = popup.querySelector("form");
const storage = localStorage.getItem("login");

let isStorageSupport = true;

try {
  storage = localStorage.getItem("login");
  }
catch (err) {
  isStorageSupport = false;
  }

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    console.log("Клик по кнопке Напишите нам");
    popup.classList.add("modal-show");
    console.log("Открывается модалка");
    login.focus();
    if (storage) {
      login.value = storage;
      email.focus();
    }
    else {
      login.focus();
    }
 });

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    console.log("Закрывается модалка");
    popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!login.value || !email.value || !fieldText.value) {
    evt.preventDefault();
    console.log("Нужно ввести логин и пароль");
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");}
  else {
    if (isStorageSupport) {
    localStorage.setItem("login", login.value);}
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    if (popup.classList.contains("modal-show")) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
      }
    }
  });
