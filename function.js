function decimalToString(decimalRepresentation, delimiter = " ") {
    let str = '';
    let decimalValues = decimalRepresentation.split(delimiter);
    for (let i = 0; i < decimalValues.length; i++) {
        str += String.fromCharCode(parseInt(decimalValues[i]));
    }
    return str;
}

/*
Example:

window.onload = function() {
    const element = document.querySelector("#myElement");
    if (element) {
        const decimalRepresentation = decimalToString(element.innerHTML);
        element.innerHTML = decimalRepresentation;
    }
};

OnClick Example: 

document.querySelector("#myButton").addEventListener("click", function() {
    const element = document.querySelector("#myElement");
    if (element) {
        const decimalRepresentation = decimalToString(element.innerHTML);
        element.innerHTML = decimalRepresentation;
    }
});

*/