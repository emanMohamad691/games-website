const loader = document.getElementById("loader");
const gameSection = document.getElementById("gameSection");
const detaildsSection = document.getElementById("detaildsSection");
const navLinks = document.querySelectorAll(`
   #mmorpg, #shooter, #sailing, #permadeath,#superhero,#pixel `);

export class Games {
  showLoaderGame() {
    loader.classList.replace("d-none", "d-flex");
    gameSection.classList.add("d-none");
    detaildsSection.classList.add("d-none");
  }

  hideLoaderGame() {
    loader.classList.replace("d-flex", "d-none");
    gameSection.classList.remove("d-none");
    detaildsSection.classList.add("d-none");
  }
  async getGame(category) {
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "de53113df9msh29187821383f1cep1f0fe7jsna90e8634e7b8",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com"
      }
    };
    this.showLoaderGame();
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      return result;
    } catch (error) {
      return error;
    } finally {
      this.hideLoaderGame();
    }
  }

  moveActive(nameLink) {
    for (let i = 0; i < navLinks.length; i++) {
      if (navLinks[i].innerHTML !== nameLink) {
        navLinks[i].classList.remove("active");
      } else {
        navLinks[i].classList.add("active");
      }
    }
  }
}
