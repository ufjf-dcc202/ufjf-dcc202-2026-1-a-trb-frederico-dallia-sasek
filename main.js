const a = [8, 7, 6, 5, 4, 3, 2, 1];
const b = [];
const c = [];
let move = 0;

const historico = document.querySelector("#historico");
const moviment = document.querySelector("#move");

const torre1 = document.querySelector("#tower-1");
const torre2 = document.querySelector("#tower-2");
const torre3 = document.querySelector("#tower-3");
const pole = document.querySelectorAll(".pole");

torre1.addEventListener("click", render);
torre2.addEventListener("click", render);
torre3.addEventListener("click", render);

function iniciarJogo() {
  move = 0;
  moviment.textContent = move;

  render();
}

function limpar() {
  document.querySelectorAll(".tower span").forEach((disco) => {
    disco.remove();
  });
}

function render() {
  limpar();
  for (let i = 0; i < a.length; i++) {
    criaDisco(a[i], torre1);
  }
  for (let i = 0; i < b.length; i++) {
    criaDisco(b[i], torre2);
  }
  for (let i = 0; i < c.length; i++) {
    criaDisco(c[i], torre3);
  }
}

function criaDisco(disckSize, torre) {
  const name = "s" + disckSize;
  const novoDisk = document.createElement("span");
  novoDisk.className = name;
  torre.append(novoDisk);
}

function moverDisco(t1, t2) {
  const tam1 = t1.length;
  const tam2 = t2.length;
  if (tam2 > 0 && t1[tam1 - 1] > t2[tam2 - 1]) {
    //jogada invalida
  } else {
    t2.push(t1.pop());
    move = move + 1;
    moviment.textContent = move;
  }
  render();
}


iniciarJogo();
