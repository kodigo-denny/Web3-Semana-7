function mensaje(){
    alert("Hola mundo")
}

function solicitarNumero(titulo){
    let num = Number(prompt(titulo))

    return num
}

function sumar(n1, n2){
    return n1 + n2
}

function restar(n1, n2){
    return n1 - n2
}

function multiplicar(n1, n2){
    return n1 * n2
}

function dividir(n1, n2){
    return n1 / n2
}

function operar(op){
    let num1 = solicitarNumero("Ingrese el primer numero:")
    let num2 = solicitarNumero("Ingrese el segundo numero:")
    let resultado
    if(op == 1)
        resultado = sumar(num1, num2)
    else if(op == 2)
        resultado = restar(num1, num2)
    else if(op == 3)
        resultado = multiplicar(num1, num2)
    else if(op == 4)
        resultado = dividir(num1, num2)

    alert("El resultado es: " + resultado)
}