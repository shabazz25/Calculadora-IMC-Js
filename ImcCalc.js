//Declaração da variavel global para receber ID do botão Calcular
const calcular = document.getElementById('calcular');


//Função imc
function imc(){
    //Declaração de variaveis locais da função
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    //Validar se campos estão preenchidos
    if(nome !=='' && altura !== '' && peso !== ''){
      //variavel valorIMC recebe o calculo do IMC
      const valorIMC = (peso / (altura* altura)).toFixed(2);

      //Declarada uma variavel mutavel vazia
      let nivelImc ="";
      
      //Estrutura condicional
      if (valorIMC < 18.5)
      {
          nivelImc = 'Abaixo do peso.'
      }else if(valorIMC < 25){
        nivelImc ='Peso ideal';
      }else if(valorIMC < 30)
      {
          nivelImc ='Levemente acima do peso';
      }else if(valorIMC < 35){
          nivelImc = 'Obesidade Grau 1';
      }else if(valorIMC < 40){
          nivelImc = 'Obesidade Grau 2';
      }else{
          nivelImc = 'Obesidade Grau 3 - Cuidado';
      }

        //Resultado printado na tela
        resultado.textContent = `${nome},  seu IMC é ${valorIMC} e você esta ${nivelImc}`;
       
    } else { // Caso o usuario não preencha  todos os campos ira receber um alert
        alert('Preencha todos os campos');
    }
    
}


//O Metodo Listener da variavel calcular vai chamar a função de calculo de IMC quando clicado
calcular.addEventListener('click', imc);