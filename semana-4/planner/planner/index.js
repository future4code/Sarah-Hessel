function criarTarefa () {
    const inputTarefa = document.getElementById("tarefa") 
    const selectDias = document.getElementById("dias-semana")

    if(inputTarefa.value === ""){   // Se a caixa de texto estiver vazia, apresenta um alerta para o usuario e retorna.
        alert("Escreva algo antes de apertar o botão :D")
        return
    }
    console.log(inputTarefa.value)  // Imprime no console do navegador cada value inserido.

    switch(selectDias.value){
        case "domingo":
            document.getElementById("domingo").innerHTML += `<li>${inputTarefa.value}</li>`
            break
        case "segunda":
            document.getElementById("segunda").innerHTML += `<li>${inputTarefa.value}</li>`
            break
        case "terca":
            document.getElementById("terca").innerHTML += `<li>${inputTarefa.value}</li>`
            break
        case "quarta":
            document.getElementById("quarta").innerHTML += `<li>${inputTarefa.value}</li>`
            break
        case "quinta":
            document.getElementById("quinta").innerHTML += `<li>${inputTarefa.value}</li>`
            break
        case "sexta":
            document.getElementById("sexta").innerHTML += `<li>${inputTarefa.value}</li>`
            break
        case "sabado":
            document.getElementById("sabado").innerHTML += `<li>${inputTarefa.value}</li>`
            break    
    }

    
    document.getElementById(id).style.property = new style
    inputTarefa.value = "" // Essa linha serve para limpar o value do input, após cada adição na lista.
}

