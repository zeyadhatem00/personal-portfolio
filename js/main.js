const scrollup = document.getElementById("scroll-to-top");
const themeswitch = document.getElementById("theme-toggle-button");
const html = document.querySelector("html");
const settingsbtn = document.getElementById("settings-toggle");
const sidebar = document.getElementById("settings-sidebar");
const closesidebar = document.getElementById("close-settings");
const cairofont = document.querySelector("[data-font='cairo']");
const alexfont = document.querySelector("[data-font='alexandria']");
const tajwalfont = document.querySelector("[data-font='tajawal']");
const body = document.querySelector("body");
const PinkOrange = document.getElementById("PinkOrange");
const PurpleBlue = document.getElementById("PurpleBlue");
const GreenEmerald = document.getElementById("GreenEmerald");
const BlueCyan = document.getElementById("BlueCyan");
const RedRose = document.getElementById("RedRose");
const AmberOrange = document.getElementById("AmberOrange");
const main = document.getElementById("main-content");
const resetsettings = document.getElementById("reset-settings");
const home = document.querySelector("[href='#hero-section']");
const about = document.querySelector("[href='#about']");
const portfolio = document.querySelector("[href='#portfolio']");
const experience = document.querySelector("[href='#experience']");
const testimonials = document.querySelector("[href='#testimonials']");
const contact = document.querySelector("[href='#contact']");
const allbtn = document.querySelector("[data-filter='all']");
const webbtn = document.querySelector("[data-filter='web']");
const appbtn = document.querySelector("[data-filter='app']");
const designbtn = document.querySelector("[data-filter='design']");
const ecommercebtn = document.querySelector("[data-filter='ecommerce']");
const webprojects = document.querySelectorAll("[ data-category='web']");
const appprojects = document.querySelectorAll(" [data-category='app']");
const designprojects = document.querySelectorAll("[ data-category='design']");
const ecommerceprojects = document.querySelector(
  "[  data-category='ecommerce']",
);
const zerodot = document.querySelector("[data-index= '0']");
const firstdot = document.querySelector("[data-index= '1']");
const seconddot = document.querySelector("[data-index= '2']");
const thirddot = document.querySelector("[data-index= '3']");
const carousel = document.getElementById("testimonials-carousel");
const next = document.getElementById("next-testimonial");
const previous = document.getElementById("prev-testimonial");
const mobilebtn = document.getElementById("mob-menu");
const menu = document.querySelector("[role='menubar']");
const breakpoint = window.matchMedia("(max-width: 639.91px)");
const breakpoint2 = window.matchMedia(
  "(min-width: 640px)and (max-width: 767.91px)",
);
const breakpoint3 = window.matchMedia(
  "(min-width: 768px)and (max-width: 1024px)",
);

// dark/light theme switch

themeswitch.addEventListener("click", function () {
  html.classList.toggle("dark");
  html.classList.toggle("light");
});

// scrollup button appaerance / scrollspy

window.onscroll = function () {
  scrollupappear();
};
function scrollupappear() {
  if (document.documentElement.scrollTop < 735) {
    home.classList.add("active");
    about.classList.remove("active");
    portfolio.classList.remove("active");
    experience.classList.remove("active");
    testimonials.classList.remove("active");
    contact.classList.remove("active");
    scrollup.classList.add("invisible");
    scrollup.classList.add("opacity-0");
    scrollup.classList.remove("opacity-1");
    scrollup.classList.remove("visible");
  } else if (
    document.documentElement.scrollTop >= 735 &&
    document.documentElement.scrollTop < 2758
  ) {
    home.classList.remove("active");
    about.classList.add("active");
    portfolio.classList.remove("active");
    experience.classList.remove("active");
    testimonials.classList.remove("active");
    contact.classList.remove("active");

    scrollup.classList.remove("invisible");
    scrollup.classList.remove("opacity-0");
    scrollup.classList.add("opacity-1");
    scrollup.classList.add("visible");
  } else if (
    document.documentElement.scrollTop >= 2758.587646484375 &&
    document.documentElement.scrollTop < 4922
  ) {
    home.classList.remove("active");
    about.classList.remove("active");
    portfolio.classList.add("active");
    experience.classList.remove("active");
    testimonials.classList.remove("active");
    contact.classList.remove("active");
  } else if (
    document.documentElement.scrollTop >= 4922.3251953125 &&
    document.documentElement.scrollTop < 6908
  ) {
    home.classList.remove("active");
    about.classList.remove("active");
    portfolio.classList.remove("active");
    experience.classList.add("active");
    testimonials.classList.remove("active");
    contact.classList.remove("active");
  } else if (
    document.documentElement.scrollTop >= 6908 &&
    document.documentElement.scrollTop < 8349.400390625
  ) {
    home.classList.remove("active");
    about.classList.remove("active");
    portfolio.classList.remove("active");
    experience.classList.remove("active");
    testimonials.classList.add("active");
    contact.classList.remove("active");
  } else if (document.documentElement.scrollTop > 8349.400390625) {
    home.classList.remove("active");
    about.classList.remove("active");
    portfolio.classList.remove("active");
    experience.classList.remove("active");
    testimonials.classList.remove("active");
    contact.classList.add("active");
  }
}

scrollup.addEventListener("click", function () {
  html.scrollTop = 0;
});

// ******* SideBar *******

settingsbtn.addEventListener("click", function () {
  sidebar.classList.toggle("translate-x-full");
  settingsbtn.classList.toggle("right-320");
  settingsbtn.classList.toggle("right-0");
});

closesidebar.addEventListener("click", function () {
  sidebar.classList.toggle("translate-x-full");
  settingsbtn.classList.toggle("right-320");
  settingsbtn.classList.toggle("right-0");
});

main.addEventListener("click", function () {
  sidebar.classList.add("translate-x-full");
  settingsbtn.classList.remove("right-320");
  settingsbtn.classList.add("right-0");
  menu.classList.remove("active");
});

cairofont.addEventListener("click", function () {
  body.classList.remove("font-tajawal");
  body.classList.remove("font-alexandria");
  body.classList.add("font-cairo");

  cairofont.classList.add("active");
  cairofont.classList.add("border-primary");
  cairofont.classList.add("bg-slate-50");
  cairofont.classList.add("dark:bg-slate-800");
  cairofont.classList.remove("dark:border-slate-700");
  cairofont.classList.remove("border-slate-200");

  alexfont.classList.remove("active");
  alexfont.classList.remove("border-primary");
  alexfont.classList.remove("bg-slate-50");
  alexfont.classList.remove("dark:bg-slate-800");
  alexfont.classList.add("dark:border-slate-700");
  alexfont.classList.add("border-slate-200");

  tajwalfont.classList.remove("active");
  tajwalfont.classList.remove("border-primary");
  tajwalfont.classList.remove("bg-slate-50");
  tajwalfont.classList.remove("dark:bg-slate-800");
  tajwalfont.classList.add("dark:border-slate-700");
  tajwalfont.classList.add("border-slate-200");
});

