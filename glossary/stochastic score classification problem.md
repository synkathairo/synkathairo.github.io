---
layout: entry
title: stochastic score classification problem
aliases:
  - SSClass
  - SSC
type:
  - computational problem
reference:
course:
  - CS9233
lecture:
statement:
created: 2025-03-27T16:25:35-04:00
tags:
  - approximation_algorithms
---

## Description

We want to minimize the expected cost of evaluating a _symmetric Pseudo-Boolean function_ $f(x_1,..,x_n) : \{0,1\}^n \to \{1,...,B\}$ on initially unknown input, where the value of each $x_i$ is unknown and can be learned only by paying positive cost $c_i$, and each $x_i$ has [[independence|independent]] probability $p_i$ of being $1$. Value of function $f$ equals $j$ if the _score_ $\sum x_i$ satisfies $\alpha_j \leq \sum x_i \leq \alpha_{j+1} -1$. Test until this is known. This is _symmetric_ as it only depends on number of 1's in the input.

## Notes

- the [[stochastic boolean function evaluation problem]] for $k$-of-$n$ functions arises when $B=2$, where $f=1$ iff $\sum x_i \geq k$, $0$ otherwise.

## Approximation ratios

where below algorithms are [[alpha-approximation algorithm|α-approximation algorithms]]
(Note _substrategies_: $P_0$, increasing $c_i/(1-p_i)$ order, $P_1$, increasing $c_i/p_i$ order, $P_c$, increasing $c_i$ order)

$2$-approximation for _block verification_

- \[Liu 2022\] verifying strategy $V_j$ on block $j$: first evaluate $\alpha_j + \beta_j$ variables according to $P_c$ order, where $\alpha_j$ is the min number of 1's and $\beta_j$ the min number of 0's to satisfy block $j$, then if found sufficient 1's, test next in $P_0$, else if found sufficient 0's, test next in $P_1$

$6$-approximation

- \[Liu 2022\] a non-adaptive algorithm, a round-robin strategy _RR_ exists giving a $6$-approximation evaluation
  - this switches between 3 sub-strategies, choosing the one that has minimal total running cost after the next evaluation, $P_0, P_1, P_c$
- \[Liu 2022\] another non-adaptive algorithm, round-robin strategy, _RR2_ gives a $6$-approximation
  - switch between 2 sub-strategies, $P_0$ and $P_1$, using minimal total running cost upon additional evaluation

$(3+2\sqrt{2})$-approximation, note $3+2\sqrt{2} \approx 5.828$

- \[Plank, Schewior 2024\] non-adaptive algorithm _3R_ is $\operatorname{ROUNDROBIN}(A_{fail}, A_{succ}, A_{ch}, \alpha_{fail}, \alpha_{succ}, \alpha_{ch})$ (c.f. _RR_) giving constant-factor approximation, $(3 + 2 \sqrt{2})$-approximation algorithm for SSC
  - where $A_{fail}$ is $P_0$, $A_{succ}$ is $P_1$, $A_{ch}$ is $P_c$
  - at each step, choose $h^* \in \arg\min_{h \in {1,...,k}} 1/\alpha_h \cdot (C_h + \delta_h)$ until $f(x)$ determined, $\delta_h$ is cost of previously not performed task in strategy $A_h$
- \[Plank, Schewior 2024\] non-adaptive algorithm _2R_ giving constant-factor approximation

---

## References

1. D. Gkenosis, N. Grammel, L. Hellerstein, and D. Kletenik, “The Stochastic Score Classification Problem,” Jun. 27, 2018, _arXiv_: arXiv:1806.10660. doi: [10.48550/arXiv.1806.10660](https://doi.org/10.48550/arXiv.1806.10660).
2. N. Liu, “Two 6-approximation Algorithms for the Stochastic Score Classification Problem,” Dec. 05, 2022, _arXiv_: arXiv:2212.02370. doi: [10.48550/arXiv.2212.02370](https://doi.org/10.48550/arXiv.2212.02370).
3. B. M. Plank and K. Schewior, “Simple Algorithms for Stochastic Score Classification with Small Approximation Ratios,” _SIAM J. Discrete Math._, vol. 38, no. 3, pp. 2069–2088, Sep. 2024, doi: [10.1137/22M1523492](https://doi.org/10.1137/22M1523492).
