function drawInt(n) {
    let result = '';
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            result = result + i; 
        }
        result=result+'\n';
    }
console.log(result);
}