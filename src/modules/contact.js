const renderContactPage = () => {
  const content = document.getElementById("content");

  content.innerHTML = "";
  content.classList = "";
  content.classList.add("contact");

  const title = document.createElement("h1");
  title.innerText = "Contact Us";
  title.classList.add("title");
  title.style.margin = "10vh 0 0.25em 0";

  const events = document.createElement("p");
  events.innerText =
    "Polsambolaya welcomes events, parties and celebration. We are happy to discuss booking the whole facility or part of it for your event. Just give us a call to discuss rates, menus, and any special requirements you have.";
  events.classList.add("contact-info");

  const contactNumber = document.createElement("p");
  contactNumber.textContent = "📞 +94-123-456-7890";
  contactNumber.classList.add("contact-info");
  contactNumber.style.marginTop = "3em";

  const email = document.createElement("p");
  email.textContent = "📧 polsambolaya@gmail.com";
  email.classList.add("contact-info");

  content.appendChild(title);
  content.appendChild(events);
  content.appendChild(contactNumber);
  content.appendChild(email);
};

export default renderContactPage;
