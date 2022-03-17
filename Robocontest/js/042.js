const fs = require('fs');
let input = fs.readFileSync('input.txt', 'utf-8')

let signs = "+*/-^"
function convert (string) {
    let index = 0
    let expression = ""
    let sign = ""
    while (index < string.length) {
        if (signs.includes(string[index])) {
            sign = string[index]
            index += 1
            continue
        }
        if (string[index] === "(") {
            let n = 1
            let character = "("
            while (n) {
                index += 1
                if (string[index] === ")") {
                    n -= 1
                    character += ")"
                } else if (string[index] === "(") {
                    n += 1
                    character += "("
                } else {
                    character += string[index]
                }
            }
            character = character.slice(1, -1)
            expression += convert(character)
        } else if (string[index] == ')') {
            index += 1
            continue
        } else {
            expression += string[index] + sign
            sign = ""
            index += 1
        }
    }
    return expression + sign
}


process.stdout.write( '' + convert(input))