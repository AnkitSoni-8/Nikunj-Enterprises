/* ======================================================
            NIKUNJ ENTERPRISES
            MAIN SCRIPT
======================================================*/

// Wait until everything is loaded
window.addEventListener("load", () => {

    // -----------------------------
    // LOADER ANIMATION
    // -----------------------------

    const tl = gsap.timeline();

    tl.to(".loader-circle", {
        rotation: 720,
        duration: 1,
        ease: "power2.out"
    })

    .to("#loader h2", {
        y: -20,
        opacity: 0,
        duration: .5
    })

    .to("#loader", {
        opacity: 0,
        duration: .8,
        pointerEvents: "none"
    })

    .set("#loader", {
        display: "none"
    });

    // -----------------------------
    // HERO CONTENT
    // -----------------------------

    gsap.from(".hero-title", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out"
    });

    gsap.from(".hero-content h5", {
        y: -50,
        opacity: 0,
        duration: 1,
        delay: .2
    });

    gsap.from(".hero-content p", {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: .5
    });

    gsap.from(".hero-btn .btn", {
        y: 60,
        opacity: 0,
        stagger: .2,
        duration: 1,
        delay: .8
    });

});

// ======================================================
// STICKY NAVBAR
// ======================================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});

// ======================================================
// HERO PARALLAX
// ======================================================

const hero = document.querySelector(".hero");

hero.addEventListener("mousemove", (e) => {

    const x = (window.innerWidth / 2 - e.clientX) / 35;
    const y = (window.innerHeight / 2 - e.clientY) / 35;

    gsap.to(".hero-content", {

        x: -x,
        y: -y,
        duration: .8,
        ease: "power2.out"

    });

});

// ======================================================
// HERO VIDEO ZOOM
// ======================================================

gsap.to(".hero-video", {

    scale: 1.12,

    duration: 12,

    repeat: -1,

    yoyo: true,

    ease: "sine.inOut"

});

// ======================================================
// WAVE ANIMATION
// ======================================================

gsap.to(".waves svg", {

    x: 35,

    duration: 4,

    repeat: -1,

    yoyo: true,

    ease: "sine.inOut"

});

// ======================================================
// FLOATING BUBBLES
// ======================================================

function createBubble() {

    const bubble = document.createElement("span");

    bubble.classList.add("bubble");

    const size = Math.random() * 60 + 20;

    bubble.style.width = size + "px";
    bubble.style.height = size + "px";

    bubble.style.left = Math.random() * window.innerWidth + "px";

    bubble.style.bottom = "-100px";

    bubble.style.animationDuration = (Math.random() * 8 + 6) + "s";

    bubble.style.opacity = Math.random();

    document.body.appendChild(bubble);

    setTimeout(() => {

        bubble.remove();

    }, 14000);

}

setInterval(createBubble, 700);

// ======================================================
// BUTTON HOVER EFFECT
// ======================================================

document.querySelectorAll(".btn").forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        gsap.to(btn, {

            scale: 1.05,

            duration: .25

        });

    });

    btn.addEventListener("mouseleave", () => {

        gsap.to(btn, {

            scale: 1,

            duration: .25

        });

    });

});

// ======================================================
// HERO TEXT FLOATING
// ======================================================

gsap.to(".hero-title", {

    y: 10,

    repeat: -1,

    yoyo: true,

    duration: 2.5,

    ease: "sine.inOut"

});

// ======================================================
// REGISTER SCROLLTRIGGER (must run before any scrollTrigger use)
// ======================================================

gsap.registerPlugin(ScrollTrigger);

// ======================================================
// SCROLL INDICATOR (Future Sections)
// ======================================================

gsap.utils.toArray("section").forEach((section) => {

    gsap.from(section, {

        opacity: 0,

        y: 100,

        duration: 1,

        scrollTrigger: {

            trigger: section,

            start: "top 80%"

        }

    });

});


// ======================================================
// STATS COUNTER (Products / Happy Customers / etc.)
// ======================================================

const counters = document.querySelectorAll(".counter");

if (counters.length) {

    counters.forEach((counter) => {

        const target = +counter.getAttribute("data-target");

        let counterObj = { val: 0 };

        gsap.to(counterObj, {

            val: target,

            duration: 2,

            ease: "power1.out",

            scrollTrigger: {

                trigger: counter,

                start: "top 85%",

                once: true

            },

            onUpdate: () => {

                counter.textContent = Math.floor(counterObj.val);

            },

            onComplete: () => {

                counter.textContent = target;

            }

        });

    });

}

