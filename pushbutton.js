const Gpio = require('onoff').Gpio;
const led = new Gpio(4, 'out');
const button = new Gpio(17, 'in', 'both');
button.watch((err, value) =>  {
  console.log(value? "Button Pressed" : "Button Released");
  led.writeSync(value);
});

process.on('SIGINT', _ => {
  led.unexport();
  button.unexport();
});
