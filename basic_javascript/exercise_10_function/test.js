function drawInt(n) {
    let result = '';
    let newLine = ''
    for (i = 0; i < n; i++) {
        result = result+i
        for (j = 0; j !=n; j++) {
            newLine = result + `${i + 1}`
            console.log(newLine);
        }
    }
}
    function drawInt(n) {
        let result = '';
        let newLine = ''
        for (j = -1; j < n; j++) {
            for (i = 0; i < n; i++) {
                result = result + `${i + 1}`
            }
            console.log(result);
        }
    }