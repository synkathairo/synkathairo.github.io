---
layout: entry
title: saddle-point equilibrium (game theory)
aliases:
  - saddle-point strategies
  - saddle-point value
type:
  - definition
reference: 
course:
  - ECE6263
lecture:
  - ece6263-2
statement: 
created: 2024-11-14T14:43:36-05:00
tags:
  - game_theory
---
## Definition

For a given $m \times n$ [[matrix game]] $A=\{a_{ij}\}$ let {row $i^*$, column $j^*$} be a pair of strategies adopted by the players. Then if the pair of equalities
$$a_{i^* j} \leq a_{i^* j^*} \leq a_{ij^*}$$
is satisfied for all $i=1,...,m$ and all $j=1,...,n$, then the strategies are said to constitute a **saddle-point equilibrium** (or said to be **saddle-point strategies**). Corresponding outcome $a_{i^* j^*}$ is called the **saddle-point value** or simply the **value** of the matrix game ([[zero-sum game]]), and is denoted $V(A)$.

## Theorem
Let $A=\{a_{ij}\}$ denote a $m \times n$ [[matrix game]] with $\overline{V}(A) = \underline{V}(A)$, then
1. $A$ has a **saddle point** in [[pure strategy|pure strategies]],
2. an ordered pair of strategies provides a saddle pair for $A$ iff the first of these is a [[security strategy]] for P1, and the second one a security strategy for P2,
3. $V(A)$ is uniquely given by $V(A) = \overline{V}(A) = \underline{V}(A)$.

## Definition (SPE in mixed strategies)
The pair $(p_1^*, p_2^*)$, $p_1^* \in \Delta_1$, $p_2^* \in \Delta_2$ constitutes a **saddle point equilibrium in mixed strategies** if 
$$(p_1^*)^T A p_2 \leq (p_1^*)^T A p_2^* \leq (p_1)^T A p_2^* \quad \forall p_1 \in \Delta_1, \forall p_2 \in \Delta_2$$
where $\Delta_1 = \Delta(A_1)$, $A_1 = \{1,...,m\}$, and $\Delta_2 = \Delta(A_2)$, $A_2 = \{1,...,n\}$.

(see [[mixed strategy]])

$$\min_{p_1 \in \Delta_1} \max_{p_2 \in \Delta_2} J(p_1, p_2) = \max_{p_2 \in \Delta_2} \min_{p_1 \in \Delta_1} J(p_1, p_2)$$

Thus, [[von Neumann's minimax theorem]] results.

## Corollary
In a matrix game $A$, let {row $i_1$, column $j_1$} and {row $i_2$, column $j_2$} be two saddle-point strategy pairs. Then {row $i_1$, column $j_2$}, {row $i_2$, column $j_1$} are also in saddle-point equilibrium. This feature of saddle-point strategies is known as their **ordered interchangeability** property.

## Definition (feedback saddle point)
#incomplete 
p 46

## Definition (behavioral saddle point)
p 50

### Corollary
Every [[two-player zero-sum game|two-person zero-sum game]] feedback game, which has an [[extensive form game|extensive form]] comprised of a finite number of branches, admits a *saddle point* in *behavioral strategies*.


___
## References
1. T. Başar and G.J. Olsder, _Dynamic Noncooperative Game Theory_, 2nd edition, Classics in Applied Mathematics, SIAM, Philadelphia, 1999, pp. 21, 46.
