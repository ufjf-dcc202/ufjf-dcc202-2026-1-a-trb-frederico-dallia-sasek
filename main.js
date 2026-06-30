const a = [8, 7, 6, 5, 4, 3, 2, 1];
const b = [];
const c = [];

function moverTorre(t1, t2) {
  const tam1 = t1.length;
  const tam2 = t2.length;
  if (tam2 > 0 && t2[tam2 - 1] > t1[tam1 - 1]) {
    //jogada invalida
  } else {
    t2.push(t1.pop());
  }
}
