const url = 'https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/transporte/transporte-dados-globais.json'

async function vizualizarinformacoesGlobais() {
  const res = await fetch(url)
  const dados = await res.json()
  const pessoasNoMundo = (dados.total_pessoas_mundo / 7.888e9)
  const trabalhadoresNoMundo = (dados.total_trabalhadores_mundo / 3.0e9)
  const pessoasNecessitamTransporte = (dados.total_pessoas_que_necessitam_transporte_para_trabalho / 2.0e9)
  const horas = parseInt(dados.tempo_medio_deslocamento_para_trabalho)
  const minutos = Math.round((dados.tempo_medio_deslocamento_para_trabalho - horas) * 60)
  const porcentagemConectada = ((pessoasNecessitamTransporte / trabalhadoresNoMundo) * 100).toFixed(2)


  const paragrafo = document.createElement('')
  paragrafo.classList.add('graficos-container__texto')
  paragrafo.innerHTML = `No mundo existem <span>${dados.total_pessoas_mundo}</span> de pessoas, das quais <span>${dados.total_trabalhadores_mundo}</span> são trabalhadores e desses, <span>${dados.total_pessoas_que_necessitam_transporte_para_trabalho}</span> utilizam algum tipo de transporte para ir ao trabalho, levando um tempo médio de deslocamento de <span> ${dados.tempo_medio_deslocamento_para_trabalho} </span> minutos.`

  const container = document.getElementById('graficos-container')
  container.appendChild(paragrafo)
}

vizualizarinformacoesGlobais();

