---
layout: entry
title: adaptivity gap
aliases:
type:
  - definition
reference:
course:
lecture:
statement: $\begin{aligned} \max _{f \in F} \sup _{c,p} \frac{\textsf{OPT}_\mathcal {N}(f,c,p)}{\textsf{OPT}_\mathcal {A}(f,c,p)}. \end{aligned}$
created: 2025-03-28T16:34:33-04:00
tags:
  - approximation_algorithms
---

## Definition

Consider $F$ class of $n$-variable functions $f: \{0,1\}^n \to \{0,1\}$ . Let $\textsf{OPT}_\mathcal{N}$ be [[expectation|expected]] _evaluation cost_ of _optimal non-adaptive strategy_ on function $f$ under costs $c$, probabilities $p$. Similarly $\textsf{OPT}_\mathcal{A}$ for _optimal adaptive strategy_ on $f$. Then, the **adaptivity gap** of the function class $F$ is
$$\begin{aligned} \max _{f \in F} \sup _{c,p} \frac{\textsf{OPT}_\mathcal {N}(f,c,p)}{\textsf{OPT}_\mathcal {A}(f,c,p)}. \end{aligned}$$

(Intuition: compare optimal non-adaptive with optimal adaptive/any algorithm, the _adaptivity gap_ measures how much benefit can be obtained by an adaptive strategy.)

## See also

- [[alpha-approximation algorithm|α-approximation algorithm]]

---

## References

1. L. Hellerstein, D. Kletenik, N. Liu, and R. T. Witter, “Adaptivity Gaps for the Stochastic Boolean Function Evaluation Problem,” in _Approximation and Online Algorithms_, vol. 13538, P. Chalermsook and B. Laekhanukit, Eds., in Lecture Notes in Computer Science, vol. 13538. , Cham: Springer International Publishing, 2022, pp. 190–210. doi: [10.1007/978-3-031-18367-6_10](https://doi.org/10.1007/978-3-031-18367-6_10).
2. https://nerva.cs.uni-bonn.de/lib/exe/fetch.php/teaching/ws1819/vl-aau/lecturenotes08.pdf
