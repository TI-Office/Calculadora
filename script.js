function insert(num)
{
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}
function clean()
{
    document.getElementById('resultado').innerHTML = "";
}
function back()
{
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}
function calcular()
{
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else
    {
        document.getElementById('resultado').innerHTML = ""
    }
}
function escuro(){
    document.getElementById('noite').innerHTML;
    document.getElementById('noite').innerHTML = "<style>.fundo{ background-image: linear-gradient(45deg,rgb(29, 29, 29), rgb(20, 20, 20));}</style>"
}

function claro(){
    document.getElementById('noite').innerHTML;
    document.getElementById('noite').innerHTML = "<style>.fundo{ background: #ffffff;}</style>"
}