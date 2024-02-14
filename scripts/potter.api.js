export class PotterAPI {
  constructor(element) {

  }
}

export async function getCharacters() {
  const rawResult = await fetch("https://api.potterdb.com/v1/characters?page[size]=25&filter[name_cont]=Harry");
  const result = await rawResult.json();
  console.log(result);
}
