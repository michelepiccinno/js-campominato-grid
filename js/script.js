'use strict'
//RICHIAMO BUTTON
const InputButton = document.querySelector(".invia-dati");

//EVENTLISTENER
InputButton.addEventListener("click", function () {

  const gridContainer = document.querySelector(".grid-container");
  gridContainer.innerHTML = "";

  for (let i = 1; i <= 100; i++) {
    const Box = document.createElement("div");
    Box.classList.add("square");
    Box.innerHTML = i;
    gridContainer.append(Box);

    //AL CLICK LA CELLA SI COLORA DI AZZURRO E MANDA UN MSG IN CONSOLE
    Box.addEventListener("click", function () {
      Box.classList.add("bg-info");
      console.log(`cella selezionata: ${i}`)
    });
  }
})

