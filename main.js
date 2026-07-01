const a = [8, 7, 6, 5, 4, 3, 2, 1];
const b = [];
const c = [];
const move = 0;
const historico  = document.querySelector("#historico");

const moviment = document.querySelector("#move");

const torre1 = document.querySelector("#tower-1");
const torre2 = document.querySelector("#tower-2");
const torre3 = document.querySelector("#tower-3");
torre1.addEventListener("click", render);
torre2.addEventListener("click", render);
torre3.addEventListener("click", render);

function render() {
  for (let i = 0; i < a.length; i++) {
    criaDisco(a[i]);
  }
    for (let i = 0; i < b.length; i++) {
    criaDisco(b[i]);
  }
    for (let i = 0; i < c.length; i++) {
    criaDisco(c[i]);
  }
}

function criaDisco(disckSize) {
  const name = "disk - " + disckSize;
  const novoDisk = document.createElement("li");
  novoDisk.textContent = name;

}

function moverDisco(t1, t2) {
  const tam1 = t1.length;
  const tam2 = t2.length;
  if (tam2 > 0 && t2[tam2 - 1] > t1[tam1 - 1]) {
    //jogada invalida
  } else {
    t2.push(t1.pop());
    move = move + 1;
    moviment.textContent = move;
  }
  render();
}
