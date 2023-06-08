const contactsContainer = document.createElement("section");
contactsContainer.classList.add(
  "d-flex",
  "flex-wrap",
  "justify-content-center"
);
const contactHeader = document.createElement("h1");
contactHeader.innerHTML = "Locations and Contact Information";
contactHeader.classList.add("mb-5", "pt-5", "text-center");
contactHeader.style.width = "100%";
contactsContainer.append(contactHeader);

function contactCardCreator() {
  const cityStates = [
    ["BIRMINGHAM", "AL"],
    ["TRUSSVILLE", "AL"],
    ["HOOVER", "AL"],
    ["OXFORD", "AL"],
    ["GADSDEN", "AL"],
    ["ALABASTER", "AL"],
    ["HUNTSVILLE", "AL"],
    ["ATLANTA", "GA"],
    ["CHATTANOOGA", "TN"],
  ];
  for (let i = 0; i <= cityStates.length - 1; i++) {
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card", "p-0", "me-5", "my-4", "border-0");
    cardContainer.style.height = "20rem";
    cardContainer.style.width = "20rem";
    const cardBody = document.createElement("div");
    cardBody.classList.add(
      "card-body",
      "text-center",
      "fs-3",
      "d-flex",
      "flex-column",
      "justify-content-center"
    );

    const cardTitle = document.createElement("h1");
    cardTitle.classList.add("card-title");
    cardTitle.innerHTML = cityStates[i][0];

    const cardText = document.createElement("div");
    cardText.classList.add("mt-4");
    const address = document.createElement("p");
    address.innerHTML = `123 FAKE AVE\n${cityStates[i].join(", ")}`;
    const locationPhNumber = document.createElement("p");
    locationPhNumber.innerHTML = "123.456.7890";

    contactsContainer.append(cardContainer);
    cardContainer.append(cardBody);
    cardBody.append(cardTitle, cardText);
    cardText.append(address, locationPhNumber);
  }
}

export { contactsContainer, contactCardCreator };
