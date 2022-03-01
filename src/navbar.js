const renderNavbar = () => {
  const title = "My Restaurant";

  const header = document.createElement("header");
  const navbar = document.createElement("nav");
  const h1 = document.createElement("h1");

  h1.textContent = title;

  header.appendChild(h1);

  const links = ["Home", "Menu", "Contact"];

  links.forEach((link) => {
    const button = document.createElement("button");
    button.textContent = link;
    navbar.appendChild(button);
  });

  header.appendChild(navbar);
  document.body.appendChild(header);
};

export default renderNavbar;
