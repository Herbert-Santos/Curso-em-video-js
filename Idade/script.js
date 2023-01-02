function Verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var formulario = window.document.getElementById('txtano')
    var resultado = window.document.getElementById('div#resultado')

    if(formulario.value.length == 0 || formulario.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else{
        window.alert('Tudo OK')
    }
}