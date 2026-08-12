---
layout: page
title: continuous optimization
type:
  - approach
reference:
lecture: cs6763-6
statement: "$f: \\mathbb{R}^d \\rightarrow \\mathbb{R}$. Want to find $x^*$ such that: $f(x^*) = \\min_x f(x^*)$ <br /> Or find $\\hat{x}$ such that:$f(\\hat{x}) \\leq \\min_x f(x) + \\epsilon$"
created: 2023-10-13T14:46:19-04:00
course: CS6763
---

Given function $f: \mathbb{R}^d \rightarrow \mathbb{R}$. Find $\hat{x}$ such that:

$$f(\hat{x}) \leq \min_x f(x) + \epsilon$$ ^f11fcd

___

Have some function $f: \mathbb{R}^d \rightarrow \mathbb{R}$. Want to find $x^*$ such that:
$$f(x^*) = \min_x f(x^*)$$

Or at least $\hat{x}$ which is close to a minimum e.g. [[#^f11fcd]]

Often have additional constraints such as $\mathbf{x} > 0$, $||\mathbf{x}||_2 \leq R$, $||\mathbf{x}||_1 \leq R$, $\mathbf{a}^T \mathbf{x} > c$ 

___

Also see: [[Convex Optimization notes]] (specific type of continuous optimization)