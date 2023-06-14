console.log("menu here!");
import "./style2.css";

const menuContainer = document.createElement("section");
menuContainer.classList.add("menu-container");

function menuCreator() {
  const menuItems = [
    [
      "../Images/pancakes.avif",
      "Flapjacks",
      2.99,
      "A stack of 3 homestyle pancakes with warm butta!",
    ],
    [
      "../Images/biscuits-and-gravy.png",
      "Biscuits & Gravy",
      2.99,
      "A soft and warm biscuit flooded with sausage gravy!",
    ],
    [
      "../Images/belgian-waffle.png",
      "Belgium Waffle",
      3.99,
      "Crisp and fluffy belgium style waffle served with hot syrup!",
    ],
    [
      "../Images/eggs.png",
      "Eggs",
      "2.50",
      "3 eggs cooked just how you like em!",
    ],
    [
      "../Images/sausage-egg-cheese-croissant.png",
      "Croissant Egg Sandwhich",
      4.99,
      "A croissant packed with your choice of meat, eggs, and cheese.",
    ],
    [
      "../Images/hashbrowns.jpeg",
      "Hashbrowns",
      2.99,
      "Ain't nothing like some crispy hashbrowns in the mornin!",
    ],
    [
      "../Images/SausageLinks.png",
      "Sausage Links",
      "3.50",
      "Golden brown crispy sausage.",
    ],
    [
      "../Images/bacon.jpeg",
      "Bacon",
      "3.50",
      "Get it crispy or flimsy! The choice is yours!",
    ],
    [
      "../Images/fruit-cup.jpeg",
      "Fruit Cup",
      "2.50",
      "A cup of strawberries, blueberries, blackberries, and raspberries.",
    ],
  ];
  const menuHeader = document.createElement("h1");
  menuHeader.classList.add("menu-header");
  menuHeader.innerHTML = "Menu";

  const span = document.createElement("span");
  span.classList.add("underline");
  menuHeader.append(span);

  const menuItemsContainer = document.createElement("section");
  menuItemsContainer.classList.add("menu-items-container");

  for (let i = 0; i <= menuItems.length - 1; i++) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
    if (i !== menuItems.length - 1) {
      menuItem.style.marginBottom = "50px";
    }
    const itemPic = document.createElement("img");
    // insert item pic
    itemPic.setAttribute("src", menuItems[i][0]);
    const itemContent = document.createElement("div");
    itemContent.classList.add("item-content");

    const itemName = document.createElement("h4");
    itemName.innerHTML = `${menuItems[i][1]}:`;

    const itemPrice = document.createElement("span");
    itemPrice.innerHTML = `$${menuItems[i][2]}`;

    const itemDescr = document.createElement("p");
    itemDescr.classList.add("item-description");
    itemDescr.innerHTML = menuItems[i][3];

    menuItem.append(itemPic, itemContent);
    itemContent.append(itemName, itemDescr);
    itemName.append(itemPrice);

    menuItemsContainer.append(menuItem);
  }

  menuContainer.append(menuHeader, menuItemsContainer);
}

export { menuContainer, menuCreator };
