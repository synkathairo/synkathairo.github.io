---
layout: page
title: Chernoff bound
type:
  - theorem
reference:
lecture:
  - cs6763-2
statement: $\mathrm{Pr}[X \geq (1+\epsilon)\mu] \leq e^{\frac{-\epsilon^2\mu}{2+\epsilon}}$
created: 2023-10-12T14:31:46-04:00
course:
  - CS6763
tags:
  - probability
---
## Theorem (*multiplicative Chernoff bound*)

Let $X_1,X_2,...,X_n$ be [[independence|independent]] $\{0,1\}$-valued [[random variable|random variables]] and let $p_i = \mathbb{E}[X_i]$, where $0<p_i<1$. Then the sum $S = \sum_{j=1}^n X_i$, which has mean $μ = \sum_{j=1}^n p_i$, satisfies
$$\mathrm{Pr}[S \geq (1+\epsilon)\mu] \leq e^{\frac{-\epsilon^2\mu}{2+\epsilon}}$$
(where $\mathbb{E}[X_i]$ is [[expectation|expected value]] of $X_i$)

### Corollary (*additive Chernoff bound*)

Let $X_1,X_2,...,X_n$ be independent $\{0,1\}$-valued random variables and let $p_i = \mathbb{E}[X_i]$, where $0<p_i<1$. Let $S = \sum_{j=1}^n X_i$ and $\mathbb{E}[S] = \mu$. For $\epsilon \in (0,1)$,
$$\mathrm{Pr}[|S-\mu| \geq \epsilon\mu] \leq 2e^{-\epsilon^2\mu/3}$$

an alternative form (only requiring $\epsilon>0$) is given by 
$$\mathrm{Pr}[|S-\mu| \geq \epsilon\sqrt{n}] \leq 2e^{-2\epsilon^2}$$

### alterative formulation (separately)

For random variable $X = \sum_{i=1}^n X_i$, $X_i$ as independent $[0,1]$ random variables, and $\epsilon$ error parameter with $0 < \epsilon \leq 1$, then
- $\Pr[X \geq (1+\epsilon)\mathbb{E}[x] \leq e^{-\frac{\epsilon^2 \mathbb{E}[x]}{3}}$  
- $\Pr[X \leq (1-\epsilon)\mathbb{E}[x] \leq e^{-\frac{\epsilon^2 \mathbb{E}[x]}{3}}$

### Notes

- Example of [[concentration inequality]].
- Compare [[Gaussian tail bound]], when $k=\epsilon \sqrt{\mu}$
- the random variables here are *Bernoulli random variables*
- [[McDiarmid's inequality]] is a generalization of the additive Chernoff bound

___
## References

1. https://www.chrismusco.com/amlds2023/lectures/lec2_annotated.pdf
2. https://math.stackexchange.com/questions/283487/is-the-multiplicative-chernoff-bound-stronger-than-additive-one
3. https://tongzhang-ml.org/lt-book/chap06-rademacher-concentration-slides.pdf, slide 15
4. https://en.wikipedia.org/wiki/Chernoff_bound
5. https://crypto.stanford.edu/~blynn/pr/chernoff.html
6. https://math.stackexchange.com/questions/4629493/distribution-of-0-1-valued-random-variable-determined-by-distribution-of