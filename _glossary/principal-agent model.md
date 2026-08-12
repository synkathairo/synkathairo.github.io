---
layout: page
title: principal-agent model
aliases:
type:
reference:
course:
lecture:
statement:
created: 2026-07-01T02:57:28-04:00
tags:
  - game_theory
---
## Overview
- **principal-agent model**: a *principal* interacts with an *agent*
- agent: set of *actions* $\mathcal{A}$ of size $n$
	- action *costs* for agent: $0 \leq c_1 \leq ... \leq c_n$
- agent's *technology*: probability matrix $\mathbf{q} = \{q_{ij}\}_{i \in [n],j \in [m]}$ describing stochastic outcome from agent's action
	- $q_{ij}$ probability of outcome $j$ under action $i$
	- $i$th row $\mathbf{q}_i$ is distribution ([[probability mass function]]) over rewards induced from action $i$
- expected welfare from action $i$: 
- *contract*: payment rule $\mathbf{t} = (t_1,...,t_m)$ of different *transfers* for each of the $m$ outcomes
- solving principal-agent problem: designing contract $\mathbf{t}$

## Notes
- in algorithmic contract theory
- considerations: expected payment by agent, agent's best response, principal's expected utility from contract, incentive compatibility and individual rationality
- variants such as combinatorial contracts, etc

___
## References
1. B. Holmström, “Moral Hazard and Observability,” _The Bell Journal of Economics_, vol. 10, no. 1, pp. 74–91, 1979, doi: [10.2307/3003320](https://doi.org/10.2307/3003320).
2. S. J. Grossman and O. D. Hart, “An Analysis of the Principal-Agent Problem,” in _Huebner International Series on Risk, Insurance and Economic Security_, Dordrecht: Springer Netherlands, 1992, pp. 302–340. doi: [10.1007/978-94-015-7957-5_16](https://doi.org/10.1007/978-94-015-7957-5_16).
3. P. Duetting, M. Feldman, and I. Talgam-Cohen, “Algorithmic Contract Theory: A Survey,” Dec. 20, 2024, _arXiv_: arXiv:2412.16384. doi: [10.48550/arXiv.2412.16384](https://doi.org/10.48550/arXiv.2412.16384).
4. P. Duetting, T. Ezra, M. Feldman, and T. Kesselheim, “Combinatorial Contracts,” Sep. 02, 2025, _arXiv_: arXiv:2109.14260. doi: [10.48550/arXiv.2109.14260](https://doi.org/10.48550/arXiv.2109.14260).
5. Y. Chen, Z. Chen, X. Deng, and Z. Huang, “Are Bounded Contracts Learnable and Approximately Optimal?,” Feb. 22, 2024, _arXiv_: arXiv:2402.14486. doi: [10.48550/arXiv.2402.14486](https://doi.org/10.48550/arXiv.2402.14486).
