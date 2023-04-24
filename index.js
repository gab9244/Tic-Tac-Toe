//1. Pegue os elementos to DOM que seram usados no projeto
  //.main
  //.resetButton
  //Xbutton e Obutton
  const main = document.querySelector('main')
  const resetButton = document.getElementById('resetButton')
  const Xbutton = document.getElementById('Xbutton')
  const Obutton = document.getElementById('Obutton')
  const cells = document.querySelectorAll('.cell')
  const PlayerTurn = document.querySelector('.PlayerTurn')
  const menu = document.querySelector('menu')
//2.Crie 
//Criar uma função para controlar o jogo 
//Criar as condições para que os botões X e O funcionem
//Crie uma função para dizer quem ganhou
//crie array que representem as condições de vitoria

const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]
  
let options = ["","","","","","","","","",];
let currentPlayer = "X";
//A variavel running nesse projeto será usada para fazer com que certas fuções sejam ativadas e é por isso que seu valor padrão é false 
let running = false

ControlGame()
function ControlGame(){
 cells.forEach(cell => cell.addEventListener("click", cellClicked,
  resetButton.addEventListener('click', restantGame)))
  running = true
}
function cellClicked(){
  const cellIndex = this.getAttribute("cellIndex")
  if(options[cellIndex]!= "" || !running){
    return
  }
  upDateCell(this, cellIndex);

  CheckWinner()

}
function upDateCell(cell, index){
  options[index] = currentPlayer;
  cell.textContent = currentPlayer
}

function changePlayer(){
  currentPlayer = (currentPlayer =="X") ? "O":"X"

}
Xbutton.addEventListener('click', ()=>{

  currentPlayer = "X"

  Xbutton.style.opacity = 0
  Obutton.style.opacity = 0
  Xbutton.style.pointerEvents = 'none'
  Obutton.style.pointerEvents = 'none'

})
Obutton.addEventListener('click',()=>{
  currentPlayer = "O"
  Xbutton.style.opacity = 0
  Obutton.style.opacity = 0
  Xbutton.style.pointerEvents = 'none'
  Obutton.style.pointerEvents = 'none'
})


function CheckWinner (){
    let roundwon = false
    for (let i = 0; i < winConditions.length; i++){
        const condition = winConditions[i]
        const cellA = options[condition[0]]
        const cellB = options[condition[1]]
        const cellC = options[condition[2]]
        if(cellA == ""||cellB == ""|| cellC == "" ){
          //A declaração continue é usada para continuar uma interação mesmo depois da declaração atual ter terminado 
          continue
        }
        if(cellA == cellB && cellB == cellC){
          roundwon = true;
          //A declaração break quebra o loop atual e prossegue para a proxíma declaração
          break;
        }

          }
          if(roundwon){
            PlayerTurn.textContent=`${currentPlayer} Player wins!`
            running =false
            
          }
          else if(!options.includes("")){
            PlayerTurn.textContent = `Draw!`
            running = false
          }
          else {
            changePlayer();
          }
}
function restantGame(){
    currentPlayer = "X";
    options = ["","","","","","","","","",];
    cells.forEach(cell => cell.textContent ="")
    running = true
    Xbutton.style.opacity = 1
    Obutton.style.opacity = 1
    Xbutton.style.pointerEvents = 'auto'
    Obutton.style.pointerEvents = 'auto '
  
    
}



