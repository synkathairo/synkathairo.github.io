---
layout: page
title: uniformly random hash function
type:
  - definition
reference:
lecture: cs6763-1
statement: "$h: \\mathcal{U} \\rightarrow \\{1, ... , m\\}$<br />$\\mathrm{Pr}[h(x)=i]=\\frac{1}{m}$ for all $x \\in \\mathcal{U}$, $i \\in \\{1,...,m\\}$<br />$h(x)$ and $h(y)$ are independent r.v.'s for all $x,y \\in \\mathcal{U}$<br />   $\\mathrm{Pr}[h(x)=h(y)]=\\frac{1}{m}$"
created: 2023-10-12T15:20:04-04:00
course: CS6763
tags:
  - cryptography
  - hashing
---
## Definition
A random function $h: \mathcal{U} \rightarrow \{1, ... , m\}$ is called *uniformly random* if:
- $\mathrm{Pr}[h(x)=i]=\frac{1}{m}$ for all $x \in \mathcal{U}$, $i \in \{1,...,m\}$
- $h(x)$ and $h(y)$ are [[independence|independent]] [[random variable|r.v.]]'s for all $x,y \in \mathcal{U}$
	- which implies $\mathrm{Pr}[h(x)=h(y)]=\frac{1}{m}$

## See also
- [[Hashing]].
- [[hash function]]
- Compare: [[universal hash function]].
- [[uniform distribution]]