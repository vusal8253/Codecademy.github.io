//1
// mport React from 'react';
// import { createRoot } from 'react-dom/client';

// // Write code here:
// const container =document.getElementById('container');
// const root = createRoot(container);
// root.render(<h1>Hello world</h1>);

//2
// import React from 'react';
// import { createRoot } from 'react-dom/client'

// const container = document.getElementById('app');
// const root = createRoot(container);
// // Write code here:
// const myDiv = (
//   <div className='big'>I AM A BIG DIV</div>
// );
// root.render(myDiv);

//3
// import React from 'react';
// import { createRoot } from 'react-dom/client';

// const container = document.getElementById('app');
// const root = createRoot(container);
// // Write code here:
// root.render(<h1>{2 + 3}</h1>);

//4
// import React from 'react';
// import { createRoot } from 'react-dom/client';

// const container = document.getElementById('app');
// const root = createRoot(container);
// // Write code here:
// const math = (<h1>2 + 3 = {2 + 3}</h1>);
// root.render(math)

//5
// import React from 'react';
// import { createRoot } from 'react-dom/client';

// const container = document.getElementById('app');
// const root = createRoot(container);

// const theBestString = 'This text was accessed through a javascript variable';

// root.render(<h1>{theBestString}</h1>);

//6
// import React from 'react';
// import { createRoot } from 'react-dom/client';

// const container = document.getElementById('app');
// const root = createRoot(container);
// const goose = 'https://content.codecademy.com/courses/React/react_photo-goose.jpg';

// // Declare new variable here:
// const gooseImg = (
//   <img src = {goose} />
// );
// root.render(gooseImg);


//7
// import React from 'react';
// import { createRoot } from 'react-dom/client';

// const container = document.getElementById('app');
// const root = createRoot(container);
// function makeDoggy(e) {
//   // Call this extremely useful function on an <img>.
//   // The <img> will become a picture of a doggy.
//   e.target.setAttribute('src', 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg');
//   e.target.setAttribute('alt', 'doggy');
// }

// const kitty = (
// 	<img 
// 		src="https://content.codecademy.com/courses/React/react_photo-kitty.jpg" 
// 		alt="kitty" onClick={makeDoggy} />
// );

//8
// import React from 'react';
// import { createRoot } from 'react-dom/client';

// const container = document.getElementById('app');
// const root = createRoot(container);
// function coinToss() {
//   // This function will randomly return either 'heads' or 'tails'.
//   return Math.random() < 0.5 ? 'heads' : 'tails';
// }

// const pics = {
//   kitty: 'https://content.codecademy.com/courses/React/react_photo-kitty.jpg',
//   doggy: 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg'
// };
// let img;

// // if/else statement begins here:
// if(coinToss() === 'heads') {
 
//  img = <img src={pics.kitty} />
// } else {
//   img = <img src={pics.doggy} />
// }
// root.render(img);

//9
// import React from 'react';
// import { createRoot } from 'react-dom/client';

// const container = document.getElementById('app');
// const root = createRoot(container);
// const people = ['Rowe', 'Prevost', 'Gare'];

// const peopleList = people.map(person =>
//   // expression goes here:
//   <li>{person}</li>
// );

// // root.render goes here:
// root.render(<ul>{peopleList}</ul>);

//10
// import React from 'react';
// const friends = [
//   {
//     title: "Yummmmmmm",
//     src: "https://content.codecademy.com/courses/React/react_photo-monkeyweirdo.jpg"
//   },
//   {
//     title: "Hey Guys! Wait Up!",
//     src: "https://content.codecademy.com/courses/React/react_photo-earnestfrog.jpg"
//   },
//   {
//     title: "Yikes",
//     src: "https://content.codecademy.com/courses/React/react_photo-alpaca.jpg"
//   }
// ];

// // New function component starts here:
// function Friend() {
//   let friend = friends[2]
//   return (
//     <div>
//        <h1>{friend.title}</h1>
//        <img src = {friend.src} />
//   </div>
//   );
//   }
//   export default Friend;


//11
// import React from 'react';

// function SubmitButton() {
//   function handleClick() {
//     alert('Submission Successful.');
//   }
//   return <button onClick={handleClick}>Submit</button>;
// }

// export default SubmitButton;


//11
// import React from 'react';
// import ReactDOM from 'react-dom';

// import PropsDisplayer from './PropsDisplayer';

// function App() {
//   return <PropsDisplayer myProp="Hello" />;
// }

// export default App;

// import React from 'react';

// function PropsDisplayer(props) {
//   	const stringProps = JSON.stringify(props);
//     return (
//       <div>
//         <h1>CHECK OUT MY PROPS OBJECT</h1>
//         <h2>{stringProps}</h2>
//       </div>
//     );
// }

// export default PropsDisplayer;

//12
// import React from 'react';

// function Product(props) {
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <h2>{props.price}</h2>
//       <h3>{props.rating}</h3>
//     </div>       
//   );
// }

// export default Product;

// import React from 'react';
// import Product from './Product'

