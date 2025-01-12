/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function fras(frase) {
  let quien = ["El unicornio ", "El dragón ", "La gorila ", "La gata "];
  let accion = [
    "vomitó arcoiris ",
    "rompió la realidad ",
    "saltó a un volcán ",
    "cazó un relampago "
  ];
  let que = [
    "con mi telefono ",
    "por un palo ",
    "en calzones ",
    "inconciente "
  ];
  let cuando = [
    "por la mañana.",
    "en la noche.",
    "en la fiesta.",
    "en el almuerzo."
  ];
  let a = Math.floor(Math.random() * quien.length);
  let aa = quien[a];
  let b = Math.floor(Math.random() * accion.length);
  let bb = accion[b];
  let c = Math.floor(Math.random() * que.length);
  let cc = que[c];
  let d = Math.floor(Math.random() * cuando.length);
  let dd = cuando[d];
  frase = aa + bb + cc + dd;
  document.getElementById("excusa").innerHTML = frase;
  return frase;
};
