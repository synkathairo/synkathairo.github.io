---
layout: entry
title: Harsanyi game with incomplete information
aliases: 
type:
  - definition
  - game
reference: 
course:
  - ECE6263
lecture:
  - cs6763-6
statement: 
created: 2024-12-04T21:02:00
tags:
  - game_theory
---
## Definition (Harsanyi game with incomplete information)
A **Harsanyi game with incomplete information** is a vector $(N, (T_i)_{i \in N}, p, S, (s_t)_{t \in \times_{i \in N}T_i})$ where:
- $N$ is a [[finite set]] of players
- $T_i$ is a finite set of *types* for player $i$, for each $i \in N$.
	- $T = \times_{i \in N} T_i$, set of type vectors
- $p \in \Delta(T)$, probability distribution over set of type vectors that satisfy $p(t_i) := \sum_{t_{-i} \in T_{-i}} p(t_i, t_{-i}) > 0$ for every player $i \in N$ and every type $t_i \in T_i$
- $S$, set of states of nature, called *state games*.
	- Every *state of nature* $s \in S$ is a vector $s = (N, (A_i)_{i \in N})$, where $A_i$ is a nonempty set of actions of player $i$ and $u_i : \times_{i \in N} A_i \to \mathbb{R}$ is the payoff function of player $i$.
- $s_t = (N, (A_i(t_i))_{i \in N}, (u_i(t))_{i \in N}) \in S$ is the state game for the type vector $t$, for every $t \in T$.
	- Thus, player $i$'s action set in state game $s_t$ depends on his type $t_i$ only, and is independent of the types of the other players.

## Definition (Harsanyi model of incomplete information)
Refer to a *Harsanyi game* as a **Harsanyi model of incomplete information** when it is analyzed without specifiying the state game.

## Notes
- *Harsanyi games with incomplete information* may be analyzed at the *ex ante* stage, before players know their types, and at the *interim* stage, after they have learned what their types are.
- Two types of equilibria can therefore be defined: 
	- [[Nash equilibrium]] in Harsanyi games, where no player can profit by unilateral deviation before knowing his type, and 
	- [[Bayesian equilibrium]], where no player $i$ can profit by deviating at the interim stage, after learning his type $t_i$.

___
## See also
- [[Aumann model of incomplete information]]
- [[Aumann model of incomplete information with beliefs]]

## References
1. M. Maschler, E. Solan, and Shmuel Zamir, *Game Theory*, Cambridge University Press, 2013, pp. 347-349.
