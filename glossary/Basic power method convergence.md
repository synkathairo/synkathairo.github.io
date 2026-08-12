---
layout: entry
title: Basic power method convergence
aliases:
type:
  - theorem
reference:
course:
  - CS6763
lecture:
  - cs6763-11
statement: "Let $\\gamma = \\frac{\\sigma_1 - \\sigma_2}{\\sigma_1}$ be parameter capturing the “gap” between the first and second largest singular values. If Power method is initialized with a random Gaussian vector, then with high probability, after $T=O(\\frac{\\log d/\\epsilon}{\\gamma})$ steps, we have either: $\\lVert \\mathbf{v}_1 - \\mathbf{z}^{(T)}\\rVert_2 \\leq \\epsilon \\qquad \\textrm{or} \\qquad \\lVert \\mathbf{v}_1 - (-\\mathbf{z}^{(T)})\\rVert_2 \\leq \\epsilon$"
created: 2023-12-04T01:04:51-05:00
---

Let $\gamma = \frac{\sigma_1 - \sigma_2}{\sigma_1}$ be parameter capturing the “gap” between the first and second largest [[Singular value decomposition|singular values]]. If [[Power method]] is initialized with a random [[Gaussian distribution|Gaussian]] vector, then with high probability, after $T=O(\frac{\log d/\epsilon}{\gamma})$ steps, we have either:
$$\lVert \mathbf{v}_1 - \mathbf{z}^{(T)}\rVert_2 \leq \epsilon \qquad \textrm{or} \qquad \lVert \mathbf{v}_1 - (-\mathbf{z}^{(T)})\rVert_2 \leq \epsilon$$

The method won’t converge if $\gamma$ is very small. Consider extreme case when $\gamma = 0$.

#incomplete
