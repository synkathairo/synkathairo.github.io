---
layout: post
title:  "A journey into basic hardware design with an Arduino Uno R3"
date:   2021-12-21
# categories: hardware
excerpt: "I recently decided to obtain an Arduino Uno R3..."
codesnippet: true
---
<p>I recently decided to obtain an <a
href="https://store-usa.arduino.cc/products/arduino-uno-rev3/">Arduino
Uno R3</a>, which, if we are to trust its online reputation, is supposed
to be a promising platform for prototyping hardware development. The
device came in a starter kit box with some other provided components
such as resistors, a breadboard, a USB cable, LCD display, wires, LEDs,
a tri-state 8-bit shift register, and a variety of sensors. It is fair
to say that the kit promised a decent variety of components for a
beginner to dive into Arduino <a
href="https://www.arduino.cc/en/uploads/Main/Arduino_Uno_Rev3-schematic.pdf">hardware</a>
experimentation.</p>
<p><img
src="https://cdn.sparkfun.com//assets/parts/6/3/4/3/11021-01.jpg"
alt="Arduino Uno R3" width="150" /></p>
<p>Having obtained the hardware, the next step was to set up a
development environment. The <a
href="https://www.arduino.cc/en/software">Arduino website</a> provided
two options for my computer: I could use the Arduino IDE, or use the
Arduino command-line utility (<code>arduino-cli</code>). In theory,
everything that could be done in the official IDE could be done using
the command-line utility. I counterintuitively decided to try using the
command-line utility first. I was able to download it for macOS using
Homebrew (<code>brew install arduino-cli</code>). Then, I decided to use
VS Code to install the official <a
href="https://marketplace.visualstudio.com/items?itemName=vsciot-vscode.vscode-arduino">Arduino
extension</a> made by Microsoft.</p>
<p>The extension did not work with <code>arduino-cli</code> out the box.
It did not immediately detect the plugged in device (although it was
detected by running <code>arduino-cli board list</code> in the shell).
Several settings had to be set to allow the device to work:
<code>"arduino.commandPath": "arduino-cli", "arduino.enableUSBDetection": true, "arduino.useArduinoCli": true, "arduino.path": "/opt/homebrew/bin/"</code>.</p>
<p>To make a project, the next step was to run
<code>arduino-cli new BareMinimum</code> in the shell, where
<code>BareMinimum</code> was my project title. This also works if you
manually make a folder and then make a file called
<code>BareMinimum.ino</code> within it. Within it you can put at a
minimum the <a
href="https://www.arduino.cc/en/Tutorial/BuiltInExamples/BareMinimum">following
code</a>:</p>
```cpp
void setup() {
  // put your setup code here, to run once:

}

void loop() {
  // put your main code here, to run repeatedly:

}
```
<p>After saving the code the next step was to ensure the interface with
the actual Uno device. First I could run
<code>arduino-cli board list</code> to identify the FQBN (fully
qualified board name) for my board. The next step was to search for
available ‘cores’ that would work with the board. The next step was to
run <code>arduino-cli board listall uno</code>. Following that I ran
<code>arduino-cli core install arduino:avr</code>. I could now compile
by running
<code>arduino-cli compile --fqbn arduino:avr:uno BareMinimum</code> and
then I could upload with
<code>arduino-cli upload -p /dev/location --fqbn arduino:avr:uno BareMinimum</code>
where <code>/dev/location/</code> would be subsituted by the appropriate
<code>/dev</code> entry copied from the output of
<code>arduino-cli board list</code>.</p>
<p>After doing all this… the code was uploaded! Nothing of significance
happened other than the light from the default LED remaining on.
However, by creating <a
href="https://create.arduino.cc/projecthub/B45i/getting-started-with-arduino-cli-7652a5">another
project</a> it would be possible to observe a blinking effect.</p>
```cpp
void setup() {
    pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
    digitalWrite(LED_BUILTIN, HIGH);
    delay(1000);
    digitalWrite(LED_BUILTIN, LOW);
    delay(1000);
}
```
<p>Later I was also able to use the VS Code extension and its <a
href="https://maker.pro/arduino/tutorial/how-to-use-visual-studio-code-for-arduino">board
configuration settings</a> to upload code from the IDE directly.</p>
<p>As you might notice from the example code, the Arduino language is a
customized dialect of C++.</p>
<p>Following <a
href="https://www.circuitbasics.com/arduino-7-segment-display-tutorial/">another
guide</a> it was possible to proceed to the next step. The next step was
to try to use this board with some other hardware! I was able to use a
basic LED:</p>
```cpp
void setup(){
    pinMode(7, OUTPUT);
    digitalWrite(7, LOW);
}

void loop(){ 
}
```
<p>This was wired as follows (refer to the <a
href="https://www.circuitbasics.com/arduino-7-segment-display-tutorial/">original
link</a> for more details), using a 1K Ω resistor:</p>
<p><img
src="https://www.circuitbasics.com/wp-content/uploads/2017/05/Arduino-7-Segment-Display-Tutorial-Cathode-to-GPIO.png"
alt="single-LED" width="250" /></p>
<p>I also found it helpful to check resistor values using an <a
href="https://www.digikey.com/en/resources/conversion-calculators/conversion-calculator-resistor-color-code">online
resistor calculator</a>. Resistance values in ohms are typically
indicated by colored bands which correspond to certain values. It is
important to note which side you begin reading the bands from, since you
could obtain different values. An <a
href="https://www.arrow.com/en/research-and-events/articles/resistor-color-code">online
source</a> suggested reading from the side with grouped bands (never
from the side with a metallic band). The resistor here plays the role of
limiting current (as we know from the elementary formulation of Ohm’s
Law, <em>I = V/R</em>) and therefore a higher resistance could be used
to limit further the intensity/brightness of the LED. It is important to
use resistors in electronics to protect against excessive current from
damaging more sensitive components.</p>
<p>Another interesting feature of this simple circuit is to note that
the LEDs used (any LEDs in fact) exhibit a characteristic <a
href="https://www.switchelectronics.co.uk/blog/post/ledpolarity.html">polarity</a>,
that is, current can only flow in one direction and thus the LED must be
wired accordingly. LEDs, or light-emitting diodes, like other <a
href="http://hyperphysics.phy-astr.gsu.edu/hbase/Solids/diod.html">diodes</a>
operate due to a <a
href="https://en.wikipedia.org/wiki/P%E2%80%93n_junction">p-n
junction</a> which is possible due to the use of semiconductors and
impurities which ‘bias’ the current to only flow, for the most part, in
one direction. As can be noted on the above image, the 5 volts are on
the side of the the anode (+) side of the LED, also wired in series with
the resistor. The cathode (-) side is connected to pin 7, which has a
‘LOW OUTPUT’ set by our code, which in according to the <a
href="https://www.arduino.cc/reference/en/language/variables/constants/constants/">code
documentation</a> actually sets the pin to 0 volts. In theory, our setup
would be similar to <a
href="https://learn.sparkfun.com/tutorials/light-emitting-diodes-leds/all">doing
this</a>:</p>
<p><img
src="https://cdn.sparkfun.com/assets/6/e/8/3/c/51f93d85757b7f2049270817.png"
alt="circuit_cartoon" width="250" /></p>
<p>Or, if we were to follow the standard circuitry schematic, it would
be <a
href="https://circuitdigest.com/electronic-circuits/simplle-led-circuit-diagram">similar
to this</a>
<!--(http://www.electronicshobbyprojects.com/basic-circuits/simplest-led-circuit.html)-->
(albeit with different numerical values for voltage and resistance
etc):</p>
<p><img
src="https://circuitdigest.com/sites/default/files/circuitdiagram/simple-led-ckt_0.png"
alt="LED_circuitDiagram" width="250" /></p>
<p>Nominally/conventionally, ‘current’ flows from positive to negative,
that is, from our anode side to our cathode side (in actuality it is
more like the electrons ‘flow’ from the negative to the positive side).
Our current works out to be a little less than 5V/1000Ω = 5mA (unknown
resistance of the LED itself).</p>
<p>It is also important to note the way that breadboards are wired.
Supposedly, breadboards are named as such due to the <a
href="https://en.wikipedia.org/wiki/Breadboard#Evolution">historic usage
of actual bread cutting boards for prototyping circuits</a>. The wiring
pattern of breadboards follows <a
href="https://www.sciencebuddies.org/science-fair-projects/references/how-to-use-a-breadboard">this
pattern</a>, where each slot within a rows is connected to the others in
the row (not going through the middle however), as are each slot in a
side column:
<!-- (http://wiring.org.co/learning/tutorials/breadboard/): --></p>
<!-- ![breadboard](http://wiring.org.co/learning/tutorials/breadboard/imgs/breadboard-02.jpg){: width="400"} -->
<p><img
src="https://www.sciencebuddies.org/Files/7326/6/breadboard-row-connections.png"
alt="breadboardwiring" width="300" /></p>
<p>This was just a very elementary demonstration of how circuitry could
be incorporated with hardware and software, and our humble <a
href="https://www.microchip.com/en-us/product/ATmega328P">ATMega328P
microcontroller</a> is sufficient to work with this circuitry!</p>
<hr />
<p>Note: the code snippets in this page come from the linked pages,
please refer to linked pages for source information and images as well
as further details.</p>