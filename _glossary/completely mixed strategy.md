---
layout: page
title: completely mixed strategy
aliases: 
type:
  - definition
reference: 
course:
  - ECE6263
lecture:
  - ece6263-8
statement: 
created: 2024-12-09T16:59:00-05:00
tags:
  - game_theory
---
## Definition
A [[mixed strategy]] $\sigma_i$ of player $i$ is called **completely mixed** if $\sigma_i(s_i) > 0$ for each $s_i \in S_i$. A [[behavior strategy]] $\sigma_i$ of player $i$ is called completely mixed if $\sigma_i(U_i; a_i) > 0$ for each information set $U_i$ of player $i$, and each action $a_i \in A(U_i)$.

## Corollary
Let $\Gamma$ be an [[extensive form game]]. Then every [[Nash equilibrium]] in *completely mixed strategies* (behavior strategies or mixed strategies) is a subgame perfect equilibrium.

___
## See also
- [[equivalent mixed and behavior strategies]]

## References
1. M. Maschler, E. Solan, and Shmuel Zamir, *Game Theory*, Cambridge University Press, 2013, p. 256.