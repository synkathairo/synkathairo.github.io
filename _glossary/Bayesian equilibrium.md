---
layout: page
title: Bayesian equilibrium
aliases: 
type: 
reference: 
course:
  - ECE6263
lecture:
  - ece6263-6
statement: A [[strategy vector]] $\sigma^* = (\sigma_1^*,\sigma_2^*,...,\sigma_n^*)$ is a **Bayesian equilibrium** if for each player $i \in N$, each [[type set|type]] $t_i \in T_i$, and each possible action $a_i \in A_i(t_i)$, $U_i(\sigma^* \vert t_i) \geq U_i ((a_i, \sigma_{-i}^*) \vert t_i)$
created: 2024-12-16T19:43:19-05:00
tags:
  - game_theory
---
## Definition
A [[strategy vector]] $\sigma^* = (\sigma_1^*,\sigma_2^*,...,\sigma_n^*)$ is a **Bayesian equilibrium** if for each player $i \in N$, each [[type set|type]] $t_i \in T_i$, and each possible action $a_i \in A_i(t_i)$, 
$$U_i(\sigma^* \vert t_i) \geq U_i ((a_i, \sigma_{-i}^*) \vert t_i)$$

An equivalent way to define *Bayesian equilibrium* is via an auxiliary game, the [[agent-form game]].

## Theorem (Bayesian equilibrium and Nash equilibrium in corresponding agent-form game)
A [[strategy vector]] $\sigma^* = (\sigma_i^*)_{i \in N}$ is a *Bayesian equilibrium* in a game $\Gamma$ [[Harsanyi game with incomplete information|with incomplete information]] if and only if the strategy vector $(\sigma_i^*(t_i))_{i \in N, t_i \in T_i}$ is a [[Nash equilibrium]] in the corresponding [[agent-form game]] $\hat{\Gamma}$.

## Theorem (incomplete information and finite set of actions)
Every [[Harsanyi game with incomplete information|game with incomplete information]] in which the set of types is [[finite set|finite]] and the set of actions of each type is finite has a Bayesian equilibrium (in behavior strategies).

## Theorem (Harsanyi, 1967)
In a game with incomplete information in which the number of types of each player is finite, every Bayesian equilibrium is also a Nash equilibrium, and conversely every Nash equilibrium is also a Bayesian equilibrium.


___
## References
1. M. Maschler, E. Solan, and Shmuel Zamir, *Game Theory*, Cambridge University Press, 2013, p. 354.
