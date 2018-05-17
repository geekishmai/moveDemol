function setText() {
    document.getElementById("playButton").style.textDecoration = "overline";

}
function cancelText() {
    document.getElementById("playButton").style.textDecoration ="none";
}

document.getElementById("playButton").onclick=function () {
    move('.shadow')
        .to(500, 200)
        .rotate(180)
        .scale(.5)
        .set('background-color', '#FF0551')
        .set('border-color', 'black')
        .duration('3s')
        .skew(50, -10)
        .then()
        .set('opacity', 0)
        .duration('0.3s')
        .scale(0.1)
        .pop()
        .end();
};
console.log("ojbk");