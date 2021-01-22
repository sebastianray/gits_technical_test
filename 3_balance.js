function balancedBracket(bracket) {

    if (bracket.length <= 1)
        return "NO"

    let matchFirst, el
    let stack = []

    let firstBrackets = ['[', '{', '(']
    let lastBrackets = [']', '}', ')']

    for (let i = 0; i < bracket.length; i++) {
        el = bracket[i];
        if (lastBrackets.indexOf(el) > -1) {
            matchFirst = firstBrackets[lastBrackets.indexOf(el)]
            if (stack.length == 0 || (stack.pop() != matchFirst)) {
                return "NO"
            } else {
                return "YES"
            }
        } else {
            stack.push(el)
        }
    }
    return (stack.length == 0)
};

console.log(balancedBracket("[()]"))
console.log(balancedBracket("[(])"))
console.log(balancedBracket("{[}]"))
console.log(balancedBracket("[{}]"))
console.log(balancedBracket("{}"))