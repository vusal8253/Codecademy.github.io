//(1)
// class Artwork {
//     constructor(title, artist, price){
//       this._title = title;
//       this._artist = artist;
//       this._price = price;
//     }
  
//     get title(){
//       return this._title;
//     }
  
//     get artist(){
//       return this._artist;
//     }
  
//     get price(){
//        return this._price;
//     }
    
//   }
  
//   const starryNight = new Artwork('The Starry Night', 'Vincent van Gogh', 1300);
//   // Set the price for starryNight
  
  
//   console.log(`${starryNight.title} by ${starryNight.artist} is on sale for $${starryNight.price}!`);

//2
// const generatePassword = () => {
//   let passwordLength = Math.floor(Math.random() * 5 + 4);
//   let generatedPassword = Math.floor(Math.random() * Math.pow(10, passwordLength));
//   return generatedPassword.toString();
// }

// // add a checkPassword function that throws an error when password length is less than 6
// const checkPassword = () => {
//   throw Error('Password is too short! Generate another password.');
// }

// // export generatePassword and checkPassword functions
// export { generatePassword, checkPassword};

//3
// const assert = require("assert");
// const Calculate =  require('./index.js')

// describe('Calculate', () => {
//   describe('.factorial',() => {
//     it('returns the factorial of a number', () => {
//       const expectedResult = 120;
//       const inputNumber = 5;
//       const result = Calculate.factorial(inputNumber);
      
//       // Create an assertion for strict equality between result and expectedResult
//       assert.strictEqual(result, expectedResult);
//     });  
//   });
// });

//4
// const Convert = {
//   kmToM(inputValue){
//     return Number(((inputValue / 1.609).toFixed(2)));
//   }
// }

// module.exports = Convert;

//5
// modify getSuggestions to be async 
// const getSuggestions = async () => {
//   const endpoint = `${url}${queryParams}${wordQuery}`;
//   try {
//     // fetch response from endpoint
//      const response = await fetch(endpoint, {cache: 'no-cache'});
//     // if successful response, get json and render using renderResponse() function
//     if(response.ok){
//       const jsonResponse = await response.json();
//       renderResponse(jsonResponse);
//      }
//   } catch (error) {
//     console.log(error);
//   }
// }
// 6
// const renderResponse = (res) => {
//     let responseParagraph = document.getElementById('response');
//     for(let i = 0; i < 10; i++){
//         let newP = document.createElement('P');
//         newP.innerHTML = res[i].word;
//         responseParagraph.append(newP);
//     }
// }

// getSuggestions();
//6
// const menu = '{"appetizer":"Shrimp Shumai","main":"Aloo Gobi","dessert":"Key Lime Pie"}';

// // Parse menu as a JSON object
// const  menuObject  = JSON.parse(menu);


// console.log('Today\'s Menu:');
// // Log appetizer, main, and dessert by referencing properties
// console.log(`Appetizer: ${menuObject.appetizer}`);
// console.log(`Main Course: ${menuObject.main}`);
// console.log(`Dessert: ${menuObject.dessert}`);

//7
// import React from 'react';

// // Create a functional component called App that renders Hello World! as an H1 element
// function App() {
//   return (
//     <div>
//       <h1>Hello World!</h1>
//     </div>
//   );
// }

// export default App;

//8
// git branch resume
// $ git branch
//   branch_name
// * master
//   resume
// $ 


/// 5 ders 1
// class Node {
//   constructor(data) {
//     // complete constructor method here
//     this.data = data;
//     this.next = null;
//   }

//   setNextNode(node) {
// // complete setNextNode method here
//  if (node instanceof Node || node === null) {
//       this.next = node;
//     } else {
//       throw new Error('Next node must be a member of the Node class.');
//     }
//   }
  
//   getNextNode() {
//     return this.next;
//   }
// }

// module.exports = Node;

// 4 parcticasi
// import React from 'react';
// import { createRoot } from 'react-dom/client';

// const container = document.getElementById('app');
// const root = createRoot(container);
// const handleClick = () => alert('You did it!');

// const output = (
//   <div>
//     <h1 onClick={ handleClick}>
//       Clicking this text should show a popup window.
//     </h1>
//   </div>
// );

// root.render(output);
///////

// const promiseA = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(5);
//   }, 200);
// });
// const promiseB = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(6);
//   }, 1200);
// });
// const promiseC = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(7);
//   }, 300);
// });

// all.catch([promiseA, promiseB, promiseC]).then((values) => {
//   console.log(values[0]);
//   console.log(values[1]);
//   console.log(values[2]);
// });


////////////
// import React, { useState } from 'react';

// function Reserve(props){
  
//   // Create a state constant and set the initial state to `false`
//   const [reserved, setReserved] = useState(false);
//   function reserveEvent(){
//     // Set reserved state to newReservation
//     setReserved(!reserved);
//   }


//     return(
//       <div className='Reserve'>
//         {<h2>{props.eventName}</h2>}
//         <h2>REPLACE ME</h2>
//         <button onClick={reserveEvent}>
//           RSVP Now!
//         </button>
//         {"REPLACE ME" && (
//          reserved <p>You're set! See you there!</p> 
//         )}
//       </div>
//     )
  
// }

// export default Reserve;