alexfont.addEventListener("click", function () {
  body.classList.remove("font-tajawal");
  body.classList.add("font-alexandria");
  body.classList.remove("font-cairo");

  alexfont.classList.add("active");
  alexfont.classList.add("border-primary");
  alexfont.classList.add("bg-slate-50");
  alexfont.classList.add("dark:bg-slate-800");
  alexfont.classList.remove("dark:border-slate-700");
  alexfont.classList.remove("border-slate-200");

  cairofont.classList.remove("active");
  cairofont.classList.remove("border-primary");
  cairofont.classList.remove("bg-slate-50");
  cairofont.classList.remove("dark:bg-slate-800");
  cairofont.classList.add("dark:border-slate-700");
  cairofont.classList.add("border-slate-200");

  tajwalfont.classList.remove("active");
  tajwalfont.classList.remove("border-primary");
  tajwalfont.classList.remove("bg-slate-50");
  tajwalfont.classList.remove("dark:bg-slate-800");
  tajwalfont.classList.add("dark:border-slate-700");
  tajwalfont.classList.add("border-slate-200");
});

tajwalfont.addEventListener("click", function () {
  body.classList.add("font-tajawal");
  body.classList.remove("font-alexandria");
  body.classList.remove("font-cairo");

  tajwalfont.classList.add("active");
  tajwalfont.classList.add("border-primary");
  tajwalfont.classList.add("bg-slate-50");
  tajwalfont.classList.add("dark:bg-slate-800");
  tajwalfont.classList.remove("dark:border-slate-700");
  tajwalfont.classList.remove("border-slate-200");

  alexfont.classList.remove("active");
  alexfont.classList.remove("border-primary");
  alexfont.classList.remove("bg-slate-50");
  alexfont.classList.remove("dark:bg-slate-800");
  alexfont.classList.add("dark:border-slate-700");
  alexfont.classList.add("border-slate-200");

  cairofont.classList.remove("active");
  cairofont.classList.remove("border-primary");
  cairofont.classList.remove("bg-slate-50");
  cairofont.classList.remove("dark:bg-slate-800");
  cairofont.classList.add("dark:border-slate-700");
  cairofont.classList.add("border-slate-200");
});

PinkOrange.addEventListener("click", () => {
  html.style.cssText =
    "--color-primary: #ec4899;--color-secondary: #f97316; --color-accent: #fb923c;";
  PinkOrange.classList.add(
    "dark:ring-offset-slate-900",
    "ring-2",
    "ring-offset-2",
    "ring-offset-white",
    "ring-primary",
  );

  GreenEmerald.classList.remove(
    "dark:ring-offset-slate-900",
    "ring-2",
    "ring-offset-2",
    "ring-offset-white",
    "ring-primary",
  );
  AmberOrange.classList.remove(
    "dark:ring-offset-slate-900",
    "ring-2",
    "ring-offset-2",
    "ring-offset-white",
    "ring-primary",
  );
  RedRose.classList.remove(
    "dark:ring-offset-slate-900",
    "ring-2",
    "ring-offset-2",
    "ring-offset-white",
    "ring-primary",
  );
  BlueCyan.classList.remove(
    "dark:ring-offset-slate-900",
    "ring-2",
    "ring-offset-2",
    "ring-offset-white",
    "ring-primary",
  );
  PurpleBlue.classList.remove(
    "dark:ring-offset-slate-900",
    "ring-2",
    "ring-offset-2",
    "ring-offset-white",
    "ring-primary",
  );
});

PurpleBlue.addEventListener("click", () => {
  html.style.cssText =
    "--color-primary: #6366f1;--color-secondary: #8b5cf6; --color-accent: #a855f7;";
  PurpleBlue.classList.add(
    "dark:ring-offset-slate-900",
    "ring-2",
    "ring-offset-2",
    "ring-offset-white",
    "ring-primary",
  );

  GreenEmerald.classList.remove(
    "dark:ring-offset-slate-900",
    "ring-2",
    "ring-offset-2",
    "ring-offset-white",
    "ring-primary",
  );
  AmberOrange.classList.remove(
    "dark:ring-offset-slate-900",
    "ring-2",
    "ring-offset-2",
    "ring-offset-white",
    "ring-primary",
  );
  RedRose.classList.remove(
    "dark:ring-offset-slate-900",
    "ring-2",
    "ring-offset-2",
    "ring-offset-white",
    "ring-primary",
  );
  BlueCyan.classList.remove(
    "dark:ring-offset-slate-900",
    "ring-2",
    "ring-offset-2",
    "ring-offset-white",
    "ring-primary",
  );
  PinkOrange.classList.remove(
    "dark:ring-offset-slate-900",
    "ring-2",
    "ring-offset-2",
    "ring-offset-white",
    "ring-primary",
  );
});

GreenEmerald.addEventListener("click", () => {
  html.style.cssText =
    "--color-primary: #10b981;--color-secondary: #059669; --color-accent:  #34d399;";
  GreenEmerald.classList.add(
    "dark:ring-offset-slate-900",
    "ring-2",
    "ring-offset-2",
    "ring-offset-white",
    "ring-primary",
  );

  PinkOrange.classList.remove(
    "dark:ring-offset-slate-900",
    "ring-2",
    "ring-offset-2",
    "ring-offset-white",
    "ring-primary",
  );
  AmberOrange.classList.remove(
    "dark:ring-offset-slate-900",
    "ring-2",
    "ring-offset-2",
    "ring-offset-white",
    "ring-primary",
  );
  RedRose.classList.remove(
    "dark:ring-offset-slate-900",
    "ring-2",
    "ring-offset-2",
    "ring-offset-white",
    "ring-primary",
  );
  BlueCyan.classList.remove(
    "dark:ring-offset-slate-900",
    "ring-2",
    "ring-offset-2",
    "ring-offset-white",
    "ring-primary",
  );
  PurpleBlue.classList.remove(
    "dark:ring-offset-slate-900",
    "ring-2",
    "ring-offset-2",
    "ring-offset-white",
    "ring-primary",
  );
});

