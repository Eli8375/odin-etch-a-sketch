let body = document.querySelector("body")
let container = document.querySelector(".container")



function createHeader() {
    const header = document.querySelector("header")
    let titleHeader = document.createElement("h1")
    titleHeader.textContent = "Etch-a-Sketch"
    header.appendChild(titleHeader)
}

function createDivs() {
    let div = document.createElement("div")
    div.classList.add("grid")
    container.append(div)
    div.addEventListener("mouseover", function() {
        div.style.cssText = "background-color: black;"
    })
}

//fix this so an amount of 100 can fit in the box
function createGrid() {
    for (let i = 0; i < (16*16); i++) {
        createDivs()
    }
}

//fix this iterable function for the userchoice
function resetGrid(sign) {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
    for (let i = 0; i < (sign*sign); i++) {
        createDivs()
    }
}

function createPlayAgainButton() {
    let playAgainButton = document.createElement("button")
    playAgainButton.textContent = "Reset?"
    body.appendChild(playAgainButton)
    playAgainButton.addEventListener("click", function() {
        let sign = window.prompt("How many grids would you like to use? Choose between 1-100.")
        if (sign <= 100 && sign > 0) {
            resetGrid(sign)
        } else {
            alert("Choose between 1 and 100!")
        }
    })
}


function createEAS() {
    createGrid()
    createHeader()
    createPlayAgainButton()
}

function createNewEAS() {

}

createEAS()


//in the .container css, there grid-template-columns and rows properties are causing issues with new grids
//that is necessary to fix