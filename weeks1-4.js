const seatsInCar = 5;
let passengers = [];
let tankFull = true;

function enoughSeats() {
  console.log('in enoughSeats' );
  //check if seatsInCar >= number of passengers
  if(seatsInCar >= passengers.length){
    return true;
  }
  else{
    return false;
  }
} //end enoughSeats

function getInCar(nameOfPassenger){
  console.log('in getInCar', nameOfPassenger);
  //push new passenger into our passenger array
  passengers.push(nameOfPassenger);
  return passengers;
} //end getInCar

function readyForRoadtrip(){
  console.log('in readyForRoadtrip');
  if( enoughSeats() && tankFull ){
    return true;
  } //end ready
  else{
    return false;
  } //end not ready
} // end function readyForRoadtrip

getInCar('Hayley');
getInCar('Jordan');
getInCar('Hartley');
getInCar('Heather');

console.log('enough seats?', enoughSeats());
console.log('ready for roadtrip?', readyForRoadtrip());
