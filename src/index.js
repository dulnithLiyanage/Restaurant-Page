import renderNavbar from "./modules/navbar.js";
import renderHomePage from "./modules/home.js";
import renderMenuPage from "./modules/menu.js";
import renderContactPage from "./modules/contact.js";

renderNavbar();
renderHomePage();

const links = document.querySelectorAll("button");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    const target = e.target.innerText.toLowerCase();

    target === "home"
      ? renderHomePage()
      : target === "menu"
      ? renderMenuPage()
      : target === "contact"
      ? renderContactPage()
      : null;
  });
});