BlueCyan.addEventListener("click", () => {
  html.style.cssText =
    "--color-primary: #3b82f6;--color-secondary: #06b6d4; --color-accent: #22d3ee;";
  BlueCyan.classList.add(
    "dark:ring-offset-slate-900",
    "ring-2",
    "ring-offset-2",
    "ring-offset-white",
    "ring-primary",
  );

  GreenEmerald.classList.remove(
    "dark:ring-offset-slate-900",
    "ring-2",
    "ring-offset-2",
    "ring-offset-white",
    "ring-primary",
  );
  AmberOrange.classList.remove(
    "dark:ring-offset-slate-900",
    "ring-2",
    "ring-offset-2",
    "ring-offset-white",
    "ring-primary",
  );
  RedRose.classList.remove(
    "dark:ring-offset-slate-900",
    "ring-2",
    "ring-offset-2",
    "ring-offset-white",
    "ring-primary",
  );
  PinkOrange.classList.remove(
    "dark:ring-offset-slate-900",
    "ring-2",
    "ring-offset-2",
    "ring-offset-white",
    "ring-primary",
  );
  PurpleBlue.classList.remove(
    "dark:ring-offset-slate-900",
    "ring-2",
    "ring-offset-2",
    "ring-offset-white",
    "ring-primary",
  );
});

RedRose.addEventListener("click", () => {
  html.style.cssText =
    "--color-primary: #ef4444;--color-secondary: #f43f5e; --color-accent: #fb7185;";
  RedRose.classList.add(
    "dark:ring-offset-slate-900",
    "ring-2",
    "ring-offset-2",
    "ring-offset-white",
    "ring-primary",
  );

  GreenEmerald.classList.remove(
    "dark:ring-offset-slate-900",
    "ring-2",
    "ring-offset-2",
    "ring-offset-white",
    "ring-primary",
  );
  AmberOrange.classList.remove(
    "dark:ring-offset-slate-900",
    "ring-2",
    "ring-offset-2",
    "ring-offset-white",
    "ring-primary",
  );
  PinkOrange.classList.remove(
    "dark:ring-offset-slate-900",
    "ring-2",
    "ring-offset-2",
    "ring-offset-white",
    "ring-primary",
  );
  BlueCyan.classList.remove(
    "dark:ring-offset-slate-900",
    "ring-2",
    "ring-offset-2",
    "ring-offset-white",
    "ring-primary",
  );
  PurpleBlue.classList.remove(
    "dark:ring-offset-slate-900",
    "ring-2",
    "ring-offset-2",
    "ring-offset-white",
    "ring-primary",
  );
});

AmberOrange.addEventListener("click", () => {
  html.style.cssText =
    "--color-primary: #f59e0b;--color-secondary: #ea580c; --color-accent: #fbbf24;";
  AmberOrange.classList.add(
    "dark:ring-offset-slate-900",
    "ring-2",
    "ring-offset-2",
    "ring-offset-white",
    "ring-primary",
  );

  GreenEmerald.classList.remove(
    "dark:ring-offset-slate-900",
    "ring-2",
    "ring-offset-2",
    "ring-offset-white",
    "ring-primary",
  );
  PinkOrange.classList.remove(
    "dark:ring-offset-slate-900",
    "ring-2",
    "ring-offset-2",
    "ring-offset-white",
    "ring-primary",
  );
  RedRose.classList.remove(
    "dark:ring-offset-slate-900",
    "ring-2",
    "ring-offset-2",
    "ring-offset-white",
    "ring-primary",
  );
  BlueCyan.classList.remove(
    "dark:ring-offset-slate-900",
    "ring-2",
    "ring-offset-2",
    "ring-offset-white",
    "ring-primary",
  );
  PurpleBlue.classList.remove(
    "dark:ring-offset-slate-900",
    "ring-2",
    "ring-offset-2",
    "ring-offset-white",
    "ring-primary",
  );
});

resetsettings.addEventListener("click", () => {
  html.style.cssText =
    "--color-primary: #6366f1;--color-secondary: #8b5cf6; --color-accent: #a855f7;";
  PurpleBlue.classList.add(
    "dark:ring-offset-slate-900",
    "ring-2",
    "ring-offset-2",
    "ring-offset-white",
    "ring-primary",
  );

  GreenEmerald.classList.remove(
    "dark:ring-offset-slate-900",
    "ring-2",
    "ring-offset-2",
    "ring-offset-white",
    "ring-primary",
  );
  AmberOrange.classList.remove(
    "dark:ring-offset-slate-900",
    "ring-2",
    "ring-offset-2",
    "ring-offset-white",
    "ring-primary",
  );
  RedRose.classList.remove(
    "dark:ring-offset-slate-900",
    "ring-2",
    "ring-offset-2",
    "ring-offset-white",
    "ring-primary",
  );
  BlueCyan.classList.remove(
    "dark:ring-offset-slate-900",
    "ring-2",
    "ring-offset-2",
    "ring-offset-white",
    "ring-primary",
  );
  PinkOrange.classList.remove(
    "dark:ring-offset-slate-900",
    "ring-2",
    "ring-offset-2",
    "ring-offset-white",
    "ring-primary",
  );

  body.classList.add("font-tajawal");
  body.classList.remove("font-alexandria");
  body.classList.remove("font-cairo");

  tajwalfont.classList.add("active");
  tajwalfont.classList.add("border-primary");
  tajwalfont.classList.add("bg-slate-50");
  tajwalfont.classList.add("dark:bg-slate-800");
  tajwalfont.classList.remove("dark:border-slate-700");
  tajwalfont.classList.remove("border-slate-200");

  alexfont.classList.remove("active");
  alexfont.classList.remove("border-primary");
  alexfont.classList.remove("bg-slate-50");
  alexfont.classList.remove("dark:bg-slate-800");
  alexfont.classList.add("dark:border-slate-700");
  alexfont.classList.add("border-slate-200");

  cairofont.classList.remove("active");
  cairofont.classList.remove("border-primary");
  cairofont.classList.remove("bg-slate-50");
  cairofont.classList.remove("dark:bg-slate-800");
  cairofont.classList.add("dark:border-slate-700");
  cairofont.classList.add("border-slate-200");

  sidebar.classList.add("translate-x-full");
  settingsbtn.classList.remove("right-320");
  settingsbtn.classList.add("right-0");
});

// *********** Nav & Tabs ************

