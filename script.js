const inputName = document.getElementById("inputName");
const inputNumber = document.getElementById("inputNumber");
const outputText = document.getElementById("outputText");
const outputNumber = document.getElementById("outputNumber");
const outputArray = document.getElementById("outputArray");
const submitText = document.getElementById("submitText");
const submitArray = document.getElementById("submitArray");
const submitNumber = document.getElementById("submitNumber");




const greetByNumber = (num, limit = 7) => {
    if (num > limit) return 'Hello!'
    else return 'Not hello! :('
}

const greetByName = (name, expectedName = 'John') => {
    if (name === expectedName) return `Hello, ${name}!`
    else return 'There is no such name!'
}


submitText.addEventListener('click', () => {
    const name = inputName.value.trim();
    const nameGreeting = greetByName(name);
    outputText.textContent = `${nameGreeting}`;
} )
submitNumber.addEventListener('click', () => {
    const number = parseInt(inputNumber.value);
    const numberGreeting = greetByNumber(number);

    outputNumber.textContent = `${numberGreeting}`;
} )

submitArray.addEventListener('click', () => {
    const multiples = hasMultipleOfThree();
    outputArray.textContent = `${multiples.join(', ')}`;
});



const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const hasMultipleOfThree = (array = numArray) => {
    return array.filter(num => num % 3 === 0)
}

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



const bracketStack = '[((())()(())]]'
// This sequence is incorrect because of the extra bracket ']'
const bracketStack1 = '[({})](){}'
const bracketStack2 = '()'


console.log(isBracketSequenceTrue(bracketStack))
console.log(isBracketSequenceTrue(bracketStack1))
console.log(isBracketSequenceTrue(bracketStack2))



