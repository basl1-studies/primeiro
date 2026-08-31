//declarar o botão como uma constante;
const botaoInicio = document.getElementById('botaoInicio');

//clicar no botão para iniciar o jogo;
botaoInicio.addEventListener('click', function(){

    //Gera um número aleatorio entre 1 e 100
    const secretNumber = Math.floor(Math.random()*100) +1 ;

    let acerto = false;
    //controla a quantidade de tentativas de usuario
    for(let tentativas = 1; tentativas<=7; tentativas++){

        let inputUsuario = prompt('Tentativa ${tentativas} de 7:\nDigite seu palpite(entre 1 e 100): ');
    
        //verifica se há um numero digitado.
    if(inputUsuario === null){
        alert("Jogo cancelado!");
        return;
    } 
    //verifica se o numero digitado é valido
    let usuario = parseInt(inputUsuario);
    
    //é o mesmo que "Se o numero digitado pelo usuario for igual ao numero secreto"
    if (usuario === secretNumber){
        alert("Parabéns, você acertou!!");
        acertou = true;
        break;
    } 
    //é o mesmo que "Senão, se o numero digitado pelo usuario for maior que o numero secreto"
    else if (usuario < secretNumber) {
        alert("O número secreto é maior!");

        //é o mesmo que "Senão, se o numero digitado pelo usuario for menor que o numero secreto"
    } else if(usuario > secretNumber){
        alert("O número secreto é menor!");
        //é o mesmo que "Se for nenhuma das anteriores..."
    } else {
        alert("Por favor, digite um número!");
        tentativas--;
    }
}});