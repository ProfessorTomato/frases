const frases_json = {
  frases: [
    {
      frase:
        "Si alguien busca la salud, pregúntale si está dispuesto a evitar en el futuro las causas de la enfermedad; en caso contrario, abstente de ayudarle.",
      autor: "Sócrates",
    },
    {
      frase: "Si quieres tener éxito, promete todo y no cumplas nada.",
      autor: "Napoleón",
    },
    {
      frase:
        "Cuando las circunstancias cambian, yo cambio de opinión. ¿Usted qué hace?",
      autor: "John Maynard Keynes",
    },
    {
      frase:
        "Los hombres no vivirían mucho tiempo en sociedad si no se engañaran unos a otros.",
      autor: "François de La Rochefoucauld",
    },
    {
      frase: "Cada día sabemos más y entendemos menos.",
      autor: "Albert Einstein",
    },
    {
      frase: "Lo importante es no dejar de hacerse preguntas.",
      autor: "Albert Einstein",
    },
    {
      frase:
        "Dicen que el mono es tan inteligente que no habla para que no lo hagan trabajar.",
      autor: "René Descartes",
    },
  ],
};

function entero_aleatorio(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function poner_frase() {
  let aleatorio = entero_aleatorio(0, frases_json.frases.length - 1);

  document.getElementById("frase").innerText =
    '"' + frases_json.frases[aleatorio].frase + '"';
  document.getElementById("autor").innerText =
    frases_json.frases[aleatorio].autor;
}

window.addEventListener(
  "load",
  function () {
    poner_frase();
  },
  false
);

setInterval(poner_frase, 5000);
