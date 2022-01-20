---
layout: post
title:  Setting up a virtual machine on Apple Silicon "M1" Macs using UTM
date: 2022-01-20T01:00:59.583Z
---

Recently I had to use an Ubuntu virtual machine (VM) for a course. However, the recommended method, using Oracle's [VirtualBox](https://www.virtualbox.org) software, was not (at the time of this writing) supported for the ARM architecture (arm64/aarch64) which my M1 Mac laptop utilized. Therefore I had to find another way run a virtual machine, or I could give up and try to use an x86/amd64 computer (commonly known as an 'Intel' architecture computer). I decided to use the open source software, [UTM](https://github.com/utmapp/UTM). UTM is a GUI application which runs [QEMU](https://www.qemu.org) underneath, albeit with settings preconfigured to work with Mac computers. 

I ended up referencing several guides before successfully being able to install the software. I decided to use the (as of this writing) beta version of the software, version [3.0.3](https://github.com/utmapp/UTM/releases/tag/v3.0.3), since the 3.X versions have incorporated a setup wizard that makes setup much easier. I ended up downloading the live server ISO file from the [Ubuntu Server for ARM webpage](https://ubuntu.com/download/server/arm), specifically, I ended up happening to use the long-term support (LTS) version [Focal Fossa (20.4)](https://cdimage.ubuntu.com/releases/20.04/release/ubuntu-20.04.3-live-server-arm64.iso). 

The next step was to configure the wizard, which was actually quite straightforward. After opening UTM, one simply presses "Create a new Virtual Machine", then in this case, choosing "Virtualize" for the next step, then choosing "Linux" under the operating system section. Then, using the default virtualization (QEMU instead of Apple Virtualization), it is enough to then simply select the "Boot ISO image" by clicking "Browse" and selecting the downloaded ISO file. The following pages allow for configuring RAM, CPU, and maximum size of the drive (since this uses the qcow2 format, it will not actually use the full size at the beginning, rather, this sets an upper limit to the storage usage of the virtual machine). Pressing next to step through these options, we can pick a name for the installation and click "Save".

![select VM]({{ site.url }}/assets/2022/01/selectVM.png){: width="250" } ![select Virtualize]({{ site.url }}/assets/2022/01/selectVirtualize.png){: width="250" } ![select Linux]({{ site.url }}/assets/2022/01/selectLinux.png){: width="250" } ![choose ISO]({{ site.url }}/assets/2022/01/utmBootISO.png){: width="250" } ![chosen ISO]({{ site.url }}/assets/2022/01/utmBootISO2.png){: width="250" } ![UTM summary]({{ site.url }}/assets/2022/01/utmSummary.png){: width="250" } 

After this, the virtual machine can be booted from the sidebar in UTM (click in the taskbar "View" and "Toggle Sidebar" if you do not see it). Upon booting, choose the first install option in GRUB, (press <kbd>Enter</kbd> for "Install Ubuntu Server"). Choose a language, keyboard layout, network connection (you can probably leave this default and simply click next), proxy (can leave this blank as well), archive mirror (you can leave the default or [pick one near to you](https://launchpad.net/ubuntu/+archivemirrors) for faster speeds). Go through the settings, pick a Name, Username, Hostname, and install.

![Install Ubuntu]({{ site.url }}/assets/2022/01/installUbuntu.png) 

Next, after exiting the installer and rebooting, you might notice that the UTM virtual machine is unable to boot (as of the 3.0.3 beta). Here you need to right click the VM and press "Edit", look at the section titled "Drives" on the left-hand side, select the "USB Drive", and press "Move down" to move it to a lower boot priority. Now, when you try to boot the VM, you should be presented with a console. You can login and use the operating system!

Finally, perhaps you do not want to simply use everything in the terminal and you want to use a graphical user interface (GUI) desktop as you are accustomed to using. You can run `sudo apt install ubuntu-desktop` (or use another desktop, [see here](https://itsfoss.com/install-gui-ubuntu-server/)). Then run `sudo apt install lightdm` to install the LightDM display manager (if you are not sure what this is, just know that a display manager is needed to use the GUI). Finally, run `sudo services lightdm start` to start the GUI. You will be presented with a colorful login page where you can enter your password and enjoy the desktop!

You can enable optionally a feature to be able to share files between your virtual machine and your host operating system. You again want to right click and "Edit" the settings for the virtual machine (after it is shut down). Press "Sharing" and then check "Enable Directory Sharing". Now, boot Ubuntu, open a terminal (terminal app if you installed the GUI, otherwise you are already in the terminal), type `sudo apt install spice-vdagent spice-webdavd` to [install](https://mac.getutm.app/support/) the SPICE guest tools package which will allow sharing files. 

More links for further information:
- [Ubuntu 20.04 - UTM](https://mac.getutm.app/gallery/ubuntu-20-04)
- [How to Install GUI on Ubuntu Server [Beginner's Guide]](https://itsfoss.com/install-gui-ubuntu-server/)
- [Linux VMs on an M1-based Mac with VScode and UTM](https://medium.com/@lizrice/linux-vms-on-an-m1-based-mac-with-vscode-and-utm-d73e7cb06133)
