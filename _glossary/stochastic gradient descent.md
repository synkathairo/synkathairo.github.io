---
layout: entry
title: stochastic gradient descent
aliases:
  - SGD
type:
  - algorithm
reference: 
course:
  - CS6763
  - ECE7143
lecture:
  - cs6763-8
  - ece7143-2
statement: 
created: 2023-11-21T16:36:31-05:00
tags:
  - machine_learning
---

## Algorithm
Assume:
- *finite sum structure*: $f(\mathbf{x}) = \sum_{i=1}^n f_i(\mathbf{x})$, with $f_1, ..., f_n$ all [[convex function|convex]]
- [[Lipschitz function]]s: for all $\mathbf{x}, j, \lVert \nabla f_j (\mathbf{x}) \rVert_2 \leq \frac{G'}{n}$
	- what does this imply about Lipschitz constant of $f$?
- Starting radius: $||\mathbf{x}^{*}-\mathbf{x}^{(1)}||_2 \leq R$

**Gradient descent**:
- Choose $\mathbf{x}^{(1)}$, steps $T$, and step size $\eta = \frac{R}{G \sqrt{T}}$.
- For $i = 1, ..., T$:
	- Pick random $j_i \in 1,...,n$
	- $\mathbf{x}^{(i+1)} = \mathbf{x}^{(i)} - \eta \nabla f_{j_i}(\mathbf{x}^{(i)})$
- Return $\hat{\mathbf{x}} = \frac{1}{T}\sum_{i=1}^T \mathbf{x}^{(i)}$


## Overview
- Efficient [[offline]] optimization method for functions $f$ with [[finite sum structure]]:
$$f(\mathbf{x})=\sum_{i=1}^n f_i(\mathbf{x})$$
- Goal is to find $\hat{\mathbf{x}}$ such that $f(\hat{\mathbf{x}}) \leq f(\mathbf{x}^*) + \epsilon$.
- Approach: view as [[online gradient descent]] run on function sequence $f_{j_1},...,f_{j_T}$.
- Only use the fact that step equals gradient in expectation.
- this is adapted from [[gradient descent]], compare

## SGD convergence
After $T=\frac{R^2 G’^2}{\epsilon^2}$ iterations,
$$\mathbb{E}[f(\hat{\mathbf{x}})-f(\mathbf{x}^*)] \leq \epsilon$$

proof: use [[Jensen's inequality]]

___
References:
1. https://www.chrismusco.com/amlds2023/lectures/lec8_annotated.pdf
2. https://web.stanford.edu/class/ee270/scribes/lecture16.pdf
3. Anna Choromanska. ECE-GY 7143 course slides, lecture 2.
4. http://yanran.li/peppypapers/2015/04/11/speed-of-mini-batch-sgd.html