allbtn.addEventListener("click", () => {
  for (let i = 0; i < webprojects.length; i++) {
    webprojects[i].style.cssText =
      "        visibility: visible;     position:static;    transform: scale(1);opacity: 1;";
  }
  for (let i = 0; i < appprojects.length; i++) {
    appprojects[i].style.cssText =
      "        visibility: visible;     position:static;    transform: scale(1);opacity: 1;";
  }
  for (let i = 0; i < designprojects.length; i++) {
    designprojects[i].style.cssText =
      "        visibility: visible;     position:static;    transform: scale(1);opacity: 1;";
  }
  ecommerceprojects.style.cssText =
    "        visibility: visible;     position:static;    transform: scale(1);opacity: 1;";

  allbtn.classList.add(
    "bg-linear-to-r",
    "active",
    "from-primary",
    "to-secondary",
    "text-white",
    "hover:shadow-lg",
    "hover:shadow-primary/50",
  );
  webbtn.classList.remove(
    "bg-linear-to-r",
    "active",
    "from-primary",
    "to-secondary",
    "text-white",
    "hover:shadow-lg",
    "hover:shadow-primary/50",
  );
  designbtn.classList.remove(
    "bg-linear-to-r",
    "active",
    "from-primary",
    "to-secondary",
    "text-white",
    "hover:shadow-lg",
    "hover:shadow-primary/50",
  );
  ecommercebtn.classList.remove(
    "bg-linear-to-r",
    "active",
    "from-primary",
    "to-secondary",
    "text-white",
    "hover:shadow-lg",
    "hover:shadow-primary/50",
  );
  appbtn.classList.remove(
    "bg-linear-to-r",
    "active",
    "from-primary",
    "to-secondary",
    "text-white",
    "hover:shadow-lg",
    "hover:shadow-primary/50",
  );
});

webbtn.addEventListener("click", () => {
  for (let i = 0; i < webprojects.length; i++) {
    webprojects[i].style.cssText =
      "          visibility: visible;     position:static;    transform: scale(1);opacity: 1;";
  }

  for (let i = 0; i < appprojects.length; i++) {
    appprojects[i].style.cssText =
      "          position:absolute;  visibility: hidden;    transform: scale(0.8);opacity: 0;";
  }
  for (let i = 0; i < designprojects.length; i++) {
    designprojects[i].style.cssText =
      "          position:absolute;  visibility: hidden;    transform: scale(0.8);opacity: 0;";
  }

  ecommerceprojects.style.cssText =
    "          position:absolute;  visibility: hidden;    transform: scale(0.8);opacity: 0;";

  allbtn.classList.add(
    "bg-white",
    "dark:bg-slate-800",
    "text-slate-600",
    "dark:text-slate-300",
    "hover:bg-slate-100",
    "dark:hover:bg-slate-700",
    "border",
    "border-slate-300",
    "dark:border-slate-700",
  );
  allbtn.classList.remove(
    "bg-linear-to-r",
    "active",
    "from-primary",
    "to-secondary",
    "text-white",
    "hover:shadow-lg",
    "hover:shadow-primary/50",
  );
  webbtn.classList.add(
    "bg-linear-to-r",
    "active",
    "from-primary",
    "to-secondary",
    "text-white",
    "hover:shadow-lg",
    "hover:shadow-primary/50",
  );
  designbtn.classList.remove(
    "bg-linear-to-r",
    "active",
    "from-primary",
    "to-secondary",
    "text-white",
    "hover:shadow-lg",
    "hover:shadow-primary/50",
  );
  ecommercebtn.classList.remove(
    "bg-linear-to-r",
    "active",
    "from-primary",
    "to-secondary",
    "text-white",
    "hover:shadow-lg",
    "hover:shadow-primary/50",
  );
  appbtn.classList.remove(
    "bg-linear-to-r",
    "active",
    "from-primary",
    "to-secondary",
    "text-white",
    "hover:shadow-lg",
    "hover:shadow-primary/50",
  );
});

appbtn.addEventListener("click", () => {
  for (let i = 0; i < appprojects.length; i++) {
    appprojects[i].style.cssText =
      "           visibility: visible;     position:static;    transform: scale(1);opacity: 1;";
  }

  for (let i = 0; i < webprojects.length; i++) {
    webprojects[i].style.cssText =
      "        position:absolute;  visibility: hidden;    transform: scale(0.8);opacity: 0;";
  }
  for (let i = 0; i < designprojects.length; i++) {
    designprojects[i].style.cssText =
      "        position:absolute;  visibility: hidden;    transform: scale(0.8);opacity: 0;";
  }

  ecommerceprojects.style.cssText =
    "        position:absolute;  visibility: hidden;    transform: scale(0.8);opacity: 0;";

  allbtn.classList.add(
    "bg-white",
    "dark:bg-slate-800",
    "text-slate-600",
    "dark:text-slate-300",
    "hover:bg-slate-100",
    "dark:hover:bg-slate-700",
    "border",
    "border-slate-300",
    "dark:border-slate-700",
  );
  allbtn.classList.remove(
    "bg-linear-to-r",
    "active",
    "from-primary",
    "to-secondary",
    "text-white",
    "hover:shadow-lg",
    "hover:shadow-primary/50",
  );
  webbtn.classList.remove(
    "bg-linear-to-r",
    "active",
    "from-primary",
    "to-secondary",
    "text-white",
    "hover:shadow-lg",
    "hover:shadow-primary/50",
  );
  designbtn.classList.remove(
    "bg-linear-to-r",
    "active",
    "from-primary",
    "to-secondary",
    "text-white",
    "hover:shadow-lg",
    "hover:shadow-primary/50",
  );
  ecommercebtn.classList.remove(
    "bg-linear-to-r",
    "active",
    "from-primary",
    "to-secondary",
    "text-white",
    "hover:shadow-lg",
    "hover:shadow-primary/50",
  );
  appbtn.classList.add(
    "bg-linear-to-r",
    "active",
    "from-primary",
    "to-secondary",
    "text-white",
    "hover:shadow-lg",
    "hover:shadow-primary/50",
  );
});

