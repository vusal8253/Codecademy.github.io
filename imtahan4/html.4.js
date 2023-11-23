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
// let phoneNumber : string;

// if (Math.random() > 0.5) {
//   phoneNumber = '+61770102062';
// } else {
//   phoneNumber = '7167762323';
// }
var button = document.querySelector("button");

button.addEventListener("click",function(){
	document.body.style.backgroundColor = "red";
	document.body.style.backgroundColor = "blue";
});