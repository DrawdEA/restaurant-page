import "./styles.css";
import { homePage } from "./home.js";
import { menuPage } from "./menu.js";
import { contactPage } from "./contact.js";

const mainDiv = document.querySelector("#content");
const homeButton = document.querySelector("#home-button");
const contactButton = document.querySelector("#contact-button");
const menuButton = document.querySelector("#menu-button");

homeButton.addEventListener("click", () => {
    mainDiv.replaceChildren();
    homePage.show(mainDiv);
})

contactButton.addEventListener("click", () => {
    mainDiv.replaceChildren();
    contactPage.show(mainDiv);
})

menuButton.addEventListener("click", () => {
    mainDiv.replaceChildren();
    menuPage.show(mainDiv);
})

homePage.show(mainDiv);