//const texto = document.querySelector("#texto");
//const mensagem = document.querySelector("#mensagem");

function btnCriptografar() {
    const textoExcriptado = criptografar(texto.value);
    mensagem.value = textoExcriptado;
    document.styleSheets.backgroundImage ="none";
}

function criptografar(stringEncriptada){
    let chaves = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"] ];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < chaves.length; i++){
        if(stringEncriptada.includes(chaves[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(chaves[i][0], chaves[i][1]);
        }
    }
    console.log("chama criptografar");
    return stringEncriptada;
}

function btnDescriptografar() {
    const textoCriptografado = descriptografar(texto.value);
    mensagem.value = textoCriptografado;
}

function descriptografar(stringEncriptada){
    let chaves = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"] ];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < chaves.length; i++){
        if(stringEncriptada.includes(chaves[i][1])){
            stringEncriptada.replaceAll(chaves[i][1], chaves[i][0]);
        }
    }
    console.log("chama descriptografar");
    return stringEncriptada;
}

function copiar(){
    //pegar texto do campo
    var copiarTexto = document.getElementById("mensagem");
    //selecionar o texto do campo
    copiarTexto.select();
    copiarTexto.setSelectionRange(0, 99999);//para dispositivos mobile

    //copiar texto dentro do campo
    navigator.clipboard.writeText(copiarTexto.value);
    console.log("chama copiar");
}
// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

// Requisitos:
// - Deve funcionar apenas com letras minúsculas
// - Não devem ser utilizados letras com acentos nem caracteres especiais
// - Deve ser possível converter uma palavra para a versão criptografada e também retornar uma palavra criptografada para a versão original.

// Por exemplo:
// "gato" => "gaitober"
// gaitober" => "gato"

// A página deve ter campos para inserção do texto a ser criptografado ou descriptografado, e a pessoa usuária deve poder escolher entre as duas opções
// O resultado deve ser exibido na tela.
// Extras:
// - Um botão que copie o texto criptografado/descriptografado para a área de transferência - ou seja, que tenha a mesma funcionalidade do ctrl+C ou da opção "copiar" do menu dos aplicativos.

// Temos um período de tempo de duas semanas para desenvolver o projeto e vamos trabalhar com o sistema ágil de desenvolvimento, utilizando o Trello da seguinte forma:

// A coluna Pronto pra iniciar apresenta os cartões com os elementos ainda não desenvolvidos.
// Já na coluna Desenvolvendo ficarão os elementos que você estiver desenvolvendo no momento. Ao iniciar uma tarefa, você poderá mover o cartão que contém a tarefa para esta coluna.
// No Pausado estarão os elementos que você começou a desenvolver, mas precisou parar por algum motivo.
// Por fim, a coluna Concluído terá os elementos já concluídos.