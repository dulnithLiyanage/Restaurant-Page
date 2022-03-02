const renderContactPage = () => {
  const content = document.getElementById("content");

  content.innerHTML = "";

  const title = document.createElement("h1");
  title.innerText = "Contact";

  content.appendChild(title);
};

export default renderContactPage;
