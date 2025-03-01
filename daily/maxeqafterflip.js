/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxEqualRowsAfterFlips = function(matrix) {
    let map = new Map();

    for (const row of matrix) {
        const pattern = row[0] === 0 
            ? row.join('')
            : row.map(bit => bit ^ 1).join('');

            map.set(pattern, (map.get(pattern) || 0) + 1);
    }

    return Math.max(...map.values());
};