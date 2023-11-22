// if (coin === "heads") {
//   console.log('coin is heads!');
// } else {
//   console.log('coin is tails...');
// }

// const { Button } = require("bootstrap")

// let runTime = 35;
// let runDistance = 3.5;

// if (runTime <= 30 && runDistance > 3.5) {
//   console.log("You're super fast!");
// } else if (runTime >= 30 && runDistance <= 3) {
//   console.log("You're not making your pace!");
// } else if (runTime > 30 || runDistance > 3) {
//   console.log("Nice workout!"); 
// } else {
//   console.log("Keep on running!");
// }

// walkSignal === 'Walk' ? console.log('You may walk!') : console.log('Do not walk!');

// const areaOfCircle = radius => Math.PI * radius * radius;

// const eatFruit = (fruit = 'apple') => {
//   console.log(`This ${fruit} is delicious!`);
// };

// eatFruit();

// const cities = ['Chicago', 'San Francisco', 'New York'];

// console.log(cities[2]);

// for (let i = 10; i > 0; i++) {
//   console.log(i);
// };

// const animal = 'cat';

// for (let i = 0; i < animal.length; i++) {
//   console.log(animal[i]);
//   for (let j = 1; j < 4; j++) {
//     console.log(j);
//   }
// }

// let socialMedia = ['Instagram', 'Facebook', 'Twitter'];

// for (let socialMediaIndex = 0; socialMediaIndex < socialMedia.length; socialMediaIndex++) {
//     console.log(socialMedia[socialMediaIndex]);
// }

// const nums = [1, 2, 3, 4];
// const initializer = 90;

// const addItUp = nums.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, initializer);

// console.log(addItUp);

// const oddNumbers = [1, 3, 5, 7];

// const evenNumbers = oddNumbers.map(number => {
//   return number * 2  
// });

// const sum = (x, y) => x + y;
// sum.alias = 'summation';

// for (let x = 0; x < 10, x++) {
//   console.log(x)
// }

// const child = document.getElementById('firstItem');
// const orderedList = child.parentNode; 

// element.addEventListener("keyup", handleKeyUp);

// element.removeEventListener("keyup", handleKeyUp);

// git add index.js app.js
//git status

//////////////////////////
// class HospitalEmployee {
//     constructor(name) {
//       this._name = name;
//       this._remainingVacationDays = 20;
//     }
    
//     get name() {
//       return this._name;
//     }
    
//     get remainingVacationDays() {
//       return this._remainingVacationDays;
//     }
    
//     takeVacationDays(daysOff) {
//       this._remainingVacationDays -= daysOff;
//     }
//   }
  
//   class Nurse extends HospitalEmployee {
//     constructor(name, certifications) {
//       super(name);
//       this._certifications = certifications;
//     } 
    
//     get certifications() {
//       return this._certifications;
//     }
    
//     addCertification(newCertification) {
//       this.certifications.push(newCertification);
//     }
//   }
  
//   const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
//   nurseOlynyk.takeVacationDays(5);
//   console.log(nurseOlynyk.remainingVacationDays);
//   nurseOlynyk.addCertification('Genetics');
//   console.log(nurseOlynyk.certifications);
//   Math.floor(Math.random() * 10000)

// namesArray.forEach(name =>  console.log('Welcome, ' + name + '!'));
// let cars = ['ferrari', 'tesla', 'cadillac'];
// let car1 = cars[0];
// let car2 = cars[1];
// let car3 = cars[2];
// console.log(car1, car2, car3);

//  let vusal = { ad: "vusal", soyad: "Memmedov" };
//  let { ad, soyad } = vusal;
//  console.log(ad,soyad);

// let truck = {
//     model: '1977 Mustang convertible',
//     maker: 'Ford',
//     city: 'Detroit',
//     year: '1977',
//     convertible: true
//   };
  
//   const printCarInfo = ({model, maker, city}) => {
//     console.log(`The ${model}, or ${maker}, is in the city ${city}.`);
//   };
  
//   printCarInfo(truck);
// Prints: The 1977 Mustang convertible, or Ford, is in the city Detroit.



// ders 5
// class Node {
//     constructor(data) {
//       // complete constructor method here
//       this.data = data;
//       this.next = null;
//     }
  
