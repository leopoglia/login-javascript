let body = document.querySelector('body');
let modal = document.createElement('div');
let modaldentro = document.createElement('div');
let botao = document.createElement('div');
let botaoDENTRO = document.createElement('div');
let titulomodal = document.createElement('div');


modal.id = 'modal';
modaldentro.id = 'modal_dentro';
botaoDENTRO.id = 'divBOTAOFECHAR';

modaldentro.appendChild(titulomodal);
modal.appendChild(modaldentro)
body.appendChild(botao);
modaldentro.appendChild(botaoDENTRO);

titulomodal.innerHTML = titulomodal.innerHTML + "<h1 id='titulomodal'> CADASTRE-SE </h1><p> <h3 id='texto'>Se cadastre no site agora, Gerencie suas informacoes, privacidade e seguranca para que a Cepexis Games atenda suas necessidades. Caso voce nao deseja se cadastrar melhor ja apertar no X ali em cima e sair da pagina, muito obrigado pela visita =)</h3><p> <input id='nomeModal' type='text' placeholder='Digite seu login...'></input>  <input id='senhaModal' type='password' placeholder='Digite sua senha...'></input><input id='dataNascimento' type='date' placeholder='Digite sua data De nascimento'> <button id='cadastro' onclick=cadastro() >Cadastrar</button>";
botaoDENTRO.innerHTML = botaoDENTRO.innerHTML + "<button id='botaoFechar' onclick=fechar() >X</button>";
botao.innerHTML = botao.innerHTML + "<button id='botaoAbrir' onclick=abrir() >Abrir</button>";


function abrir(){
body.appendChild(modal);
}

function fechar(){
body.removeChild(modal);
}