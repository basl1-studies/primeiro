const botaoInicio = document.getElementById('botaoInicio');

botaoInicio.addEventListener('click', function(){

    const secretNumber = Math.floor(Math.random()*100);

    let usuario = parseInt(prompt("Digite um número de 0  a 100: "));

    if(secretNumber > usuario){
        alert("O seu palpite é menor que o número secreto!");
        return;
    } else if (secretNumber < usuario){
        alert("O seu palpite é maior que o número secreto!");
        return;
    } else {
        alert("Você acertou!!");
    }
    });