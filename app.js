
async function sortear() {
    // pegar total de resultados
    const totalResultados = Number(document.querySelector('#totalResultadosInput').value); // obtendo valor do imput

    // pegar o menor valor
    const menorValor = Number(document.querySelector('#menorValorInput').value); // tratando o valor string para number por conta do value que captura o valor para alfabetico

    // pegar o maior valor
    const maiorValor = Number(document.querySelector('#maiorValorInput').value);


    for(let j = 0; j < 20; j++) { // loop que replica 20x o resultado
    // limpar resultados antigos no HTML existente
    const elementoHTMLresultValues = document.querySelector('.results-values') // buscando elemento HTML por class
    elementoHTMLresultValues.innerHTML = ''

  for(let i =0; i < totalResultados; i++) { // loop que duplica os elementos
    // gerar um número aleátorio entre o menor e maior número
    const resultado = Math.floor(Math.random() * (maiorValor - menorValor + 1)) + menorValor; // sorteio com valor min e max ajustado para lidar com 0


    // gerar um elemento HTML para o resultado
    const elementoHTMLdoResultado = document.createElement('div'); //criando um elemento
    elementoHTMLdoResultado.classList.add('results-value') // adicionando uma class dentro do elemento (tag)
    elementoHTMLdoResultado.innerText = resultado // colocando texto dentro do elemento criado anteriormente

    // adicionar o elemento criado dentro do HTML existente
    elementoHTMLresultValues.append(elementoHTMLdoResultado) // adiciona uma informação / elemento dentro do HTML
    }

    await wait(20)
  }
}

function wait(tempo) { // função de pausa
    return new Promise((resolve) => {
        setTimeout(() => resolve(), tempo)
    })
}
