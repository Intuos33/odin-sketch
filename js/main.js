const btn = document.querySelector('#num');
const gridContainer = document.querySelector('.container');
const pxWide = 800;

function initialGrid(width, numBoxes){
    const size = width/numBoxes;

    for(let location = 0; location < numBoxes; location++){
        const gridBox = document.createElement('div');
        gridBox.style.border = '1px solid red';
        gridBox.style.width = size + 'px';
        gridBox.style.height = size + 'px';
        gridContainer.appendChild(gridBox);
    }
}

btn.addEventListener('click', () =>{
    const numPerSide = prompt('Enter the number of boxes per side of the grid:');

    if(numPerSide > 100 || numPerSide < 10){
        alert('Please keep the grid between 10 and 100 boxes per side');
    } else {
        alert('thanks')
    }
});

initialGrid(pxWide, 16)