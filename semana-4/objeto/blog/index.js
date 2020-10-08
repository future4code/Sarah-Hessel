let arrayObjetos = []

function apertarBotao(){
    let armazenaTitulo = document.getElementById("titulo-post")
    let armazenaAutor = document.getElementById("autor-post")
    let armazenaConteudo = document.getElementById("conteudo-post")
    let imprimirPost = document.getElementById("container-de-posts")

    console.log(armazenaTitulo.value)
    console.log(armazenaAutor.value)

    imprimirPost.innerHTML +=`<h2>${armazenaTitulo.value}</h2>\n <p> Autor(a): ${armazenaAutor.value}</p><br><p>${armazenaConteudo.value}</p>`

    let infoPost = {
        titulo: armazenaTitulo.value,
        autor: armazenaAutor.value,
        conteudo: armazenaConteudo.value
    }

    arrayObjetos = [...arrayObjetos, infoPost] 
     
    armazenaTitulo.value = ""    // limpar o value do formulario, após clicado o botão.
    armazenaAutor.value = ""
    armazenaConteudo.value = ""

}

