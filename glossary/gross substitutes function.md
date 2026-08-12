---
layout: entry
title: gross substitutes function
aliases:
  - gross substitutability
  - GS
  - M♮-concave function
  - M-concave on generalized polymatroid
  - M-concave on g-polymatroid
  - MX
type:
  - definition
  - function
reference:
course:
lecture:
statement:
created: 2025-09-30T18:23:41-04:00
tags:
  - game_theory
  - economics
---

## Definition (_gross substitutes_)

Consider a _valuation function_, which is a set function $f: 2^M \to \mathbb{R}$ over a set $M$ of $m$ items assigning a real value $f(S)$ to each set $S \subseteq M$, which is additionally [[monotone function|monotone]] ($f(T) \leq f(S)$ for every $T \subseteq S$) and _normalized_ ($f(\emptyset) = 0$). Let $\mathbf{p} = (p_1,...,p_m) \in \mathbb{R}^m$ be a _price vector_. Then, the _demand_ of $f$ under $\mathbf{p}$ is $D(\mathbf{p}) = \arg\max_{S \subseteq M} \{f(S) - \sum_{j \in S} p_j\}$.

A _valuation function_ $f$ is **gross substitutes** (GS) if for every pair of _price vectors_ $\mathbf{p},\mathbf{q}$ such that $\mathbf{p} \leq \mathbf{q}$, for every set $S \in D(\mathbf{p})$, there exists $T \in D(\mathbf{q})$ such that $T$ contains every item $j \in S$ such that $p_j = q_j$.

## Definition (_$M^\natural$-convex function_)

A function is defined as $M^\natural$-convex (M-convex on a g-polymatroid) if
#incomplete

## Notes

- intuitively: means increasing the price of some goods while keeping others fixed can only cause an increase in the demand for the goods whose price is fixed
- could also use $f : 2^M \to [0,1]$, as reals and $[0,1]$ can counterintuitively be homeomorphically mapped to each other (?)
- see $M^\natural$-convex functions in discrete convex analysis (or $M^\natural$-concave)
  - when defined on unit hypercube, $M^\natural$-concave function is equivalent to gross substitutes function

## See also

- _complementary good_
- [[utility function]]
- set-valued function, valuation function
- price vector
- demand
- compare:
  - additive function
    - budget additive function
  - coverage function
  - [[submodular function]] (note GS $\subsetneq$ submodular)
    - (diminishing returns submodular function)
  - XOS function (fractionally subadditive)

---

## References

1. S. Dobzinski, U. Feige, M. Feldman, and R. P. Leme, “Are Gross Substitutes a Substitute for Submodular Valuations?,” Feb. 20, 2022, _arXiv_: arXiv:2102.13343. doi: [10.48550/arXiv.2102.13343](https://doi.org/10.48550/arXiv.2102.13343).
   - also at doi: [10.1145/3465456.3467615](https://doi.org/10.1145/3465456.3467615)
2. N. Nisan, T. Roughgarden, É. Tardos, and V. V. Vazirani, _Algorithmic game theory_. New York: Cambridge university press, 2007, p. 138. [Online]. Available: [https://www.cs.cmu.edu/~sandholm/cs15-892F13/algorithmic-game-theory.pdf](https://www.cs.cmu.edu/~sandholm/cs15-892F13/algorithmic-game-theory.pdf)
3. P. Duetting, T. Ezra, M. Feldman, and T. Kesselheim, “Combinatorial Contracts,” Sept. 02, 2025, _arXiv_: arXiv:2109.14260. doi: [10.48550/arXiv.2109.14260](https://doi.org/10.48550/arXiv.2109.14260).
4. K. Murota and A. Shioura, “M-Convex Function on Generalized Polymatroid,” _Mathematics of OR_, vol. 24, no. 1, pp. 95–105, Feb. 1999, doi: [10.1287/moor.24.1.95](https://doi.org/10.1287/moor.24.1.95).
5. T. Oki and S. Sakaue, “No-Regret M${}^{\natural}$-Concave Function Maximization: Stochastic Bandit Algorithms and Hardness of Adversarial Full-Information Setting,” Aug. 26, 2025, _arXiv_: arXiv:2405.12439. doi: [10.48550/arXiv.2405.12439](https://doi.org/10.48550/arXiv.2405.12439).
6. https://en.wikipedia.org/wiki/Gross_substitutes_(indivisible_items)
