import styles from "../styles.css";

const renderNavbar = () => {
  const navbar = document.createElement("nav");
  navbar.classList.add("navbar");

  const links = ["Home", "Menu", "Contact"];

  links.forEach((link) => {
    const button = document.createElement("button");
    button.textContent = link;
    button.classList.add("button");
    navbar.appendChild(button);
  });

  document.body.appendChild(navbar);
};

export default renderNavbar;
