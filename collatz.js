
// if even: divide by 2
// if odd: mult by 3 and add 1
// repeat until the result is 1
// 23 => 70
// 70 => 35
// 35 => 106
// 106 => 53
// 53 => 160
// 160 => 80
// 40 => 20
// 20 => 10
// 5 => 16
// 8 => 4 
// 4 => 2
// 2 => 1

function collatz(number) {

    let array = []
    let currentNumber = number
    while ( currentNumber != 1) {
        array.push(currentNumber)

        if( currentNumber %2 == 0) {
            currentNumber = currentNumber / 2
        }
        else {
            currentNumber = currentNumber*3 + 1
        }
     }

     array.push(1)

    return array
}

let max = 1
let startingNumber = 0

for ( let i=100000000; i < 1000000000; i++) {
    const array = collatz(i)
    if ( array.length > max )
    {
        max = array.length
        startingNumber = i
    }
    //console.log( array.length)
}
console.log(`Max: ${max}`)
console.log(`Starting Number: ${startingNumber}`)
