function contar(){
    let inicio = document.getElementById('txtinicio')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpasso')
    let resposta = document.getElementById('resposta')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        //window.alert('[ERRO] Faltam dados!')
        resposta.innerHTML = 'Impossivel contar!'
    }else{
        resposta.innerHTML = 'Contando: <BR>'
        let ini = Number(inicio.value)
        let fi = Number(fim.value)
        let pas = Number(passo.value)

        if( ini <=0){
            window.alert('Passo invalido! Considerando passo 1')
            pas = 1
        }

        if(ini < fi){
            for (let c=ini; c<=fi; c+=pas){
                resposta.innerHTML += `${c}`
            }
        }else {
            for(let c=ini; c>=fi; c-=pas){
                resposta.innerHTML+=`${c}`
            }
        }
        resposta.innerHTML += `${c}`
    }
}