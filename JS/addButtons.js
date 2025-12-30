export function addButton () {
    const btnContainer = document.querySelector(".button-container");
    const numContainer = document.querySelector(".number-container");
    const operationContainer = document.querySelector(".operation-container");
    let num = 0;
    for (let i = 1; i <= 3; i++) {
        const newRow = document.createElement("div");
        newRow.setAttribute("id",`row-${i}`);
        newRow.classList.add("row");

        for (let j = 1; j <= 3; j++) {
            num++;
            const newBtn = document.createElement("button");
            newBtn.textContent = `${num}`;
            newBtn.setAttribute("id", `btn-${num}`);

            newRow.appendChild(newBtn);
        }
        
        numContainer.appendChild(newRow);
    }

    
    const clearBtn = document.createElement("button");
    const zeroBtn = document.createElement("button");
    const equalBtn = document.createElement("button");
    const addBtn = document.createElement("button");
    const subtractBtn = document.createElement("button");
    const multiplyBtn = document.createElement("button");
    const divideBtn = document.createElement("button");
    const dotBtn = document.createElement("button");
    const backBtn = document.createElement("button");
    const modBtn = document.createElement("button");
    const newRow = document.createElement("div")
    newRow.classList.add("row");
    const additionalRow = document.createElement("div");
    additionalRow.classList.add("row");

    clearBtn.setAttribute("id", "btn-clear");
    zeroBtn.setAttribute("id", "btn-0");
    equalBtn.setAttribute("id", "btn-equal");
    addBtn.setAttribute("id", "btn-add");
    subtractBtn.setAttribute("id", "btn-subtract");
    multiplyBtn.setAttribute("id", "btn-multiply");
    divideBtn.setAttribute("id", "btn-divide");
    newRow.setAttribute("id",`row-4`);
    additionalRow.setAttribute("id", "row-5");
    dotBtn.setAttribute("id", "btn-dot");
    backBtn.setAttribute("id", "btn-back");
    modBtn.setAttribute("id", "btn-mod");

    clearBtn.textContent = "C";
    zeroBtn.textContent = "0";
    equalBtn.textContent = "=";
    addBtn.textContent = "+";
    subtractBtn.textContent = "-";
    multiplyBtn.textContent = "x";
    divideBtn.textContent = "/"
    dotBtn.textContent = ".";
    backBtn.textContent = "⌫";
    modBtn.textContent = "%";

    newRow.appendChild(clearBtn);
    newRow.appendChild(zeroBtn);
    newRow.appendChild(equalBtn);
    additionalRow.appendChild(dotBtn);
    additionalRow.appendChild(backBtn);
    numContainer.appendChild(newRow);
    numContainer.appendChild(additionalRow);
    operationContainer.appendChild(addBtn);
    operationContainer.appendChild(subtractBtn);
    operationContainer.appendChild(multiplyBtn);
    operationContainer.appendChild(divideBtn);
    operationContainer.appendChild(modBtn);
}