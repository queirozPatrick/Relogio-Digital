// importando os ID's
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

// informações sobre as horas

const relogio = setInterval(function time() {
  let dateToday = new Date(); // função Date no Js
  let hr = dateToday.getHours();
  let min = dateToday.getMinutes();
  let s = dateToday.getSeconds();

  if (hr < 10) hr = "0" + hr;

  if (min < 10) min = "0" + min;

  if (s < 10) s = "0" + s;

  horas.textContent = hr;
  minutos.textContent = min;
  segundos.textContent = s;
});

// informações sobre a data

document.addEventListener("DOMContentLoaded", function () {
        const calendario = setInterval(function () {

        const currentDate = new Date();

        const diaSemana = currentDate.getDay();
        let dia = currentDate.getDate();
        let mes = currentDate.getMonth() + 1; // +1 pois os meses são indexados de 0 a 11
        let ano = currentDate.getFullYear();

        const diasSemana = ['Domingo', 'Segunda - Feira', 'Terça - Feira', 'Quarta - Feira', 'Quinta - Feira', 'Sexta - Feira', 'Sábado'];

        const diaSemanaAtual = diasSemana[diaSemana]; // link o dia da semana atual com a data no array

        const formatoData = `${dia < 10 ? '0' : ''}${dia}/${mes < 10 ? '0' : ''}${mes}/${ano}`; // formatando data 00/00/0000 - se for menor que '10', add o '0'

        document.getElementById("dataAtual").textContent = `${diaSemanaAtual}: ${formatoData}`; // formata o html e exibe no navegador
    }, 1000); // Intervalo de 1 segundo (1000 milissegundos)
});
