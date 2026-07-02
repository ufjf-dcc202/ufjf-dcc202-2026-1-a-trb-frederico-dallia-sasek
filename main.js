let a;
let b;
let c;
let selecionado;
let torreSelecionada;
let move;

const historico = document.querySelector("#historico");
const moviment = document.querySelector("#move");

const torre1 = document.querySelector("#tower-1");
const torre2 = document.querySelector("#tower-2");
const torre3 = document.querySelector("#tower-3");

torre1.addEventListener("click", () => selecionar(a, torre1));
torre2.addEventListener("click", () => selecionar(b, torre2));
torre3.addEventListener("click", () => selecionar(c, torre3));
historico.addEventListener("click", voltarParaJogada);

const btnVoltar = document.querySelector("[name = voltar]");
btnVoltar.addEventListener("click", voltar);

function iniciarJogo() {
  move = 0;
  selecionado = 0;
  a = [8, 7, 6, 5, 4, 3, 2, 1];
  b = [];
  c = [];
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
      moverDisco(selecionado, indice, true);
    }
    selecionado = 0;
    torreSelecionada.classList.remove("selecionar");
    torreSelecionada = null;
  }
}
function nomeDaTorre(torre) {
  if (torre === a) return "A";
  if (torre === b) return "B";
  return "C";
}
function torreDaNome(torre) {
  if (torre === "A") return a;
  if (torre === "B") return b;
  return c;
}
function moverDisco(t1, t2, condicao) {
  const tam1 = t1.length;
  const tam2 = t2.length;
  console.log("BUCETA");
  if (tam2 > 0 && t1[tam1 - 1] > t2[tam2 - 1]) {
    moviment.textContent = "JOGADA INVALIDA";
  } else {
    if (t1.length !== 0) {
      t2.push(t1.pop());
      if (condicao) {
        const text = nomeDaTorre(t1) + " => " + nomeDaTorre(t2);
        const novoLi = document.createElement("li");
        novoLi.className = move;
        historico.append(novoLi);
        novoLi.textContent = text;
        move = move + 1;
      }
      moviment.textContent = move;
    }
  }
  render();
}
function voltar() {
  const child = historico.lastElementChild;
  const t = child.textContent.split(" => ");
  move = move - 1;
  moverDisco(torreDaNome(t[1]), torreDaNome(t[0]), false);
  if (child) {
    historico.lastElementChild.remove();
  }
}
function voltarParaJogada(evento) {
  const li = evento.target;
  let temp = Number(li.className);
  while (move > temp+1) {
    voltar();
  }
}

iniciarJogo();
