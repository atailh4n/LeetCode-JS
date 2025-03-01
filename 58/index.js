/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let t = s.split(" ");
    let current = "";
    for (let i = 0; i < t.length; i++) {
        const e = t[i];
        e != '' ? current = e : current = current;
    }
    return current.length;
};

console.log(lengthOfLastWord("luffy is still joyboy"))