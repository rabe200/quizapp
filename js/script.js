console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

const darkMode = document.querySelector('[data-js="darkmode-button"]');
    darkMode.addEventListener("click", () => {
        console.log("darkmode-button selected");
        bodyElement.classList.add("dark");
    });


const lightMode = document.querySelector('[data-js="lightmode-button"]');
    lightMode.addEventListener("click", () => {
        console.log("lightmode-button selected");
        bodyElement.classList.remove("dark");
    });

const darkModeToggle = document.querySelector('[data-js="darkmode-toggle"]');
    darkModeToggle.addEventListener("click", () => {
        console.log("darkModeToggle selected");
        bodyElement.classList.toggle("dark");
    });