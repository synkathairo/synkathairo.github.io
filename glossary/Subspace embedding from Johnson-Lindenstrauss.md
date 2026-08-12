---
layout: entry
title: Subspace embedding from Johnson-Lindenstrauss
aliases:
  - Subspace embedding from JL
type:
  - theorem
reference:
course:
  - CS6763
lecture:
  - cs6763-12
statement: Let $\mathcal{U} \subset \mathbb{R}^n$ be a $d$-dimensional linear subspace in $\mathbb{R}^n$. If $\mathbf{\Pi} \in \mathbb{R}^{m \times d}$ is chosen from any distribution $\mathcal{D}$ satisfying the [[Distributional Johnson-Lindenstrauss Lemma|Distributional JL Lemma]], then with probability $1-\delta$, $$(1-\epsilon)||\mathbf{v}||_2^2 \leq ||\mathbf{\Pi v}||_2^2 \leq (1+\epsilon)||\mathbf{v}||_2^2$$for all $\mathbf{v} \in \mathcal{U}$, as long as $m=O(\frac{d\log(1/\epsilon)+\log(1/\delta)}{\epsilon^2})$.
created: 2023-12-01T16:15:52-05:00
---

Let $\mathcal{U} \subset \mathbb{R}^n$ be a $d$-dimensional [[linear subspace|linear subspace]] in $\mathbb{R}^n$. If $\mathbf{\Pi} \in \mathbb{R}^{m \times d}$ is chosen from any distribution $\mathcal{D}$ satisfying the [[distributional Johnson-Lindenstrauss lemma|Distributional JL Lemma]], then with probability $1-\delta$,
$$(1-\epsilon)||\mathbf{v}||_2^2 \leq ||\mathbf{\Pi v}||_2^2 \leq (1+\epsilon)||\mathbf{v}||_2^2$$
for all $\mathbf{v} \in \mathcal{U}$, as long as $m=O \left(\frac{d\log(1/\epsilon)+\log(1/\delta)}{\epsilon^2} \right)$.[^1]

[^1]: It’s possible to obtain a slightly tighter bound of $O( \frac{d+\log(1/δ)}{ϵ^2})$

## Corollary

If we choose $\mathbf{\Pi}$ and properly scale, then with $O(d/\epsilon^2)$ rows,
#incomplete
