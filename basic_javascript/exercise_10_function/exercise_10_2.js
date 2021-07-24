function drawInt(n) {
    let asterisk ="";
    for (let j = 0; j < n; j++) {
        for (let i = 0; i < n; i++) {
            asterisk = asterisk + "*"
        }
    }
    console.log(asterisk);
}