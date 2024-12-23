import { Details } from "./details.js";
import { Games } from "./game.js";
let dataContainer = document.getElementById("dataContainer");
const gameSection = document.getElementById("gameSection");
const detaildsSection = document.getElementById("detaildsSection");
const detailsContainer = document.getElementById("detailsContainer");
const mmorpg = document.getElementById("mmorpg");
const navLinks = document.querySelectorAll(`
  #mmorpg, #shooter, #sailing, #permadeath,#superhero,#pixel `);

export class Display extends Details {
  displayGames(games) {
    let box = "";
    games.forEach(game => {
      box += ` <div class="col-md-6 col-lg-3 ">
  <div class="card  text-white" data-id=${game.id}>
    <div class="px-3 pt-3">
      <div class="image">
        <img
          src="${game.thumbnail}"
          class="w-100 rounded-0"
          alt="game image"
        />
      </div>
      
    </div>
    <div class="card-body px-3 m-0   mt-3">
      <div
        class="d-flex justify-content-between align-items-center mb-2"
      >
        <h5 class="card-title fs-5">${game.title.split(/[\s-]+/).length > 3
          ? game.title.split(/[\s-]+/).slice(0, 2).join(" ")
          : game.title.split(/[\s-]+/).join(" ")}</h5>
        <button class="btn text-white">free</button>
      </div>
      <p class="card-text fs-5  text-center">
        ${game.short_description.split(/[\s-]+/).splice(0, 10).join(" ")}
      </p>
    </div>
    <div class="card-footer d-flex justify-content-between align-items-center pt-2"
    >
      <div class="px-3 py-1 rounded-2">${game.genre}</div>
      <div class="px-3 py-1 rounded-2">${game.platform
        .split(" ")
        .slice(0, 2)
        .join(" ")}</div>
    </div>
  </div>
</div>`;
    });

    dataContainer.innerHTML = box;

    const cards = document.querySelectorAll(".card");

    for (let i = 0; i < cards.length; i++) {
      cards[i].addEventListener("click", e => {
        const details = this.getDetails(cards[i].getAttribute("data-id"));
        details.then(data => {
          this.displayDetails(data);
        });
      });
    }
  }

  displayDetails(details) {
    details = JSON.parse(details);
    detailsContainer.innerHTML = ` <div class="header mb-5 px-2 d-flex  justify-content-between align-items-center">
            <h1 class="text-capitalize">Details Game</h1>
            <i class="fa-solid fa-x text-white fs-3" id="closeDetails"></i>
        </div>

        <div class="details-body">
            <div class="row">
                <div class="col-lg-4">
                    <div class="details-image">
                        <img src="${details.thumbnail}" class="w-100" alt="">
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="content pe-lg-5 mt-4 mt-lg-0 p-2 p-lg-0">
                        <p  class="title"><span class="h4">Title</span>: <span class="px-2 py-1 rounded-2 border-0 " id="title">${details.title}</span> </p>
                        <p><span class="h4">Category</span>: <span class="px-2 py-1 rounded-2 border-0 " id="category">${details.genre}</span></p>
                        <p><span class="h4">Platform</span>: <span class="px-2 py-1 rounded-2 border-0 " id="platform">${details.platform}</span></p>
                        <p><span class="h4">Status</span>: <span class="px-2 py-1 rounded-2 border-0 " id="status">${details.status}</span></p>

                        <p>${details.description}</p>

                        <button class="btn fs-5 mb-5" id="showGame" data-link=${details.game_url}>Show Game</button>
                    </div>
                </div>
            </div>
        </div>`;

    const closeDetails = document.getElementById("closeDetails");
    closeDetails.style.cursor = "pointer";
    closeDetails.addEventListener("click", e => {
      gameSection.classList.remove("d-none");
      detaildsSection.classList.add("d-none");
    });

    const showGame = document.getElementById("showGame");
    showGame.addEventListener("click", e => {
      location.href = e.target.getAttribute("data-link");
    });
  }
}

let displayGame = new Display();
let game = new Games();
game.getGame(mmorpg.innerHTML).then(data => {
  displayGame.displayGames(data);
});

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    let linkName = e.target.innerHTML;
    console.log(linkName);

    switch (linkName) {
      case "mmorpg":
        game.getGame(mmorpg.innerHTML).then(data => {
          displayGame.displayGames(data);
        });
        game.moveActive(mmorpg.innerHTML);
        break;
      case "shooter":
        game.getGame(shooter.innerHTML).then(data => {
          displayGame.displayGames(data);
        });
        game.moveActive(shooter.innerHTML);
        break;
      case "sailing":
        game.getGame(sailing.innerHTML).then(data => {
          displayGame.displayGames(data);
        });
        game.moveActive(sailing.innerHTML);
        break;
      case "permadeath":
        game.getGame(permadeath.innerHTML).then(data => {
          displayGame.displayGames(data);
        });
        game.moveActive(permadeath.innerHTML);
        break;
      case "superhero":
        game.getGame(superhero.innerHTML).then(data => {
          displayGame.displayGames(data);
        });
        game.moveActive(superhero.innerHTML);
        break;
      case "pixel":
        game.getGame(pixel.innerHTML).then(data => {
          displayGame.displayGames(data);
        });
        game.moveActive(pixel.innerHTML);

        break;
    }
  });
});
