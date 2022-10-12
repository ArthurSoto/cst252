// 1. What element triggers the event (button)
// The mouse hovers over the boxes
// -the courseBox
// - -the courseBox
// - - -the courseBox
// - - - -exit button
//
// 2. What's the actual event (click, mousing over)
// Change color of the box
// -one of the course boxes
// - -mouseover
// - - -the color of the box changes
//
// 3. What happens when that event happens
// Takes you to a new website
// -the courseBox
// - -click
// - - -redirects website
// - - - -color returns to original color
document.addEventListener("DOMContentLoaded", () => {

  let infoPanelgoat = document.querySelector('#infoPanel')
  infoPanelgoat.style.display = "none";

let exitButt = () => {
    let exitKing = document.querySelector('#infoPanel')
    exitKing.style.display = "none";
  }

    let infoPancake = document.querySelector('#exitbutton')
    infoPancake.addEventListener('click', exitButt);


let showPanel = (x) => {
  console.log(x);
  let p = document.querySelector('#courseName')

  let panel = document.querySelector('#infoPanel')
  console.log(infoPanel);
  panel.style.display = "block";

  let courseName = document.querySelector('#courseName')
  console.log(courseName);
  courseName.textContent = "CST 252";

  let courseDescription = document.querySelector('#courseDescription')
  console.log(courseDescription);
  courseDescription.textContent = "JavaScript";

  let courseImage = document.querySelector('#courseImage')
  console.log(courseImage);
  courseImage = document.querySelector('#courseImage').src="img/cst252.jpg";
}

  let box252 = document.querySelector('.itembox')
  box252.addEventListener('click', showPanel);

});
