---
layout: entry
title: statistical distance
aliases:
  - total variation distance
type:
  - definition
reference:
course:
lecture:
statement: $\mathsf{SD}(X,Y) = \frac{1}{2}\sum_{z \in \mathcal{Z}} \lvert \Pr[X=z]-\Pr[Y=z]\rvert$
created: 2025-11-20T20:16:42-05:00
tags:
  - cryptography
  - computational_learning_theory
  - statistics
---

## Definition

Suppose [[random variable|random variables]] $X$ and $Y$ with _support_ $\mathcal{Z}$, then the **statistical distance** $\mathsf{SD}$ of $X,Y$ is $$\mathsf{SD}(X,Y) = \frac{1}{2}\sum_{z \in \mathcal{Z}} \lvert \Pr[X=z]-\Pr[Y=z]\rvert$$

---

## References

1. https://www.ccs.neu.edu/home/wichs/class/crypto-fall17/lecture3.pdf
