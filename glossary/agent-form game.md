---
layout: entry
title: agent-form game
aliases:
type:
  - definition
reference:
course:
  - ECE6263
lecture:
  - ece6263-6
statement:
created: 2024-12-16T18:22:31-05:00
tags:
  - game_theory
---

## Definition

Let $\Gamma = (N, (T_i)_{i \in N}, p, S, (s_t)_{t \in T})$ be a [[Harsanyi game with incomplete information|game with incomplete information]]. The **agent-form game** $\hat{\Gamma}$ corresponding to $\Gamma$ is the following game in [[normal-form game|strategic-form]]:

- set of players $\cup_{i \in N} T_i$: every type of each player in $\Gamma$ is a player in $\Gamma$
- set of [[pure strategy|pure strategies]] of player $t_i$ in $\hat{\Gamma}$ is $A_i(t_i)$, set of available _actions_ of that [[type set|type]] in the game $\hat{\Gamma}$.
- [[utility function|payoff function]] $\hat{u}_{t_i}$ of player $t_i$ in $\hat{\Gamma}$ is given by 
    $$\hat{u}_{t_i}(a) := \sum_{t_{-i} \in T_{-i}} p(t_{-i} \vert t_i) u_i(t_i, t_{-i}; (a_j(t_j))_{j \in N})$$ where $a = (a_j(t_j))_{j \in N, t_j \in T_j}$ denotes vector of actions of all players in $\hat{\Gamma}$.

## See also

- [[Bayesian equilibrium]]

---

## References

1. M. Maschler, E. Solan, and Shmuel Zamir, _Game Theory_, Cambridge University Press, 2013, p. 354.
