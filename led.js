const Gpio = require('onoff').Gpio; // Gpio class
const led_g = new Gpio(4, 'out');       // Export GPIO4 as an output
const led_y = new Gpio(17, 'out');       // Export GPIO4 as an output
const led_r = new Gpio(27, 'out');       // Export GPIO4 as an output

const blink = () => {
    if(led_g.readSync() == 1) {
        led_g.writeSync(0);
        led_y.writeSync(1);
	    
    }
	else if (led_y.readSync() == 1) {
        led_y.writeSync(0);
        led_r.writeSync(1);
    } 
	else if(led_r.readSync() == 1) {
        led_r.writeSync(0);
        led_g.writeSync(1);
    }
}
// Start with 1 led on
 led_y.writeSync(1);
const iv = setInterval(blink, 200);

process.on('SIGINT', _ => {
  clearInterval(iv);
  led_g.unexport();
  led_y.unexport();
  led_r.unexport();
});
