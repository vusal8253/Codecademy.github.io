//1
// let readMore = document.getElementById('read-more');
// let moreInfo = document.getElementById('more-info');

// // Write your code here:
// function showInfo() {
//   moreInfo.style.display = 'block';
// }
// readMore.addEventListener('click', showInfo );

//2
// let view = document.getElementById('view-button');
// let close = document.getElementById('close-button');
// let codey = document.getElementById('codey');

// let open = function() {
//   codey.style.display = 'block';
//   close.style.display = 'block';
// };

// let hide = function() {
//   codey.style.display = 'none';
//   close.style.display = 'none';
// };

// view.addEventListener('click', open);
// close.addEventListener('click', hide);

// // Write your code here

// function textChange() {
//   view.innerHTML =  'Hello, World!';
// }
// function textReturn() {
//   view.innerHTML = 'View';
// } 
// view.addEventListener('click', textChange);
// close.addEventListener('click', textReturn);


//3
// let fortunes = ["A beautiful, smart, and loving person will be coming into your life.",
//   "A fresh start will put you on your way.",
//   "A golden egg of opportunity falls into your lap this month.",
//   "A smile is your personal welcome mat.",
//   "All your hard work will soon pay off."
// ]

// let button = document.getElementById('fortuneButton');
// let fortune = document.getElementById('fortune');

// function fortuneSelector(){
//   let randomFortune = Math.floor(Math.random() * fortunes.length);
//   return fortunes[randomFortune];
// }

// function showFortune(){
//   fortune.innerHTML = fortuneSelector();
//   button.innerHTML = "Come back tomorrow!";
//   button.style.cursor = "default";

//   //add your code here
//   button.removeEventListener('click', showFortune);

// }

// button.addEventListener('click', showFortune);

//4
// let social = document.getElementById('social-media');
// let share = document.getElementById('share-button');
// let text = document.getElementById('text');

// // Write your code below
// let sharePhoto = function(event) {
//   event.target.style.display = 'none';
//   text.innerHTML = 'You shared the puppy photo in ' + event.timeStamp + ' ms.';
// }
// share.addEventListener('click', sharePhoto);

//5

// let itemOne = document.getElementById('list-item-one');
// let itemTwo = document.getElementById('list-item-two');
// let itemThree = document.getElementById('list-item-three');
// let itemFour = document.getElementById('list-item-four');
// let itemFive = document.getElementById('list-item-five');
// let resetButton = document.getElementById('reset-button');

// let reset = function() {
//   itemOne.style.width = ''
//   itemTwo.style.backgroundColor = ''
//   itemThree.innerHTML = 'The mouse must leave the box to change the text'
//   itemFive.style.display = "none"
// };
// resetButton.onclick = reset;


//   function increaseWidth(){
//   itemOne.style.width = '500px';
// }
// itemOne.addEventListener('mouseover', increaseWidth);
// function changeBackground(){
//   itemTwo.style.backgroundColor = 'green';
// }
// itemTwo.addEventListener('mouseup', changeBackground);

// function changeText(){
//   itemThree.innerHTML ='The mouse has left the element';
// }
// itemThree.addEventListener('mouseout', changeText);

// function showItem(){
//   itemFive.style.display = 'block';
// }
// itemFour.addEventListener('mousedown', showItem);


//6
// let ball = document.getElementById('float-circle');

// function up(){
//   ball.style.bottom = '250px';
// }

// function down(){
//   ball.style.bottom = '50px';
// }

// document.addEventListener('keydown', up);
// document.addEventListener('keyup', down);

//7

// const keys = [
//     "c-key",
//     "d-key",
//     "e-key",
//     "f-key",
//     "g-key",
//     "a-key",
//     "b-key",
//     "high-c-key",
//     "c-sharp-key",
//     "d-sharp-key",
//     "f-sharp-key",
//     "g-sharp-key",
//     "a-sharp-key",
//   ];
//   const notes = [];
//   keys.forEach(function (key) {
//     notes.push(document.getElementById(key));
//   });
  

//   function keyPlay() {
//     notes.target.style.backgroundColor = "green";
//   }
  

//   function keyReturn() {}

//   let nextOne = document.getElementById("first-next-line");
//   let nextTwo = document.getElementById("second-next-line");
//   let nextThree = document.getElementById("third-next-line");
//   let startOver = document.getElementById("fourth-next-line");
  

//   let lastLyric = document.getElementById("column-optional");
  
 
//   nextTwo.hidden = true;
//   nextThree.hidden = true;
//   startOver.hidden = true;
  
//   startOver.onclick = function () {
//     nextOne.hidden = false;
//     startOver.hidden = true;
//     document.getElementById("word-one").innerHTML = "HAP-";
//     document.getElementById("letter-note-one").innerHTML = "G";
//     document.getElementById("word-two").innerHTML = "PY";
//     document.getElementById("letter-note-two").innerHTML = "G";
//     document.getElementById("word-three").innerHTML = "BIRTH-";
//     document.getElementById("letter-note-three").innerHTML = "A";
//     document.getElementById("word-four").innerHTML = "DAY";
//     document.getElementById("letter-note-four").innerHTML = "G";
//     document.getElementById("word-five").innerHTML = "TO";
//     document.getElementById("letter-note-five").innerHTML = "C";
//     document.getElementById("word-six").innerHTML = "YOU!";
//     document.getElementById("letter-note-six").innerHTML = "B";
//   };
  