const siteContent = {
    nav: {
        "nav-item-1": "Services",
        "nav-item-2": "Product",
        "nav-item-3": "Vision",
        "nav-item-4": "Features",
        "nav-item-5": "About",
        "nav-item-6": "Contact",
        "img-src": "img/logo.png",
    },
    cta: {
        h1: "DOM Is Awesome",
        button: "Get Started",
        "img-src": "img/header-img.png",
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
            "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    contact: {
        "contact-h4": "Contact",
        address: "123 Way 456 Street Somewhere, USA",
        phone: "1 (888) 888-8888",
        email: "sales@greatidea.io",
    },
    footer: {
        copyright: "Copyright Great Idea! 2018",
    },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// let nav_a = document.querySelectorAll("a");
// nav_a.;

let h1 = document.querySelector("h1");
h1.textContent = siteContent["cta"]["h1"];

let button = document.querySelector("button");
button.textContent = siteContent["cta"]["button"];

cta_img = document.querySelector("#cta-img");
cta_img.setAttribute("src", siteContent["cta"]["img-src"]);

let = document.querySelector("button");
button.textContent = siteContent["cta"]["button"];

let middle_img = document.querySelector(".middle-img");
middle_img.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

let copyright1 = document.querySelector("footer p");
copyright1.textContent = siteContent["footer"]["copyright"];

let a = document.querySelectorAll("a");
a[0].textContent = siteContent["nav"]["nav-item-1"];
a[1].textContent = siteContent["nav"]["nav-item-2"];
a[2].textContent = siteContent["nav"]["nav-item-3"];
a[3].textContent = siteContent["nav"]["nav-item-4"];
a[4].textContent = siteContent["nav"]["nav-item-5"];
a[5].textContent = siteContent["nav"]["nav-item-6"];

let h4 = document.querySelectorAll("h4");
h4[0].textContent = siteContent["main-content"]["features-h4"];
h4[1].textContent = siteContent["main-content"]["about-h4"];
h4[2].textContent = siteContent["main-content"]["services-h4"];
h4[3].textContent = siteContent["main-content"]["product-h4"];
h4[4].textContent = siteContent["main-content"]["vision-h4"];
h4[5].textContent = siteContent["contact"]["contact-h4"];

let p = document.querySelectorAll("p");
p[0].textContent = siteContent["main-content"]["features-content"];
p[1].textContent = siteContent["main-content"]["about-content"];
p[2].textContent = siteContent["main-content"]["services-content"];
p[3].textContent = siteContent["main-content"]["product-content"];
p[4].textContent = siteContent["main-content"]["vision-content"];

// p tags for footer
p[5].textContent = siteContent["contact"]["address"];
p[6].textContent = siteContent["contact"]["phone"];
p[7].textContent = siteContent["contact"]["email"];

document.querySelector("nav").style.backgroundColor = "green";

nav = document.querySelector("nav");

let a2 = document.createElement("a");
a2.textContent = "New";
let a3 = document.createElement("a");
a3.textContent = "Old";

console.log(a2, a3);

nav.appendChild(a2);
nav.prepend(a3);

// Stretch Goal