designbtn.addEventListener("click", () => {
  for (let i = 0; i < designprojects.length; i++) {
    designprojects[i].style.cssText =
      "          visibility: visible;     position:static;    transform: scale(1);opacity: 1;";
  }

  for (let i = 0; i < webprojects.length; i++) {
    webprojects[i].style.cssText =
      "          position:absolute;  visibility: hidden;    transform: scale(0.8);opacity: 0;";
  }
  for (let i = 0; i < appprojects.length; i++) {
    appprojects[i].style.cssText =
      "          position:absolute;  visibility: hidden;    transform: scale(0.8);opacity: 0;";
  }

  ecommerceprojects.style.cssText =
    "          position:absolute;  visibility: hidden;    transform: scale(0.8);opacity: 0;";

  allbtn.classList.add(
    "bg-white",
    "dark:bg-slate-800",
    "text-slate-600",
    "dark:text-slate-300",
    "hover:bg-slate-100",
    "dark:hover:bg-slate-700",
    "border",
    "border-slate-300",
    "dark:border-slate-700",
  );
  allbtn.classList.remove(
    "bg-linear-to-r",
    "active",
    "from-primary",
    "to-secondary",
    "text-white",
    "hover:shadow-lg",
    "hover:shadow-primary/50",
  );
  webbtn.classList.remove(
    "bg-linear-to-r",
    "active",
    "from-primary",
    "to-secondary",
    "text-white",
    "hover:shadow-lg",
    "hover:shadow-primary/50",
  );
  designbtn.classList.add(
    "bg-linear-to-r",
    "active",
    "from-primary",
    "to-secondary",
    "text-white",
    "hover:shadow-lg",
    "hover:shadow-primary/50",
  );
  ecommercebtn.classList.remove(
    "bg-linear-to-r",
    "active",
    "from-primary",
    "to-secondary",
    "text-white",
    "hover:shadow-lg",
    "hover:shadow-primary/50",
  );
  appbtn.classList.remove(
    "bg-linear-to-r",
    "active",
    "from-primary",
    "to-secondary",
    "text-white",
    "hover:shadow-lg",
    "hover:shadow-primary/50",
  );
});

ecommercebtn.addEventListener("click", () => {
  for (let i = 0; i < designprojects.length; i++) {
    designprojects[i].style.cssText =
      "   position:absolute;  visibility: hidden;    transform: scale(0.8);opacity: 0;       ";
  }

  for (let i = 0; i < webprojects.length; i++) {
    webprojects[i].style.cssText =
      "   position:absolute;  visibility: hidden;    transform: scale(0.8);opacity: 0;       ";
  }
  for (let i = 0; i < appprojects.length; i++) {
    appprojects[i].style.cssText =
      "   position:absolute;  visibility: hidden;    transform: scale(0.8);opacity: 0;       ";
  }

  ecommerceprojects.style.cssText =
    "           visibility: visible;     position:static;    transform: scale(1);opacity: 1";

  allbtn.classList.add(
    "bg-white",
    "dark:bg-slate-800",
    "text-slate-600",
    "dark:text-slate-300",
    "hover:bg-slate-100",
    "dark:hover:bg-slate-700",
    "border",
    "border-slate-300",
    "dark:border-slate-700",
  );
  allbtn.classList.remove(
    "bg-linear-to-r",
    "active",
    "from-primary",
    "to-secondary",
    "text-white",
    "hover:shadow-lg",
    "hover:shadow-primary/50",
  );

  webbtn.classList.remove(
    "bg-linear-to-r",
    "active",
    "from-primary",
    "to-secondary",
    "text-white",
    "hover:shadow-lg",
    "hover:shadow-primary/50",
  );
  designbtn.classList.remove(
    "bg-linear-to-r",
    "active",
    "from-primary",
    "to-secondary",
    "text-white",
    "hover:shadow-lg",
    "hover:shadow-primary/50",
  );
  ecommercebtn.classList.add(
    "bg-linear-to-r",
    "active",
    "from-primary",
    "to-secondary",
    "text-white",
    "hover:shadow-lg",
    "hover:shadow-primary/50",
  );
  appbtn.classList.remove(
    "bg-linear-to-r",
    "active",
    "from-primary",
    "to-secondary",
    "text-white",
    "hover:shadow-lg",
    "hover:shadow-primary/50",
  );
});

// ************ carousel ***********

