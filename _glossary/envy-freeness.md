---
layout: page
title: envy-freeness
aliases:
  - envy-free
  - envy
type:
  - definition
reference:
course:
lecture:
statement:
created: 2026-05-03T01:02:03-04:00
tags:
  - game_theory
---
## Definition (EF)
Suppose $n$ agents and $m$ goods denoted by sets $N$ and $M$ respectively. 
Each agent has a [[preference relation|preference]] over the goods in $M$, which is a [[monotone function|monotone]] [[utility function|valuation function]] $v_i: [0,1]^M \to \mathbb{R}_{\geq 0}$.

Let an *allocation* be a partition of the goods in $M$ into $n$ bundles (which may be represented as a column stochastic matrix). 

Describe an allocation as **envy-free** (EF) if for any two agents $i,k \in N$, $$v_i(x_i) \geq v_i(x_k)$$

(intuition: agent prefers own bundle the best, or not less than others)

## Variants
- *envy-freeness up to one good* (EF1), $\exists j \in x_k$ s.t. $v_i(x_i) \geq v_i(x_k\setminus \{j\})$
- *envy-freeness up to any good* (EFX), $\forall j \in x_k$, $v_i(x_i) \geq v_i(x_k\setminus \{j\})$
	- EFX allocation is only known to exist in special cases, such as:
		- two agents with general valuations
		- three agents with additive valuations
- *envy-freeness with prioritized agents* (EFprior) (Bu et al 2026)
	- suppose a set of prioritized agents $P \subseteq N$, then EFprior is when 
		- allocation is EF1, and
		- $\forall i \in P$, $j \in N \setminus P$, $i$ does not *envy* $j$


___
## References
1. https://www.cs.cmu.edu/~csd-phd-blog/2025/fair-allocation-nash-welfare/
2. X. Bu, Z. Li, S. Liu, J. Song, B. Tao, and Z. Yu, “Fair division with prioritized agents,” _Information and Computation_, vol. 309, p. 105407, Mar. 2026, doi: [10.1016/j.ic.2026.105407](https://doi.org/10.1016/j.ic.2026.105407).
