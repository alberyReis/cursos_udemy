function teste01(num) {
    if(num > 7) {
        console.log(num)
        console.log("Final")
    }
}

teste01(6)
teste01(8)

function teste02(num) {
    if(num > 7); { // Cuidado com o ;, não usar com as estruturas de controle
        console.log(num)
    }
}

teste02(6)
teste02(8)