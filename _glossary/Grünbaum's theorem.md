---
layout: entry
title: Grünbaum's theorem
aliases:
  - Grunbaum's theorem
type:
  - theorem
reference: B. Grünbaum. Partitions of mass-distributions and of convex bodies by hyperplanes. *Pacific J. Math*., 10:1257–1261, 1960
course:
  - CS6763
lecture:
  - cs6763-9
statement: "For any convex set $\\mathcal{S}$ with center-of-gravity $\\mathbf{c}$, and any halfspace $\\mathcal{Z}=\\{\\mathbf{x}|\\langle\\mathbf{a},\\mathbf{x}-\\mathbf{c}\\rangle\\leq 0\\}$ then: $\\frac{\\mathrm{vol}(\\mathcal{S}\\cap\\mathcal{Z})}{\\mathrm{vol}(\\mathcal{S})} \\geq \\frac{1}{e} \\approx .368$"
created: 2023-11-27T04:24:09-05:00
---

For any [[convex set|convex set]] $\mathcal{S}$ with center-of-gravity $\mathbf{c}$, and any halfspace $\mathcal{Z}=\{\mathbf{x}|\langle\mathbf{a},\mathbf{x}-\mathbf{c}\rangle\leq 0\}$ then:
$$\frac{\mathrm{vol}(\mathcal{S}\cap\mathcal{Z})}{\mathrm{vol}(\mathcal{S})} \geq \frac{1}{e} \approx .368$$

---

For any convex set $K \in \mathbb{R}^n$ with a center of gravity $c \in \mathbb{R}^n$, and any halfspace $H = \{x | a^\intercal (x − c) ≥ 0\}$ passing through $c$,
$$\frac{1}{e} \leq \frac{\mathrm{vol}(K\cap H)}{\mathrm{vol}(K)} \leq \left(1-\frac{1}{e}\right)$$

---

see: [[center-of-gravity method]]

---

References:

1. B. Grünbaum. Partitions of mass-distributions and of convex bodies by hyperplanes. _Pacific J. Math_., 10:1257–1261, 1960
2. https://www.cs.cmu.edu/~anupamg/advalgos17/scribes/lec16.pdf
3. https://user.math.uni-bremen.de/~grimpen/papers/grunbaum.pdf
