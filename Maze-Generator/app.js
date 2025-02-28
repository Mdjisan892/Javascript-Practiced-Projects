const gridSize  = 21 ;
const mazeContainer = document.getElementById("maze-container");
const genarateBtn = document.getElementById("generate-btn");
//Directions

const directions  = [
    [-2 ,0], //up
    [0 , 2], //right
    [2 , 0], //down
    [0, -2], //left
];

let maze = [];

function initializeMaze(){
    maze = [] ;
    mazeContainer.innerHTML = "" ;

    for (let i = 0; i < gridSize; i++) {
     maze[i] = []
        
     for (let j = 0; j < gridSize; j++) {
        maze[i][j] = 1;
         
        const cell = document.createElement("div");
        cell.classList.add("cell");
        mazeContainer.appendChild(cell)
     }
    }
    mazeContainer.style.gridTemplateColumns = `repeat(${gridSize} , 40px)`
}

function generateMaze (x,y){
    maze[x][y] = 0 ;
    updateMaze(x,y);

    suffleMaze(directions);
   
    for (const [dx , dy] of directions) {
        const nextX = x + dx;
        const nextY = y + dy;

        if(isValid(nextX , nextY) && maze[nextX][nextY] === 1){
         maze[x + dx / 2][y + dy / 2] = 0
         updateMaze(x + dx / 2 , y + dy / 2)
         generateMaze(nextX , nextY)
        }
    }
}

function isValid (x , y){
  return x > 0 && y > 0 && x < gridSize - 1 && y < gridSize - 1
}

function updateMaze(x,y){
  const index  = x * gridSize + y;
  const cell = mazeContainer.children[index]; 
  cell.classList.add("path")
}

function suffleMaze(array){
    for (let i = array.length - 1 ; i > 0 ; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    return array
}

function createMaze (){
    initializeMaze();
    generateMaze(1,1)
}

genarateBtn.addEventListener("click" , createMaze)
createMaze()