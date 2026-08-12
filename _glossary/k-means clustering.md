---
layout: page
title: k-means clustering
type:
  - algorithm
reference:
lecture:
  - cs6763-4
statement:
created: 2023-10-17T15:49:21-04:00
course: CS6763
tags:
---
Given data points $\mathbf{a}_1,…,\mathbf{a}_n \in \mathbb{R}^d$, find centers $\mathbf{\mu}_1,...,\mathbf{\mu}_k \in \mathbb{R}^d$ to minimize:
$$Cost(\mathbf{\mu}_1,...,\mathbf{\mu}_k)=\sum_{i=1}^n \min_{j=1,...,k} ||\mathbf{\mu}_j-\mathbf{a}_i||_2^2$$

Equivalent form: find clusters $C_1,...,C_k \subseteq \{1,...,n\}$ to minimize:
$$Cost(C_1,...,C_k)=\sum_{i=1}^n \frac{1}{2|C_j|}\sum_{u,v \in C_j}||\mathbf{a}_u-\mathbf{a}_v||_2^2$$
Approximation scheme:

#incomplete 