function allqueries() {
  if (breakpoint.matches) {
    media();
  } else if (breakpoint2.matches) {
    mediatwo();
  } else if (breakpoint3.matches) {
    mediathree();
  } else {
    zerodot.addEventListener("click", () => {
      carousel.style.cssText = "transform: translateX(0%);";

      zerodot.classList.add("bg-accent", "scale-125");
      zerodot.classList.remove("bg-slate-400", "dark:bg-slate-600");

      firstdot.classList.remove("bg-accent", "scale-125");
      firstdot.classList.add("bg-slate-400", "dark:bg-slate-600");

      seconddot.classList.remove("bg-accent", "scale-125");
      seconddot.classList.add("bg-slate-400", "dark:bg-slate-600");

      thirddot.classList.remove("bg-accent", "scale-125");
      thirddot.classList.add("bg-slate-400", "dark:bg-slate-600");
    });
    firstdot.addEventListener("click", () => {
      carousel.style.cssText = "transform: translateX(33.33%);";

      firstdot.classList.add("bg-accent", "scale-125");
      firstdot.classList.remove("bg-slate-400", "dark:bg-slate-600");

      zerodot.classList.remove("bg-accent", "scale-125");
      zerodot.classList.add("bg-slate-400", "dark:bg-slate-600");

      seconddot.classList.remove("bg-accent", "scale-125");
      seconddot.classList.add("bg-slate-400", "dark:bg-slate-600");

      thirddot.classList.remove("bg-accent", "scale-125");
      thirddot.classList.add("bg-slate-400", "dark:bg-slate-600");
    });
    seconddot.addEventListener("click", () => {
      carousel.style.cssText = "transform: translateX(66.66%);";

      seconddot.classList.add("bg-accent", "scale-125");
      seconddot.classList.remove("bg-slate-400", "dark:bg-slate-600");

      firstdot.classList.remove("bg-accent", "scale-125");
      firstdot.classList.add("bg-slate-400", "dark:bg-slate-600");

      zerodot.classList.remove("bg-accent", "scale-125");
      zerodot.classList.add("bg-slate-400", "dark:bg-slate-600");

      thirddot.classList.remove("bg-accent", "scale-125");
      thirddot.classList.add("bg-slate-400", "dark:bg-slate-600");
    });
    thirddot.addEventListener("click", () => {
      carousel.style.cssText = "transform: translateX(100%);";

      thirddot.classList.add("bg-accent", "scale-125");
      thirddot.classList.remove("bg-slate-400", "dark:bg-slate-600");

      firstdot.classList.remove("bg-accent", "scale-125");
      firstdot.classList.add("bg-slate-400", "dark:bg-slate-600");

      seconddot.classList.remove("bg-accent", "scale-125");
      seconddot.classList.add("bg-slate-400", "dark:bg-slate-600");

      zerodot.classList.remove("bg-accent", "scale-125");
      zerodot.classList.add("bg-slate-400", "dark:bg-slate-600");
    });

    next.addEventListener("click", () => {
      if (carousel.style.cssText === "transform: translateX(0%);") {
        carousel.style.cssText = "transform: translateX(33.33%);";
        firstdot.classList.add("bg-accent", "scale-125");
        firstdot.classList.remove("bg-slate-400", "dark:bg-slate-600");

        zerodot.classList.remove("bg-accent", "scale-125");
        zerodot.classList.add("bg-slate-400", "dark:bg-slate-600");

        seconddot.classList.remove("bg-accent", "scale-125");
        seconddot.classList.add("bg-slate-400", "dark:bg-slate-600");

        thirddot.classList.remove("bg-accent", "scale-125");
        thirddot.classList.add("bg-slate-400", "dark:bg-slate-600");
      } else if (carousel.style.cssText === "transform: translateX(33.33%);") {
        carousel.style.cssText = "transform: translateX(66.66%);";
        seconddot.classList.add("bg-accent", "scale-125");
        seconddot.classList.remove("bg-slate-400", "dark:bg-slate-600");

        firstdot.classList.remove("bg-accent", "scale-125");
        firstdot.classList.add("bg-slate-400", "dark:bg-slate-600");

        zerodot.classList.remove("bg-accent", "scale-125");
        zerodot.classList.add("bg-slate-400", "dark:bg-slate-600");

        thirddot.classList.remove("bg-accent", "scale-125");
        thirddot.classList.add("bg-slate-400", "dark:bg-slate-600");
      } else if (carousel.style.cssText === "transform: translateX(66.66%);") {
        carousel.style.cssText = "transform: translateX(100%);";
        thirddot.classList.add("bg-accent", "scale-125");
        thirddot.classList.remove("bg-slate-400", "dark:bg-slate-600");

        firstdot.classList.remove("bg-accent", "scale-125");
        firstdot.classList.add("bg-slate-400", "dark:bg-slate-600");

        seconddot.classList.remove("bg-accent", "scale-125");
        seconddot.classList.add("bg-slate-400", "dark:bg-slate-600");

        zerodot.classList.remove("bg-accent", "scale-125");
        zerodot.classList.add("bg-slate-400", "dark:bg-slate-600");
      } else if (carousel.style.cssText === "transform: translateX(100%);") {
        carousel.style.cssText = "transform: translateX(0%);";
        zerodot.classList.add("bg-accent", "scale-125");
        zerodot.classList.remove("bg-slate-400", "dark:bg-slate-600");

        firstdot.classList.remove("bg-accent", "scale-125");
        firstdot.classList.add("bg-slate-400", "dark:bg-slate-600");

        seconddot.classList.remove("bg-accent", "scale-125");
        seconddot.classList.add("bg-slate-400", "dark:bg-slate-600");

        thirddot.classList.remove("bg-accent", "scale-125");
        thirddot.classList.add("bg-slate-400", "dark:bg-slate-600");
      }
    });

    previous.addEventListener("click", () => {
      if (carousel.style.cssText === "transform: translateX(0%);") {
        carousel.style.cssText = "transform: translateX(100%);";
        thirddot.classList.add("bg-accent", "scale-125");
        thirddot.classList.remove("bg-slate-400", "dark:bg-slate-600");

        firstdot.classList.remove("bg-accent", "scale-125");
        firstdot.classList.add("bg-slate-400", "dark:bg-slate-600");

        seconddot.classList.remove("bg-accent", "scale-125");
        seconddot.classList.add("bg-slate-400", "dark:bg-slate-600");

        zerodot.classList.remove("bg-accent", "scale-125");
        zerodot.classList.add("bg-slate-400", "dark:bg-slate-600");
      } else if (carousel.style.cssText === "transform: translateX(100%);") {
        carousel.style.cssText = "transform: translateX(66.66%);";
        seconddot.classList.add("bg-accent", "scale-125");
        seconddot.classList.remove("bg-slate-400", "dark:bg-slate-600");

        firstdot.classList.remove("bg-accent", "scale-125");
        firstdot.classList.add("bg-slate-400", "dark:bg-slate-600");

        zerodot.classList.remove("bg-accent", "scale-125");
        zerodot.classList.add("bg-slate-400", "dark:bg-slate-600");

        thirddot.classList.remove("bg-accent", "scale-125");
        thirddot.classList.add("bg-slate-400", "dark:bg-slate-600");
      } else if (carousel.style.cssText === "transform: translateX(66.66%);") {
        carousel.style.cssText = "transform: translateX(33.33%);";
        firstdot.classList.add("bg-accent", "scale-125");
        firstdot.classList.remove("bg-slate-400", "dark:bg-slate-600");

        zerodot.classList.remove("bg-accent", "scale-125");
        zerodot.classList.add("bg-slate-400", "dark:bg-slate-600");

        seconddot.classList.remove("bg-accent", "scale-125");
        seconddot.classList.add("bg-slate-400", "dark:bg-slate-600");

        thirddot.classList.remove("bg-accent", "scale-125");
        thirddot.classList.add("bg-slate-400", "dark:bg-slate-600");
      } else if (carousel.style.cssText === "transform: translateX(33.33%);") {
        carousel.style.cssText = "transform: translateX(0%);";
        zerodot.classList.add("bg-accent", "scale-125");
        zerodot.classList.remove("bg-slate-400", "dark:bg-slate-600");

        firstdot.classList.remove("bg-accent", "scale-125");
        firstdot.classList.add("bg-slate-400", "dark:bg-slate-600");

        seconddot.classList.remove("bg-accent", "scale-125");
        seconddot.classList.add("bg-slate-400", "dark:bg-slate-600");

        thirddot.classList.remove("bg-accent", "scale-125");
        thirddot.classList.add("bg-slate-400", "dark:bg-slate-600");
      }
    });
  }
}
allqueries();

