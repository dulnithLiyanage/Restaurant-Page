import styles from "../styles.css";

const renderHomePage = () => {
  const content = document.getElementById("content");

  content.innerHTML = "";

  const title = document.createElement("h1");
  title.innerText = "Home";

  title.classList.add("title");

  content.appendChild(title);
};

export default renderHomePage;
