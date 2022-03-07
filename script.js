const grid=document.querySelector('.grid');
var dimension;
var gridSize=16;
dimension=gridSize;
var gridItems;


function addDiv() {
    let string='';
for(let i=1;i<=dimension;i++){
    string+=" auto";
}
console.log(string);    
grid.style.gridTemplateColumns=string;
grid.style.gridTemplateRows=string;
// gridItems.forEach(box=> {
// box.height=`(100/${dimension})`;
// box.width=`(100/${dimension})`;
// });
for(let j=1;j<=(dimension**2);j++){
    var element=document.createElement('div')
    element.classList="div"+j + " grid-box"
    grid.appendChild(element);
}
gridItems=document.querySelectorAll('.grid-box');
gridItems.forEach(box=> {
    box.addEventListener('mouseover', () => {
        box.style.backgroundColor="fuchsia";
    });
});
}
addDiv();


document.getElementById('clear').addEventListener('click', reset);

function reset(){
    gridItems.forEach(box=> {
        box.style.backgroundColor="white";
    });
    removeElements();
    newGrid();
    addDiv();
    
}
//     gridSize=prompt('What size grid?');
//     dimension=gridSize;
    
//     // newGrid();
//     addDiv();
// }
function newGrid() {
    gridSize=prompt('What size grid?');
    // if(gridSize===null) return;
     dimension=gridSize;
    //  addDiv();
 }

function removeElements(className){
    var elements = document.getElementsByClassName('grid-box');
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
    // newGrid();
}






// document.getElementById('clear').addEventListener('click', () => {
//         gridItems.forEach(box=> {
//                 box.style.backgroundColor="white";
//             });
//         });



// function reset(){
//         gridItems.forEach(box=> {
//             box.style.backgroundColor="white";
//         });
//         var gridSize=prompt('What size grid?');
//         dimension=gridSize;
// }
