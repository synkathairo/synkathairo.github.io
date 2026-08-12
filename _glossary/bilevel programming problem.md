---
layout: page
title: bilevel programming problem
aliases:
  - bilevel optimization
  - BLPP
type: 
reference: 
course: 
lecture: 
statement: The general formulation of a **bilevel programming problem** (BLPP) is$$\begin{aligned}\min_{x \in X, y} & F(x,y) \\\text{s.t. } & G(x,y) \leq 0\end{aligned}$$ where $x \in \mathbb{R}^{n_1}$ (*upper-level variables*), $y \in \mathbb{R}^{n_2}$ (*lower-level variables*)
created: 2025-03-04T20:32:47-05:00
tags:
  - optimization
---
## Definition
The general formulation of a **bilevel programming problem** (BLPP) is
$$\begin{aligned}
\min_{x \in X, y} & F(x,y) \\
\text{s.t. } & G(x,y) \leq 0 \\

\min_y & f(x,y) \\
\text{s.t. } & g(x,y) \leq 0
\end{aligned}$$
where $x \in \mathbb{R}^{n_1}$ (*upper-level variables*), $y \in \mathbb{R}^{n_2}$ (*lower-level variables*)

## See also
- [[linear programming|linear program]] (LP)


___
## References
1. B. Colson, P. Marcotte, and G. Savard, “An overview of bilevel optimization,” _Ann Oper Res_, vol. 153, no. 1, pp. 235–256, Sep. 2007, doi: [10.1007/s10479-007-0176-2](https://doi.org/10.1007/s10479-007-0176-2).
2. Ye, J. J., & Zhu, D. L. (1995). Optimality conditions for bilevel programming problems. _Optimization_, _33_(1), 9-27. https://doi.org/10.1080/02331939508844060
3. Wan, Z., & Chen, J. W. (2013). On bilevel variational inequalities. _Journal of the Operations Research Society of China_, _1_(4), 483-510. https://doi.org/10.1007/s40305-013-0036-5
4. https://en.wikipedia.org/wiki/Bilevel_optimization
