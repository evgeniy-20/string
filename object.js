const result = 'aabbbcccc'
const countLetters = (input) =>  {
    const newString = {}
    for(let i = 0; i < input.length; i++) {
        const string = input[i];
        newString[string] = newString[string] ? newString[string] + 1 : 1
    }
    return newString;
}
const result1 = countLetters(result);   
console.log = (result1);