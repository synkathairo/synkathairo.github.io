---
layout: entry
title: Itô process
aliases:
  - Ito process
  - stochastic integral
type:
  - definition
reference:
course:
lecture:
statement:
created: 2025-05-05T21:18:23-04:00
tags:
  - stochastic_processes
  - calculus
---
## Definition
### integral
An **Ito process** or **stochastic integral** is a [[stochastic process]] on [[probability space]] $(\Omega, \mathcal{F},\mathbb{P})$ adopted to $\mathcal{F}_t$ which can be written in the form
$$X_t = X_0 + \int_0^t U_s \, ds + \int_0^t V_s\, dB_s$$
where $U,V \in \mathcal{L}_2$.

### differential

A [[continuous function|continuous]] [[stochastic process]] $X_t$ on [[probability space]] $(\Omega, \mathcal{F},\mathbb{P})$ with certain non-decreasing family $\{\mathcal{F}_t\}$ of [[σ-algebra|σ-algebras]] of $\Omega$ is called an **Itô process** with respect to $\{\mathcal{F}_t\}$ if there exists processes $a(t)$, *drift coefficient*, and $\sigma(t)$ *diffusion coefficient*, [[measurable function|measurable]] with respect to $\mathcal{F}_t$ for each $t$, and [[Wiener process]] $W_t$ with respect to $\{\mathcal{F}_t\}$ such that
$$dX_t = a(t)\, dt + \sigma(t)\, dW_t$$

## See also
- [[martingale]]
- [[stochastic process]]
- [[Wiener process]] (Brownian motion)
- [[Itô lemma]]

___
## References
1. https://ocw.mit.edu/courses/15-070j-advanced-stochastic-processes-fall-2013/d9d7372cbf65d56aa8aa9d59ba0ab2e8_MIT15_070JF13_Lec17.pdf
2. https://encyclopediaofmath.org/wiki/It%C3%B4_process
3. https://math.nyu.edu/~goodman/teaching/StochCalc2020/week2/Week2.pdf
4. https://chewisinho.github.io/main.pdf, Chapter 1, p. 9
5. https://www.columbia.edu/~mh2078/FoundationsFE/IntroStochCalc.pdf