// function App() {
//   return <Product name="Apple Watch" price = {399} rating = "4.5/5.0" />;
// }

// export default App;

//======
//import React from 'react';

// function Player(props) {
//     return (
//       <>
//         <h1>{props.songName}</h1>
//         <h2>{props.artist}</h2>
//       </>
//     );
//   }
//   export default Player;

// import React from 'react';
// import Player from './Player';

// function App() {
//   return (
//       <Player songName="Let's Go to the Mall" artist="Robin Sparkles"/>
//   );
  
// }

// export default App;

//12
// import React from 'react';
// import Button from './Button';

// function Talker() {
//   function handleClick() {
//     let speech = '';
//     for (let i = 0; i < 10000; i++) {
//       speech += 'blah ';
//     }
//     alert(speech);
// 	}
//   return <Button onClick={handleClick}/>;
// }

// export default Talker;
//-----------------------
// import React from 'react';

// function Button(props) {
//     return (
//       <button onClick={props.onClick}>
//         Click me!
//       </button>
//     );
// }

// export default Button;

//13
// import React, { useState } from 'react';

// export default function ColorPicker() {
//   const [color, setColor] = useState(); 
//  const divStyle = {backgroundColor: color};

//   return (
//     <div style={divStyle}>
//       <p>The color is {color}</p>
//       <button onClick={() => setColor('Aquamarine')}>
//         Aquamarine
//       </button>
//       <button onClick={() => setColor('BlueViolet')}> 
//         BlueViolet
//       </button>
//       <button onClick={() => setColor('Chartreuse')}>
//         Chartreuse
//       </button>
//      <button onClick={() => setColor('CornflowerBlue')}>
//         CornflowerBlue
//       </button>
//     </div>
//   );
// }

//14
// import React, { useState } from 'react';

// const colorNames = ['Aquamarine', 'BlueViolet', 'Chartreuse', 'CornflowerBlue', 'Thistle', 'SpringGreen', 'SaddleBrown', 'PapayaWhip', 'MistyRose'];

// export default function ColorPicker() {
//   const [color, setColor] = useState('Tomato');

//  const divStyle = {backgroundColor: color};

//   return (
//     <div style={divStyle}>
//       <p>Selected color: {color}</p>
//       {colorNames.map((colorName)=>(
//         <button 
//           onClick={() => setColor(colorName)} 
//           key={colorName}>
//        	     {colorName}
//       	</button>
//       ))}
//     </div>
//   );
// }


//15
// import React, { useState } from 'react';

// export default function QuizNavBar({ questions }) {
//   const [questionIndex, setQuestionIndex] = useState(0);

//   const goBack = () => 
//    setQuestionIndex((prevQuestionIndex) => prevQuestionIndex - 1);
//   const goToNext = () => 
//    setQuestionIndex((prevQuestionIndex) => prevQuestionIndex + 1);
 
//   const onFirstQuestion = questionIndex === 0;
//   const onLastQuestion = questionIndex === questions.length - 1;

//   return (
//     <nav>
//       <span>Question #{questionIndex + 1}</span>
//       <div>
//         <button onClick={goBack} disabled={onFirstQuestion}>
//           Go Back
//         </button>
//         <button onClick={goToNext} disabled={onLastQuestion}>
//           Next Question
//         </button>
//       </div>
//     </nav>
//   );
// }

//16
// import React from 'react';

// const myStyle={
//   background: 'lightblue',
//   color: 'darkblue'
// }

// function StyleDemo() {
//   return (
//     <>
//       <h1 style={ background: 'lightgreen', color: 'darkgreen' }>Style This With Inline Styling</h1>
//       <h1 style={myStyle}>Style This With Style Object Variable</h1>
//     </>
//   );
// }

// export default StyleDemo

//16
// import React from 'react';
// import { createRoot } from 'react-dom';
// import { createStore } from 'redux';

// // REDUX CODE
// ///////////////////////////////////

// const increment = () => {
//   return {type: 'increment'} 
// }

// const decrement = () => { 
//   return {type: 'decrement'}
// }

// const initialState = 0;
// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'increment':
//       return state + 1;
//     case 'decrement':
//       return state - 1;
//     default:
//       return state; 
//   }
// } 

// const store = createStore(counterReducer);

// // REACT CODE
// ///////////////////////////////////
// const root = createRoot(document.getElementById('root'));
// const render = () => {
//   root.render(
//     <CounterApp 
//       state={store.getState()}
//     />,
//   )
// }
// render();
// store.subscribe(render);

// function CounterApp(props) {
  
//   const state = props.state;

//   const onIncrementButtonClicked = () => {
//     store.dispatch(increment());
//   }
 
//   const onDecrementButtonClicked = () => {
//     store.dispatch(decrement());
//   }
  
//   return (   
//     <div>
//       <h1> {state} </h1>
//       <button onClick={onIncrementButtonClicked}>+</button> 
//       <button onClick={onDecrementButtonClicked}>-</button>
//     </div>
//   )
// }
