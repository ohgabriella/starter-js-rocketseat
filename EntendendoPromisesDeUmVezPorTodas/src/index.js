


const coinFlip = new Promise((resolve, reject) => Math.random() > 0.5 ? resolve('Yay') : reject('Opss'))

coinFlip
    .then((data) => console.log(data, '1'))
    .catch((err) => console.log('erro1'))


    
new Promise((resolve, reject) => {
    setTimeout(() => reject('End'), 2000);
})

promise.then((data) => console.log(data))
