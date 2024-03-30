const btn = document.querySelector('#num');
const gridContainer = document.querySelector('.container');
const pxWide = 800;

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  

function initialGrid(width, numBoxes){
    const size = width/numBoxes;

    for(let location = 0; location < numBoxes; location++){
        for(let vLocation = 0; vLocation < numBoxes; vLocation++){
            const gridBox = document.createElement('div');
            gridBox.style.border = '1px solid grey';
            gridBox.style.width = size + 'px';
            gridBox.style.height = size + 'px';
            gridBox.style.opacity = 0.10;
            gridContainer.appendChild(gridBox);

            gridBox.addEventListener('mouseover', () => {
                gridBox.style.background = getRandomColor();
                
                if(gridBox.style.opacity <= 0.90){
                    gridBox.style.opacity = +gridBox.style.opacity + 0.10;
                }
            });
        }
    }
    opaque += 0.10;
}

btn.addEventListener('click', () =>{
    const numPerSide = prompt('Enter the number of boxes per side of the grid:');

    gridContainer.innerHTML = '';
    if(numPerSide <= 100 && numPerSide >= 1){
        initialGrid(pxWide, numPerSide);
    } else {
        initialGrid(pxWide, 16);
        alert('Please keep the grid between 10 and 100 boxes per side');
    }
});

initialGrid(pxWide, 16);
