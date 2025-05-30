---
layout: post
title:  "Setting up a virtual machine on Apple Silicon “M1” Macs using UTM"
date:   2022-01-20
categories: virtualization
excerpt: "Recently I had to use an Ubuntu virtual machine (VM) for a course. However, the recommended method, using Oracle's VirtualBox software, was not (at the time of this writing) supported for the ARM architecture (arm64/aarch64) which my M1 Mac laptop utilized..."
# published: false
---
<p>Recently I had to use an Ubuntu virtual machine (VM) for a course.
However, the recommended method, using Oracle’s <a
href="https://www.virtualbox.org">VirtualBox</a> software, was not (at
the time of this writing) supported for the ARM architecture
(arm64/aarch64) which my M1 Mac laptop utilized. Therefore I had to find
another way run a virtual machine, or I could give up and try to use an
x86/amd64 computer (commonly known as an ‘Intel’ architecture computer).
I decided to use the open source software, <a
href="https://github.com/utmapp/UTM">UTM</a>. UTM is a GUI application
which runs <a href="https://www.qemu.org">QEMU</a> underneath, albeit
with settings preconfigured to work with Mac computers.</p>
<p>I ended up referencing several guides before successfully being able
to install the software. I decided to use the (as of this writing) beta
version of the software, version <a
href="https://github.com/utmapp/UTM/releases/tag/v3.0.3">3.0.3</a>,
since the 3.X versions have incorporated a setup wizard that makes setup
much easier. I ended up downloading the live server ISO file from the <a
href="https://ubuntu.com/download/server/arm">Ubuntu Server for ARM
webpage</a>, specifically, I ended up happening to use the long-term
support (LTS) version <a
href="https://cdimage.ubuntu.com/releases/20.04/release/ubuntu-20.04.3-live-server-arm64.iso">Focal
Fossa (20.4)</a>.</p>
<p>The next step was to configure the wizard, which was actually quite
straightforward. After opening UTM, one simply presses “Create a new
Virtual Machine”, then in this case, choosing “Virtualize” for the next
step, then choosing “Linux” under the operating system section. Then,
using the default virtualization (QEMU instead of Apple Virtualization),
it is enough to then simply select the “Boot ISO image” by clicking
“Browse” and selecting the downloaded ISO file. The following pages
allow for configuring RAM, CPU, and maximum size of the drive (since
this uses the qcow2 format, it will not actually use the full size at
the beginning, rather, this sets an upper limit to the storage usage of
the virtual machine). Pressing next to step through these options, we
can pick a name for the installation and click “Save”.</p>
<!-- ![select VM]({{ site.url }}/assets/2022/01/selectVM.png){: width="250" } ![select Virtualize]({{ site.url }}/assets/2022/01/selectVirtualize.png){: width="250" } ![select Linux]({{ site.url }}/assets/2022/01/selectLinux.png){: width="250" } ![choose ISO]({{ site.url }}/assets/2022/01/utmBootISO.png){: width="250" } ![chosen ISO]({{ site.url }}/assets/2022/01/utmBootISO2.png){: width="250" } ![UTM summary]({{ site.url }}/assets/2022/01/utmSummary.png){: width="250" }  -->
<figure>
<img src="/assets/2022/01/utmSetup.gif"
alt="UTM setup" />
<figcaption aria-hidden="true">UTM setup</figcaption>
</figure>
<p>After this, the virtual machine can be booted from the sidebar in UTM
(click in the taskbar “View” and “Toggle Sidebar” if you do not see it).
Upon booting, choose the first install option in GRUB, (press
<kbd>Enter</kbd> for “Install Ubuntu Server”). Choose a language,
keyboard layout, network connection (you can probably leave this default
and simply click next), proxy (can leave this blank as well), archive
mirror (you can leave the default or <a
href="https://launchpad.net/ubuntu/+archivemirrors">pick one near to
you</a> for faster speeds). Go through the settings, pick a Name,
Username, Hostname, and install.</p>
<figure>
<img src="/assets/2022/01/installUbuntu.png"
alt="Install Ubuntu" />
<figcaption aria-hidden="true">Install Ubuntu</figcaption>
</figure>
<p>Next, after exiting the installer and rebooting, you might notice
that the UTM virtual machine is unable to boot (as of the 3.0.3 beta).
Here you need to right click the VM and press “Edit”, look at the
section titled “Drives” on the left-hand side, select the “USB Drive”,
and press “Move down” to move it to a lower boot priority.</p>
<!-- ![UTM USB]({{ site.url }}/assets/2022/01/utmUSB.png){: width="300" }  ![UTM USB2]({{ site.url }}/assets/2022/01/utmUSB2.png){: width="300" }  -->
<figure>
<img src="/assets/2022/01/utmUsbDrive.gif"
alt="UTM USB" />
<figcaption aria-hidden="true">UTM USB</figcaption>
</figure>
<p>Now, when you try to boot the VM, you should be presented with a
console. You can login and use the operating system!</p>
<!-- ![Ubuntu TTY]({{ site.url }}/assets/2022/01/ubuntuTTY.png) -->
<figure>
<img src="/assets/2022/01/ubuntuNeofetch.png"
alt="Ubuntu Neofetch" />
<figcaption aria-hidden="true">Ubuntu Neofetch</figcaption>
</figure>
<p>Finally, perhaps you do not want to simply use everything in the
terminal and you want to use a graphical user interface (GUI) desktop as
you are accustomed to using. You can run
<code>sudo apt install ubuntu-desktop</code> (or use another desktop, <a
href="https://itsfoss.com/install-gui-ubuntu-server/">see here</a>).
Then run <code>sudo apt install lightdm</code> to install the LightDM
display manager (if you are not sure what this is, just know that a
display manager is needed to use the GUI). Finally, run
<code>sudo services lightdm start</code> to start the GUI. You will be
presented with a colorful login page where you can enter your password
and enjoy the desktop!</p>
<figure>
<img src="/assets/2022/01/ubuntuDesktop.png"
alt="Ubuntu Desktop" />
<figcaption aria-hidden="true">Ubuntu Desktop</figcaption>
</figure>
<p>You can enable optionally a feature to be able to share files between
your virtual machine and your host operating system. You again want to
right click and “Edit” the settings for the virtual machine (after it is
shut down). Press “Sharing” and then check “Enable Directory Sharing”.
Now, boot Ubuntu, open a terminal (terminal app if you installed the
GUI, otherwise you are already in the terminal), type
<code>sudo apt install spice-vdagent spice-webdavd</code> to <a
href="https://mac.getutm.app/support/">install</a> the SPICE guest tools
package which will allow sharing files.</p>
<figure>
<img src="/assets/2022/01/utmSharing.png"
alt="SPICE tools" />
<figcaption aria-hidden="true">SPICE tools</figcaption>
</figure>
<p>More links for further information: 
<ul>
<li><a
href="https://mac.getutm.app/gallery/ubuntu-20-04">Ubuntu 20.04 -
UTM</a></li>
<li><a href="https://itsfoss.com/install-gui-ubuntu-server/">How
to Install GUI on Ubuntu Server [Beginner’s Guide]</a></li>
<li><a
href="https://medium.com/@lizrice/linux-vms-on-an-m1-based-mac-with-vscode-and-utm-d73e7cb06133">Linux
VMs on an M1-based Mac with VScode and UTM</a></li>
<li><a
href="https://developer.apple.com/documentation/virtualization/running_linux_in_a_virtual_machine">Running
Linux in a Virtual Machine | Apple Developer Documentation</a></li>
</ul>
</p>