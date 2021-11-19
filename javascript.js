let body = document.querySelector('body');
let modal = document.createElement('div');
let modaldentro = document.createElement('div');
let botao = document.createElement('button');
botao.id = 'botaoAbrir';
let botaoDENTRO = document.createElement('div');
let estilomodal = document.createElement('div');
let erro = document.createElement('div');
let enviado = document.createElement('div');


let info = [];

modal.id = 'modal';
erro.id = 'erro'
enviado.id = 'enviado'
erro.innerHTML = "ESTA FALTANDO ALGO!"
enviado.innerHTML = "CADASTRADO COM SUCESSO"
modaldentro.id = 'modal_dentro';
botaoDENTRO.id = 'divBOTAOFECHAR';
body.appendChild(botao);
botao.onclick = abrir
botao.innerHTML = "Abrir"

modaldentro.appendChild(estilomodal);
modal.appendChild(modaldentro)
modaldentro.appendChild(botaoDENTRO);
estilomodal.innerHTML = estilomodal.innerHTML + "<h1 id='titulomodal'> CADASTRE-SE </h1><p><div class='estiloModal'><input id='nome' type='text' placeholder='Digite seu nome'></input>  <input id='sobrenome' type='text' placeholder='Digite seu sobrenome'></input><input id='dataNascimento' type='date' placeholder='Digite sua data De nascimento'> <button id='cadastro' onclick=cadastro() >Cadastrar</button><button id='botaoFechar' onclick=fechar() >Fechar</button></div>";

function abrir(){
body.appendChild(modal);
}

function cadastro(){
    var nome1 = document.getElementById('nome').value;
    var sobrenome1 = document.getElementById('sobrenome').value;
    var data = document.getElementById('dataNascimento').value;


    if ((!sobrenome1 || sobrenome1 == '') || (!nome1 || nome1 == '') || (!data || data == '')) {
        estilomodal.appendChild(erro);
        erro.style.cssText = 'background-color: red;' + 'color: white;';
        enviado.style.cssText = 'box-shadow: none;' + 'user-select: none;' + 'width: 0;' + 'color: transparent;' + 'padding-left: 0px;' ;
    }else{
        erro.style.cssText = 'background-color: transparent;' + 'color: transparent;' + 'user-select: none;' + 'box-shadow: none;';
        enviado.style.cssText = 'box-shadow: 0px 0px 60px rgb(49, 134, 0);' + 'width: 250;' + 'color: white' ;

        estilomodal.appendChild(enviado);

        let retornar = {
            nome : nome,
            sobrenome : sobrenome, 
            data : data
        }
        

        setTimeout(function(){
            onclick=fechar();
            },1000);

        setTimeout(function(){ 
            nome.value = ' ';
            sobrenome.value = ' ';
            dataNascimento.value = ' ';
            }, 950);

        info.push(retornar);    
    }
    
}

function fechar(){
body.removeChild(modal);
}