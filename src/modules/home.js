import styles from "../styles.css";

const renderHomePage = () => {
  const restaurnatName = "Polsambolaya";
  const content = document.getElementById("content");

  content.innerHTML = "";
  content.classList = "";

  const title = document.createElement("h1");
  const caption = document.createElement("p");

  title.innerText = restaurnatName;
  caption.innerText = "A modern restaurant for the traditional lover";

  title.classList.add("title");
  caption.classList.add("caption");

  content.appendChild(title);
  content.appendChild(caption);
  content.classList.add("home");
};

export default renderHomePage;
