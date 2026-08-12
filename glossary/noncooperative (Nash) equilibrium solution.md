---
layout: entry
title: noncooperative (Nash) equilibrium solution
aliases:
  - noncooperative (Nash) equilibrium outcome
type:
  - definition
reference:
course:
  - ECE6263
lecture:
  - ece6263-3
statement: "A pair of strategies $\\{\\text{row } i^*, \\text{column } j^*\\}$ is said to constitute a **noncooperative (Nash) equilibrium solution** to a bimatrix game if the following pair of inequalities is satisfied for all $i=1,...,m$ and all $j=1,...,n$: $a_{i^* j^*} \\leq a_{ij^*}$, $b_{i^* j^*} \\leq b_{i^* j}$. The pair $(a_{i^* j^*}, b_{i^* j^*})$ is known as a **noncooperative (Nash) equilibrium outcome** of the bimatrix game."
created: 2024-11-14T18:24:04-05:00
tags:
  - game_theory
---

## Definition

A pair of strategies $\{\text{row } i^*, \text{column } j^*\}$ is said to constitute a **noncooperative (Nash) equilibrium solution** to a bimatrix game if the following pair of inequalities is satisfied for all $i=1,...,m$ and all $j=1,...,n$:

$$ \begin{aligned}
a_{i^* j^*} \leq a_{ij^*} \\
b_{i^* j^*} \leq b_{i^* j}
\end{aligned}$$
The pair $(a_{i^* j^*}, b_{i^* j^*})$ is known as a **noncooperative (Nash) equilibrium outcome** of the bimatrix game.

## Definition (mixed strategies)
A pair $\{y^* \in Y, z^* \in Z\}$ is said to constitute a **noncooperative (Nash) equilibrium solution** in [[mixed strategy|mixed strategies]] if the following inequalities are satisfied for all $y \in Y$ and $z \in Z$:
$$\begin{aligned}
{y^*}' A z^* \leq y' A z^*, \quad y \in Y \\
{y^*}' B z^* \leq {y^*}' B z, \quad z \in Z
\end{aligned}$$
with the pair $({y^*}' A z^*, {y^*}' B z^*)$ known as a **noncooperative (Nash) equilibrium outcome** of the bimatrix game in mixed strategies.

### Proposition
Let $\mathring{Y}, \mathring{Z}$  denote sets of inner points (interiors) of $Y$ and $Z$, respectively. If bimatrix game $(A, B)$ admits a [[mixed strategy]] [[Nash equilibrium]] solution $\{y^* \in \mathring{Y}, z^* \in \mathring{Z} \}$, then this also serves as a mixed-strategy solution for the bimatrix game $(-A, -B)$.

(Known also as *completely mixed Nash equilibrium solution* or *inner mixed-strategy Nash equilibrium solution*.)

### Theorem
Every $N$-person static finite game in [[normal-form game|normal form]] admits a *non-cooperative (Nash) equilibrium solution* in [[mixed strategy|mixed strategies]].

___
## See also
- [[Nash equilibrium]]

## References
1. T. Başar and G.J. Olsder, *Dynamic Noncooperative Game Theory*, 2nd edition, Classics in Applied Mathematics, SIAM, Philadelphia, 1999, pp. 78-79, 85-86, 91-94.
$$
