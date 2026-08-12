---
layout: page
title: Kerckhoffs principle
aliases:
  - Kerckhoff's law
type:
reference:
course:
  - CSCI3210
lecture:
  - csci3210-1
statement: A cryptosystem should be secure even if everything about the system, except the key, is public knowledge.
created: 2024-11-20T20:57:00-05:00
tags:
  - cryptography
---
## General concept
A cryptosystem should be secure even if everything about the system, except the key, is public knowledge.

> "Il faut qu’il n’exige pas le secret, et qu’il puisse sans inconvénient tomber entre les mains de l’ennemi"

In other words, "cipher" should remain secure even if an adversary knows the specification of the cipher.

## To avoid...
- "security by obscurity"
	- can't analyze in public
	- bad at keeping secret
	- hard to recover security secret
	- unclear what it means


___
## References
1. https://intensecrypto.org/public/lec_01_introduction.html
