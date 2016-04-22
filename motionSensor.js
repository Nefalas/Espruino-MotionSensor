var motionSensorPin = A6;
var ledPin          = A5;

var active          = false;

var ssid            = "evothings-airport";
var password        = "evothings";

function turnOnLed() {
  console.log("Turning on LED");
  digitalWrite(ledPin, true);
}

function turnOffLed() {
  console.log("Turning off LED");
  console.log("---------------");
  digitalWrite(ledPin, false);
}

setWatch(function() {
  if (!active) {
    active = true;
    turnOnLed();
    setTimeout(function() {
      turnOffLed();
      active = false;
    }, 2000);
  }
}, motionSensorPin, {repeat: true, edge: "rising"});