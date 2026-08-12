---
layout: entry
title: trembling hand perfect Nash equilibrium
aliases:
  - perfect equilibrium
  - trembling-hand perfect
type:
  - definition
reference:
course:
  - ECE6263
lecture:
  - ece6263-5
statement: A [[mixed strategy]] vector that is the limit of [[Nash equilibrium#Theorem (equilibrium of $ varepsilon$-perturbed game)|equilibria in perturbed games]], where pertubation vectors are all positive, and converge to zero, is called a **perfect equilibria**.
created: 2024-11-17T20:46:12-05:00
tags:
  - game_theory
---

## Definition

Given a [[perturbed game|perturbation vector]] $\varepsilon$, denote the _maximum perturbation_ in [[perturbed game|ε-perturbed game]] $\Gamma(\varepsilon)$ as $M(\varepsilon) := \max_{i \in N, s_i \in S_i} \varepsilon_i(s_i)$, and _minimum perturbation_ as $m(\varepsilon) := \min_{i \in N, s_i \in S_i} \varepsilon_i(s_i)$ where $m(\varepsilon) > 0$.

A [[mixed strategy]] vector $\sigma$ in a [[normal-form game|strategy-form game]] is a **perfect equilibrium** if there exists a sequence of [[perturbed game|perturbation vectors]] $(\varepsilon^k)_{k \in \mathbb{N}}$ satisfying $\lim_{k \to \infty} M(\varepsilon^k) = 0$, and for each $k \in \mathbb{N}$ there exists an [[Nash equilibrium#Theorem (equilibrium of $ varepsilon$-perturbed game)|equilibrium]] $\sigma^k$ of $\Gamma(\varepsilon^k)$ such that
$$\lim_{k \to \infty} \sigma^k = \sigma$$
(A [[mixed strategy]] vector that is the limit of [[Nash equilibrium#Theorem (equilibrium of $ varepsilon$-perturbed game)|equilibria in perturbed games]], where pertubation vectors are all positive, and converge to zero, is called a **perfect equilibria**.)

## Definition

A [[Nash equilibrium]] $\hat \gamma$ of a game $\Gamma_N = \{\mathcal{N},\{\Delta(A_i)\},\{u_i\}\}$ is ([[normal-form game|normal form]]) **trembling hand perfect** if there is a sequence of [[perturbed game|perturbed games]] $\{\Gamma_\varepsilon\}_{k=1}^\infty$,

$$ \begin{aligned}
\Gamma_\varepsilon & = \{\mathcal{N},\{\Delta_\varepsilon(A_i)\},\{u_i(\cdot)\}\}  \\
\Delta_\varepsilon(A_i) & = \{p_i : p_i(a_i) \geq \varepsilon_i(a_i) \text{ for all } a_i \in A_i \text{ and } \sum_{a_i \in A_i} p_i(a_i) = 1\}  \\
\text{with } & \sum_{a_i \in A_i} \varepsilon_i(a_i) < 1
\end{aligned}$$
converges to $\Gamma_N$, for which there is an associated sequence of *Nash equilibria* $\{p^k\}_{k=1}^\infty$ ($\{\hat{\gamma}^k\}_{k=1}^\infty$) that converges to $p$ (or $\hat{\gamma}$).

### Remarks
- Myerson's definition - proper, robustness?
- Selten
- "mild" way
- "stronger" version?
- "robust" to payoffs, or pertubations
- other concepts of robustness

## Example

|       | **L**   | **R**   |
| ----- | --- | --- |
| **U** | 1,1 | 2,0 |
| **D** | 0,2 | 2,2 |
for this [[normal-form game|normal form]] [[matrix game]], only UL is trembling hand perfect (despite RD also being a NE)
(player 1 as row player, player 2 as column player)

## Theorem (weakly dominated strategies)
In every *perfect equilibrium*, every (weakly) dominated strategy is chosen with probability zero.

(recall that weakly dominated strategy refers to strategy that is never better and sometimes worse)

## Theorem (completely mixed strategies)
Every equilibrium in completely [[mixed strategy|mixed strategies]] in a [[normal-form game|strategic-form game]] is a *perfect equilibrium*.

## Notes

- extensive-form trembling hand perfect equilibrium is a subset of [[subgame perfect equilibrium]]


___
## References

1. T. Başar and G.J. Olsder, *Dynamic Noncooperative Game Theory*, 2nd edition, Classics in Applied Mathematics, SIAM, Philadelphia, 1999, p. 129.
2. M. Maschler, E. Solan, and S. Zamir, _Game Theory_, 1st ed. Cambridge University Press, 2013, pp. 266-267. doi: [10.1017/CBO9780511794216](https://doi.org/10.1017/CBO9780511794216).
3. R. Selten, “Reexamination of the perfectness concept for equilibrium points in extensive games,” _Int J Game Theory_, vol. 4, no. 1, pp. 25–55, Mar. 1975, doi: [10.1007/BF01766400](https://doi.org/10.1007/BF01766400).
4. R. B. Myerson, “Refinements of the Nash equilibrium concept,” _Int J Game Theory_, vol. 7, no. 2, pp. 73–80, Jun. 1978, doi: [10.1007/BF01753236](https://doi.org/10.1007/BF01753236).
5. https://en.wikipedia.org/wiki/Trembling_hand_perfect_equilibrium
$$
