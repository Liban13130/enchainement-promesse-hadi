const form = document.querySelector('form')
const result = document.querySelector('.result')



function checkAllPromise(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(checkFly()),
            reject("Rien n'a été trouvé... Veuillez choisir une nouvelle destination.")
        }, 2000);
    })
}

function checkFly(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random() > 0.5){
                resolve(console.log("Vol disponible !"))
            }else{
                reject("Aucun vol disponible... Veuillez choisir une nouvelle destination.")
            }
        }, 2000);
    })
}

function checkHotel(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random() > 0.4){
                resolve(console.log("Hôtel disponible !"))
            }else{
                reject("Aucun hôtel disponible... Veuillez choisir une nouvelle destination.")
            }
        }, 2000);
    })
}

function checkCar(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random() > 0.3){
                resolve(console.log("Voiture disponible !"))
            }else{
                reject("Aucun voiture disponible... Veuillez choisir une nouvelle destination.")
            }
        }, 2000);
    })
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkFly()
    .then((resultFly) =>{
        console.log(resultFly);
        return checkHotel()
    })
    .catch((message) => {
        return result.innerHTML = `<p class="box has-background-grey-darker has-text-danger has-text-centered"> ${message}</p>`
    })
    .then((resultHotel) => {
        console.log(resultHotel);
        return checkCar()
    })
    .catch((message) => {
        return result.innerHTML = `<p class="box has-background-grey-darker has-text-danger has-text-centered"> ${message}</p>`
    })
    .then((resultCar) => {
        console.log(resultCar);
        return result.innerHTML = `<p class="box has-background-grey-darker has-text-success has-text-centered"> Tout est OK !</p>`
    })
    .catch((message) => {
        return result.innerHTML = `<p class="box has-background-grey-darker has-text-danger has-text-centered"> ${message}</p>`
    })




    // checkAllPromise()
    // .then((message) => {
    //     return checkFly()
    //     .then((result) => {
    //         console.log(result);
    //     })
    //     .catch((message) => {
    //         return result.innerHTML = `<p class="box has-background-grey-darker has-text-danger has-text-centered"> ${message}</p>`
    //     })
    // })
    // .then((result) => {
    //     return checkHotel()
    //     .then((result) => {
    //         console.log(result);
    //     })
    //     .catch((message) => {
    //         return result.innerHTML = `<p class="box has-background-grey-darker has-text-danger has-text-centered"> ${message}</p>`
    //     })
    // })
    // .then((result) => {
    //     return checkCar()
    //     .then((result) => {
    //         console.log(result);
    //     })
    //     .catch((message) => {
    //         return result.innerHTML = `<p class="box has-background-grey-darker has-text-danger has-text-centered"> ${message}</p>`
    //     })
    // })
    // .then((message) => {
    //     return result.innerHTML = `<p class="box has-background-grey-darker has-text-success has-text-centered"> ${message}</p>`
    // })
    // .catch((message) => {
    //     return result.innerHTML = `<p class="box has-background-grey-darker has-text-danger has-text-centered"> ${message}</p>`
    // })
})







//     .catch((message) => {
//        return result.innerHTML = `<p class="box has-background-grey-darker has-text-danger has-text-centered"> ${message}</p>`
//     })
//     .then(() => {
//         return checkHotel()
//     })
//     .catch((message) => {
//        return result.innerHTML = `<p class="box has-background-grey-darker has-text-danger has-text-centered"> ${message}</p>`
//     })
//     .then(() => {
//         return checkCar()
//     })
//     .catch((message) => {
//        return result.innerHTML = `<p class="box has-background-grey-darker has-text-danger has-text-centered"> ${message}</p>`
//     })
    
// })