/* ==========================================
        WHY SECTION GSAP FIX
========================================== */



const whyCards = document.querySelectorAll(".why-card");


if(whyCards.length){


    gsap.set(whyCards,{

        opacity:1,

        y:0

    });



    gsap.from(whyCards,{

        scrollTrigger:{

            trigger:".why-section",

            start:"top 80%",

            once:true

        },


        y:80,

        opacity:0,

        duration:0.8,

        stagger:0.2,

        ease:"power3.out"


    });


}
/* ==========================================
        CATEGORY SECTION FIXED GSAP
========================================== */


gsap.registerPlugin(ScrollTrigger);


const categorySection = document.querySelector(".category-section");


if(categorySection){


    const categoryCards = document.querySelectorAll(".category-card");


    // Initial visible state

    gsap.set(categoryCards,{

        opacity:1,

        y:0

    });



    // Card Animation

    gsap.from(categoryCards,{


        scrollTrigger:{


            trigger:categorySection,

            start:"top 85%",

            toggleActions:"play none none none"


        },


        opacity:0,

        y:80,

        duration:1,

        stagger:0.2,

        ease:"power3.out"


    });



    // Icon Animation


    const categoryIcons=document.querySelectorAll(".category-icon");


    gsap.from(categoryIcons,{


        scrollTrigger:{


            trigger:categorySection,

            start:"top 85%",


            toggleActions:"play none none none"


        },


        scale:0,

        rotation:180,

        duration:0.8,

        stagger:0.2,

        ease:"back.out(1.7)"


    });



}


// Refresh ScrollTrigger after page load

window.addEventListener("load",()=>{

    ScrollTrigger.refresh();

});
/* ==========================================
        PRODUCT SECTION GSAP
========================================== */


gsap.registerPlugin(ScrollTrigger);



const productCards = document.querySelectorAll(".product-item");



if(productCards.length){


    gsap.from(productCards,{


        scrollTrigger:{


            trigger:".product-section",

            start:"top 80%",

            once:true


        },


        y:100,

        opacity:0,

        duration:1,

        stagger:.2,

        ease:"power3.out"



    });


}




/* ==========================================
        PRODUCT SEARCH
========================================== */


const searchInput = document.getElementById("productSearch");


if(searchInput){


searchInput.addEventListener("keyup",()=>{


    let value = searchInput.value.toLowerCase();



    document.querySelectorAll(".product-item").forEach(product=>{


        let name = product.querySelector("h4")
        .innerText
        .toLowerCase();



        let category = product.querySelector(".product-category")
        .innerText
        .toLowerCase();



        if(
            name.includes(value) ||
            category.includes(value)
        ){


            product.style.display="block";


        }

        else{


            product.style.display="none";


        }



    });



});


}




/* ==========================================
        WHATSAPP PRODUCT MESSAGE
========================================== */
/* ==========================================
        PRODUCT WHATSAPP ENQUIRY
========================================== */


const whatsappButtons = document.querySelectorAll(".whatsapp-btn");



whatsappButtons.forEach(button=>{


    button.addEventListener("click",function(e){


        e.preventDefault();



        let card = this.closest(".product-card");



        let productName =
        card.querySelector("h4").innerText;



        let category =
        card.querySelector(".product-category").innerText;



        let price =
        card.querySelector(".price").innerText;




        let message =

`Hello Nikunj Enterprises,

I want information about this product:

Product Name:
${productName}

Category:
${category}

Price:
${price}

Please share more details.`;




        let whatsappURL =

        "https://wa.me/919958352157?text="
        +
        encodeURIComponent(message);



        window.open(
            whatsappURL,
            "_blank"
        );



    });



});

/* ==========================================
        PRODUCT DETAILS MODAL
========================================== */


const viewButtons = document.querySelectorAll(".view-details-btn");


const productModal = document.getElementById("productModal");


const closeModal = document.querySelector(".close-modal");



viewButtons.forEach(button => {


    button.addEventListener("click",()=>{


        let card = button.closest(".product-card");



        let image =
        card.querySelector("img").src;



        let name =
        card.querySelector("h4").innerText;



        let category =
        card.querySelector(".product-category").innerText;



        let pack =
        card.querySelector(".pack").innerText;



        let price =
        card.querySelector(".price").innerText;



        let description =
        card.querySelector(".product-content p").innerText;




        document.getElementById("modalImage").src = image;


        document.getElementById("modalName").innerText = name;


        document.getElementById("modalCategory").innerText = 
        "Category : " + category;


        document.getElementById("modalPack").innerText = pack;


        document.getElementById("modalPrice").innerText = price;


        document.getElementById("modalDescription").innerText = description;




        productModal.style.display="flex";




        // GSAP Animation

        gsap.from(".product-modal-box",{

            scale:0.7,

            opacity:0,

            duration:0.5,

            ease:"back.out"

        });



    });



});





