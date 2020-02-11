const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

//Nav
const links = document.querySelectorAll("a");
links[0].textContent = siteContent["nav"]["nav-item-1"];
links[1].textContent = siteContent["nav"]["nav-item-2"];
links[2].textContent = siteContent["nav"]["nav-item-3"];
links[3].textContent = siteContent["nav"]["nav-item-4"];
links[4].textContent = siteContent["nav"]["nav-item-5"];
links[5].textContent = siteContent["nav"]["nav-item-6"];

links[0].style.color = "green";
links[1].style.color = "green";
links[2].style.color = "green";
links[3].style.color = "green";
links[4].style.color = "green";
links[5].style.color = "green";

const nav = document.querySelector("nav");
const firstItem = document.createElement("a");
const lastItem = document.createElement("a");

firstItem.href = "#";
firstItem.textContent = "First";
firstItem.style.color = "green";

lastItem.href = "#";
lastItem.textContent = "Last";
lastItem.style.color = "green";

nav.prepend(firstItem);
nav.append(lastItem);

const ctaText = document.querySelector(".cta .cta-text");
const currentH1 = document.querySelector("h1");
const h1Arr = siteContent["cta"]["h1"].split(" ");
const domH1 = document.createElement("h1");
const isH1 = document.createElement("h1");

ctaText.prepend(isH1);
ctaText.prepend(domH1);

domH1.textContent = h1Arr[0];
isH1.textContent = h1Arr[1];
currentH1.textContent = h1Arr[2];

const button = document.querySelector("button");
button.textContent = siteContent["cta"]["button"];

const headerImg = document.querySelector("#cta-img");
headerImg.src = siteContent["cta"]["img-src"];
headerImg.alt = "Main header circle image";

const mainHeading = document.querySelectorAll(".main-content .text-content h4");
const mainContent = document.querySelectorAll(".main-content .text-content p");
const middleImg = document.querySelector("#middle-img");
