const makeChessBoard = () => {
    const cells = ["#", " ", "#", " ", "#", " ", "#", " "]
    for (let i = 0; i < 20; i++) {
        if (i % 2 === 0) {
            console.log(cells.join(""));
        } else {
            console.log(cells.reverse().join(""));
        }
    }
}
makeChessBoard();