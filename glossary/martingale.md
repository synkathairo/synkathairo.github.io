---
layout: entry
title: martingale
aliases:
  - 鞅
type:
  - definition
reference:
course:
lecture:
statement:
created: 2024-12-18T14:56:07-05:00
tags:
  - probability
---

## Definition

A process $(M_t)_{t \geq 0}$ is a **martingale** with regard to the [[filtration|filtration]] $(\mathscr{F}_t)_{t \geq 0}$ if for all $t \geq 0$, $M_t$ is $\mathscr{F}_t$-[[measurable function|measurable]] and integrable, and 
$$\mathbb{E}[M_t \vert \mathscr{F}_s] = M_s \quad \text{for all } 0 \leq s < t$$
(conditional [[expectation]])

## See also

- [[stochastic process]]
- [[Markov process]]
- multiplicative martingale (Mandelbrot)

---

## References

1. https://www.cs.yale.edu/homes/aspnes/pinewiki/Martingales.html
2. https://chewisinho.github.io/main.pdf, p. 5
3. https://math.mit.edu/~sheffield/2019600/martingalenotes.pdf
