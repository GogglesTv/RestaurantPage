const storyDescription = document.createElement("section");
function ourStoryCard() {
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card", "p-0", "me-5", "border-0", "rounded-4");
  cardContainer.style.height = "25rem";
  cardContainer.style.width = "55rem";
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body", "text-center");
  const cardTitle = document.createElement("div");
  cardTitle.classList.add("h1", "mb-5");
  cardTitle.innerHTML = "HOW IT ALL STARTED";
  const cardText = document.createElement("div");
  cardText.classList.add("card-text", "text-center", "fs-3", "px-3");
  const storyPara = document.createElement("p");
  storyPara.innerHTML =
    "Established in the year of 2012, a couple from Birmingham, AL had an idea of serving people with great quality food that was packed full of both flavor and nutrients. Their heart was to serve whole foods that would fight against the toxic and unhealthy ingredients found in most foods Americans consume just about everyday. Today, there are 9 locations counting! What was started in Alabama has now expanded to Tennessee and Georgia! ";

  storyDescription.append(cardContainer);
  cardContainer.append(cardBody);
  cardBody.append(cardTitle);
  cardBody.append(cardText);
  cardText.append(storyPara);
}

export { storyDescription, ourStoryCard };
