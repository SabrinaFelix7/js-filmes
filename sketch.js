let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("white");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendaçao = geraRecomendaçao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendaçao, width / 2, height / 2);
}

function geraRecomendaçao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 16) {
      return "Uma ideia de você";
    } else {
      
      if (idade >= 14) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "Duna";          
        } else{
         return "Jogos Vorazes: A cantiga dos passáros e das serpentes";
        }
      } else {
        if (idade >= 12) {
        if (gostaDeFantasia) {
          return "Harry Potter e a pedra filosofal";
        } else {
          return "Wonka";
        }
      }
    }
    }
    } else {
    if (gostaDeFantasia) {
      return "Hotel transilvânia";
    } else {
      return "Elementos";
    }
  }
}