function mediathree() {
  zerodot.addEventListener("click", () => {
    carousel.style.cssText = "transform: translateX(0%);";

    zerodot.classList.add("bg-accent", "scale-125");
    zerodot.classList.remove("bg-slate-400", "dark:bg-slate-600");

    firstdot.classList.remove("bg-accent", "scale-125");
    firstdot.classList.add("bg-slate-400", "dark:bg-slate-600");

    seconddot.classList.remove("bg-accent", "scale-125");
    seconddot.classList.add("bg-slate-400", "dark:bg-slate-600");

    thirddot.classList.remove("bg-accent", "scale-125");
    thirddot.classList.add("bg-slate-400", "dark:bg-slate-600");
  });
  firstdot.addEventListener("click", () => {
    carousel.style.cssText = "transform: translateX(50%);";

    firstdot.classList.add("bg-accent", "scale-125");
    firstdot.classList.remove("bg-slate-400", "dark:bg-slate-600");

    zerodot.classList.remove("bg-accent", "scale-125");
    zerodot.classList.add("bg-slate-400", "dark:bg-slate-600");

    seconddot.classList.remove("bg-accent", "scale-125");
    seconddot.classList.add("bg-slate-400", "dark:bg-slate-600");

    thirddot.classList.remove("bg-accent", "scale-125");
    thirddot.classList.add("bg-slate-400", "dark:bg-slate-600");
  });
  seconddot.addEventListener("click", () => {
    carousel.style.cssText = "transform: translateX(100%);";

    seconddot.classList.add("bg-accent", "scale-125");
    seconddot.classList.remove("bg-slate-400", "dark:bg-slate-600");

    firstdot.classList.remove("bg-accent", "scale-125");
    firstdot.classList.add("bg-slate-400", "dark:bg-slate-600");

    zerodot.classList.remove("bg-accent", "scale-125");
    zerodot.classList.add("bg-slate-400", "dark:bg-slate-600");

    thirddot.classList.remove("bg-accent", "scale-125");
    thirddot.classList.add("bg-slate-400", "dark:bg-slate-600");
  });
  thirddot.addEventListener("click", () => {
    carousel.style.cssText = "transform: translateX(150%);";

    thirddot.classList.add("bg-accent", "scale-125");
    thirddot.classList.remove("bg-slate-400", "dark:bg-slate-600");

    firstdot.classList.remove("bg-accent", "scale-125");
    firstdot.classList.add("bg-slate-400", "dark:bg-slate-600");

    seconddot.classList.remove("bg-accent", "scale-125");
    seconddot.classList.add("bg-slate-400", "dark:bg-slate-600");

    zerodot.classList.remove("bg-accent", "scale-125");
    zerodot.classList.add("bg-slate-400", "dark:bg-slate-600");
  });

  next.addEventListener("click", () => {
    if (carousel.style.cssText === "transform: translateX(0%);") {
      carousel.style.cssText = "transform: translateX(50%);";
      firstdot.classList.add("bg-accent", "scale-125");
      firstdot.classList.remove("bg-slate-400", "dark:bg-slate-600");

      zerodot.classList.remove("bg-accent", "scale-125");
      zerodot.classList.add("bg-slate-400", "dark:bg-slate-600");

      seconddot.classList.remove("bg-accent", "scale-125");
      seconddot.classList.add("bg-slate-400", "dark:bg-slate-600");

      thirddot.classList.remove("bg-accent", "scale-125");
      thirddot.classList.add("bg-slate-400", "dark:bg-slate-600");
    } else if (carousel.style.cssText === "transform: translateX(50%);") {
      carousel.style.cssText = "transform: translateX(100%);";
      seconddot.classList.add("bg-accent", "scale-125");
      seconddot.classList.remove("bg-slate-400", "dark:bg-slate-600");

      firstdot.classList.remove("bg-accent", "scale-125");
      firstdot.classList.add("bg-slate-400", "dark:bg-slate-600");

      zerodot.classList.remove("bg-accent", "scale-125");
      zerodot.classList.add("bg-slate-400", "dark:bg-slate-600");

      thirddot.classList.remove("bg-accent", "scale-125");
      thirddot.classList.add("bg-slate-400", "dark:bg-slate-600");
    } else if (carousel.style.cssText === "transform: translateX(100%);") {
      carousel.style.cssText = "transform: translateX(150%);";
      thirddot.classList.add("bg-accent", "scale-125");
      thirddot.classList.remove("bg-slate-400", "dark:bg-slate-600");

      firstdot.classList.remove("bg-accent", "scale-125");
      firstdot.classList.add("bg-slate-400", "dark:bg-slate-600");

      seconddot.classList.remove("bg-accent", "scale-125");
      seconddot.classList.add("bg-slate-400", "dark:bg-slate-600");

      zerodot.classList.remove("bg-accent", "scale-125");
      zerodot.classList.add("bg-slate-400", "dark:bg-slate-600");
    } else if (carousel.style.cssText === "transform: translateX(150%);") {
      carousel.style.cssText = "transform: translateX(0%);";
      zerodot.classList.add("bg-accent", "scale-125");
      zerodot.classList.remove("bg-slate-400", "dark:bg-slate-600");

      firstdot.classList.remove("bg-accent", "scale-125");
      firstdot.classList.add("bg-slate-400", "dark:bg-slate-600");

      seconddot.classList.remove("bg-accent", "scale-125");
      seconddot.classList.add("bg-slate-400", "dark:bg-slate-600");

      thirddot.classList.remove("bg-accent", "scale-125");
      thirddot.classList.add("bg-slate-400", "dark:bg-slate-600");
    }
  });

  previous.addEventListener("click", () => {
    if (carousel.style.cssText === "transform: translateX(0%);") {
      carousel.style.cssText = "transform: translateX(150%);";
      thirddot.classList.add("bg-accent", "scale-125");
      thirddot.classList.remove("bg-slate-400", "dark:bg-slate-600");

      firstdot.classList.remove("bg-accent", "scale-125");
      firstdot.classList.add("bg-slate-400", "dark:bg-slate-600");

      seconddot.classList.remove("bg-accent", "scale-125");
      seconddot.classList.add("bg-slate-400", "dark:bg-slate-600");

      zerodot.classList.remove("bg-accent", "scale-125");
      zerodot.classList.add("bg-slate-400", "dark:bg-slate-600");
    } else if (carousel.style.cssText === "transform: translateX(150%);") {
      carousel.style.cssText = "transform: translateX(100%);";
      seconddot.classList.add("bg-accent", "scale-125");
      seconddot.classList.remove("bg-slate-400", "dark:bg-slate-600");

      firstdot.classList.remove("bg-accent", "scale-125");
      firstdot.classList.add("bg-slate-400", "dark:bg-slate-600");

      zerodot.classList.remove("bg-accent", "scale-125");
      zerodot.classList.add("bg-slate-400", "dark:bg-slate-600");

      thirddot.classList.remove("bg-accent", "scale-125");
      thirddot.classList.add("bg-slate-400", "dark:bg-slate-600");
    } else if (carousel.style.cssText === "transform: translateX(100%);") {
      carousel.style.cssText = "transform: translateX(50%);";
      firstdot.classList.add("bg-accent", "scale-125");
      firstdot.classList.remove("bg-slate-400", "dark:bg-slate-600");

      zerodot.classList.remove("bg-accent", "scale-125");
      zerodot.classList.add("bg-slate-400", "dark:bg-slate-600");

      seconddot.classList.remove("bg-accent", "scale-125");
      seconddot.classList.add("bg-slate-400", "dark:bg-slate-600");

      thirddot.classList.remove("bg-accent", "scale-125");
      thirddot.classList.add("bg-slate-400", "dark:bg-slate-600");
    } else if (carousel.style.cssText === "transform: translateX(50%);") {
      carousel.style.cssText = "transform: translateX(0%);";
      zerodot.classList.add("bg-accent", "scale-125");
      zerodot.classList.remove("bg-slate-400", "dark:bg-slate-600");

      firstdot.classList.remove("bg-accent", "scale-125");
      firstdot.classList.add("bg-slate-400", "dark:bg-slate-600");

      seconddot.classList.remove("bg-accent", "scale-125");
      seconddot.classList.add("bg-slate-400", "dark:bg-slate-600");

      thirddot.classList.remove("bg-accent", "scale-125");
      thirddot.classList.add("bg-slate-400", "dark:bg-slate-600");
    }
  });
}

