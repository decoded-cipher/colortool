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


var convertHexToRGB = (hex) => {
    if (!hex) {
        return null;
    }
    var strippedHex = hex.replace('#', '');

    if (strippedHex.length === 3) {
        strippedHex = strippedHex[0] + strippedHex[0] +
            strippedHex[1] + strippedHex[1] +
            strippedHex[2] + strippedHex[2];
    }
    // console.log(strippedHex);
    var r = parseInt(strippedHex.substring(0,2), 16);
    var g = parseInt(strippedHex.substring(2,4), 16);
    var b = parseInt(strippedHex.substring(4,6), 16);
    return {r, g, b}; 
}
// console.log(convertHexToRGB("ffe"));


var convertRGBtoHex = (r, g, b) => {
    var firstPair = ('0' + r.toString(16)).slice(-2);
    var secondPair = ('0' + g.toString(16)).slice(-2);
    var thirdPair = ('0' + b.toString(16)).slice(-2);

    var hex = '#' + firstPair + secondPair + thirdPair;
    return hex;
}
// console.log(convertRGBtoHex(255, 238, 255));