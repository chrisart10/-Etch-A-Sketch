const gridSizeButton = document.createElement('button');
drawGrid();
function drawGrid(SIZE = 16) {
    const val = document.querySelector('div.container');
    if (val) {
        val.remove();
    }
    const container = document.createElement('div');

    const title = document.createElement('h1');
    title.textContent = 'Etch-A-Sketch';
    container.appendChild(title);

    container.classList.add('container');
    container.style = `display:flex; flex-flow:column; align-items:center; gap: 20px;`;

    const gridContainer = document.createElement('div');
    gridContainer.classList.add('gridContainer');
    gridContainer.style = `display: grid; width: 960px; height: 960px; border:2px solid gold;
    grid-template-columns: repeat(${SIZE}, 1fr);` // repeat(number of columns/rows, the column width we want);

    gridSizeButton.classList.add('gridSizeButton');
    gridSizeButton.textContent = 'Grid Size';
    gridSizeButton.style = 'padding: 10px 20px;'
    container.appendChild(gridSizeButton);

    for (let element = 0; element < SIZE ** 2; element++) {
        let grid = document.createElement('div');
        grid.classList.add('gridElement');
        gridContainer.appendChild(grid);
    }

    container.appendChild(gridContainer);
    document.body.appendChild(container);

    const grids = document.querySelectorAll('div.gridElement');
    for (let grid of grids) {
        grid.addEventListener('mousemove', (event) => {
            event.target.style.backgroundColor = `black`;
        })
    }

}

gridSizeButton.addEventListener('click', (event) => {
    const size = Number(prompt('Please insert grid size'));
    if (!(size < 101) || !(size > 0)) {
        alert('size should be greater than 0 and equal or minor than 100');
    } else {
        drawGrid(size);
    }
})