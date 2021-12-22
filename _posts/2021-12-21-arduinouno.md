---
layout: post
title:  A journey into basic hardware design with an Arduino Uno R3
date:   2021-12-21 17:43:00 -0500
categories: 
---
I recently decided to obtain an [Arduino Uno R3](https://www.arduino.cc/en/uploads/Main/Arduino_Uno_Rev3-schematic.pdf), which, if we are to trust its online reputation, is supposed to be a promising platform for prototyping hardware development. The device came in a start kit box with some other provided components such as resistors, a breadbox, a USB cable, LCD display, wires, LEDs, a tri-state 8-bit shift register, and a variety of sensors. It is fair to say that the kit promised a good decent variety of components for a beginner to dive into Arduino hardware experimentation. 

![Arduino Uno R3](https://cdn.sparkfun.com//assets/parts/6/3/4/3/11021-01.jpg){: width="150" }

Having obtained the hardware the next step was to set up a development environment. The Arduino website provided two options for my computer: I could use the Arduino IDE, or use the Arduino command-line utility (`arduino-cli`). In theory, everything that could be done in the official IDE could be done using the command-line utility. I counterintuitively decided to try using the command-line utility first. I was able to download it for macOS using Homebrew (`brew install arduino-cli`). Then, I decided to use VS Code to install the official [Arduino extension](https://marketplace.visualstudio.com/items?itemName=vsciot-vscode.vscode-arduino) made by Microsoft.

The extension did not work with `arduino-cli` out the box. It did not immediately detect the plugged in device (although it was detected by running `arduino-cli board list` in the shell). Several settings had to be set to allow the device to work: `"arduino.commandPath": "arduino-cli", "arduino.enableUSBDetection": true, "arduino.useArduinoCli": true, "arduino.path": "/opt/homebrew/bin/"`.

To make a project, the next step was to run `arduino-cli new BareMinimum` in the shell, where `BareMinimum` was my project title. This also works if you manually make a folder and then make a file called `BareMinimum.ino` within it. Within it you can put at a minimum the [following code](https://www.arduino.cc/en/Tutorial/BuiltInExamples/BareMinimum):
```cpp
void setup() {
  // put your setup code here, to run once:

}

void loop() {
  // put your main code here, to run repeatedly:

}
```

After saving the code the next step was to ensure the interface with the actual Uno device. First I could run `arduino-cli board list` to identify the FQBN (fully qualified board name) for my board. The next step was to search for available 'cores' that would work with the board. The next step was to run `arduino-cli board listall uno`. Following that I ran `arduino-cli core install arduino:avr`. I could now compile by running `arduino-cli compile --fqbn arduino:avr:uno BareMinimum` and then I could upload with `arduino-cli upload -p /dev/location --fqbn arduino:avr:uno BareMinimum` where `/dev/location/` would be subsituted by the appropriate `/dev` entry copied from the output of `arduino-cli board list`. 

After doing all this... the code was uploaded! Nothing of significance happened other than the light from the default LED remaining on. However, by creating [another project](https://create.arduino.cc/projecthub/B45i/getting-started-with-arduino-cli-7652a5) it would be possible to observe a blinking effect. 
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

As you might notice from the example code, the Arduino language is a customized dialect of C++.

Following [another guide](https://www.circuitbasics.com/arduino-7-segment-display-tutorial/) it was possible to proceed to the next step. The next step was to try to use this board with some other hardware! I was able to use a basic LED:
```cpp
void setup(){
    pinMode(7, OUTPUT);
    digitalWrite(7, LOW);
}

void loop(){ 
}
```

This was wired as follows (refer to the original link for more details), using a 1K Ω resistor:

![single-LED](https://www.circuitbasics.com/wp-content/uploads/2017/05/Arduino-7-Segment-Display-Tutorial-Cathode-to-GPIO.png){: width="250"}

I also found it helpful to check resistor values using an [online resistor calculator](https://www.digikey.com/en/resources/conversion-calculators/conversion-calculator-resistor-color-code). Resistance values in ohms are typically indicated by colored bands which correspond to certain values. It is important to note which side you begin reading the bands from, since you could obtain different values. An [online source](https://www.arrow.com/en/research-and-events/articles/resistor-color-code) suggested reading from the side with grouped bands (never from the side with a metallic band). The resistor here plays the role of limiting current (as we know from the elementary formulation of Ohm's Law, *I = V/R*) and therefore a higher resistance could be used to limit further the intensity/brightness of the LED. It is important to use resistors in electronics to protect against excessive current from damaging more sensitive components. 

Another interesting feature of this simple circuit is to note that the LEDs used (any LEDs in fact) exhibit a characteristic [polarity](https://www.switchelectronics.co.uk/blog/post/ledpolarity.html), that is, current can only flow in one direction and thus the LED must be wired accordingly. As can be noted on the above image, the 5 volts are on the side of the the anode (+) side of the LED, also wired in series with the resistor. The cathode side is connected to pin 7, which has a 'LOW OUTPUT' set by our code, which in according to the [code documentation](https://www.arduino.cc/reference/en/language/variables/constants/constants/) actually sets the pin to 0 volts. In theory, our setup would be similar to [doing this](https://learn.sparkfun.com/tutorials/light-emitting-diodes-leds/all):

![circuit_cartoon](https://cdn.sparkfun.com/assets/6/e/8/3/c/51f93d85757b7f2049270817.png){: width="250"}

Or, if we were to follow the standard circuitry schematic, it would be [similar to this](http://www.electronicshobbyprojects.com/basic-circuits/simplest-led-circuit.html) (albeit with different numerical values for voltage and resistance etc):

![LED_circuitDiagram](http://www.electronicshobbyprojects.com/wp-content/uploads/2016/01/Project1SimpleLED-2.png){: width="250"}

Nominally/conventionally, 'current' flows from positive to negative, that is, from our anode side to our cathode side (in actuality it is more like the electrons 'flow' from the negative to the positive side). Our current works out to be a little less than 5V/1000Ω = 5mA (unknown resistance of the LED itself).

It is also important to note the way that breadboards are wired. Supposedly, breadboards are named as such due to the [historic usage of actual bread cutting boards for prototyping circuits](https://en.wikipedia.org/wiki/Breadboard#Evolution). The wiring pattern of breadboards follows [this pattern](http://wiring.org.co/learning/tutorials/breadboard/):

![breadboard](http://wiring.org.co/learning/tutorials/breadboard/imgs/breadboard-02.jpg){: width="400"}

This was just a very elementary demonstration of how circuitry could be incorporated with hardware and software, and our humble [ATMega328P](https://store-usa.arduino.cc/products/arduino-uno-rev3/) micrcontroller is sufficient to work with this circuitry!

--------

Note: the code snippets in this page come from the linked pages, please refer to linked pages for source information and images as well as further details.
