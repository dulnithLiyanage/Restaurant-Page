import MainCourse from "../images/main-course.jpg";
import Drinks from "../images/drinks.jpg";
import Desserts from "../images/desserts.jpg";
import styles from "../styles.css";

const foods = {
  crabCurry: {
    title: "Crab Curry",
    type: "Main Course",
    price: "Rs. 1250",
    description:
      "In high demand both locally and internationally, sea food lovers must be sure not to miss out on them",
  },

  lamprais: {
    title: "Sri Lankan Lumprais",
    type: "Main Course",
    price: "Rs. 900",
    description:
      "Meat, rice, and sambal chili sauce are wrapped in a banana leaf packet to steam",
  },

  kottu: {
    title: "Kottu",
    type: "Main Course",
    price: "Rs. 1000",
    description:
      "Kottu is Sri Lanka's hamburger -- everybody's favorite go-to fast food when craving something tasty and greasy",
  },

  woodApple: {
    title: "Wood Apple Juice",
    type: "Drinks",
    price: "Rs. 750",
    description:
      " A favourite with the locals is the wood apple smoothie, a blend with jaggery and water.",
  },

  faluda: {
    title: "Faluda",
    type: "Drinks",
    price: "Rs. 500",
    description:
      "Faluda is a sweet drink made from rose sherbet syrup, milk, basil seeds, vermicelli noodles and red jelly",
  },

  gingerTea: {
    title: "Ginger and Coriander Tea",
    type: "Drinks",
    price: "Rs. 300",
    description:
      "The tea is believed to have many medicinal benefits and is used as a remedy for colds, sore throats and muscle pain",
  },

  watalappan: {
    title: "Watalappan",
    type: "Desserts",
    price: "Rs. 500",
    description: "The exotic cousin of the classic cream caramel pudding",
  },

  curd: {
    title: "Curd and Kithul Treacle",
    type: "Desserts",
    price: "Rs. 750",
    description:
      "Sour Sri Lankan curd served with local plant based sweet syrup",
  },

  lavariya: {
    title: "Lavariya",
    type: "Desserts",
    price: "Rs. 400",
    description: " Rolled up string hoppers filled with sweet pani pol ",
  },
};

const renderMenuPage = () => {
  const content = document.getElementById("content");

  content.innerHTML = "";
  content.classList = "";

  content.classList.add("menu");

  const menuContainer = document.createElement("div");

  const foodCategories = ["Main Course", "Drinks", "Desserts"];

  foodCategories.forEach((category, indexOfCategory) => {
    // Banner
    const banner = document.createElement("div");

    // Background of Banner
    const defaultImageSettings =
      "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))";
    indexOfCategory === 0
      ? (banner.style.background = `${defaultImageSettings},url(${MainCourse})center/cover no-repeat`)
      : indexOfCategory === 1
      ? (banner.style.background = `${defaultImageSettings},url(${Drinks})center/cover no-repeat`)
      : indexOfCategory === 2
      ? (banner.style.background = `${defaultImageSettings},url(${Desserts})center/cover no-repeat`)
      : null;

    banner.classList.add("banner");

    // Banner Title
    const menuTitle = document.createElement("h1");
    menuTitle.classList.add("title");
    menuTitle.textContent = category;
    banner.appendChild(menuTitle);

    menuContainer.appendChild(banner);
    // Food items

    addFoodItems(menuContainer, category);
  });

  menuContainer.classList.add("menu-container");
  content.appendChild(menuContainer);
};

function addFoodItems(menuContainer, category) {
  const foodItemsContainer = document.createElement("div");

  for (const food in foods) {
    const foodItems = document.createElement("div");

    const foodTitle = document.createElement("h2");
    const foodPrice = document.createElement("h3");
    const foodDescription = document.createElement("p");

    foodItems.appendChild(foodTitle);
    foodItems.appendChild(foodPrice);
    foodItems.appendChild(foodDescription);

    foodItems.classList.add("card");
    foodTitle.classList.add("card-title");
    foodPrice.classList.add("card-price");
    foodDescription.classList.add("card-description");

    foods[food].type === category
      ? (foodTitle.innerHTML = foods[food].title) &&
        (foodPrice.innerHTML = foods[food].price) &&
        (foodDescription.innerHTML = foods[food].description) &&
        foodItemsContainer.appendChild(foodItems)
      : null;
  }

  foodItemsContainer.classList.add("card-container");
  menuContainer.appendChild(foodItemsContainer);
}

export default renderMenuPage;
