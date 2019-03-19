function mostrarNum(valor)
{
	var numero = valor.value;
	var resultado_saida = document.getElementById("calc-output");

	if(resultado_saida.textContent == "0")
	{
		resultado_saida.textContent=""
		resultado_saida.textContent += numero;
	}
	else
	{
		resultado_saida.textContent += numero;
	}
}

function calculo()
{
	resultado_saida = document.getElementById("calc-output");
	resultado_saida.textContent = eval(resultado_saida.textContent);
}

function limpar()
{
	resultado_saida = document.getElementById("calc-output");
	resultado_saida.textContent = "0";
}



