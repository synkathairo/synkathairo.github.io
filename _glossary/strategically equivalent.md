---
layout: page
title: strategically equivalent
aliases: 
type:
  - definition
reference: 
course:
  - ECE6263
lecture:
  - ece6263-3
statement: Two ($m \times n$) bimatrix games $(A,B)$ and $(C,D)$ are said to be **strategically equivalent** if there exists positive constants $\alpha_1, \alpha_2$ and scalars $\beta_1, \beta_2$ such that $a_{ij} = \alpha_1 c_{ij} + \beta_1$, $b_{ij} = \alpha_2 d_{ij} + \beta_2$ for all $i=1,...,m; j = 1,...,n$.
created: 2024-11-17T17:43:02
tags:
  - game_theory
---
## Definition (bimatrix games)
Two ($m \times n$) *bimatrix games* $(A,B)$ and $(C,D)$ are said to be **strategically equivalent** if there exists positive constants $\alpha_1, \alpha_2$ and scalars $\beta_1, \beta_2$ such that 
$$\begin{aligned}
a_{ij} = \alpha_1 c_{ij} + \beta_1 \\
b_{ij} = \alpha_2 d_{ij} + \beta_2
\end{aligned}$$
for all $i=1,...,m; j = 1,...,n$.

### notes
This is an equivalence relation as it is symmetric, reflexive, and transitive.

## Proposition (same Nash equilibria)
All *strategically equivalent* bimatrix games have the same [[Nash equilibrium|Nash equilibria]].

($N$-person) All *strategically equivalent* nonzero-sum finite static games in [[normal-form game|normal form]] have the same set of *Nash equilibria*.

## Proposition (interchangeable Nash equilibria)
Multiple [[Nash equilibrium]] of a bimatrix game $(A,B)$ are interchangeable if $(A,B)$ are *strategically equivalent* to $(A, -A)$.

___
## References
1. T. Başar and G.J. Olsder, *Dynamic Noncooperative Game Theory*, 2nd edition, Classics in Applied Mathematics, SIAM, Philadelphia, 1999, pp. 81, 90.
