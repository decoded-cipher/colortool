var hexInput = document.getElementById('hexInput');
var inputColor = document.getElementById('inputColor');

var sliderText = document.getElementById('sliderText');
var slider = document.getElementById('slider');

var alteredColor = document.getElementById('alteredColor');

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
    var r = parseInt(strippedHex.substring(0, 2), 16);
    var g = parseInt(strippedHex.substring(2, 4), 16);
    var b = parseInt(strippedHex.substring(4, 6), 16);
    return {
        r,
        g,
        b
    };
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


var alterColor = (hex, per) => {
    var {
        r,
        g,
        b
    } = convertHexToRGB(hex);

    var amount = Math.floor((per / 100) * 255);
    // console.log(amount);

    var newR = increaseWithinRange(r, amount);
    var newG = increaseWithinRange(g, amount);
    var newB = increaseWithinRange(b, amount);
    // console.log({
    //     newR,
    //     newG,
    //     newB
    // });

    return convertRGBtoHex(newR, newG, newB);
}
// console.log(alterColor('fff', 10));


var increaseWithinRange = (hex, amount) => {
    var newHex = hex + amount;
    if (newHex > 255)
        return 255;
    if (newHex < 0)
        return 0;
    return newHex;
}
// console.log(alterColor('000', 10));


slider.addEventListener('input', () => {
    if(!isValidHex(hexInput.value))
        return;
    
    // console.log(slider.value);
    sliderText.textContent = `${slider.value}%`;

    var alteredHex = alterColor(hexInput.value, slider.value);
    alteredColor.style.backgroundColor = alteredHex;
    alteredColorText.innerHTML = `Altered Color ${alteredHex}`;
})