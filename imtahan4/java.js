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