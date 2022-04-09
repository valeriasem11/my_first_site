
var link = document.querySelector(".login-link"); //кнопка вход
var popup = document.querySelector(".modal-login"); //модальное окно
var close = document.querySelector(".modal-close"); //кнопка закрыть
var login = popup.querySelector("[name=login]"); //фокус на поле для ввода логина
var password = popup.querySelector("[name=password]"); //фокус на поле для ввода логина
var form = popup.querySelector("form"); //форма
var storage = localStorage.getItem("login"); //добавим логин в хранилище

//открыть модальное окно


link.addEventListener("click", function (el) { 
    el.preventDefault(); 
    popup.classList.add("modal-show");
    login.focus();
    if (storage) { 
        login.value = storage;
    password.focus();
    } else { 
        login.focus();
    }
});

//закрыть модальное окно

close.addEventListener("click", function (el) { 
    el.preventDefault(); 
    popup.classList.remove("modal-show");
});

//выполнение формы

form.addEventListener("submit", function (el) {
    if (!login.value || !password.value) {
    el.preventDefault();
    console.log("Нужно ввести логин и пароль");
    } else {
        localStorage.setItem("login", login.value);
    }
});

window.addEventListener("keydown", function (el) { 
    if (el.keyCode === 27) {
    el.preventDefault();
    if (popup.classList.contains("modal-show")) { 
    popup.classList.remove("modal-show");
    }
    }
});

