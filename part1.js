// Домашние задание №1

document.title = "Тулебаев Амандык";

// Домашние задание №2

const headerElement = document.getElementById("header");
const h1Element = headerElement.querySelector("h1");
h1Element.textContent = "Изучение JavaScript";

// Домашние задание №3

const menuElement = document.querySelectorAll(".menu-link");
console.log(menuElement);

for (let i = 0; i < menuElement.length; i++) {
    console.log(menuElement[i].textContent);
}

// Домашние задание №4

const featuresList = document.querySelectorAll(".features-list li");
featuresList[1].innerHTML = "Поддержка <strong>API</strong>";