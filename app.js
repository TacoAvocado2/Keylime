/* ======================================
   CHITTER'S FRITTERS APP.JS
====================================== */

/* ======================================
   MOBILE MENU
====================================== */

const hamburger =
document.getElementById('hamburger');

const navMenu =
document.getElementById('navMenu');

if(hamburger){

hamburger.addEventListener('click', () => {

navMenu.classList.toggle('active');

});

}

/* ======================================
   EMAILJS
====================================== */

/*
https://www.emailjs.com/

Replace these values
*/

emailjs.init("YOUR_PUBLIC_KEY");

/* ======================================
   CONTACT FORM
====================================== */

const contactForm =
document.getElementById('contactForm');

if(contactForm){

contactForm.addEventListener(
'submit',
function(e){

e.preventDefault();

const name =
this.querySelector(
'input[type="text"]'
).value;

const email =
this.querySelector(
'input[type="email"]'
).value;

const message =
this.querySelector(
'textarea'
).value;

emailjs.send(

"YOUR_SERVICE_ID",

"YOUR_CONTACT_TEMPLATE",

{

from_name:name,

from_email:email,

message:message,

reply_to:email

}

)

.then(function(){

alert(
"Thank you! Your message has been sent."
);

contactForm.reset();

})

.catch(function(error){

console.error(error);

alert(
"Something went wrong. Please try again."
);

});

});

}

/* ======================================
   WHOLESALE FORM
====================================== */

const wholesaleForm =
document.getElementById('wholesaleForm');

if(wholesaleForm){

wholesaleForm.addEventListener(
'submit',
function(e){

e.preventDefault();

const inputs =
this.querySelectorAll('input');

const name = inputs[0].value;

const company = inputs[1].value;

const email = inputs[2].value;

const phone = inputs[3].value;

const businessType =
this.querySelector('select').value;

const message =
this.querySelector('textarea').value;

emailjs.send(

"YOUR_SERVICE_ID",

"YOUR_WHOLESALE_TEMPLATE",

{

name:name,

company:company,

email:email,

phone:phone,

business_type:businessType,

message:message,

reply_to:email

}

)

.then(function(){

alert(
"Wholesale inquiry submitted successfully."
);

wholesaleForm.reset();

})

.catch(function(error){

console.error(error);

alert(
"Unable to submit inquiry."
);

});

});

}

/* ======================================
   STRIPE BUTTONS
====================================== */

/*
Replace with your Stripe Payment Link
*/

const STRIPE_URL =
"https://buy.stripe.com/YOUR_STRIPE_LINK";

document
.querySelectorAll(
'.order-btn, .primary-btn, .card-btn'
)
.forEach(button => {

button.addEventListener(
'click',
function(e){

const text =
this.textContent.toLowerCase();

if(

text.includes('order') ||

text.includes('buy')

){

e.preventDefault();

window.open(
STRIPE_URL,
'_blank'
);

}

});

});

/* ======================================
   SMOOTH SCROLL
====================================== */

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

anchor.addEventListener(
'click',
function(e){

const target =
document.querySelector(
this.getAttribute('href')
);

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:'smooth'

});

}

});

});

/* ======================================
   ACTIVE NAV LINK
====================================== */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(
"nav ul li a"
);

window.addEventListener(
"scroll",
() => {

let current = "";

sections.forEach(section => {

const sectionTop =
section.offsetTop;

const sectionHeight =
section.clientHeight;

if(
pageYOffset >=
sectionTop - 200
){

current =
section.getAttribute("id");

}

});

navLinks.forEach(link => {

link.classList.remove("active");

if(
link.getAttribute("href")
=== "#" + current
){

link.classList.add("active");

}

});

}
);

/* ======================================
   SIMPLE IMAGE LAZY LOADING
====================================== */

const images =
document.querySelectorAll("img");

const imageObserver =
new IntersectionObserver(

(entries, observer) => {

entries.forEach(entry => {

if(entry.isIntersecting){

const img =
entry.target;

img.src =
img.dataset.src ||
img.src;

observer.unobserve(img);

}

});

}

);

images.forEach(img => {

imageObserver.observe(img);

});

/* ======================================
   PAGE LOADED
====================================== */

console.log(
"Chitter's Fritters Website Loaded"
);
