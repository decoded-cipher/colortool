var isValidHex = (hex) => {
    if (!hex) {
        return false;
    }
    var strippedHex = hex.replace('#', '');
    // console.log(strippedHex);
    return strippedHex.length === 3 || strippedHex.length === 6;
}

