---
layout: entry
title: Markov's inequality
aliases:
type:
  - theorem
reference:
lecture:
  - cs6763-1
statement: $\mathrm{Pr}[X \geq t]\leq \frac{\mathbb{E}[X]}{t}$ <br />$\mathrm{Pr}[X \geq \alpha\cdot\mathbb{E}[X]]\leq\frac{1}{\alpha}$
created: 2023-10-12T14:51:13-04:00
course:
  - CS6763
---

## Theorem

For any [[random variable]] $X$ which only takes non-negative values, and any positive $t$,
$$\mathrm{Pr}[X \geq t]\leq \frac{\mathbb{E}[X]}{t}$$

equivalently,
$$\mathrm{Pr}[X \geq \alpha\cdot\mathbb{E}[X]]\leq\frac{1}{\alpha}$$

---

Example of [[concentration inequality]]

## References

1. https://www.chrismusco.com/amlds2023/lectures/lec1_annotated.pdf
