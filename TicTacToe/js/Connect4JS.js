document.addEventListener("DOMContentLoaded", () => {

// let grid = { t1:" ", t2: " ", t3: " ", m1: " ", m2: " ", m3: " ", b1: " ", b2: " ", b3: " "}
//
// grid.m2 = "X";

console.log("The code works, you can go ahead and play if there are no errors!");



// This portion of code makes it so that whatver box you click on, it will cycle between an X, O or blank symbol
let clickBox = (e) => {
	console.log("Changed whatever box you clicked on");
    // e.currentTarget.textContent = 'X';
        if (e.currentTarget.textContent === 'X'){
            e.currentTarget.textContent = 'O'
        } else if (e.currentTarget.textContent === 'O') {
            e.currentTarget.textContent = ' ';
        }else {
            e.currentTarget.textContent = 'X';
        }
}
// This closes out the fucntion above



// let playerTurn = (e) =>{
// 		if its player 1's turn
// 			let e.currentTarget = 'X'
// 		else if its player 2's turn
// 				let e.currentTarget = 'O'
// }




// These repeating strings of code target the box that's clicked to make the symbol change
let changeBox = document.querySelector("#box1")
changeBox.addEventListener('click', clickBox)

let changeBox2 = document.querySelector("#box2")
changeBox2.addEventListener('click', clickBox)

let changeBox3 = document.querySelector("#box3")
changeBox3.addEventListener('click', clickBox)

let changeBox4 = document.querySelector("#box4")
changeBox4.addEventListener('click', clickBox)

let changeBox5 = document.querySelector("#box5")
changeBox5.addEventListener('click', clickBox)

let changeBox6 = document.querySelector("#box6")
changeBox6.addEventListener('click', clickBox)

let changeBox7 = document.querySelector("#box7")
changeBox7.addEventListener('click', clickBox)

let changeBox8 = document.querySelector("#box8")
changeBox8.addEventListener('click', clickBox)

let changeBox9 = document.querySelector("#box9")
changeBox9.addEventListener('click', clickBox)
// This closes out the code above



//This section of code is meant to display and check for a win

//let winStates = [[box1, box2, box3], [box4, box5, box6], [box7, box8, box9], [box1, box4, box7], [box 2, box5, box8], [box3, box6, box9], [box1, box5, box 9], [box3, box 5, box7]]

// This code should make it so that when the first row is all == x it auto wins the game and makes a alert appear
	//let winStates = if (box1.textContent === 'X' && box2.textContent === 'X' && box3.textContent === 'X') {
	//alert(X wins the game!)
	//}



// REMEMBER TO MAKE THIS INTO A doc.querySelectorAll FUNCTION
//This function works for only the the first box right now
let resetGameFunction = () => {
    console.log("You reset the game, go ahead and play again!")
	document.querySelector(".aBox").textContent = ' ';
}

//USE FOR EACH IN HERE BEFORE SUBMITTING FINAL ASSIGNMENT
let restartGame = document.querySelector(".resetGame")
  restartGame.addEventListener('click', resetGameFunction)

});
