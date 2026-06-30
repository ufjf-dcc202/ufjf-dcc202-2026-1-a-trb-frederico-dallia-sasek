const a = [8, 7, 6, 5, 4, 3, 2, 1];
const b = [];
const c = [];
const move = 0;

const moviment = document.querySelector("#move");

const torre1 = document.querySelector("#tower-1");
const torre2 = document.querySelector("#tower-2");
const torre3 = document.querySelector("#tower-3");
torre1.addEventListener("click", mudavalor1);
torre2.addEventListener("click", mudavalor2);
torre3.addEventListener("click", mudavalor3);

function mudavalor1() {
  moviment.textContent = "a";
}

function mudavalor2() {
  moviment.textContent = "b";
}

function mudavalor3() {
  moviment.textContent = "c";
}

function moverTorre(t1, t2) {
  const tam1 = t1.length;
  const tam2 = t2.length;
  if (tam2 > 0 && t2[tam2 - 1] > t1[tam1 - 1]) {
    //jogada invalida
  } else {
    t2.push(t1.pop());
    move = move + 1;
    moviment.textContent = move;
  }
}
