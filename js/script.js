'use strict';

// RICHIAMO BUTTON
const InputButton = document.querySelector(".invia-dati");
const gridContainer = document.querySelector(".grid-container");

// RICHIAMA FUNCTION onBtnClick
InputButton.addEventListener("click", onBtnClick);

// DICHIARAZIONE FUNCTION onBtnClick
function onBtnClick() {
  //RICHIAMA FUNCTION createGrid
  createGrid(gridContainer);
}

// DICHIARAZIONE FUNCTION createGrid
function createGrid(gridContainer) {
  gridContainer.innerHTML = "";
  for (let i = 1; i <= 100; i++) {
    const box = document.createElement("div");
    box.classList.add("square");
    box.innerHTML = i;
    gridContainer.append(box);

    //CHANGE BOX COLOR
    box.addEventListener("click", function () {
      box.classList.add("bg-info");
      console.log(`cella selezionata: ${i}`);
    });
  }
}

