 // Formatar data padão Brasileiro
 let data = new Date();
 function formatarData(data){
   let newDate = new Date(data);
   return`${newDate.getDate()}/ ${newDate.getMonth()+1}/ ${newDate.getFullYear()}`;
 }

 console.log(formatarData(data));


 document.write(Date());








 // Define a data de contagem regressiva
 const countdownDate = new Date("2022-10-30T23:59:59").getTime();
          

 // Atualiza o contador a cada segundo
 const countdownInterval = setInterval(() => {
   // Obtém a data atual
   const now = new Date().getTime();

   // Calcula a diferença entre a data atual e a data de contagem regressiva
   const distance = countdownDate - now;

   // Calcula os dias, horas, minutos e segundos restantes
   const days = Math.floor(distance / (1000 * 60 * 60 * 24));
   const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   const seconds = Math.floor((distance % (1000 * 60)) / 1000);

   // Exibe o resultado na página
   const countdownElement = document.getElementById("countdown");
   countdownElement.innerHTML = `Faltam ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos para o fim do ano.`;

   // Para a contagem regressiva quando a data é alcançada
   if (distance < 0) {
     clearInterval(countdownInterval);
     countdownElement.innerHTML = "Feliz Ano Novo!";
   }
 }, 1000);