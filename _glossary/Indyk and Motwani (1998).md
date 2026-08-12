---
layout: entry
title: Indyk and Motwani (1998)
type:
  - theorem
reference: "P. Indyk and R. Motwani, “Approximate nearest neighbors: towards removing the curse of dimensionality,” in _Proceedings of the thirtieth annual ACM symposium on Theory of computing  - STOC ’98_, Dallas, Texas, United States: ACM Press, 1998, pp. 604–613. doi: [10.1145/276698.276876](https://doi.org/10.1145/276698.276876)."
lecture:
  - cs6763-5
  - cs6763-6
statement: If there exists some vector $\mathbf{y}$ with $\|\mathbf{x} - \mathbf{y}\|_0 \leq R$, then we can return a vector $\hat{\mathbf{y}}$ with $\|\mathbf{x} - \hat{\mathbf{y}}\|_0 \leq C \cdot R$ in $O(n^{1/C})$ time and $O(n^{1+1/C})$ space. $||\mathbf{x}-\mathbf{y}||_0$ is the “hamming distance” number of elements that different between $\mathbf{x}$ and $\mathbf{y}$.
created: 2023-10-16T23:36:20-04:00
course:
  - CS6763
---

If there exists some $\mathbf{q}$ with $||\mathbf{q}-\mathbf{y}||_0 \leq R$, return a vector $\tilde{\mathbf{q}}$ with $||\tilde{\mathbf{q}}-\mathbf{y}||_0 \leq C \cdot R$ in:

- Time: $O(n^{1/C})$
- Space: $O(n^{1+1/C})$

where $||\mathbf{q}-\mathbf{y}||_0$ is the “hamming distance” number of elements that different between $\mathbf{q}$ and $\mathbf{y}$.

Used in near neighbor search problem.

#incomplete

---

Given a $(r_1,r_2,p_1,p_2)$-[[Locality sensitive hash function#Locality Sensitive Hash Family|locality sensitive hash family]], $(r_1,r_2)$-PLEB (point location in equal balls) can be solved with constant probability using:

- Space: $O(dn + n^{1+\gamma})$
- Query time: $O(n^\gamma)$ hash function evaluations and metric computations, $d(\cdot,\cdot)$, where $\gamma = \frac{\log(1/p_1)}{\log(1/p_2)}$.

---

PLEB (point location in equal balls)
For given radii r1, r2 with r1 ≤ r2, if there is at least one point p ∈ X with d(q, p) ≤ r1, return any p with d(q, p) < r2. On the other hand, if there is no point p ∈ X with d(q, p) < r2, output FAIL.

---

References:

1. P. Indyk and R. Motwani, “Approximate nearest neighbors: towards removing the curse of dimensionality,” in _Proceedings of the thirtieth annual ACM symposium on Theory of computing  - STOC ’98_, Dallas, Texas, United States: ACM Press, 1998, pp. 604–613. doi: [10.1145/276698.276876](https://doi.org/10.1145/276698.276876).
2. https://www.cs.princeton.edu/courses/archive/fall18/cos521/Lectures/lec12.pdf
