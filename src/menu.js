const menuContainer = document.createElement("section");

function menuItemsCreator() {
  const smoothiesContainer = document.createElement("div");
  smoothiesContainer.classList.add(
    "row",
    "d-flex",
    "mb-5",
    "justify-content-center"
  );
  const bowlsContainer = document.createElement("div");
  bowlsContainer.classList.add(
    "row",
    "d-flex",
    "mb-5",
    "justify-content-center"
  );

  // Creates smoothie menu
  function smoothieMenu() {
    const smoothiesHeading = document.createElement("h1");
    smoothiesHeading.innerHTML = "SMOOTHIES";
    smoothiesHeading.classList.add(
      "text-center",
      "menu-headings",
      "pt-4",
      "pe-5"
    );
    const smoothiePricesContainer = document.createElement("div");
    smoothiePricesContainer.style.width = "500px";
    smoothiePricesContainer.classList.add(
      "d-flex",
      "h3",
      "justify-content-evenly"
    );
    for (let i = 1; i <= 3; i++) {
      let smoothiePrice = document.createElement("p");
      if (i === 0) {
        smoothiePrice.innerHTML = "$5 - 18oz";
      } else if (i === 1) {
        smoothiePrice.innerHTML = "$7 - 24oz";
      } else {
        smoothiePrice.innerHTML = "$8.50 - 32oz";
      }
      smoothiePricesContainer.append(smoothiePrice);
    }
    const smoothies = document.createElement("div");
    smoothies.classList.add("d-flex", "flex-wrap", "justify-content-center");

    const smoothieSelections = [
      [
        "Muscle Builder",
        "Mix: Choice of Two Fruits, Veggies, Choice of Whey Protein: Chocolate, Vanilla, or Strawberry, Almond Milk",
      ],
      [
        "Relaxing Refresher",
        "Mix: Strawberries, Banana, Raspberries, Papaya Juice Blend, Dairy Whey Blend",
      ],
      [
        "OG Mix",
        "Mix: Strawberries, Blueberries (Wild), Bananas, Almond Milk, Turbinado",
      ],
      [
        "Tropical Storm",
        "Mix: Pineapples, Mangoes, Greek Nonfat Yogurt, Apple Pineapple Juice Blend, Pear Passion Fruit Juice Blend, Protein Blend",
      ],
      [
        "Pure Iron",
        "Mix: Blueberries (Wild), Raspberries, Keto Protein Blend, Almond Butter, 100% Cocoa, Almond Milk",
      ],
      [
        "Green Machine",
        "Mix: Pineapples, White Grape Lemon Juice Blend, Almonds, Spinach - Organic, Whey Protein Vanilla, Multivitamin Enhancer",
      ],
    ];
    for (let i = 0; i <= smoothieSelections.length - 1; i++) {
      const cardContainer = document.createElement("div");
      cardContainer.classList.add(
        "card",
        "p-0",
        "me-5",
        "border-0",
        "rounded-4"
      );
      for (let i = 0; i <= 2; i++) {
        cardContainer.classList.add("mb-5");
      }
      cardContainer.style.height = "20rem";
      cardContainer.style.width = "20rem";
      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body", "text-center", "fs-3");
      const cardTitle = document.createElement("h2");
      cardTitle.classList.add("card-title");
      cardTitle.innerHTML = smoothieSelections[i][0];

      const cardText = document.createElement("div");
      cardText.classList.add("card-text", "fs-5");
      const smoothieMix = document.createElement("p");
      smoothieMix.innerHTML = smoothieSelections[i][1];
      smoothies.append(cardContainer);
      cardContainer.append(cardBody);
      cardBody.append(cardTitle, cardText);
      cardText.append(smoothieMix);
    }

    smoothiesContainer.append(
      smoothiesHeading,
      smoothiePricesContainer,
      smoothies
    );
    menuContainer.append(smoothiesContainer);
  }
  smoothieMenu();

  function bowlsMenu() {
    // Creates Bowls Menu
    const bowlsHeading = document.createElement("h1");
    bowlsHeading.innerHTML = "BOWLS";
    bowlsHeading.classList.add("text-center", "menu-headings", "pe-5");
    const bowlsPricesContainer = document.createElement("div");
    bowlsPricesContainer.style.width = "500px";
    bowlsPricesContainer.classList.add(
      "d-flex",
      "h3",
      "justify-content-evenly"
    );
    for (let i = 1; i <= 3; i++) {
      let bowlPrice = document.createElement("p");
      if (i === 0) {
        bowlPrice.innerHTML = "$6 - 8oz";
      } else if (i === 1) {
        bowlPrice.innerHTML = "$9 - 12oz";
      } else {
        bowlPrice.innerHTML = "$11 - 16oz";
      }
      bowlsPricesContainer.append(bowlPrice);
    }

    const bowlSelections = [
      [
        "Simple Bowl",
        "Base: Açaí, Apple Juice, Bananas, Strawberries",
        "Toppings: Granola, Bananas, Strawberries, Honey Drizzle",
      ],
      [
        "Power Bowl",
        "Base: Açaí, Almond Milk, Bananas, Peanut Butter, Strawberries, Whey Protein",
        "Toppings: Granola, Bananas, Blueberries, Strawberries, Peanut Butter, Nutella",
      ],
      [
        "Fire Bowl",
        "Base: Açaí, Almond Milk, Bananas, Strawberries, Peanut Butter, Whey Protein",
        "Toppings: Granola, Pineapple, Raspberries, Nutella, Goji Berries",
      ],
      [
        "Tree Hugger",
        "Base: Pitaya, Almond Milk, Pineapple, Whey Protein",
        "Toppings: Granola, Pineapples, Blueberries, Nutella",
      ],
      [
        "Tropical Island",
        "Base: Pitaya, Apple Juice, Strawberries",
        "Toppings: Granola, Kiwi, Strawberries, Pineapple, Coconut Flakes, Honey Drizzle, Bee Pollen",
      ],
      [
        "Hulk Smash",
        "Base: Spinach, Apple Juice, Bananas, Pineapples",
        "Toppings: Granola, Bananas, Pineapple, Peanut Butter, Cacao Nibs",
      ],
    ];
    const bowls = document.createElement("div");
    bowls.classList.add("d-flex", "justify-content-center", "flex-wrap");

    for (let i = 0; i <= bowlSelections.length - 1; i++) {
      const cardContainer = document.createElement("div");
      cardContainer.classList.add(
        "card",
        "p-0",
        "me-5",
        "border-0",
        "rounded-4"
      );
      cardContainer.style.height = "20rem";
      cardContainer.style.width = "20rem";

      for (let i = 0; i <= 2; i++) {
        cardContainer.classList.add("mb-5");
      }

      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body", "text-center", "fs-3");

      const cardTitle = document.createElement("h2");
      cardTitle.classList.add("card-title");
      cardTitle.innerHTML = bowlSelections[i][0];

      const cardText = document.createElement("div");
      cardText.classList.add("card-text", "fs-5");
      const bowlBase = document.createElement("p");
      bowlBase.innerHTML = bowlSelections[i][1];
      const bowlToppings = document.createElement("p");
      bowlToppings.innerHTML = bowlSelections[i][2];
      cardContainer.append(cardBody);
      cardBody.append(cardTitle, cardText);
      cardText.append(bowlBase, bowlToppings);
      bowls.append(cardContainer);
    }

    bowlsContainer.append(bowlsHeading, bowlsPricesContainer, bowls);
    menuContainer.append(bowlsContainer);
  }
  bowlsMenu();
}

export { menuContainer, menuItemsCreator };
