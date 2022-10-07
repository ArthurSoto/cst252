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
  courseImage.;
}
