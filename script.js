contador = 0
function clicando (){
let inputNumeros = document.querySelector('.inpt-numeros input').value;
let fim = document.querySelector('.inpt-final').value;
let quantidadeTotal = document.querySelector('.qtd-total');
let quantidadeRestantes = document.querySelector('.qtd-restantes');
let mensagem = document.querySelector('.inpt-mensagens textarea').value;
let textAviso = document.querySelector('.text-aviso');
    numeros3 = inputNumeros.replaceAll(' ', '');
    numeros3 = numeros3.replaceAll('-', '');
    numeros3 = numeros3.replaceAll('+', '');
    numeros3 = numeros3.split(',');
let mensagemFiltrada = window.encodeURIComponent(mensagem);

if (fim === '' || inputNumeros === ''){
    alert('Campo em branco!')
}

else{
   
quantidadeTotal.innerHTML = numeros3.length;


textAviso.innerText = ''; /* zerando o aviso */

if (parseInt(fim) !== contador){
    window.open('https://api.whatsapp.com/send?phone='+ numeros3[contador]+ '&text=' + mensagemFiltrada);
    contador += 1;
   
    quantidadeRestantes.innerHTML = numeros3.length - contador;
     
}
else{
    
    textAviso.innerText = '🖐️ Qtd. Desejada atingida!\n✅ Numeros copiados';
    copiar()
}
}

        
        /*for (i = 0; i < fim; i++){
                window.open('https://api.whatsapp.com/send?phone='+ numeros3[i]);
              
                quantidadeRestantes.innerHTML = numeros3.length - fim;

        }*/

    






}

function copiar(){
    let textAviso = document.querySelector('.text-aviso');
    let inputNumeros = document.querySelector('.inpt-numeros input').value;
    let fim = document.querySelector('.inpt-final').value;
    let quantidadeTotal = document.querySelector('.qtd-total');
    let quantidadeRestantes = document.querySelector('.qtd-restantes');
    let mensagem = document.querySelector('.inpt-mensagens textarea').value;
        numeros3 = inputNumeros.replaceAll(' ', '');
        numeros3 = numeros3.replaceAll('-', '');
        numeros3 = numeros3.replaceAll('+', '');
        numeros3 = numeros3.split(',');
    let mensagemFiltrada = window.encodeURIComponent(mensagem);



    navigator.clipboard.writeText(numeros3.slice(numeros3.length - (numeros3.length-contador)));
   
    textAviso.innerText = '⚠️ Atividade finalizada!\n✅ Numeros copiados!\n🔒 Cole-os em um local seguro!\n';
    window.scrollTo(x = 0, y = 0); /*Voltando a tela para o início da página*/
}