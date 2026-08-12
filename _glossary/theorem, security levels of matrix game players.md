---
layout: page
title: theorem, security levels of matrix game players
aliases: 
type:
  - theorem
reference: 
course:
  - ECE6263
lecture:
  - ece6263-2
statement: 
created: 2024-11-09T23:53:09-05:00
tags:
  - game_theory
---
## Theorem
In every [[matrix game]] $A = \{a_{ij}\}$, 
1. the [[security strategy|security level]] of each player is unique
2. there exists at least one [[security strategy]] for each player
3. The security level of P1 (the minimizer) never falls below the security level of P2 (the maximizer), i.e.
$$\min_i a_{ij^*} = \underline{V}(A) \leq \overline{V}(A) = \max_j a_{i^* j}$$
	where $i^*$ and $j^*$ denote security strategies for P1 and P2 respectively

(note: P1 as minimizer, P2 as maximizer is a convention which is reversed in some textbooks)

___
## References
1. T. Başar and G.J. Olsder, _Dynamic Noncooperative Game Theory_, 2nd edition, Classics in Applied Mathematics, SIAM, Philadelphia, 1999, p. 19.