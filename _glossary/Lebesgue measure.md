---
layout: page
title: Lebesgue measure
aliases:
type:
reference:
course:
lecture:
statement:
created: 2025-12-05T19:24:06-05:00
tags:
  - measure_theory
---
## Definition

Consider $n$-dimensional closed rectangle with sides oriented parallel to coordinate axes ('rectangle'), which is a subset $R \subset \mathbb{R}^n$ of form $$R = [a_1,b_1] \times [a_2, b_2] \times ... \times [a_n,b_n]$$ where $-\infty < a_i \leq b_i < \infty$ for $i = 1,...,n$. 

Volume $\mu(R)$ of $R$ is $$\mu(R) = (b_1-a_1)(b_2-a_2)\dots(b_n-a_n)$$
(corresponding to length or area respectively for $n=1, 2$)

Denote collection of all $n$-dimensional rectangles by $\mathcal{R}(\mathbb{R}^n)$ (or simply $\mathcal{R}$), then $R \mapsto \mu(R)$ defines a map $\mu : \mathcal{R}(\mathbb{R}^n) \to [0,\infty)$

Define the **outer Lebesgue measure** $\mu^*(E)$ of subset $E \subset \mathbb{R}^n$, or **outer measure** for short, as $$\mu^*(E) = \inf \left\{\sum_{i=1}^\infty \mu(R_i) : E \subset \cup_{i=1}^\infty R_i, R_i \in \mathcal{R}(\mathbb{R}^n)\right\}$$

#incomplete 

## Notes
- for $n=1,2,3$ is simply length, area, volume respectively

___
## References
1. https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes_ch2.pdf
2. https://en.wikipedia.org/wiki/Lebesgue_measure
3. https://e.math.cornell.edu/people/belk/measuretheory/LebesgueMeasure.pdf