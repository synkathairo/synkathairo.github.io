---
layout: page
title: one-time pad
aliases:
  - Vernam cipher
type:
  - definition
  - proposition
reference: 
course:
  - CSCI3210
lecture:
  - csci3210-1
statement: Let $\mathcal{M} = \{0,1\}^n$, $\mathcal{K} = \{0,1\}^n$, $\mathcal{C} = \{0,1\}^n$, $$\begin{align}\operatorname{Enc}_\mathbf{K}(m) = m \oplus k  \\\operatorname{Dec}_\mathbf{K}(m) = c \oplus k\end{align}$$where $\oplus$ denotes bitwise XOR
created: 2024-11-20T21:20:22-05:00
tags:
  - cryptography
---
## Definition
Let $\mathcal{M} = \{0,1\}^n$, $\mathcal{K} = \{0,1\}^n$, $\mathcal{C} = \{0,1\}^n$,
$$\begin{aligned}
\operatorname{Enc}_\mathbf{K}(m) & = m \oplus k  \\
\operatorname{Dec}_\mathbf{K}(m) & = c \oplus k
\end{aligned}$$
where $\oplus$ denotes bitwise XOR

## Proposition
1. A one-time pad (OTP) is a [[perfect secrecy|perfectly secret]] [[encryption scheme]] (correctness).
		$$\operatorname{Dec}_\mathbf{K}(\operatorname{Enc}_\mathbf{K}(m)) = (m \oplus k) \oplus k = m \oplus (k \oplus k) = m \oplus 0^n = m$$
2. OTP is perfectly secure by [[theorem, perfect security and indistinguishability| previous theorem]] suffices to show that OTP is [[perfect indistinguishability|perfectly indistinguishable]].

___
## References
1. Barak, Boaz. *An Intensive Introduction to Cryptography*, 2021, p. 58. https://intensecrypto.org/public/lec_01_introduction.html
2. Vernam, 1917
3. Shannon, 1949
4. https://github.com/cpeikert/TheoryOfCryptography/blob/master/lec01%20-%20Overview%20and%20Perfect%20Secrecy.pdf
