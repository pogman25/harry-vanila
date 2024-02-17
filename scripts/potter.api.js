export class PotterAPI {
  constructor() {
    this.characterList = document.querySelector("#character-list");
    this.charactersData = [];
  }

  async getCharacters() {
    // filter[name_cont]=Harry
    const rawResult = await fetch(
      "https://api.potterdb.com/v1/characters?page[size]=25"
    );
    const result = await rawResult.json();
    this.charactersData = result.data;
    console.log(this.charactersData);
    this.renderList();
  }

  static createTextItem(field, text) {
    const textElement = document.createElement("p");
    textElement.innerText = `${field}: ${text ?? "unknown"}`;
    return textElement;
  }

  renderList() {
    this.characterList.innerHTML = "";
    this.charactersData.forEach(({ attributes }) => {
      const li = document.createElement("li");
      li.classList.add("character-item");

      const imgContainer = document.createElement("div");
      imgContainer.classList.add("character-item__image-container");
      const img = document.createElement("img");
      img.setAttribute("src", attributes?.image ?? "/stub.png");
      img.classList.add("character-item__image");
      img.setAttribute("alt", attributes.name);
      imgContainer.appendChild(img);

      const title = document.createElement("h3");
      title.classList.add("character-item__title");
      title.innerText = attributes.name;

      const gender = PotterAPI.createTextItem("gender", attributes.gender);
      const species = PotterAPI.createTextItem("species", attributes.species);
      const house = PotterAPI.createTextItem("house", attributes.house);
      const patronus = PotterAPI.createTextItem(
        "patronus",
        attributes.patronus
      );
      const boggart = PotterAPI.createTextItem("boggart", attributes.boggart);

      li.appendChild(imgContainer);
      li.appendChild(title);
      li.appendChild(gender);
      li.appendChild(species);
      li.appendChild(house);
      li.appendChild(patronus);
      li.appendChild(boggart);

      this.characterList.appendChild(li);
    });
  }
}
