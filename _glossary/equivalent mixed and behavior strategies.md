---
layout: entry
title: equivalent mixed and behavior strategies
aliases: 
type:
  - definition
reference: 
course:
  - ECE6263
lecture:
  - ece6263-8
statement: A [[mixed strategy]] $\sigma_i$ and [[strategy|behavior strategy]] $b_i$ of player $i$ in an extensive-form game are **equivalent** to each other if for every *mixed/behavior strategy vector* $\sigma_{-i}$ of the players $N \setminus \{i\}$ and every vertex $x$ in the game tree, $\rho(x; \sigma_i, \sigma_{-i}) =  \rho(x; b_i, \sigma_{-i})$
created: 2024-11-29T12:51:00
tags:
  - game_theory
---
## Definition (equivalent mixed and behavior strategies)
A [[mixed strategy]] $\sigma_i$ and [[behavior strategy]] $b_i$ of player $i$ in an extensive-form game are **equivalent** to each other if for every [[strategy vector|mixed/behavior strategy vector]] $\sigma_{-i}$ of the players $N \setminus \{i\}$ and every vertex $x$ in the game tree,
$$\rho(x; \sigma_i, \sigma_{-i}) =  \rho(x; b_i, \sigma_{-i})$$
i.e. the mixed strategy $\sigma_i$ and behavior strategy $b_i$ are equivalent if for every mixed/behavior strategy vector $\sigma_{-i}$ the two strategy vectors $(\sigma_i, \sigma_{-i})$ and $(b_i, \sigma_{-i})$ induce the same probability of arriving at each vertex in the game tree, in particular for each leaf $x$.

## Theorem (equivalent utility of equivalent mixed and behavior strategies)
If *mixed strategy* $\sigma_i$ is *equivalent* to *behavior strategy* $b_i$, then for every *mixed/behavior strategy vector* $\sigma_{-i}$ of the other players and every player $j \in N$,
$$u_j(\sigma_i, \sigma_{-i}) = u_j(b_i, \sigma_{-i})$$

### Corollary
Let $\sigma = (\sigma_i)_{i \in N}$ be a vector of *mixed strategies*. For each player $i$ let $b_i$ be a *behavior strategy* that is equivalent to $\sigma_i$, and denote $b = (b_i)_{i \in N}$. Then for each player $i$,
$$u_i(\sigma) = u_i(b)$$

## Conditions for existence of equivalent mixed strategy to any behavior strategy

### Definition (action)
Let $x$ be a vertex in the *game tree* that is not the root, and $x_1$ a vertex on the path from the root to $x$. The (unique) edge emanating from $x_1$ on the path from the root to $x$ is called the **action** at $x_1$ leading to $x$.

### Corollary
If there exists a path from the root to some vertex x that passes at least twice through the same information set $U_i$ of player $i$, and if the action leading in the direction of $x$ is not the same action at each of these information sets, then player $i$ has a behavior strategy that has no equivalent mixed strategy.

### Theorem
Let $\Gamma = (N,V,E,v_0, (V_i)_{i \in N \cup \{0\}}, (p_x)_{x \in V_0}, (\mathcal{U}_{i \in N}), O, u)$ be an [[extensive form game]] that satisfies the condition that at every vertex there are at least two actions. Every [[behavior strategy]] of player $i$ has an equivalent [[mixed strategy]] if an only if each information set of player $i$ intersects every path emanating from the root at most once.


___
## References
1. M. Maschler, E. Solan, and Shmuel Zamir, *Game Theory*, Cambridge University Press, 2013, pp. 223, 226.
