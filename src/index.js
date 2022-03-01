import renderNavbar from "./navbar.js";
import renderHomePage from "./home.js";
import renderMenuPage from "./menu.js";
import renderContactPage from "./contact.js";

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
