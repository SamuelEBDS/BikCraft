// Ativar Links do Menu
const links = document.querySelectorAll(".header-menu a");


function ativarLink(link) {
  const url = location.href; //url contendo bicicletas, seguros ...
  const href = link.href;
  if (url.includes(href)) { //includes - verifica se a palavra existe 
    link.classList.add("ativo"); 
  }
}

links.forEach(ativarLink);


// Ativar Items do Orçamento

//URLSearchParams - para identificar parametros , retorna o array com os parametros de busca
const parametros = new URLSearchParams(location.search);


//extrair os elesmentos seguro e prata do html.
function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro); //retorna os ids.
  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);

//Perguntas frequentes

const perguntas = document.querySelectorAll('.perguntas button');

function ativarPergunta(event){
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

 
  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
}

function eventosPerguntas(pergunta){
  pergunta.addEventListener('click', ativarPergunta);
}


perguntas.forEach(eventosPerguntas);


//Galeria de Bicicletas 

const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function trocarImagem(event) {
  const img = event.currentTarget;
 const media = matchMedia('(min-width: 1000px)').matches;
  if(media){
  galeriaContainer.prepend(img); //pega o elemento e coloca na frente
  }
}

function eventosGaleria(img) {
  img.addEventListener('click', trocarImagem);
}

galeria.forEach(eventosGaleria);

//Animação
//verficar se existe, colocar no window para verficiar quando quiser usar
if (window.SimpleAnime) {
  new SimpleAnime();
}
