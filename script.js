const container=document.querySelector('.grid');
function addDiv() {

for(let i=1;i<=256;i++){
    var element=document.createElement('div')
    element.classList="div"+i + " grid-box";
    element.textContent=i;
    container.appendChild(element);
}
}
addDiv();