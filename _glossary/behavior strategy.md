---
layout: entry
title: behavior strategy
aliases: 
type:
  - definition
reference: 
course:
  - ECE6263
lecture: 
statement: A **behavior strategy** of a game in an [[extensive form game]] is a function mapping each of his information sets to a probability distributions over the set of possible actions at that information set.
created: 2024-12-09T17:05:53-05:00
tags:
  - game_theory
---
## Definition
A **behavior strategy** of a game in an [[extensive form game]] is a function mapping each of his information sets to a probability distributions over the set of possible actions at that information set.
- $\mathcal{U}_i$ collection of information sets of player $i$
- $A(U_i)$ set of possible actions at $U_i$
- $b_i : \mathcal{U}_i \to \cup_{U_i \in \mathcal{U}_i} \Delta(A(U_i))$, behavior strategy of player $i$, where $b_i(U_i) \in \Delta(A(U_i))$

### Strategy vector
see [[strategy vector|mixed/behavior strategy vector]]

Also see [[equivalent mixed and behavior strategies]]


___
## See also
- [[admissible Nash equilibrium strategy pair]]
- [[better pair of strategies]]
- [[mixed strategy]]
- [[pure strategy]]
- [[strategy]]

## References
1. https://en.wikipedia.org/wiki/Strategy_(game_theory)
2. T. Başar and G.J. Olsder, *Dynamic Noncooperative Game Theory*, 2nd edition, Classics in Applied Mathematics, SIAM, Philadelphia, 1999, pp. 5, 18, 79.
3. M. Maschler, E. Solan, and Shmuel Zamir, *Game Theory*, Cambridge University Press, 2013, p. 221.
4. https://math.stackexchange.com/questions/1345773/what-is-the-difference-between-mixed-strategy-and-behavioral-strategy-games