function media() {
  zerodot.addEventListener("click", () => {
    carousel.style.cssText = "transform: translateX(0%);";

    zerodot.classList.add("bg-accent", "scale-125");
    zerodot.classList.remove("bg-slate-400", "dark:bg-slate-600");

    firstdot.classList.remove("bg-accent", "scale-125");
    firstdot.classList.add("bg-slate-400", "dark:bg-slate-600");

    seconddot.classList.remove("bg-accent", "scale-125");
    seconddot.classList.add("bg-slate-400", "dark:bg-slate-600");

    thirddot.classList.remove("bg-accent", "scale-125");
    thirddot.classList.add("bg-slate-400", "dark:bg-slate-600");
  });
  firstdot.addEventListener("click", () => {
    carousel.style.cssText = "transform: translateX(100%);";

    firstdot.classList.add("bg-accent", "scale-125");
    firstdot.classList.remove("bg-slate-400", "dark:bg-slate-600");

    zerodot.classList.remove("bg-accent", "scale-125");
    zerodot.classList.add("bg-slate-400", "dark:bg-slate-600");

    seconddot.classList.remove("bg-accent", "scale-125");
    seconddot.classList.add("bg-slate-400", "dark:bg-slate-600");

    thirddot.classList.remove("bg-accent", "scale-125");
    thirddot.classList.add("bg-slate-400", "dark:bg-slate-600");
  });
  seconddot.addEventListener("click", () => {
    carousel.style.cssText = "transform: translateX(200%);";

    seconddot.classList.add("bg-accent", "scale-125");
    seconddot.classList.remove("bg-slate-400", "dark:bg-slate-600");

    firstdot.classList.remove("bg-accent", "scale-125");
    firstdot.classList.add("bg-slate-400", "dark:bg-slate-600");

    zerodot.classList.remove("bg-accent", "scale-125");
    zerodot.classList.add("bg-slate-400", "dark:bg-slate-600");

    thirddot.classList.remove("bg-accent", "scale-125");
    thirddot.classList.add("bg-slate-400", "dark:bg-slate-600");
  });
  thirddot.addEventListener("click", () => {
    carousel.style.cssText = "transform: translateX(300%);";

    thirddot.classList.add("bg-accent", "scale-125");
    thirddot.classList.remove("bg-slate-400", "dark:bg-slate-600");

    firstdot.classList.remove("bg-accent", "scale-125");
    firstdot.classList.add("bg-slate-400", "dark:bg-slate-600");

    seconddot.classList.remove("bg-accent", "scale-125");
    seconddot.classList.add("bg-slate-400", "dark:bg-slate-600");

    zerodot.classList.remove("bg-accent", "scale-125");
    zerodot.classList.add("bg-slate-400", "dark:bg-slate-600");
  });
}

function mediatwo() {
  zerodot.addEventListener("click", () => {
    carousel.style.cssText = "transform: translateX(0%);";

    zerodot.classList.add("bg-accent", "scale-125");
    zerodot.classList.remove("bg-slate-400", "dark:bg-slate-600");

    firstdot.classList.remove("bg-accent", "scale-125");
    firstdot.classList.add("bg-slate-400", "dark:bg-slate-600");

    seconddot.classList.remove("bg-accent", "scale-125");
    seconddot.classList.add("bg-slate-400", "dark:bg-slate-600");

    thirddot.classList.remove("bg-accent", "scale-125");
    thirddot.classList.add("bg-slate-400", "dark:bg-slate-600");
  });
  firstdot.addEventListener("click", () => {
    carousel.style.cssText = "transform: translateX(50%);";

    firstdot.classList.add("bg-accent", "scale-125");
    firstdot.classList.remove("bg-slate-400", "dark:bg-slate-600");

    zerodot.classList.remove("bg-accent", "scale-125");
    zerodot.classList.add("bg-slate-400", "dark:bg-slate-600");

    seconddot.classList.remove("bg-accent", "scale-125");
    seconddot.classList.add("bg-slate-400", "dark:bg-slate-600");

    thirddot.classList.remove("bg-accent", "scale-125");
    thirddot.classList.add("bg-slate-400", "dark:bg-slate-600");
  });
  seconddot.addEventListener("click", () => {
    carousel.style.cssText = "transform: translateX(100%);";

    seconddot.classList.add("bg-accent", "scale-125");
    seconddot.classList.remove("bg-slate-400", "dark:bg-slate-600");

    firstdot.classList.remove("bg-accent", "scale-125");
    firstdot.classList.add("bg-slate-400", "dark:bg-slate-600");

    zerodot.classList.remove("bg-accent", "scale-125");
    zerodot.classList.add("bg-slate-400", "dark:bg-slate-600");

    thirddot.classList.remove("bg-accent", "scale-125");
    thirddot.classList.add("bg-slate-400", "dark:bg-slate-600");
  });
  thirddot.addEventListener("click", () => {
    carousel.style.cssText = "transform: translateX(150%);";

    thirddot.classList.add("bg-accent", "scale-125");
    thirddot.classList.remove("bg-slate-400", "dark:bg-slate-600");

    firstdot.classList.remove("bg-accent", "scale-125");
    firstdot.classList.add("bg-slate-400", "dark:bg-slate-600");

    seconddot.classList.remove("bg-accent", "scale-125");
    seconddot.classList.add("bg-slate-400", "dark:bg-slate-600");

    zerodot.classList.remove("bg-accent", "scale-125");
    zerodot.classList.add("bg-slate-400", "dark:bg-slate-600");
  });
}

// ************* mobile menu******

mobilebtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});
home.addEventListener("click", () => {
  menu.classList.remove("active");
});
portfolio.addEventListener("click", () => {
  menu.classList.remove("active");
});
testimonials.addEventListener("click", () => {
  menu.classList.remove("active");
});
contact.addEventListener("click", () => {
  menu.classList.remove("active");
});
experience.addEventListener("click", () => {
  menu.classList.remove("active");
});
about.addEventListener("click", () => {
  menu.classList.remove("active");
});
