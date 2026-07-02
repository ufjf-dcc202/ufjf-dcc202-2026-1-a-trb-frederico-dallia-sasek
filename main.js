const a = [8, 7, 6, 5, 4, 3, 2, 1];
const b = [];
const c = [];
let selecionado;
let torreSelecionada;
let move;

const historico = document.querySelector("#historico");
const moviment = document.querySelector("#move");

const torre1 = document.querySelector("#tower-1");
const torre2 = document.querySelector("#tower-2");
const torre3 = document.querySelector("#tower-3");
const pole = document.querySelectorAll(".pole");

torre1.addEventListener("click", () => selecionar(a, torre1));
torre2.addEventListener("click", () => selecionar(b, torre2));
torre3.addEventListener("click", () => selecionar(c, torre3));

function iniciarJogo() {
  move = 0;
  selecionado = 0;
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

function selecionar(indice, torre) {
  if (selecionado === 0) {
    selecionado = indice;
    torreSelecionada = torre;
    torre.classList.add("selecionar");
  } else {
    if (selecionado !== indice) {
      moverDisco(selecionado, indice);
    }
    selecionado = 0;
    torreSelecionada.classList.remove("selecionar")
    torreSelecionada = null;

 
    
  }
}

function moverDisco(t1, t2) {
  const tam1 = t1.length;
  const tam2 = t2.length;
  if (tam2 > 0 && t1[tam1 - 1] > t2[tam2 - 1]) {
    moviment.textContent = "JOGADA INVALIDA"
  } else {
    if (t1.length !== 0) {
      t2.push(t1.pop());
      move = move + 1;
      moviment.textContent = move;
    }
  }
  render();
}

iniciarJogo();
