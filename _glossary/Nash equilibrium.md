---
layout: entry
title: Nash equilibrium
aliases:
  - 纳什均衡
  - Nash solution
type:
  - definition
reference:
course:
  - ECE6263
lecture:
  - ece6263-3
statement: Solution where one player cannot improve his outcome by altering his decision unilaterally.
created: 2024-11-09T23:43:28-05:00
tags:
  - game_theory
---

## Definition

Solution where one player cannot improve his outcome by altering his decision unilaterally, known as **Nash equilibrium solution** or **Nash solution**.

## Proposition

Consider a game $\Gamma: \{N, \{s_i\}, \{u_i(\cdot)\}\}$. It admits a _Nash equilibrium_ (NE) if $\forall i \in N$,

1. $s_i$: nonempty, [[convex set|convex]], [[compact set|compact]] subset of $\mathbb{R}^m$
2. $u_i(\cdot)$: [[continuous function|continuous]] in $(S_1...S_N)$ and concave in $s_i \in S_i$.

## Pure strategies

### Theorem (optimal strategies and value)

If a [[two-player zero-sum game]] has a [[value of the game|value]] $v$, and if $s_I^*$ and $s_{II}^*$ are _optimal strategies_ of the two players, then $s^* = (s_I^*, s_{II}^*)$ is an [[Nash equilibrium|equilibrium]] with payoff $(v, -v)$.

(under convention of p1 maximizer, p2 minimizer)

### pure strategy in bimatrix game

- [[noncooperative (Nash) equilibrium solution#Definition]]

### Theorem (equilibrium and value)

If $s^* = (s_I^*, s_{II}^*)$ is an [[Nash equilibrium|equilibrium]] of a [[two-player zero-sum game]], then the game has a [[value of the game|value]] $v = u(s_I^*, s_{II}^*)$, and the strategies $s_I^*$ and $s_{II}^*$ are _optimal strategies_.

## Mixed strategies

### Definition (in mixed strategies)

$(p_i^*, p_{-i}^*)$ is a **Nash equilibrium** in mixed strategies if
$$\tilde{u}_i(p_i^*, p_{-i}^*) \geq \tilde{u}_i(p_i, p_{-i}^*)$$
for all admissible $p_i \in \Delta(X_i)$ and for all $i \in N$, which is equivalent to
$$p_i^* \in \arg\max_{p_i \in \Delta(X_i)} \tilde{u}_i(p_i, p_{-i}^*) \quad\forall i$$

Note sometimes $p_i \in \tilde{\Delta}(X_i) \subset \Delta(X_i)$

### mixed strategy in bimatrix game

- [[noncooperative (Nash) equilibrium solution#Definition (mixed strategies)]]

### Theorem (Nash 1950b, 1951)

Every game in [[normal-form game|strategic-form]] $G$, with a finite number of players and in which every player has a finite number of pure strategies, has an _equilibrium_ in [[mixed strategy|mixed strategies]].

### Theorem (equilibrium of $\varepsilon$-perturbed game)

Every (finite) [[perturbed game|ε-perturbed game]] has an _equilibrium_; i.e. there exists a [[mixed strategy]] vector $\sigma^* = (\sigma_i^*)_{i \in N}$ satisfying $\sigma_i^* \in \Sigma_i (\varepsilon_i)$ for each player $i \in N$, and
$$U_i(\sigma^*) \geq U_i(\sigma_i, \sigma_{-i}^*), \quad \forall i \in N,\ \forall \sigma_i \in \Sigma_i(\varepsilon_i)$$

### Corollary (perfect equilibrium as Nash equilibrium)

Every [[trembling hand perfect Nash equilibrium|perfect equilibrium]] of finite [[normal-form game|strategic-form game]] is a **Nash equilibrium**.

### Notes

- mixed NE may be established as a [[total search problem]], whereas a solution always exists (per Nash 1951, see above)
- difficulty of finding (mixed) Nash equilibria is [[class PPAD|PPAD]]-complete

---

## References

1. Nash Jr, J. F. (1950). Equilibrium points in n-person games. _Proceedings of the national academy of sciences_, _36_(1), 48-49. DOI:[10.1073/pnas.36.1.48](https://doi.org/10.1073/pnas.36.1.48). https://pmc.ncbi.nlm.nih.gov/articles/PMC1063129/pdf/pnas01550-0057.pdf
2. Nash J. F. (1951) Noncooperative games. _Annals of Mathematics_, **54**, 289–95.
3. https://bpb-us-e1.wpmucdn.com/wp.nyu.edu/dist/5/2123/files/2019/12/Lecture-3-Scribe.pdf
4. M. Maschler, E. Solan, and Shmuel Zamir, _Game Theory_, Cambridge University Press, 2013, pp. 115, 151, 264.
5. https://en.wikipedia.org/wiki/Subgame_perfect_equilibrium
6. Myerson, R. B. (1978). Refinements of the Nash equilibrium concept. _International Journal of Game Theory_, _7_(2), 73–80. https://doi.org/10.1007/BF01753236
7. Selten, R. (1975). Reexamination of the perfectness concept for equilibrium points in extensive games. _International Journal of Game Theory_, _4_(1), 25–55. https://doi.org/10.1007/BF01766400
8. C. Daskalakis, P. W. Goldberg, and C. H. Papadimitriou, “The complexity of computing a Nash equilibrium,” _Commun. ACM_, vol. 52, no. 2, pp. 89–97, Feb. 2009, doi: [10.1145/1461928.1461951](https://doi.org/10.1145/1461928.1461951).
