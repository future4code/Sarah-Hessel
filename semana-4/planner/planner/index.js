function criarTarefa () {
    const inputTarefa = document.getElementById("tarefa")
    const diasDaSemana = document.getElementById("dias-semana")
    const listaTarefas = document.getElementById(escolherDia)

    if(inputTarefa !==  ""){
        listaTarefas.innerHTML += `<li>${inputTarefa.value}</li>`
        inputTarefa.value =""
    }
}