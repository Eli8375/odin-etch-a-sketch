let body = document.querySelector("body")
let container = document.querySelector(".container")


//this created the header via javascript
function createHeader() {
    const header = document.querySelector("header")
    let titleHeader = document.createElement("h1")
    titleHeader.textContent = "Etch-a-Sketch"
    header.appendChild(titleHeader)
}


//this creates the div grids and allows mouse functionality
function createDivs() {
    let div = document.createElement("div")
    div.classList.add("grid")
    container.append(div)
    for (let i = 0; i <= 10; i++) {
        div.addEventListener("mouseover", function() {
            //let redNumber = Math.floor(Math.random()*255)
            //let blueNumber = Math.floor(Math.random()*255)
            //let greenNumber = Math.floor(Math.random()*255)
            //div.style.cssText = `background-color: rgb(${redNumber}, ${blueNumber}, ${greenNumber});`
            div.style.cssText = `background-color: black;`
        })
    }
}

//this allows the initial grid to be created
function createGrid() {
    for (let i = 0; i < (16*16); i++) {
        createDivs()
    }
}

//this allows the grid to reset and then create a new grid
function resetGrid(sign) {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
    for (let i = 0; i < (sign*sign); i++) {
        createDivs()
    }
    container.style.gridTemplateColumns = `repeat(${sign}, 1fr)`
    container.style.gridTemplateRows = `repeat(${sign}, 1fr)`
}

//this enables functionality for the reset button and parameters for the user to input for a new grid
function createPlayAgainButton() {
    let playAgainButton = document.createElement("button")
    playAgainButton.textContent = "Reset?"
    body.appendChild(playAgainButton)
    playAgainButton.addEventListener("click", function() {
        let sign = window.prompt("How many grids would you like to use? Choose between 1-100.")
        if (sign <= 100 && sign > 0) {
            resetGrid(sign)
        } else return
    })
}

//condenses all the functions
function createEAS() {
    createGrid()
    createHeader()
    createPlayAgainButton()
}

createEAS()