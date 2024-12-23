const gameSection = document.getElementById("gameSection");
const detaildsSection = document.getElementById("detaildsSection");

console.log(gameSection, detaildsSection);

export class Details {
  showLoaderDetails() {
    loader.classList.replace("d-none", "d-flex");
    gameSection.classList.add("d-none");
    detaildsSection.classList.add("d-none");
  }

  hideLoader() {
    loader.classList.replace("d-flex", "d-none");
    gameSection.classList.add("d-none");
    detaildsSection.classList.remove("d-none");
  }
  async getDetails(id) {
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "de53113df9msh29187821383f1cep1f0fe7jsna90e8634e7b8",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com"
      }
    };
    this.showLoaderDetails();
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      return result;
    } catch (error) {
      console.error(error);
    } finally {
      this.hideLoader();
    }
  }
}
