---
layout: entry
title: universal hash function
type:
  - definition
reference:
lecture:
  - cs6763-3
statement: "A random hash function $h: \\mathcal{U} \\rightarrow \\{1,…,m\\}$ is universal if, for any fixed $x,y \\in \\mathcal{U}$,$\\mathrm{Pr}[h(x)=h(y)] \\leq \\frac{1}{m}$"
created: 2023-10-17T15:27:27-04:00
course: CS6763
tags:
  - cryptography
  - hashing
---
## Definition

A random [[hash function]] $h: \mathcal{U} \rightarrow \{1,…,m\}$ is *universal* if, for any fixed $x,y \in \mathcal{U}$,
$$\mathrm{Pr}[h(x)=h(y)] \leq \frac{1}{m}$$

___

Efficient construction: Let $p$ be a prime number between $|\mathcal{U}|$ and $2|\mathcal{U}|$. Let $a$, $b$ be random numbers in $0,…,p$, $a \neq 0$.
$$h(x) = [a \cdot x + b \pmod p] \pmod m$$
is universal.
___
See also: [[Hashing]]
Compare: [[uniformly random hash function]]
