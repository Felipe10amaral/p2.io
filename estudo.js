//media de alunos

var avaliacao = 8

var prova2 = 9

var media = (avaliacao + prova2) / 2

alert(media)

//media de alunos (numeros com vírgula)

var p3 = 8.345

var p4 = 9.654

var media2 = (p3 + p4) / 2

alert(media2.toFixed(2))    //ficar com 2 valores após a vírgula



//converter valor para string em binario

alert(media.toString(2))




//STRING  

var escola = 'iff'

alert(escola.charAt(0))   //vai mostrar o caracter que esta no índice 0 da string escola
alert(escola.charAt(1))   //vai mostrar o caracter que esta no índice 1 da string escola
alert(escola.charAt(2))   //vai mostrar o caracter que esta no índice 2 da string escola

//TRABALHANDO COM VETOR EM STRING
var letra = []

//FUNÇÃO PUSH ADICIONA VALORES para o vetor 

letra.push(escola.charAt(0))  // pega o primeiro caracter da string escola e adiciona no indice 0 do vetor letra
letra.push(escola.charAt(1))  // pega o segundo caracter da string escola e adiciona no indice 0 do vetor letra
letra.push(escola.charAt(2))  // pega o terceiro caracter da string escola e adiciona no indice 0 do vetor letra

// FUNÇÃO POP REMOVE DO VETOR


letra.pop()

var exemplo = 'instituto'
var iff = 'instituto federal fluminense'
alert(exemplo.indexOf('u'))   // vai retornar o numero do índice do vetor em que se encontra o caracter u

alert(exemplo.substring(0,7))     //vai retornar a string do indice 0 ate o 7-1

exemplo = exemplo.concat(' federal')  //concatenando a string federal 

alert(exemplo.replace('t', 'p'))      //dentro da string, ele altera o caracter t para o p


alert(iff.split(' ')) //divide uma string em um array de strings de acordo com algum separador   https://www.devmedia.com.br/javascript-split-dividindo-separando-strings/39254  --> para um melhor entendimento

var nome = 'felipe'

sobrenome = nome + ' amaral'       //outra forma de concatenar string

alert(sobrenome)



/*
 Exercício validador de e-mail    
    Regras: 
            *um caracter antes do @
            *um único @
            *um ou mais caracter após o @
            *caracteres devem ser seguidos por ponto(.)
            *após o ponto deve haver dois ou mais caracter   
            
            A melhor forma é usando expressão regular */


var email = prompt('Entre com um e-mail:')

var RegExpEmail = /^\w*(\.\w*)?@[a-z].[a-z]+(\.[a-z]+)?$/;

if(email.search(RegExpEmail) !=-1)                                                     //Outra forma de escrever     /[0-9]{3}\.[0-9]\.[0-9]\-[0-9]{2}/;
  {
    alert('Email Válido')
  }
else
  {
    alert('Email Inválido')
  }



/* Validar CPF
  regras:
      
        precisa ter ponto(.)
        so pode haver numeros
        e usar hífen(-)
        
        */

var cpf = prompt('Entre com o seu cpf:')

var RegExpCPF = /[0-9][0-9][0-9]\.[0-9][0-9][0-9]\.[0-9][0-9][0-9]\-[0-9][0-9]/;   //cada colchete representa de quais numeros serão permitidos e \. é para obrigar o usuario a colocar o ponto e cada colchete representa um dígito do CPF

if(cpf.search(RegExpCPF) !=-1)                                                     //Outra forma de escrever     /[0-9]{3}\.[0-9]\.[0-9]\-[0-9]{2}/;
  {
    alert('CPF Válido')
  }
else
  {
    alert('CPF Inválido')
  }



