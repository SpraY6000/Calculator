

document.getElementById("submitButton").onclick = function() {

    let firstNumber = Number(document.getElementById("firstNumInput").value);
    let operator = document.getElementById("operatorInput").value
    let secondNumber = Number(document.getElementById("secondNumInput").value);
    let summary;
    let summaryText = document.getElementById("summaryText")
    
    
    if (operator === "-") {
        summary = firstNumber - secondNumber
        summaryText.innerText = summary
    }

    else if (operator === "+") {
        summary = firstNumber + secondNumber
        summaryText.innerText = summary
    }

    else if (operator === "/") {
        summary = firstNumber / secondNumber
        summaryText.innerText = summary
    }

    else if (operator === "*") {
        summary = firstNumber * secondNumber
        summaryText.innerText = summary
    }
    else if (operator === "x") {
        summary = firstNumber * secondNumber
        summaryText.innerText = summary
    }

    else if (operator === "") {
        document.getElementById("summaryText").innerText = "Enter an operator!"
    }

}