---
layout: entry
title: randomized linear regression
aliases: 
type:
  - theorem
reference: 
course:
  - CS6763
lecture:
  - cs6763-12
statement: Let $\mathbf{\Pi}$ be a properly scaled [[Johnson-Lindenstrauss Lemma (1984)|JL]] matrix (random [[Gaussian concentration#Gaussian function|Gaussian]], sparse random etc.) with $m=O(\frac{d}{\epsilon^2})$ rows[^1]. Then with probability $9/10$, for any $\mathbf{A} \in \mathbb{R}^{n \times d}$ and $\mathbf{b} \in \mathbb{R}^n$,$$\lVert \mathbf{A}\tilde{\mathbf{x}}-\mathbf{b}\rVert_2^2 \leq (1+\epsilon)\lVert \mathbf{A}\mathbf{x}^*-\mathbf{b}\rVert_2^2$$where $\tilde{\mathbf{x}} = \arg\min_\mathbf{x}\lVert \mathbf{\Pi Ax}-\mathbf{\Pi b}\rVert_2^2$.
created: 2023-12-01T16:05:44-05:00
---
Let $\mathbf{\Pi}$ be a properly scaled [[Johnson-Lindenstrauss lemma|JL]] matrix (random [[Gaussian distribution#Gaussian function|Gaussian]], sparse random etc.) with $m=O(\frac{d}{\epsilon^2})$ rows[^1]. Then with probability $9/10$, for any $\mathbf{A} \in \mathbb{R}^{n \times d}$ and $\mathbf{b} \in \mathbb{R}^n$,
$$\lVert \mathbf{A}\tilde{\mathbf{x}}-\mathbf{b}\rVert_2^2 \leq (1+\epsilon)\lVert \mathbf{A}\mathbf{x}^*-\mathbf{b}\rVert_2^2$$
where $\tilde{\mathbf{x}} = \arg\min_\mathbf{x}\lVert \mathbf{\Pi Ax}-\mathbf{\Pi b}\rVert_2^2$. 

[^1]: this can be improved to $O(d/\epsilon)$ with tighter analysis
