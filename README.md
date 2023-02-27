Contator extraido de https://codingartistweb.com/2021/09/responsive-countdown-to-a-certain-date-javascript/

Contagem regressiva responsiva para uma determinada data | Javascript

Olá e bem-vindo ao tutorial de hoje. Hoje vamos criar uma contagem regressiva para uma data específica. O design desta contagem regressiva será responsivo. Para este tutorial, usamos HTML, CSS e Javascript. A contagem regressiva mostra 4 caixas diferentes exibindo dias, horas, minutos e segundos restantes para a data. A contagem regressiva continua atualizando a cada segundo. Vamos começar com o tutorial.

Estrutura de pastas do projeto:
Antes de passar para a parte de codificação, vamos verificar a estrutura de pastas do projeto. A pasta do projeto é chamada – Countdown. Dentro desta pasta, temos três arquivos chamados – index.html, style.csse script.js. Eles são o documento HTML, a folha de estilo e o arquivo de script, respectivamente. documento HTML, a folha de estilo e o arquivo de script, respectivamente.

HTML:
Começamos com o código HTML. O código HTML consiste em um div com um nome de classe countdown. Dentro countdown, temos 4 div chamados box. Cada um deles boxconsiste ainda em 2 spanelementos. O primeiro elemento span exibirá a contagem do número, enquanto o segundo exibirá o rótulo para cada um dos box.

CSS:
Agora passamos a codificar o CSS. Estaremos usando unidades relativas e consultas de mídia para tornar o design responsivo. Vamos começar com a redefinição do CSS seguida pela aplicação de '#111111' como a cor de fundo do corpo.

Definimos a largura para countdown80vw. O conteúdo da contagem regressiva é posicionado usando o layout flexível. usamos o método transform para centralizar a contagem regressiva

A altura e a largura de cada um boxsão definidas em 28vmin para torná-lo um quadrado perfeito. Os nume textsão exibidos em um columnusando o layout flexbox.

As consultas de mídia têm 3 pontos de interrupção na largura máxima de 1024px, 768px e 480px. Definimos dimensões diferentes para contagem regressiva e caixa por meio dessas consultas de mídia.

Javascript:
Agora, no arquivo javascript, obtemos cada caixa e atribuímos a variáveis. Em seguida, definimos a data para a qual queremos fazer a contagem regressiva. O formato para definir esta data é – Data (ano, mês, dia, hora, minuto). Aqui, observe que o mês é contado de 0 a 11. Calculamos endTime usando o método getTime(). Você pode saber mais sobre getTime aqui().

A função contagem regressiva consiste na todayDatevariável que armazena a data atual. Usando isso, calculamos a todayTimevariável.
Em seguida, temos que descobrir se o endDatejá passou. Por esse motivo, calculamos uma variável de tempo restante que é a diferença entre endTimee todayTime. Se todayTimefor maior que endTime, significa que a contagem regressiva expirou. Limpamos o intervalo neste caso.

Caso contrário, calculamos os dias, horas, minutos e segundos restantes usando a fórmula mostrada no código abaixo. Esta função é chamada a cada segundo usando a setIntervalfunção.

Agora formatamos os números. Se for um número de um dígito, adicionamos um 'zero' na frente dele usando a addZeroesfunção.
Se você tiver algum problema ao criar essa contagem regressiva, poderá fazer o download do código-fonte que forneci abaixo clicando no botão de download do código.

