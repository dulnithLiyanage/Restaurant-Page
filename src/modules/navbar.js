const renderNavbar = () => {
  const navbar = document.createElement("nav");

  const links = ["Home", "Menu", "Contact"];

  links.forEach((link) => {
    const button = document.createElement("button");
    button.textContent = link;
    navbar.appendChild(button);
  });

  document.body.appendChild(navbar);
};

export default renderNavbar;
