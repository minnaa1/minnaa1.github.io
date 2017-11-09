console.log("Hello");
var requiredCredits = 40;
var myCredits;
var missingCredits;
var calculateButton = document.getElementById("calculate");
var resultBox = document.getElementById("result");
var generateButton = document.getElementById("generateBoxes");
var numberOfBoxes = 0;
var sumOfCredits = 0;

init();

function init(){
    generateButton.addEventListener("click",generate);
    calculateButton.addEventListener("click", calculateCredits);
}

function createInputBoxes(elementID){
    var inputContainerElement = document.getElementById("inputContainer");

    var inputElem = document.createElement("input");
    inputElem.id = elementID;

    var labelElem = document.createElement("label");
    var text = document.createTextNode("Credit ");
    labelElem.appendChild(text);
    labelElem.appendChild(inputElem);

    inputContainerElement.appendChild(labelElem);
}

function createBoxes(numberOfBoxes) {
        for (var i = 1; i <= numberOfBoxes; i++) {
        console.log("input" + i);
        createInputBoxes("input" + i);
    }
}

function generate() {
     numberOfBoxes = document.getElementById("numberOfBoxes").value;
    createBoxes(numberOfBoxes);
}

function calculateCredits () {
    for(var i = 1 ; i <= numberOfBoxes ; i++ ) {
        var inputElemValue = document.getElementById("input" + i).value;
        console.log(inputElemValue);
        sumOfCredits += parseInt(inputElemValue);
    }
    console.log(sumOfCredits);
}



