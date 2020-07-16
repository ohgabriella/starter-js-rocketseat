const delay = () => new Promise(resolve => setTimeout(() => {
resolve('ok')}, 1000));

async function umPorSegundo() {sky
    console.log(await delay())
    console.log(await delay())
    console.log(await delay())

}

umPorSegundo();


