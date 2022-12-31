let num = 0

function acrescentar(){
    num = num + 1
    value.innerHTML = `${num}`
    cor()
}

acrescentar()

const subtrair = () => {
    num = num - 1
    value.innerHTML = `${num}`
    cor()
}

subtrair()

function reset(){

    num = 0
    value.innerHTML = `${num}`
    cor()
}

reset()

function cor(){
    if (num > 0) {
        document.getElementById("value").style.color = "#008800"
    } else if (num < 0){
        document.getElementById("value").style.color = "#880000"
    } else {
        document.getElementById("value").style.color = "hsl(205, 86%, 17%)"
    }
}