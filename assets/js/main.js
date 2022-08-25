console.log('Start warten für 3 Sekunden ....')

const timeout = 3000

setTimeout(() => {

    console.log('Erledigt, du hast 3 sec gewartet')

}, timeout)

const timer = () => {

    let date = new Date()
    console.log(date.toLocaleTimeString())
}

//setInterval(timer,1000)

let number = 10

const feierabend = () =>{
    if(number === 0){
        console.log('Feierabend')
        clearInterval(myInterval)
    }else{
        console.log(number)
        number -=1
    }
}

let myInterval = setInterval(feierabend, 1000)