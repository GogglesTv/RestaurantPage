console.log("Contact here!");
import "./style2.css";

const contactContainer = document.createElement("section");
contactContainer.classList.add("contact-container");

function contactForm() {
  const contactHeader = document.createElement("h1");
  contactHeader.classList.add("contact-header");
  contactHeader.innerHTML = "Contact Us";
  const span = document.createElement("span");
  span.classList.add("underline");
  contactHeader.append(span);

  const infoContainer = document.createElement("section");
  infoContainer.classList.add("form-container");

  const addressContainer = document.createElement("section");
  addressContainer.classList.add("address-container");
  addressContainer.style.marginBottom = "20px";
  const locationLogo = document.createElement("div");
  locationLogo.classList.add("location-logo");
  locationLogo.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
</svg>`;
  const addressInfo = document.createElement("div");
  addressInfo.classList.add("address-info");
  addressInfo.style.fontSize = "18px";
  const street = document.createElement("p");
  street.innerHTML = "2800 Riverview Rd";
  const cityStateZip = document.createElement("p");
  cityStateZip.innerHTML = "Birmingham, AL 35242";
  addressContainer.append(locationLogo, addressInfo);
  addressInfo.append(street, cityStateZip);

  const timeContainer = document.createElement("section");
  timeContainer.classList.add("time-container");
  timeContainer.style.marginBottom = "20px";
  const timeLogo = document.createElement("div");
  timeLogo.classList.add("time-logo");
  timeLogo.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-clock-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
  </svg>`;
  const timeInfo = document.createElement("div");
  timeInfo.classList.add("time-info");
  timeInfo.style.fontSize = "18px";
  const time1 = document.createElement("p");
  time1.innerHTML = "Mon-Thurs: 8am - 8pm";
  const time2 = document.createElement("p");
  time2.innerHTML = "Fri-Sun: 8am - 11pm";
  timeContainer.append(timeLogo, timeInfo);
  timeInfo.append(time1, time2);

  const phoneContainer = document.createElement("section");
  phoneContainer.classList.add("phone-container");
  phoneContainer.style.marginBottom = "20px";
  const phoneLogo = document.createElement("div");
  phoneLogo.classList.add("time-logo");
  phoneLogo.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg>`;
  const phoneNumber = document.createElement("p");
  phoneNumber.innerHTML = "222.333.999";
  phoneNumber.style.fontSize = "18px";
  phoneContainer.append(phoneLogo, phoneNumber);

  const mailContainer = document.createElement("section");
  mailContainer.classList.add("mail-container");
  const mailLogo = document.createElement("div");
  mailLogo.classList.add("mail-logo");
  mailLogo.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
</svg>`;
  const message = document.createElement("p");
  message.innerHTML = "Message Us";
  message.style.fontSize = "22px";
  mailContainer.append(mailLogo, message);

  const form = document.createElement("form");

  function setMultipleAttributes(elmnt, attributesToSet) {
    for (let i in attributesToSet) {
      elmnt.setAttribute(i, attributesToSet[i]);
    }
  }

  const nameContainer = document.createElement("div");
  nameContainer.classList.add("floating-label-group");

  const nameLabel = document.createElement("label");
  nameLabel.setAttribute("for", "fullName");
  nameLabel.classList.add("floating-label");
  nameLabel.innerHTML = "Full Name";

  const nameInput = document.createElement("input");
  setMultipleAttributes(nameInput, {
    type: "text",
    id: "fullName",
    name: "fullName",
    required: "",
  });
  nameContainer.append(nameInput, nameLabel);

  const emailContainer = document.createElement("div");
  emailContainer.classList.add("floating-label-group");

  const emailLabel = document.createElement("label");
  emailLabel.setAttribute("for", "email");
  emailLabel.classList.add("floating-label");
  emailLabel.innerHTML = "Email";

  const emailInput = document.createElement("input");
  setMultipleAttributes(emailInput, {
    type: "email",
    id: "email",
    name: "email",
    required: "",
  });
  emailContainer.append(emailInput, emailLabel);

  const messageContainer = document.createElement("div");
  messageContainer.classList.add("floating-label-group");

  const messageLabel = document.createElement("label");
  messageLabel.setAttribute("for", "message");
  messageLabel.classList.add("floating-label");
  messageLabel.innerHTML = "Type your message...";

  const messageInput = document.createElement("input");
  setMultipleAttributes(messageInput, {
    type: "text",
    id: "message",
    for: "message",
    required: "",
  });
  messageContainer.append(messageInput, messageLabel);

  const submitButton = document.createElement("input");
  setMultipleAttributes(submitButton, { type: "submit", value: "Send" });

  form.append(nameContainer, emailContainer, messageContainer, submitButton);

  const mapContainer = document.createElement("section");
  mapContainer.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.994463533024!2d-86.73243128802757!3d33.44945077327896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8889177a0699ece7%3A0x6337ea9fc23726da!2sThe%20Summit%20Birmingham!5e0!3m2!1sen!2sus!4v1686699028416!5m2!1sen!2sus" width="700" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
  mapContainer.classList.add("map");

  infoContainer.append(
    addressContainer,
    timeContainer,
    phoneContainer,
    mailContainer,
    form,
    mapContainer
  );

  contactContainer.append(contactHeader, infoContainer);
}

export { contactContainer, contactForm };
