const greetByNumber = (num, limit = 7) => {
    if (num > limit) return 'Hello!'
    else return 'Not hello! :('
}

console.log(
    greetByNumber(1, 2)
)




const greetByName = (name, expectedName = 'John') => {
    if (name === expectedName) return `Hello, ${name}!`
    else return 'There is no such name!'
}


console.log(
    greetByName('Alex', 'Alex')
)





const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const hasMultipleOfThree = (array = numArray) => {
    return array.filter(num => num % 3 === 0)
}


console.log(
    hasMultipleOfThree()
)



const bracketStack = '[((())()(())]]'

// This sequence is incorrect because of the extra bracket ']'


const bracketStack1 = '[({})](){}'
const bracketStack2 = '()'

const isBracketSequenceTrue = (bracket) => {
    let stack = []
    let brackets = {
        ')': '(',
        '}': '{',
        ']': '[',
    }
    
    for (let i = 0; i < bracket.length; i++) {
        const current = bracket[i]

        if (isClosedBracket(current)) {
            if (brackets[current] !== stack.pop()) return false
        } else {
            stack.push(current)
        }
    }
    return stack.length === 0
}


const isClosedBracket = (char) => {
    return [')', '}', ']'].indexOf(char) > -1
}


console.log(isBracketSequenceTrue(bracketStack))
console.log(isBracketSequenceTrue(bracketStack1))
console.log(isBracketSequenceTrue(bracketStack2))