// Close Popup


closeModal.addEventListener("click",()=>{


    productModal.style.display="none";


});





// Outside click close


productModal.addEventListener("click",(e)=>{


    if(e.target === productModal){


        productModal.style.display="none";


    }


});

/* ==========================================
      PRODUCT GSAP ANIMATION FIX
========================================== */


document.addEventListener("DOMContentLoaded",()=>{


const productCards = document.querySelectorAll(".product-card");



if(productCards.length){



gsap.set(productCards,{

    opacity:1,

    y:0

});




gsap.from(productCards,{

    scrollTrigger:{

        trigger:".product-section",

        start:"top 85%",

        once:true

    },


    y:60,

    opacity:0,

    duration:0.8,

    stagger:0.2,

    ease:"power2.out"


});



}



});
/* ==========================================
        PRODUCT SEARCH FUNCTION
========================================== */


const productSearch =
document.getElementById("productSearch");



const allProducts =
document.querySelectorAll(".product-item");



if(productSearch){



productSearch.addEventListener("input",()=>{



let searchValue =
productSearch.value.toLowerCase();




allProducts.forEach(product=>{



let productName =
product.querySelector("h4")
.innerText
.toLowerCase();



let productCategory =
product.querySelector(".product-category")
.innerText
.toLowerCase();




if(
productName.includes(searchValue)
||
productCategory.includes(searchValue)

){


product.style.display="block";


}

else{


product.style.display="none";


}



});



});



}

/* ==========================================
        CATEGORY FILTER FIX
========================================== */


const filterButtons = document.querySelectorAll(".filter-btn");
const products = document.querySelectorAll(".product-item");


filterButtons.forEach((button)=>{


    button.addEventListener("click", function(e){


        e.preventDefault();



        let category = this.getAttribute("data-filter");



        // Active button

        filterButtons.forEach(btn=>{

            btn.classList.remove("active");

        });



        this.classList.add("active");





        // Product filter

        products.forEach(product=>{


            let productCategory =
            product.getAttribute("data-category");



            if(
                category === "all" ||
                category === productCategory
            ){

                product.style.display="block";

            }

            else{

                product.style.display="none";

            }



        });



    });



});

/* ==========================================
      BACK TO TOP BUTTON
========================================== */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        backToTop.style.display="block";

    }

    else{

        backToTop.style.display="none";

    }

});

backToTop.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
/* ==========================================
        SAFE GSAP ANIMATION
========================================== */


document.addEventListener("DOMContentLoaded",()=>{


if(typeof gsap === "undefined"){
    return;
}


gsap.registerPlugin(ScrollTrigger);



/* HERO ONLY */


const heroItems = document.querySelectorAll(".hero-content > *");


if(heroItems.length){


gsap.from(heroItems,{

    y:40,

    duration:1,

    stagger:0.2,

    ease:"power3.out"

});


}





/* CARD ANIMATION */


const animateCards = document.querySelectorAll(
".category-card, .product-card, .trust-card, .testimonial-card"
);



animateCards.forEach((card)=>{


gsap.from(card,{

    scrollTrigger:{

        trigger:card,

        start:"top 90%",

    },


    y:40,

    duration:.7,

    ease:"power2.out"

});


});



});
/* ==========================================
        SMOOTH STATS COUNTER
========================================== */


document.addEventListener("DOMContentLoaded",()=>{


const counters = document.querySelectorAll(".counter");


if(counters.length){


counters.forEach(counter=>{


let target = Number(
counter.getAttribute("data-target")
);


let started = false;



function startCounter(){


if(started) return;


started = true;



let count = 0;


let duration = 4000; // 4 seconds slow animation


let startTime = null;



function animate(time){


if(!startTime)
startTime = time;



let progress =
time - startTime;



let percentage =
Math.min(progress / duration,1);



count =
Math.floor(target * percentage);



counter.innerText =
count + "+";



if(progress < duration){


requestAnimationFrame(animate);


}

else{


counter.innerText =
target + "+";


}



}



requestAnimationFrame(animate);



}




if(typeof ScrollTrigger !== "undefined"){


ScrollTrigger.create({


trigger:counter,


start:"top 85%",


once:true,


onEnter:startCounter



});


}

else{


startCounter();


}



});


}



});