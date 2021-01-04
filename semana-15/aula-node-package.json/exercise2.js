const operacao  = process.argv[2]
const a = Number(process.argv[3])
const b = Number(process.argv[4])

switch(operacao) {
    case "soma":
        console.log(a + b) // o console log está sendo usado apenas para mostrar no terminal o resultado da operação. Recomenda-se usar o return.
        break;
    case "sub": 
        console.log(a - b)
        break;
    case "multi":
        console.log(a * b)
        break;
    case "div": 
        console.log(a / b)
        break;
}
