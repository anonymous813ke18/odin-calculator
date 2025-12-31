import { operate } from "./calculate.js";

export function setUpEventListeners () {
    const container = document.querySelector(".container");
    const inputContainer = document.querySelector(".input-container");

    let num1 = "";
    let num2 = "";
    let operand = "";

    container.addEventListener('click', (e) => {
        
        let target = e.target;

        switch(target.id) {
            case 'btn-0':
                if (operand == "") {
                    num1 += "0";
                    inputContainer.textContent = num1;
                }
                else {
                    num2 += "0";
                    inputContainer.textContent = num2;
                } 
                break

            case 'btn-1':
                if (operand == "") {
                    num1 += "1";
                    inputContainer.textContent = num1;
                }
                else {
                    num2 += "1";
                    inputContainer.textContent = num2;
                } 
                break

            case 'btn-2':
                if (operand == "") {
                    num1 += "2";
                    inputContainer.textContent = num1;
                }
                else {
                    num2 += "2";
                    inputContainer.textContent = num2;
                } 
                break

            case 'btn-3':
                if (operand == "") {
                    num1 += "3";
                    inputContainer.textContent = num1;
                }
                else {
                    num2 += "3";
                    inputContainer.textContent = num2;
                } 
                break

            case 'btn-4':
                if (operand == "") {
                    num1 += "4";
                    inputContainer.textContent = num1;
                }
                else {
                    num2 += "4";
                    inputContainer.textContent = num2;
                } 
                break

            case 'btn-5':
                if (operand == "") {
                    num1 += "5";
                    inputContainer.textContent = num1;
                }
                else {
                    num2 += "5";
                    inputContainer.textContent = num2;
                } 
                break

            case 'btn-6':
                if (operand == "") {
                    num1 += "6";
                    inputContainer.textContent = num1;
                }
                else {
                    num2 += "6";
                    inputContainer.textContent = num2;
                } 
                break

            case 'btn-7':
                if (operand == "") {
                    num1 += "7";
                    inputContainer.textContent = num1;
                }
                else {
                    num2 += "7";
                    inputContainer.textContent = num2;
                } 
                break

            case 'btn-8':
                if (operand == "") {
                    num1 += "8";
                    inputContainer.textContent = num1;
                }
                else {
                    num2 += "8";
                    inputContainer.textContent = num2;
                } 
                break

            case 'btn-9':
                if (operand == "") {
                    num1 += "9";
                    inputContainer.textContent = num1;
                }
                else {
                    num2 += "9";
                    inputContainer.textContent = num2;
                } 
                break

            case 'btn-dot':
                if (operand == "") {
                    if (!num1.includes(".")) num1 += ".";
                    inputContainer.textContent = num1;
                }
                else {
                    if (!num2.includes(".")) num2 += ".";
                    inputContainer.textContent = num2;
                } 
                break
            
            case 'btn-back':
                if (operand == "" && num1 !== "") {
                    num1 = num1.slice(0, -1);
                    inputContainer.textContent = num1;
                }
                else if (operand !== "" && num2 !== "") {
                    num2 = num2.slice(0, -1);
                    inputContainer.textContent = num2;
                } 
                break
            
            case 'btn-clear':
                num1 = "";
                num2 = "";
                operand = "";
                inputContainer.textContent = "";
                break

            case 'btn-equal':
                if (num1 && num2 && operand) {
                    let output = operate(Number.parseFloat(num1), Number.parseFloat(num2), operand);
                    if (output == undefined) {
                        inputContainer.textContent = "STOP RIGHT THERE!!!";
                        num1 = "";
                        num2 = "";
                        operand = "";
                    } else {
                        inputContainer.textContent = output;
                        num1 = output;
                        num2 = "";
                        operand = "";
                    }
                }
                console.log(num1 + ", " +num2+ ", " +operand);
                break

            case 'btn-add':
                if (operand && num2) {
                    num1 = operate(Number.parseFloat(num1), Number.parseFloat(num2), operand);
                    inputContainer.textContent = num1;
                    num2 = "";
                    operand = "+";
                } else if(num1) operand = "+";
                break

            case 'btn-subtract':
                if (operand && num2) {
                    num1 = operate(Number.parseFloat(num1), Number.parseFloat(num2), operand);
                    inputContainer.textContent = num1;
                    num2 = "";
                    operand = "-";
                } else if(num1) operand = "-";
                break

            case 'btn-multiply':
                if (operand && num2) {
                    num1 = operate(Number.parseFloat(num1), Number.parseFloat(num2), operand);
                    inputContainer.textContent = num1;
                    num2 = "";
                    operand = "*";
                } else if(num1) operand = "*";
                break

            case 'btn-divide':
                if (operand && num2) {
                    num1 = operate(Number.parseFloat(num1), Number.parseFloat(num2), operand);
                    inputContainer.textContent = num1;
                    num2 = "";
                    operand = "/";
                } else if(num1) operand = "/";
                break
            
            case 'btn-mod':
                if (operand && num2) {
                    num1 = operate(Number.parseFloat(num1), Number.parseFloat(num2), operand);
                    inputContainer.textContent = num1;
                    num2 = "";
                    operand = "%";
                } else if(num1) operand = "%";
                break
        }        
    });

    document.addEventListener("keydown", (e) => {
        const numbers = "1234567890";
        const operations = "+-*/%";

        let keyPressed = `${e.key}`;

        if (numbers.includes(keyPressed)) {
            if (operand == "") {
                num1 += `${keyPressed}`;
                inputContainer.textContent = num1;
            }
            else {
                num2 += `${keyPressed}`;
                inputContainer.textContent = num2;
            } 
        } else if (operations.includes(keyPressed)) {
            if (operand && num2) {
                num1 = operate(Number.parseFloat(num1), Number.parseFloat(num2), operand);
                inputContainer.textContent = num1;
                num2 = "";
                operand = `${keyPressed}`;
            } else if(num1) operand = `${keyPressed}`;
        } else if (keyPressed == "=" || keyPressed == "Enter") {
            if (num1 && num2 && operand) {
                let output = operate(Number.parseFloat(num1), Number.parseFloat(num2), operand);
                if (output == undefined) {
                    inputContainer.textContent = "STOP RIGHT THERE!!!";
                    num1 = "";
                    num2 = "";
                    operand = "";
                } else {
                    inputContainer.textContent = output;
                    num1 = output;
                    num2 = "";
                    operand = "";
                }
            }
        } else if (keyPressed == "Backspace") {
            if (operand == "" && num1 !== "") {
                num1 = num1.slice(0, -1);
                inputContainer.textContent = num1;
            }
            else if (operand !== "" && num2 !== "") {
                num2 = num2.slice(0, -1);
                inputContainer.textContent = num2;
            } 
        } else if (keyPressed == "Delete") {
            num1 = "";
            num2 = "";
            operand = "";
            inputContainer.textContent = "";   
        } else if (keyPressed == ".") {
            if (operand == "") {
                if (!num1.includes(".")) num1 += ".";
                inputContainer.textContent = num1;
            }
            else {
                if (!num2.includes(".")) num2 += ".";
                inputContainer.textContent = num2;
            } 
        }
    })
}