const renderMenuPage = () => {
  const content = document.getElementById("content");

  content.innerHTML = "";

  const title = document.createElement("h1");
  title.innerText = "Menu";

  content.appendChild(title);
};

export default renderMenuPage;
