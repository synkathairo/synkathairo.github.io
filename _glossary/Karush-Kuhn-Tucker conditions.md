---
layout: entry
title: Karush-Kuhn-Tucker conditions
aliases:
  - KKT conditions
type:
  - approach
reference:
course:
  - CSCI2945
lecture:
statement:
created: 2024-04-04T16:38:27-04:00
tags:
  - convex_optimization
---

Consider a general [[Primal|primal]] optimization problem (assume functions $f_0,...,f_m,h_1,...,h_p$ [[differentiable function|differentiable]]), but make no assumptions of [[convex function|convexity]] or differentiability.

Then **KKT conditions** are

1. _stationary_ (_no feasible descent_), i.e. $0 \in \partial \left(L(x,\lambda, \nu)\right)$
   - i.e. $\nabla f_0 (x^*) + \sum_{i=1}^n \lambda_i^* \nabla f_i(x^*) A^T \nu^* = 0$
   - no possible objective improvement at solution
2. _complementary slackness_ (_complementarity_), i.e.
   - i.e. $\lambda_i^* f_i(x^*) = 0$
   - product of Lagrange multipliers and corresponding variables must be at zero
3. _primal feasibility_,
   - i.e. $f_i(x^*) \leq 0$
   - all constraints satisfied
4. _dual feasibility_, i.e.
   - i.e. $\lambda_i^* \geq 0$
   - Lagrange multipliers associated with constraints are non-negative

For any _optimization problem_ with [[differentiable function|differentiable]] _objective_ and _constraint_ functions for which [[strong duality]] obtains, any pair of _primal_ and _dual_ optimal points must satisfy the _KKT conditions_ (_necessity_ for any optimization problem obtaining strong duality).

When the primal problem is [[convex optimization|convex]], KKT conditions are also _sufficient_ for the points to be _primal_ and _dual_ optimal (_sufficiency_ for convex primal).

---

Also see: [[Slater condition]]

---

## References:

1. S. P. Boyd and L. Vandenberghe, _Convex optimization_, 2004, pp. 243-245. \[Online\]. Available: [https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf](https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf) doi: 10.1017/CBO9780511804441 ISBN: 9780521833783
2. https://www.cs.cmu.edu/~pradeepr/convexopt/Lecture_Slides/dual-ascent.pdf
3. Jin, L., & Wang, X. (2025). Stochastic nested primal-dual method for nonconvex constrained composition optimization. _Mathematics of Computation_, _94_(351), 305-358. https://doi.org/10.1090/mcom/3965
4. https://www.stat.cmu.edu/~ryantibs/convexopt-F16/scribes/kkt-scribed.pdf
5. https://en.wikipedia.org/wiki/Karush%E2%80%93Kuhn%E2%80%93Tucker_conditions
6. https://apmonitor.com/me575/index.php/Main/KuhnTucker
7. https://www.stat.cmu.edu/~ryantibs/convexopt-F13/scribes/lec13.pdf
