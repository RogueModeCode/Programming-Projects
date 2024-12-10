const dictionaryFile = "wordlist.txt"

// return an array of words that can be made from the given letters

function createCombinations(letters) {
    let results = [];

    // base case
    if( letters.length === 1) {
        results.push(letters)
        return results
    }

    // recursive case
    for( let i=0; i < letters.length; i++ ) {
        let firstChar = letters[i]
        let otherChars = letters.substring(0, i) + letters.substring(i+1)
        let otherCombinations = createCombinations(otherChars)

        for(let j=0; j < otherCombinations.length; j++) {
            results.push(firstChar + otherCombinations[j])
        }
    }

    return results;
}

console.log( createCombinations("corey"))

function scrabble(letters) {
    
}

function factorial( n ) {
    // base case
    if( n==0 ) {
        return 1
    }

    //recusive case
    return n * factorial(n-1)
}

function factorial2 (n) {
    let result = n

    for( let i=1; i < n; i++) {
        result *= i
    }

    return result
}

// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89
function fib(n) {
    if(n == 0 || n == 1) {
        return 1
    }

    return fib(n-1) + fib (n-2)
}

console.log( fib( 10) ) 



// console.log( factorial(5) )
// console.log( factorial2(5) )