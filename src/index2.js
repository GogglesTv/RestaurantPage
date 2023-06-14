console.log("index 2 here!");
import "./style2.css";
import { menuContainer, menuCreator } from "./menu2.js";
import { contactContainer, contactForm } from "./contact2.js";

const container = document.getElementById("content");

const navBar = document.createElement("header");
navBar.classList.add("navbar");

const restaurantName = document.createElement("h1");
restaurantName.innerHTML = "Breakfast Munchies";
restaurantName.classList.add("restaurantName");
navBar.append(restaurantName);

const navBarLinks = document.createElement("section");
navBarLinks.classList.add("navbar-links");
navBar.append(navBarLinks);

const home = document.createElement("div");
home.innerHTML = "Home";
const menu = document.createElement("div");
menu.innerHTML = "Menu";
const contactUs = document.createElement("div");
contactUs.innerHTML = "Contact Us";
navBarLinks.append(home, menu, contactUs);

const mainSectionContainer = document.createElement("section");
const span = document.createElement("span");

const mainPage = document.createElement("div");
mainPage.classList.add("main-section");

const phraseContainers = document.createElement("section");
phraseContainers.classList.add("phrase-containers");
const phrase1 = document.createElement("div");
phrase1.classList.add("phrase1");
phrase1.innerHTML = "Come on down for some delicious breakfast!";
const phrase2 = document.createElement("div");
phrase2.classList.add("phrase2");
phrase2.innerHTML = "Tasty and affordable!";
const orderNow = document.createElement("button");
orderNow.classList.add("order-now");
orderNow.innerHTML = "Order Now";

const storeInfo = document.createElement("section");
storeInfo.classList.add("store-info");

const addressContainer = document.createElement("section");
addressContainer.classList.add("address-container");
const locationLogo = document.createElement("div");
locationLogo.classList.add("location-logo");
locationLogo.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
</svg>`;
const addressInfo = document.createElement("div");
addressInfo.classList.add("address-info");
const street = document.createElement("p");
street.innerHTML = "2800 Riverview Rd";
const cityStateZip = document.createElement("p");
cityStateZip.innerHTML = "Birmingham, AL 35242";
addressContainer.append(locationLogo, addressInfo);
addressInfo.append(street, cityStateZip);

const timeContainer = document.createElement("section");
timeContainer.classList.add("time-container");
const timeLogo = document.createElement("div");
timeLogo.classList.add("time-logo");
timeLogo.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-clock-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
</svg>`;
const timeInfo = document.createElement("div");
timeInfo.classList.add("time-info");
const time1 = document.createElement("p");
time1.innerHTML = "Mon-Thurs: 8am - 8pm";
const time2 = document.createElement("p");
time2.innerHTML = "Fri-Sun: 8am - 11pm";
timeContainer.append(timeLogo, timeInfo);
timeInfo.append(time1, time2);

phraseContainers.append(phrase1, phrase2, orderNow);
storeInfo.append(addressContainer, timeContainer);
mainPage.append(span, phraseContainers, storeInfo);
mainSectionContainer.append(mainPage);

container.append(navBar, mainSectionContainer);

home.addEventListener("click", () => {
  home.style.color === "rgb(255, 34, 34)";
  mainSectionContainer.innerHTML = "";
  tabSwitch();
  mainSectionContainer.append(mainPage);
});

orderNow.addEventListener("click", () => {
  menu.style.color = "rgb(255, 34, 34)";
  mainSectionContainer.innerHTML = "";
  tabSwitch();
  mainSectionContainer.append(menuContainer);
});

menuCreator();
menu.addEventListener("click", () => {
  menu.style.color = "rgb(255, 34, 34)";
  mainSectionContainer.innerHTML = "";
  tabSwitch();
  mainSectionContainer.append(menuContainer);
});

contactForm();
contactUs.addEventListener("click", () => {
  contactUs.style.color = "rgb(255, 34, 34)";
  mainSectionContainer.innerHTML = "";
  tabSwitch();
  mainSectionContainer.append(contactContainer);
});

function tabSwitch() {
  if (home.style.color === "rgb(255, 34, 34)") {
    menu.style.color = "#fef9c3";
    contactUs.style.color = "#fef9c3";
  }

  if (menu.style.color === "rgb(255, 34, 34)") {
    home.style.color = "#fef9c3";
    contactUs.style.color = "#fef9c3";
  }

  if (contactUs.style.color === "rgb(255, 34, 34)") {
    home.style.color = "#fef9c3";
    menu.style.color = "#fef9c3";
  }
}
