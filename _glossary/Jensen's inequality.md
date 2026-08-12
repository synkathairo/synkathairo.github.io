---
layout: entry
title: Jensen's inequality
type:
  - theorem
reference:
course:
  - CS6763
lecture:
  - cs6763-8
statement: For a [[Convex function|convex function]] $f$ and points $\mathbf{x}^{(1)},…,\mathbf{x}^{(t)}$,$$f\left(\frac{1}{t}\cdot\mathbf{x}^{(1)}+...+\frac{1}{t}\cdot\mathbf{x}^{(t)}\right) \leq \frac{1}{t}\cdot$$
created: 2023-11-03T15:09:13-04:00
tags:
  - analysis
  - convex_optimization
---

For a [[convex function|convex function]] $f$ and points $\mathbf{x}^{(1)},…,\mathbf{x}^{(t)}$,
$$f\left(\frac{1}{t}\cdot\mathbf{x}^{(1)}+...+\frac{1}{t}\cdot\mathbf{x}^{(t)}\right) \leq \frac{1}{t}\cdot f(\mathbf{x}^{(1)}) + ... + \frac{1}{t}\cdot f(\mathbf{x}^{(t)})$$

More generally, deriving from [[variance]] and [[expectation]],
$\mathbb{E}[f(X)] \geq f(\mathbb{E}[X])$

---

For concave function,

---

## References:

1. https://www.chrismusco.com/amlds2023/lectures/lec8_annotated.pdf
2. https://www.probabilitycourse.com/chapter6/6_2_5_jensen's_inequality.php
3. https://mathworld.wolfram.com/JensensInequality.html
