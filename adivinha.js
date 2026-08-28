const botaoInicio = document.getElementById('botao');

botaoInicio.addEventListener('click', function(){
    let usuario = prompt("Digite um número: ");

    const secretNumber = Math.floor(Math.random()*100);

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