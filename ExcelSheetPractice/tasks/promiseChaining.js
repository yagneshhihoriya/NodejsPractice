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

sum(1, 4)
  .then(value => {
    console.log(value)
    return sum(value, 5)
  })
  .then(value => {
    console.log(value)
    return sum(value, 5)
  })
  .then(value => {
    console.log(value)
    return sum(value, 5)
  })
  .then(value => {
    console.log(value)
  })
