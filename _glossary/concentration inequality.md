---
layout: entry
title: concentration inequality
created: 2024-11-20T20:51:25-05:00
type:
  - definition
reference: 
lecture:
  - cs6763-1
statement: Tell us how likely it is that a random variable $X$ deviates a certain amount from its expectation $\mathbb{E}[X]$
aliases: 
course:
  - CS6763
tags:
  - probability
---


Tells us how likely it is that a random variable $X$ deviates a certain amount from its expectation $\mathbb{E}[X]$.

Important tool to analyze random algorithms.

Three fundamental concentration inequalities:
1. [[Markov's inequality]]
	- applies to non-negative random values
2. [[Chebyshev's inequality]]
	- applies to random variables with bounds
3. [[Hoeffding inequality]]/[[Bernstein inequality]]/[[Chernoff bound]] ^c601f4
	- applies to sums of [[independence|independent random variables]]

See also: [[concentration of chi-squared random variables]], [[Gaussian distribution|Gaussian concentration]]

[[Matrix concentration inequality]]

[[Rademacher concentration]]

___
## References:
- https://ai.stanford.edu/~gwthomas/notes/concentration.html
- https://www.stat.cmu.edu/~larry/=sml/Concentration.pdf
- https://terrytao.wordpress.com/2010/01/03/254a-notes-1-concentration-of-measure/
