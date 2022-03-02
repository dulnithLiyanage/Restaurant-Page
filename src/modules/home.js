import styles from "../styles.css";
import background from "../images/background.jpg";

const renderHomePage = () => {
  const restaurnatName = "Polsambolaya";

  const content = document.getElementById("content");

  content.innerHTML = "";

  const title = document.createElement("h1");
  const caption = document.createElement("p");

  title.innerText = restaurnatName;
  caption.innerText = "A modern restaurant for the traditional lover";

  title.classList.add("title");
  caption.classList.add("caption");

  content.appendChild(title);
  content.appendChild(caption);
};

export default renderHomePage;
