var hexInput = document.getElementById('hexInput');
var inputColor = document.getElementById('inputColor');

hexInput.addEventListener('keyup', () => {
    var hex = hexInput.value;
    if (!isValidHex(hex))
        return;

    var strippedHex = hex.replace('#', '');
    inputColor.style.backgroundColor = "#" + strippedHex;
})

var isValidHex = (hex) => {
    if (!hex) {
        return false;
    }
    var strippedHex = hex.replace('#', '');
    // console.log(strippedHex);
    return strippedHex.length === 3 || strippedHex.length === 6;
}