// Now try it yourself! Modify the Bike constructor
// to have a private property called gear and two
// public methods called
// getGear and setGear
// to get and set that value.

var Car = function() { //car constructor
 // this is a private variable
 var speed = 10;
 // these are public methods
 this.accelerate = function(change) {
  speed += change;
 };
 this.decelerate = function() {
  speed -= 5;
 };

 this.getSpeed = function() {
  return speed;
 };
};

var Bike = function() {

 // Only change code below this line.
 var gear;

 this.setGear = function(change){
gear = change;
 };
 this.getGear = function(){
return gear;
 };

};

var myCar = new Car();
console.log(myCar);
var myBike = new Bike();
console.log(myBike);
