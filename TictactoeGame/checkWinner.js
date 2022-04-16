function checkWinner(table) {
    const winLine = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6],
    ];

   return winLine.find(([a, b, c]) => {
        if (table[a] !== null && table[a] === table[b] && table[a] === table[c]) {
            return true
        }
        return false
    })
}

export default checkWinner