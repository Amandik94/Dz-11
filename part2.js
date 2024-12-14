// Домашние задание №1

const infoList = document.getElementById('info');
const linkList = document.createElement("ul");
const items = ["Введение в DOM", "Создание элементов", "Изменение атрибутов"];

for (const item of items) {
    const newList = document.createElement("li")
    newList.textContent = item;
    linkList.appendChild(newList)
}


infoList.appendChild(linkList);

// Домашние задание №2

const header = document.getElementById('header');
const link = document.createElement('a');

link.textContent = "Мой профиль в Linkedin/Instagram/другая любая соц.сеть";
link.href = "https://www.linkedin.com/in/your-profile";
link.target = "_blank";

header.append(link);

// Домашние задание №3

const newSection = document.createElement("section");
newSection.setAttribute("class", "dynamic");

const newSecondHeading = document.createElement("h2");
newSecondHeading.textContent = "Обучение JavaScript";

const paragraphs = document.createElement("p");
paragraphs.textContent = "Динамическое создание элементов позволяет улучшить интерфейс пользователя";

newSection.append(newSecondHeading, paragraphs);

const main = document.getElementById("main");

main.append(newSection);

// Домашние задание №4

const firstParagraph = infoList.querySelector("p");
infoList.removeChild(firstParagraph);

// Домашние задание №5

const footer = document.getElementById("footer");
footer.innerHTML = "";