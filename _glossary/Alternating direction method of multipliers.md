---
layout: entry
title: Alternating direction method of multipliers
aliases:
  - ADMM
type:
  - algorithm
reference:
course:
  - ECE6123
lecture:
  - ece6123-7-imagerecovery
statement:
created: 2023-11-02T18:27:59-04:00
tags:
---

ADMM problem form (with $f$, $g$ [[convex function|convex]]):
minimize $f(x)+g(z)$
subject to $Ax + Bz = c$

two sets of variables, with separable objective

augmented Lagrangian:
$$L_\rho (x,z,y) = f(x)+g(z)+y^T (Ax + Bz - c) + \frac{\rho}{2} ||Ax+Bz-c||_2^2$$

ADMM:

- $x^{k+1} := \arg \min_x L_\rho (x,z^k,y^k)$ // $x$-minimization
- $z^{k+1} := \arg \min_z L_\rho (x^{k+1},z,y^k)$ // $z$-minimization
- $y^{k+1} := y^k + \rho(Ax^{k+1} + Bz^{k+1}-c)$ // dual update

---

- flexible optimization algorithm that can handle many convex optimization problems
  - Represent different terms of the objective function using additional variables and introducing constraints
- Built on the [[Lagrange multiplier|Lagrangian multiplier]] method
- Solve the dual problem
- Add quadratic penalty (method of multipliers) to ease update of the dual variable and be more robust

#incomplete

---

linear programming? optimization? [[Convex Optimization notes]]

---

## References:

1. Distributed Optimization and Statistical Learning via the Alternating Direction Method of Multipliers (Boyd, Parikh, Chu, Peleato, Eckstein) https://web.stanford.edu/~boyd/papers/pdf/admm_distr_stats.pdf
   - slides: Boyd. Alternating Direction Method of Multipliers. EE364b. https://web.stanford.edu/~boyd/papers/pdf/admm_slides.pdf
   - https://stanford.edu/~boyd/admm.html
2. https://www.stat.cmu.edu/~ryantibs/convexopt/lectures/admm.pdf
3. https://paperswithcode.com/method/admm
4. https://www.stat.cmu.edu/~ryantibs/convexopt-F18/lectures/admm.pdf
