function sum(...args) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let total = 0
            args.map(value => {
                total += value
            })
            resolve(total)
        }, 2000)
    })
}


(async function run() {
    let result = await sum(1, 4)
    console.log(result)
    result = await sum(result, 5)
    console.log(result)
    result = await sum(result, 5)
    console.log(result)
    result = await sum(result, 5)
    console.log(result)
    result = await sum(result, 5)
    console.log(result)
    result = await sum(result, 5)
    console.log(result)
})()