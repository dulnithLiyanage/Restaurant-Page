const renderHomePage = () => {
  const content = document.getElementById("content");

  content.innerHTML = "";

  const title = document.createElement("h1");
  title.innerText = "Home";

  content.appendChild(title);
};

export default renderHomePage;
