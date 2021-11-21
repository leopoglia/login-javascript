let body = document.querySelector('body');
let modal = document.createElement('div');
let modaldentro = document.createElement('div');
let botao = document.createElement('button');
botao.id = 'botaoAbrir';
let botaoDENTRO = document.createElement('div');
let estilomodal = document.createElement('div');
let erro = document.createElement('div');
let enviado = document.createElement('div');
let h1 = document.createElement('h1');
let estilo = document.createElement('div');
let inputNome = document.createElement('input');
let inputSenha = document.createElement('input');
let inputData = document.createElement('input');
let cadastroBotao = document.createElement('button');
let fecharBotao = document.createElement('button');
let tabela = document.createElement('table');
tabela.id = 'corpo';
let tr = document.createElement('tr');
let tdnome = document.createElement('td');
let tdsobrenome = document.createElement('td');
let tddata = document.createElement('td');

let info = [];
botao.onclick = abrir
modal.id = 'modal';
modaldentro.id = 'modal_dentro';
h1.appendChild(estilo);
h1.id = 'titulomodal';
h1.innerHTML = 'CADASTRE-SE'
estilomodal.appendChild(h1);

estilomodal.className = 'estiloModal';
modaldentro.appendChild(estilomodal);


inputNome.id = 'nome';
inputNome.placeholder = "Digite seu nome";
estilomodal.appendChild(inputNome);

inputSenha.id = 'sobrenome';
inputSenha.placeholder = "Digite seu sobrenome";
estilomodal.appendChild(inputSenha);

inputData.id = 'dataNascimento';
inputData.type = 'date';
estilomodal.appendChild(inputData);

cadastroBotao.id = 'cadastro';
cadastroBotao.onclick = cadastro;
cadastroBotao.innerHTML = 'Cadastrar';
estilomodal.appendChild(cadastroBotao);

fecharBotao.id = 'botaoFechar';
fecharBotao.onclick = fechar;
fecharBotao.innerHTML = 'Fechar';
estilomodal.appendChild(fecharBotao);

erro.id = 'erro'
erro.innerHTML = "ESTA FALTANDO ALGO!"
enviado.id = 'enviado'
enviado.innerHTML = "CADASTRADO COM SUCESSO"
body.appendChild(botao);
botao.innerHTML = "Abrir"
modal.appendChild(modaldentro)
modaldentro.appendChild(botaoDENTRO);

function abrir(){
body.appendChild(modal);
}

function cadastro(){
    let nome1 = document.getElementById('nome').value;
    let sobrenome1 = document.getElementById('sobrenome').value;
    let data = document.getElementById('dataNascimento').value;


    if ((!sobrenome1 || sobrenome1 == '') || (!nome1 || nome1 == '') || (!data || data == '')) {
        estilomodal.appendChild(erro);
        erro.style.cssText = 'background-color: red;' + 'color: white;';
        enviado.style.cssText = 'box-shadow: none;' + 'user-select: none;' + 'width: 0;' + 'color: transparent;' + 'padding-left: 0px;' ;
    }else{
        erro.style.cssText = 'background-color: transparent;' + 'color: transparent;' + 'user-select: none;' + 'box-shadow: none;';
        enviado.style.cssText = 'box-shadow: 0px 0px 60px rgb(49, 134, 0);' + 'width: 250;' + 'color: white' ;

        estilomodal.appendChild(enviado);

        
        let retornar = {
            nome : nome1,
            sobrenome : sobrenome1, 
            data : data
        }
        info.push(retornar);    

        setTimeout(function(){
            estilomodal.removeChild(enviado);
        },1000)

        setTimeout(function(){
            fechar();
        },500);

        setTimeout(function(){
            nome.value = '';
            sobrenome.value = '';
            dataNascimento.value = '';
        },200)    

        tabelona();
    } 
}

function fechar(){
    nome.value = '';
    sobrenome.value = '';
    dataNascimento.value = '';
    body.removeChild(modal);
    estilomodal.removeChild(erro);
}

function tabelona(){

    tdnome.textContent = nome.value;
    tdsobrenome.textContent = sobrenome.value;
    tddata.textContent = dataNascimento.value;
    
    tr.appendChild(tdnome);
    tr.appendChild(tdsobrenome);
    tr.appendChild(tddata);
    body.appendChild(tr);
    tabela.appendChild(tr);
    body.appendChild(tabela);
}