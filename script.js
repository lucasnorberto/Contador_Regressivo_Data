const form = document.querySelector('form');
const input = form.querySelector('#data-hora');
const iniciarBtn = form.querySelector('#iniciar');
const contadorDiv = document.querySelector('#contador');

let dataHora;

function iniciarContador() {
  dataHora = new Date(input.value).getTime();

  setInterval(() => {
    const agora = new Date().getTime();
    const diff = dataHora - agora;

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diff % (1000 * 60)) / 1000);

    contadorDiv.innerHTML = `Faltam ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos.`;
  }, 1000);
}

iniciarBtn.addEventListener('click', iniciarContador);