//     setNextNode(node) {
//   // complete setNextNode method here
//   if (node instanceof Node || node === null) {
//         this.next = node;
//       } else {
//         throw new Error('Next node must be a member of the Node class.');
//       }
//     }
    
//     getNextNode() {
//       return this.next;
//     }
//   }
  
//   module.exports = Node;


/// 5-4
// https://discuss.codecademy.com/t/did-you-make-a-recursive-call-to-countdownrecursive-with-count-decremented/748317
//5-5
//https://dev.to/shubhamtiwari909/merge-sort-algorithm-in-javascript-3ko7
//1 ders 1
//  <main>
//     <section>
//       <h2> My top 3 meals:</h2>
//       <ol>
//         <li>feta slices</li>
//         <li>Vegetarian lasagne</li>
//         <li>Easy kale soup</li>
//       </ol>
//     </section>
//   </main>  
//    <table id="table">
//       <thead>
//        <tr>
//         <th scope="col">Guests</th>
//        </tr>
//       </thead>
//       <tbody>
//         <tr>
//          <th scope="row">Rose Nylund</th>
//         </tr>
//       </tbody>
      
//     </table>

{/* <body>
      <header>
        <h1 id="title">The Daily Meow</h1>
        <h2 id="urbanCats">Urban Cats End Metro City's Rodent Problem</h2>
        <h3 id="urbanCatsSubheader">Making the city cleaner one meal at a time</h3>
        <p>Lion leopard siberian donskoy egyptian mau. British shorthair cougar or malkin bombay but tom. American bobtail norwegian forest, for ocelot cougar for panther singapura for ocicat. Tomcat. Ocicat. Tomcat cougar, american shorthair. Russian blue birman. Birman jaguar. Malkin.</p>
      </header>
      <main>
        <h2 id="opEd">Op Ed: In Defense of Belly Rubs</h2>
        <h3 id="opEdSubheader">Not for every cat, but certainly worth a try.</h3>
        <p>Tiger bombay balinese panther tabby kitten tiger. Singapura siberian for burmese for lynx or american bobtail or kitty. Jaguar savannah. Tiger lion yet balinese munchkin abyssinian but cornish rex, jaguar. Grimalkin tom. Bombay munchkin. Ocicat lynx, lion maine coon. American shorthair. Mouser. Tom persian. Sphynx. Birman munchkin bobcat tom.</p>
      </main>
        
    </body> */}

//     body {
//   border: 0;
//   margin: 0;
//   font-family: 'Tahoma', monospace;
// }

// h1 {
//   text-align: center;
//   display: block;
//   font-size: 18px;
// }

// .container {
//   height: 50px;
//   width: 100%;
//   display: flex;
//   background-color: whitesmoke;
// }

// .box {
//   height: 25px;
//   width: 50px;
//   background-color: green;
//   border: 1px solid lightgrey;
//   display: inline-block;
// }

// #left {
//   display: flexbox;
//   justify-content: left;
//   align-items: center;
  
// }

// #right {
//   display: flexbox;
//   justify-content: right;
//   align-items: center;
// }

// #center {
//   display: flexbox;
//   justify-content: center;
//   align-items: center;
// }

// #outerspace {
//   display: flexbox;
//   align-items: center;
//   justify-content: space-around;
// }

// #betweenspace {
//   display: flexbox;
//   justify-content: space-between;
//   align-items: center;
// }

// @media only screen and (max-width: 480px) {
//   .container {
//     width: 270px;
//   }

// }

// const freeShippingMessage = "Congrats! You are eligible for free shipping on this order.";

// const freeShippingPromo = "Get free shipping on all orders of $75 dollars or more.";

// function checkCartTotal(subTotal) {
//     if(subTotal > 75) {
//       return freeShippingMessage
//     } else if (subTotal < 75) {
//       return freeShippingPromo
//     }
   
//   }
//   console.log(checkCartTotal(70));

// const students = [
//     { name: "Paisley Parker", gpa: 4.0 },
//     { name: "Lake Herr", gpa: 3.2 },
//     { name: "Promise Lansing", gpa: 3.9 },
//     { name: "Friar Park", gpa: 2.8 },
//     { name: "Mason Amitie", gpa: 3.49 }
//   ]
  
