---
layout: page
title: correlated equilibrium
aliases: 
type:
  - definition
reference: 
course:
  - ECE6263
lecture: 
statement: "A probability distribution $\\psi$ on $S$ is a **correlated equilibrium** of $\\Gamma$ if, $\\forall i \\in N$, $\\forall j \\in S^i$, $\\forall k \\in S^i$, we have $\\sum_{s \\in S: s^i = j} \\psi(s) [u^i(k,,s^{-i}) - u^i(s)] \\leq 0$"
created: 2024-11-14T14:59:46-05:00
tags:
---
## Definition

Let $\Gamma = (N, (S^i)_{i \in N}, (u^i)_{i \in N})$ be a finite $N$-person game in [[normal-form game|strategic normal form]], with $N$ denoting the set of players, $S^i$ the set of strategies, $u^i: \prod_{i \in N} S^i \to \mathbb{R}$  is player $i$'s payoff function. Generic element of $S$ is $s = (s^i)_{i \in N}$, $s^{-i} = (s^{i'})_{i' \neq i}$ is strategy combination of all players except $i$.

A [[probability density function|probability distribution]] $\psi$ on $S$ is a **correlated equilibrium** of $\Gamma$ if, $\forall i \in N$, $\forall j \in S^i$, $\forall k \in S^i$, we have
$$\sum_{s \in S: s^i = j} \psi(s) [u^i(k,,s^{-i}) - u^i(s)] \leq 0$$

Define a **correlated $\epsilon$-equilbrium** if the right-hand side above is replaced by $\epsilon$.

## Definition (correlated equilibrium and correlation device)

A (correlated) equilibrium of a given normal form game $G$ is a pair of

1. strategy profile $f = (f_1, f_2)$, $f_i \in \Gamma_i$, $i = 1,2$
2. correlation device $D$ such that the strategy profile $f$ is a NE.

$$\begin{aligned}
u_1(f_1, f_2) & \geq u_1(f_1',f_2) \quad \forall f_1' \in \Gamma_1 \\
u_1(f_1, f_2) & \geq u_2(f_1,f_2') \quad \forall f_2' \in \Gamma_2
\end{aligned}$$

## Nash equilibria
Every [[Nash equilibrium]] is a correlated equilibrium, the special case where $\psi$ is a product measure i.e. the play of different players is independent.

### Definition (strategy vector as Nash equilibrium)

A probability distribution $p$ over the set of action vectors $S$ is a **correlated equilibrium** if the [[strategy vector|strategy vector]] $\tau^*$ is a [[Nash equilibrium]] of the game $\Gamma^*(p)$. In other words, for every player $i \in N$,
$$\sum_{s_{-i} \in S_{-i}} p(s_i, s_{-i}) u_i(s_i, s_{-i}) \geq \sum_{s_{-i} \in S_{-i}} p(s_i, s_{-i}) u_i(s_i', s_{-i}) \quad \forall s_i, s_i' \in S$$
Strategy vector $\sigma$ induces probability distribution $p_\sigma$ over the set of action vectors $S$,
$$p_\sigma(s_1,...,s_n) := \sigma_1(s_1) \times \sigma_2(s_2) \times ... \times \sigma_n(s_n)$$

### Theorem
For every [[Nash equilibrium]] $\sigma^*$, the probability distribution $p_{\sigma^*}$ is a *correlated equilibrium*.

### convex hull of Nash equilibria
The convex hull of the set of [[Nash equilibrium|Nash equilibria]] is the set
$$\operatorname{conv}\{ p_{\sigma^*} : \sigma^* \text{ is a Nash equilibrium} \} \subseteq \Delta(S)$$
(where $\Delta(S)$ is a [[simplex]])

### Corollary
It follows from the above theorem and [[Nash equilibrium#Corollary (perfect equilibrium as Nash equilibrium)]] that every finite [[normal-form game|strategic-form game]] has a *correlated equilibrium*.

### Theorem
Set of *correlated equilibria* of a finite game is [[convex set|convex]] and [[compact set|compact]].

## Notes
Efficient algorithms such as simplex algorithm exist to calculate extreme points of [[polytope]] such as the simplex algorithm

Intuition of *correlated equilibrium*: assume that, before the game is played, each player receives a private signal (which does not affect the payoffs). The play may then choose his action in the game depending on this signal.

Consider: *game of chicken*

## See also

- [[Nash equilibrium]]

___
## References
1. Hart S, Mas-Colell A. *A Simple Adaptive Procedure Leading to Correlated Equilibrium*. *Econometrica*, 2000; 68(5): 1127-1150. https://doi.org/10.1111/1468-0262.00153
2. M. Maschler, E. Solan, and Shmuel Zamir, *Game Theory*, Cambridge University Press, 2013, pp. 307-308.
3. https://en.wikipedia.org/wiki/Correlated_equilibrium
