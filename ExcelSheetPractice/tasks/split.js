const arr = ['Subham123','Mahesh123']
let arr2 = []
let arr3 = []

arr.map(value=>{
    arr2 = []
    for (var i = 0; i < value.length; i++) {
        arr2.push(value.charAt(i))
        
    }
    arr3.push(arr2)
})

console.log(arr3)