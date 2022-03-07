const grid=document.querySelector('.grid');
var dimension;
var gridSize=16;
dimension=gridSize;
var gridItems;


function addDiv() {
//adds auto to grid-template-rows and columns to make sure the height and width are the same (each box is a square)
    let string='';
    for(let i=1;i<=dimension;i++){
        string+=" auto";
    }   
    grid.style.gridTemplateColumns=string;
    grid.style.gridTemplateRows=string;
//then creates a div for each square in the grid, first using orginal dimensions of 16x16 then using user input
    for(let j=1;j<=(dimension**2);j++){
        var element=document.createElement('div')
        element.classList="div"+j + " grid-box"
        grid.appendChild(element);
    }
//script was creating initial divs and then creating on top of that new divs based on user input, and the new divs did not have the hover feature. to fix this, added this to the function.
//this adds event listener mimicing hover
    gridItems=document.querySelectorAll('.grid-box');
    gridItems.forEach(box=>
        box.addEventListener('mouseover', () => {
            box.style.backgroundColor=randomColor();
        }));
}
addDiv();

//generates random background color instead of fixed color
function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var color = "rgb(" + r + "," + b + "," + g + ")";
    return color;
}

//when clear button is clicked, all coloring goes away and grid returns to white
document.getElementById('clear').addEventListener('click',reset);

function reset(){
    gridItems.forEach(box=> 
        box.style.backgroundColor=null);
    setTimeout(newGrid,200);
}

//helper functions called by reset function
//created this function to remove the original grid so that it can be replaced with the newly created grid based on the user input and created by function addDiv
function removeElements(){
    var elements = document.getElementsByClassName('grid-box');
    while(elements.length>0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

//user is prompted to enter dimensions (squares) of new grid, with will maintain same overall H and W
function newGrid() {
        gridSize=prompt('Please select new dimensions (max: 100 squares).'); 
    if(gridSize===null) return;
    dimension=gridSize;
    removeElements();
    addDiv();
}
