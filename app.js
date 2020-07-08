const frases = [
  "Si alguien busca la salud, pregúntale si está dispuesto a evitar en el futuro las causas de la enfermedad; en caso contrario, abstente de ayudarle.",
  "Si quieres tener éxito, promete todo y no cumplas nada.",
  "Cuando las circunstancias cambian, yo cambio de opinión. ¿Usted que hace?",
  "Los hombres no vivirían mucho tiempo en sociedad si no se engañaran unos a otros.",
];

const autores = [
  "Sócrates",
  "Napoleón",
  "John Maynard Keynes",
  "François de La Rochefoucauld",
];

function entero_aleatorio(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function poner_frase() {
  let aleatorio = entero_aleatorio(0, frases.length - 1);

  document.getElementById("frase").innerText = frases[aleatorio];
  document.getElementById("autor").innerText = autores[aleatorio];
}

window.addEventListener(
  "load",
  function () {
    poner_frase();
  },
  false
);

setInterval(poner_frase, 2000);