//   function getDeansList(studentList) {
//     let deansList = [];
  
//     for (const {gpa, name} of studentList) {
//       if(gpa >= 3.5){
//         deansList.push(name)
//       }
//     }
//     return deansList
//   }
  
//   console.log(getDeansList(students))

// function checkPalindrome(str) {
//     let reversedStr = [];
    
//     for(let i = str.length - 1; i >= 0; i--) {
//       reversedStr += str[i];
//     }
  
//     if (str.split(" ").join("") === reversedStr.split(" ").join("")) {
//       return `The word or sentence, "${str}", is a palindrome!`;
//     } else {
//       return `The word or sentence, "${str}", is not a palindrome.`;
//     }
//   };
  
//   console.log(checkPalindrome('may a moody baby doom a yam'));
// Generate a random hexadecimal string

// const generateBackgroundColor = () => {
//     const hexadecimals = '0123456789ABCDEF';
//     let randomHexString = '#';
//     for (let i = 0; i < 6; i++) {
//       const randomHexChar = hexadecimals[Math.floor(Math.random() * hexadecimals.length)];
//       randomHexString += randomHexChar;
//     };
//     return randomHexString;
//   };
  
//   // Grab the element with ID #colorBtn from the DOM
//   const colorBtn = document.querySelector('#colorBtn');
  
//   // Change the background color and display the color on the page
//   const changeColor = () => {
//     const randomBackgroundColor = generateBackgroundColor();
//     document.body.style.backgroundColor = randomBackgroundColor;
//     document.querySelector('#randomColorText').innerHTML = randomBackgroundColor;
//   }
  
//   // Write your event handler here
<!DOCTYPE html>
<html>
  <head>
    <title>Friendsgiving RSVP Form</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1 id="rsvpHeader">Friendsgiving RSVP</h1>
    <form>
      <label for="firstName" id="firstNameLabel">First Name</label>
      <input type="text" id="firstName" required>
      <br>
      <label for="lastName" id="lastNameLabel">Last Name</label>
      <input type="text" id="lastName" required>
      <br>
      <label for="partySize" id="partySizeLabel">How many individuals will be in your party?</label>
      <input type="number"  min="1" max="3" required>
      <br>
      <input type="submit" id="submitBtn" value="RSVP">
    </form>
  </body>
</html>


// <!DOCTYPE html>
// <html>

// <head>
//   <meta charset="utf-8">
//   <meta name="viewport" content="width=device-width">
//   <title>Puppy Love</title>
//   <link href="style.css" rel="stylesheet" type="text/css">
//   <script src="script.js" defer></script>
// </head>

// <body>

// <!-- Header -->
//   <header id="header">
    
//     <h1 id="pageTitle">Puppy Love</h1>
//     <h2 id="subheader">Find the furrfect new addition to your family!</h2>

// <!-- Nav Bar -->
//     <nav id="navBar">
//       <ul>
//         <li><a href="#">Adopt a Puppy</a></li>
//         <li><a href="#">Foster a Animal</a></li>
//         <li><a href="#">Contact</a></li>
//       </ul>
//     </nav>
    
//   </header>
  
// <!--  Img Div -->
//   <div id="imgDiv">
//     <img 
      id="puppyImg" 
      src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=300&h=auto&dpr=1"
      alt="puppyImg"
    >
  </div>
</body>

</html>

// <!DOCTYPE html>
// <html>
//   <head>
//     <title>Friendsgiving RSVP Form</title>
//     <link rel="stylesheet" href="style.css">
//   </head>
//   <body>
//     <h1 id="rsvpHeader">Friendsgiving RSVP</h1>
//     <form>
//       <label for="firstName" id="firstNameLabel">First Name</label>
//       <input type="text" id="firstName" required>
//       <br>
//       <label for="lastName" id="lastNameLabel">Last Name</label>
//       <input type="text" id="lastName" required>
//       <br>  
//        <label for="partySize" id="partySizeLabel">How many individuals will be in your party?</label>
//        <input type="number" min="1" max="3" id="partySize" required>
//       <br>
//       <input type="submit" id="submitBtn" value="RSVP">
//     </form>
//   </body>
// </html>