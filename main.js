const numeroSenha = documento.querySelector('.parametro-senha_texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinusculas = 'abcdefghijklmopqrstuvwxyz';
const numeros = '0123456789';
const simbolos = '!@%*?';
const botoes = document.querySelectorAll('.paramentro-senha__botao')
const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox');
const forcaSenha = document.querySelector('forca');


botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;
 
function diminuiTamanho(){
    if(tamanhoSENHA >1){
        TAMANHOSenha--;
    }
    numeroSenha.textContent = tamanhoSenha
    geraSenha();
}

function geraSenha() {
    let alfabeto = '';
    if (checkbox[0].chacked){
        alfabeto = alfabeto + letrasMaiusculas;
    }
   if(checkbox[1].checked ) {
    alfabeto = alfabeto + letrasMinusculas;
   }
    if (checkbox[2].chacked){
        alfabeto = alfabeto + numeros;
    }
    if (checkbox[3].chacked){
        alfabeto = alfabeto + simbolos;
    }    
    if (alfabeto.length === 0) {
        campoSenha
    }
}