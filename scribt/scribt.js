/* ================= MENU ================= */

const menuButton = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});


const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (item) {

    item.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });

});


/* ================= LANGUAGE ================= */

const languageBtn = document.querySelector("#languageBtn");


const translations = {

    en: {

        home: "Home",
        services: "Services",
        work: "My Work",
        about: "About",
        contact: "Contact",

        heroSmall: "FRONT-END WEB DEVELOPMENT",

        heroTitle: `
            We build websites
            <span>that stand out.</span>
        `,

        heroText:
            "Modern, responsive and user-friendly websites designed to help your business grow online.",


            whyTitle: "Why Choose ClayCode?",
modernDesign: "Modern Design",
modernDesignText: "Modern and attractive designs that give your website a professional look.",
responsive: "Fully Responsive",
responsiveText: "Your website will look great on phones, tablets and computers.",
fast: "Fast & Lightweight",
fastText: "Clean and lightweight websites designed for a smooth experience.",
affordable: "Affordable Solutions",
affordableText: "Professional websites with solutions suitable for small businesses.",

        viewWork: "View My Work",
        letsTalk: "Let's Talk",

        servicesSmall: "WHAT I DO",
        servicesTitle: "My Services",

        websiteDesign: "Website Design",

        websiteDesignText:
            "Modern and clean websites designed around your brand and goals.",

        frontend: "Front-End Development",

        frontendText:
            "Responsive websites built with HTML, CSS and JavaScript.",

        responsive: "Responsive Design",

        responsiveText:
            "Websites that look great on phones, tablets and desktop computers.",

        projectsSmall: "RECENT PROJECTS",
        projectsTitle: "My Work",

        biteHouseText:
            "A modern restaurant website created with HTML and CSS.",

        gameForceText:
            "A gaming website concept with a bold and modern interface.",

viewWebsite: "View Website",

        aboutSmall: "ABOUT CLAYCODE",

        aboutTitle: `
            Turning ideas into
            <span>web experiences.</span>
        `,

        aboutText1:
            "ClayCode focuses on creating modern websites that combine clean design, responsive layouts and smooth user experiences.",

        aboutText2:
            "Every project is built with attention to usability, performance and visual quality.",

        contactSmall: "GET IN TOUCH",

        contactTitle:
            "Have a project in mind?",

        contactText:
            "Tell me about your idea and let's build something great.",

        contactButton: "Contact Me",

        footerText:
            "Modern websites for modern ideas.",

        footerHome: "Home",
        footerServices: "Services",
        footerWork: "Work",
        footerContact: "Contact",

        copyright:
            "© 2026 ClayCode. All rights reserved."
    },


    ar: {

        home: "الرئيسية",
        services: "الخدمات",
        work: "أعمالي",
        about: "من أنا",
        contact: "تواصل معي",

        heroSmall: "تطوير مواقع الويب",

        heroTitle: `
            نصمم مواقع
            <span>تتميز عن غيرها.</span>
        `,

        heroText:
            "مواقع ويب عصرية ومتجاوبة وسهلة الاستخدام تساعد نشاطك التجاري على النمو عبر الإنترنت.",

        
        whyTitle: "لماذا نحن؟",
modernDesign: "تصميم عصري",
modernDesignText: "تصميمات عصرية وجذابة تمنح موقعك مظهرًا احترافيًا.",
responsive: "متجاوب بالكامل",
responsiveText: "سيظهر موقعك بشكل ممتاز على الهواتف والأجهزة اللوحية وأجهزة الكمبيوتر.",
fast: "سريع وخفيف",
fastText: "مواقع نظيفة وخفيفة مصممة لتوفير تجربة استخدام سلسة.",
affordable: "حلول بأسعار مناسبة",
affordableText: "مواقع احترافية وحلول مناسبة للمشاريع والأعمال الصغيرة.",

        
        
            viewWork: "شاهد أعمالي",
        letsTalk: "لنتحدث",

        servicesSmall: "ماذا أقدم",
        servicesTitle: "خدماتي",

        websiteDesign: "تصميم المواقع",

        websiteDesignText:
            "مواقع عصرية ونظيفة مصممة بما يتناسب مع علامتك التجارية وأهدافك.",

        frontend: "تطوير Front-End",

        frontendText:
            "مواقع متجاوبة باستخدام HTML وCSS وJavaScript.",

        responsive: "تصميم متجاوب",

        responsiveText:
            "مواقع تبدو رائعة على الهواتف والأجهزة اللوحية وأجهزة الكمبيوتر.",

        projectsSmall: "أحدث المشاريع",
        projectsTitle: "أعمالي",

        biteHouseText:
            "موقع مطعم عصري تم إنشاؤه باستخدام HTML وCSS.",

        gameForceText:
            "تصميم لموقع ألعاب بواجهة عصرية وجريئة.",


viewWebsite: "زيارة الموقع",


        aboutSmall: "عن CLAYCODE",

        aboutTitle: `
            نحوّل الأفكار إلى
            <span>تجارب ويب.</span>
        `,

        aboutText1:
            "تركز ClayCode على إنشاء مواقع عصرية تجمع بين التصميم النظيف والتخطيطات المتجاوبة وتجربة المستخدم السلسة.",

        aboutText2:
            "يتم بناء كل مشروع مع الاهتمام بسهولة الاستخدام والأداء والجودة البصرية.",

        contactSmall: "تواصل معي",

        contactTitle:
            "لديك مشروع في ذهنك؟",

        contactText:
            "أخبرني عن فكرتك ولنصنع شيئًا رائعًا معًا.",

        contactButton:
            "تواصل معي",

        footerText:
            "مواقع عصرية لأفكار عصرية.",

        footerHome: "الرئيسية",
        footerServices: "الخدمات",
        footerWork: "أعمالي",
        footerContact: "تواصل معي",

        copyright:
            "© 2026 ClayCode. جميع الحقوق محفوظة."
    }

};


/* ================= APPLY LANGUAGE ================= */

function changeLanguage(language) {

    document.documentElement.lang = language;

    if (language === "ar") {

        document.documentElement.dir = "rtl";

        languageBtn.textContent = "English";

    } else {

        document.documentElement.dir = "ltr";

        languageBtn.textContent = "العربية";

    }


    const elements =
        document.querySelectorAll("[data-key]");


    elements.forEach(function (element) {

        const key = element.dataset.key;

        if (translations[language][key]) {

            element.innerHTML =
                translations[language][key];

        }

    });


    localStorage.setItem(
        "language",
        language
    );

}


/* ================= LANGUAGE BUTTON ================= */

languageBtn.addEventListener("click", function () {

    const currentLanguage =
        document.documentElement.lang;

    if (currentLanguage === "en") {

        changeLanguage("ar");

    } else {

        changeLanguage("en");

    }

});


/* ================= LOAD LANGUAGE ================= */

const savedLanguage =
    localStorage.getItem("language");


if (savedLanguage) {

    changeLanguage(savedLanguage);

} else {

    changeLanguage("en");

}


/* ================= SCROLL ANIMATION ================= */

const cards =
    document.querySelectorAll(
        ".service-card, .project-card"
    );


const observer =
    new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    }, {
        threshold: 0.15
    });


cards.forEach(function (card) {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(30px)";

    card.style.transition =
        "0.6s";

    observer.observe(card);

});