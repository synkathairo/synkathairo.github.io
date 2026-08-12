---
layout: entry
title: Yao's minimax lemma
aliases:
  - Yao's lemma
type:
  - theorem
reference: "doi: 10.1109/SFCS.1977.24"
course:
  - CS9233
lecture:
statement: Let $A$ be any random variable with values in set of deterministic algorithms $\mathcal{A}$ and let $X$ be any random variable with values in class of instances $\mathcal{X}$. Suppose $x \in \mathcal{X}$ and $a \in \mathcal{A}$ induce cost $c(a,x) \in \mathbb{R}$. Then, $\max_{x \in \mathcal{X}} \mathbb{E}[c(A,x)] \geq \min_{a \in \mathcal{A}} \mathbb{E}[c(a,X)]$
created: 2025-02-21T18:09:13-05:00
tags:
  - approximation_algorithms
---

## Theorem

Let $A$ be any [[random variable]] with values in set of _deterministic algorithms_ $\mathcal{A}$ and let $X$ be any _random variable_ with values in _class of instances_ $\mathcal{X}$. Suppose $x \in \mathcal{X}$ and $a \in \mathcal{A}$ induce _cost_ $c(a,x) \in \mathbb{R}$. Let $A$ be a randomized algorithm (now a random variable), then,
$$\max_{x \in \mathcal{X}} \mathbb{E}[c(A,x)] \geq \min_{a \in \mathcal{A}} \mathbb{E}[c(a,X)]$$
In other words, $A$'s worst-case expected cost is greater than or equal to the expected cost on random variable $X$ for the optimal algorithm.

## Notes

- related to [[von Neumann's minimax theorem]]
- intuition: compare mixed strategies in a Nash game with randomized algorithms, algorithm is "playing" against worst-case (adversarial) input

---

## References

1. A. C.-C. Yao, “Probabilistic computations: Toward a unified measure of complexity,” in _18th Annual Symposium on Foundations of Computer Science (sfcs 1977)_, Providence, RI, USA: IEEE, Sept. 1977, pp. 222–227. doi: [10.1109/sfcs.1977.24](https://doi.org/10.1109/sfcs.1977.24).
2. https://faculty.cc.gatech.edu/~ssingla7/courses/Spring22/lec8.pdf
3. https://cstheory.stackexchange.com/questions/51591/trying-to-understand-the-intuition-behind-yaos-minimax-principle
