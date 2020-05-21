const result = 'бабочки';
function string(str) {
    let newString = '';
    for(let i = 0; i < str.length; i++) {
        if(i % 2 === 0) {
            newString = newString + str[i]
        }
    }
    return newString;
}
console.log(string(result));
console.log(string('абрикоса'));