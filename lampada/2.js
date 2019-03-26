window.addEventListener('load',function()  //função responsavel por carregar os eventos após a pagina estiver carregada
{
	var botao = document.getElementById('botao').addEventListener('click', lista);
	var lampada = document.getElementById('imagem').addEventListener('click', acender);

});



function acender()
{
	 var teste = document.getElementById('imagem');

	 if(teste.src.match('apagado'))
	 {
	 	teste.src = 'aceso.gif';
	 }
	 else
	 {
	 	teste.src = 'apagado.gif';
	 }
}

function lista() 
{
    var novo_li = document.createElement("LI");
    var palavra = document.getElementById('entrada').value;
    var saida = document.createTextNode(palavra);
   
    novo_li.appendChild(saida);
    document.getElementById("listar").appendChild(novo_li);
}


