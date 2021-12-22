---
layout: post
title:  Got an Arduino Uno R3
date:   2021-12-21 17:43:00 -0500
render_with_liquid: false
categories: 
---
I recently decided to obtain an [Arduino Uno R3](https://www.arduino.cc/en/uploads/Main/Arduino_Uno_Rev3-schematic.pdf), which, if we are to trust its online reputation, is supposed to be a promising platform for prototyping hardware development. The device came in a start kit box with some other provided components such as resistors, a breadbox, a USB cable, LCD display, wires, LEDs, a tri-state 8-bit shift register, and a variety of sensors. It is fair to say that the kit promised a good decent variety of components for a beginner to dive into Arduino hardware experimentation. 

![Arduino Uno R3](https://cdn.sparkfun.com//assets/parts/6/3/4/3/11021-01.jpg){: width="150" }

Having obtained the hardware the next step was to set up a development environment. The Arduino website provided two options for my computer: I could use the Arduino IDE, or use the Arduino command-line utility (`arduino-cli`). In theory, everything that could be done in the official IDE could be done using the command-line utility. I counterintuitively decided to try using the command-line utility first. I was able to download it for macOS using Homebrew (`brew install arduino-cli`). Then, I decided to use VS Code to install the official [Arduino extension](https://marketplace.visualstudio.com/items?itemName=vsciot-vscode.vscode-arduino) made by Microsoft.

The extension did not work with `arduino-cli` out the box. It did not immediately detect the plugged in device (although it was detected by running `arduino-cli board list` in the shell). Several settings had to be set to allow the device to work: `"arduino.commandPath": "arduino-cli", "arduino.enableUSBDetection": true, "arduino.useArduinoCli": true, "arduino.path": "/opt/homebrew/bin/"`.

To make a project, the next step was to run `arduino-cli new BareMinimum` in the shell, where `BareMinimum` was my project title. This also works if you manually make a folder and then make a file called `BareMinimum.ino` within it. Within it you can put at a minimum the [following code](https://www.arduino.cc/en/Tutorial/BuiltInExamples/BareMinimum):
```cpp
{% highlight cpp %}
void setup() {
  // put your setup code here, to run once:

}

void loop() {
  // put your main code here, to run repeatedly:

}
{% endhighlight %}
```

After saving the code the next step was to ensure the interface with the actual Uno device. First I could run `arduino-cli board list` to identify the FQBN (fully qualified board name) for my board. The next step was to search for available 'cores' that would work with the board. The next step was to run ` arduino-cli board listall uno`. Following that I ran `arduino-cli core install arduino:avr`. I could now compile by running `arduino-cli compile --fqbn arduino:avr:uno MyFirstSketch` and then I could upload with `arduino-cli upload -p /dev/location --fqbn arduino:avr:uno MyFirstSketch` where `/dev/location/` would be subsituted by the appropriate `/dev` entry copied from the output of `arduino-cli board list`. 

After doing all this... the code was uploaded! Nothing of significance happened other than the light from the default LED remaining on. However, by creating [another project](https://create.arduino.cc/projecthub/B45i/getting-started-with-arduino-cli-7652a5) it would be possible to observe a blinking effect. 
```C
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

As you might notice from the example code, the Arduino language is customized a dialect of C++. 
