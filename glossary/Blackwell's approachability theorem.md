---
layout: entry
title: Blackwell's approachability theorem
aliases:
type:
  - theorem
reference:
course:
  - ECE6263
lecture:
statement: Let $\mathscr{C} \subset \mathbb{R}$ be a [[Convex set|convex]] and closed set, with support function $w_{\mathscr{C}}$. Then $\mathscr{C}$ is approachable by $i$ if and only if for every $\lambda \in \mathbb{R}^L$ there exists a mixed strategy $q_\lambda \in \delta(S^i)$ such that $\lambda \cdot v (q_\lambda, s^{-i}) \leq w_\mathscr{C}(\lambda), \quad \text{for all } s^{-i} \in S^{-i}$
created: 2024-11-14T15:11:18-05:00
tags:
  - game_theory
---

## Theorem

Let $\mathscr{C} \subset \mathbb{R}$ be a [[convex set|convex]] and closed set, with support function $w_{\mathscr{C}}$. Then $\mathscr{C}$ is [[approachable set|approachable]] by $i$ if and only if for every $\lambda \in \mathbb{R}^L$ there exists a mixed strategy $q_\lambda \in \delta(S^i)$ such that
$$\lambda \cdot v (q_\lambda, s^{-i}) \leq w_\mathscr{C}(\lambda), \quad \text{for all } s^{-i} \in S^{-i}$$

---

## References

1. Hart S, Mas-Colell A. _A Simple Adaptive Procedure Leading to Correlated Equilibrium_. _Econometrica_, 2000; 68(5): 1127-1150.
2. https://www.mit.edu/~gfarina/2021/15888f21_L04_blackwell_rm/L04_blackwell_rm.pdf
3. https://ocw.mit.edu/courses/18-657-mathematics-of-machine-learning-fall-2015/b21de17384706de8db8078cd767d459e_MIT18_657F15_L22.pdf
