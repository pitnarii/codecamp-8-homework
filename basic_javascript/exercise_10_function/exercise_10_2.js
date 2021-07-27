function drawInt(n) {
    let asterisk ="";
    for (let b = 0; b < n; b++) {
        for (let i = 0; i < n; i++) {
            asterisk = asterisk + "*"
        }
    }
    console.log(asterisk);
}