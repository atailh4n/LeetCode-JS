/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var m_o = new Map([
        ['(', ')'],
        ['[', ']'],
        ['{', '}']
    ]);

    var stack = [];

    for (let i = 0; i < s.length; i++) {
        let element = s[i];

        if (m_o.has(element)) {
            // If the character is an opening bracket, push it to the stack
            stack.push(element);
        } else {
            // If the character is a closing bracket
            if (stack.length === 0 || m_o.get(stack.pop()) !== element) {
                // If the stack is empty or the closing bracket doesn't match the last opened bracket
                return false;
            }
        }
    }

    // If the stack is empty, all brackets were matched correctly
    return stack.length === 0;
};

console.log(isValid("([])")); // Should return true
