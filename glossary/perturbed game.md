---
layout: entry
title: perturbed game
aliases:
  - ε-perturbed game
  - epsilon-perturbed game
  - perturbation vector
type:
  - definition
reference:
course:
  - ECE6263
lecture:
  - ece6263-5
statement: |-
  Let $\Gamma = (N, (S_i)_{i \in N}, (u_i)_{i \in N})$ be a game in [[normal-form game|strategic-form]] in which the set of [[pure strategy|pure strategies]] of each player is finite. A **perturbation vector of player $i$** is a vector $\varepsilon_i = (\varepsilon_i(s_i))_{s_i \in S_i}$ satisfying $\varepsilon_i(s_i) > 0$ for each $s_i \in S_i$, and $\sum_{s_i \in S_i} \varepsilon_i (s_i) \leq 1, \quad \forall i \in N$. A **perturbation vector** is a vector $\varepsilon = (\varepsilon_i)_{i \in N}$. 
  For each perturbation vector $\varepsilon$, the **$\varepsilon$-perturbed game** is the game $\Gamma(\varepsilon) = (N, (\Sigma_i(\varepsilon_i))_{i \in N}, (u_i)_{i \in N})$ where player $i$'s strategy set is $\Sigma_i(\varepsilon_i) := \{ \sigma_i \in \Sigma_i : \sigma_i(s_i) \geq \varepsilon_i(s_i), \quad \forall s_i \in S_i \}$
created: 2024-11-17T20:57:59-05:00
tags:
  - game_theory
---

## Definition (perturbation vector)

Let $\Gamma = (N, (S_i)_{i \in N}, (u_i)_{i \in N})$ be a game in [[normal-form game|strategic-form]] in which the set of [[pure strategy|pure strategies]] of each player is finite. A **perturbation vector of player $i$** is a vector $\varepsilon_i = (\varepsilon_i(s_i))_{s_i \in S_i}$ satisfying $\varepsilon_i(s_i) > 0$ for each $s_i \in S_i$, and
$$\sum_{s_i \in S_i} \varepsilon_i (s_i) \leq 1, \quad \forall i \in N$$

A **perturbation vector** is a vector $\varepsilon = (\varepsilon_i)_{i \in N}$.

### maximum and minimum perturbation

Denote the _maximum perturbation_ in _$\varepsilon$-perturbed game_ $\Gamma(\varepsilon)$ as $M(\varepsilon) := \max_{i \in N, s_i \in S_i} \varepsilon_i(s_i)$, and _minimum perturbation_ as $m(\varepsilon) := \min_{i \in N, s_i \in S_i} \varepsilon_i(s_i)$ where $m(\varepsilon) > 0$.

## Definition ($\varepsilon$-perturbed game)

For each perturbation vector $\varepsilon$, the **$\varepsilon$-perturbed game** is the game $\Gamma(\varepsilon) = (N, (\Sigma_i(\varepsilon_i))_{i \in N}, (u_i)_{i \in N})$ where player $i$'s strategy set is
$$\Sigma_i(\varepsilon_i) := \{ \sigma_i \in \Sigma_i : \sigma_i(s_i) \geq \varepsilon_i(s_i), \quad \forall s_i \in S_i \}$$

## Notes

Intuition: assign a minimum for each pure strategy such that no pure strategy is explored with zero probability

## See also

- trembling hand

---

## References

1. M. Maschler, E. Solan, and Shmuel Zamir, _Game Theory_, Cambridge University Press, 2013, p. 264.
2. Jackson, Matthew O., Tomas Rodriguez-Barraquer, and Xu Tan. "Epsilon-equilibria of perturbed games." _Games and Economic Behavior_ 75.1 (2012): 198-216. https://web.stanford.edu/~jacksonm/emailgame.pdf
3. https://en.wikipedia.org/wiki/Trembling_hand_perfect_equilibrium
