---
layout: page
title: extensive form game
aliases:
  - game in extensive form
type:
  - definition
reference:
course:
  - ECE6263
lecture:
  - ece6263-7
statement:
created: 2024-11-01T14:54:14-04:00
tags:
  - game_theory
---
## Definition (two person zero-sum finite game)
An **extensive form** of a [[two-player zero-sum game#Finite two-person zero-sum game|two-person zero-sum finite game]] without chance moves is a finite tree structure with 
1. a specific *vertex* indicating the starting point of the game
2. a [[utility function|payoff function]] assigning a real number to each terminal vertex of the tree, determining the payoff (or respectively, loss) to P2 (respectively, P1)
3. partition of the nodes of the tree into two *player sets*, $\overline{N}^1$ and $\overline{N}^2$ for P1 and P2 respectively
4. subpartition of each player set into *information sets* $\{\eta_j^i\}$, such that the same number of intermediate branches emanates from every node belonging to the same information set, and no node follows another node in the same information set

(convention: P1 minimizer, P2 maximizer)

### Equivalent normal form
an equivalent [[normal-form game|normal form]] exists 

## Definition (vector form)
A **game in extensive form** (or **extensive-form game**) is an ordered vector
$$\Gamma = (N, V, E, x^0, (V_i)_{i \in N}, O, u)$$
where
- $N$ is a finite set of players
- $(V, E, x^0)$ is a *tree* called the *game tree*
- $(V_i)_{i \in N}$ is the *partition* of the set of vertices that are not leaves
- $O$ is the set of possible game outcomes
- $u$ is a function associating each leaf of the tree with a game outcome in $O$

### Definition (game in extensive form with chance moves and imperfect information)
A **game in extensive form** (with chance moves and with imperfect information) is a vector
$$\Gamma = (N, V, E, x^0, (V_i)_{i \in N}, (p_x)_{x \in V_0}, (U_i^j)_{i \in N}^{j = 1,...,k_i}, O, u)$$
where, in addition to the variables above, 
- $p_x$ is a probability distribution over the set of edges from $x$,
- $(U_i^j)^{j = 1,...,k_i}$ is a partition of $V_i$ for a player $i \in N$
- the pair $(U_i^j, A(U_i^j))$ is an information set of player $i$ for each player $i \in N$ and $j \in \{1,2,...,k_i\}$
Here, each element $U_i^j$ in the partition $(U_i^j)^{j = 1,...,k_i}$ of $V_i$ is an *information set* of player $i$.
## Notes
- may be described by directed graph $G = (V,E)$
- finite games may be described by finite graphs, infinite games by infinite graphs
- measure theory may be used to describe infinite games

___

## References
1. T. Başar and G.J. Olsder, *Dynamic Noncooperative Game Theory*, 2nd edition, Classics in Applied Mathematics, SIAM, Philadelphia, 1999, pp. 36-39.
2. M. Maschler, E. Solan, and Shmuel Zamir, *Game Theory*, Cambridge University Press, 2013, p. 43.
3. https://web.stanford.edu/~jdlevin/Econ%20203/ExtensiveForm.pdf
4. https://web.xidian.edu.cn/luanhao/files/20180411_115325.pdf
5. https://www.asc.ohio-state.edu/peck.33/gametheory/extensive
6. https://math.stackexchange.com/questions/2234391/signalling-game-how-to-draw-the-normal-form-matrix
7. https://web.stanford.edu/~jdlevin/Econ%20203/ExtensiveForm.pdf
8. https://www.cs.ubc.ca/~kevinlb/teaching/cs532a%20-%202006-7/lectures/lect11.pdf