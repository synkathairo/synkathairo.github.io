---
layout: page
title: majorizing measures theorem
aliases: 
type:
  - theorem
reference: 
course: 
lecture: 
statement: 
created: 2025-03-06T13:23:04-05:00
tags:
  - stochastic_processes
---
## Theorem
Let $\{X_t\}_{t \in T}$ be a [[Gaussian distribution|Gaussian]] process, and let $T_0 \subseteq T_1 \subseteq \dots \subseteq T$ be a sequence of subsets such that $\lvert T_0 \rvert = 1$ and $\lvert T_n \rvert \leq 2^{2^n}$ for $n \geq 1$. Then,
$$\mathbb{E}[\sup_{t \in T} X_t] \leq O(1) \sup_{t \in T} \sum_{n \geq 0} 2^{n/2} d(t,T_n)$$
where for $s,t \in T$, the canonical distance is defined as $d(s,t) = \sqrt{\mathbb{E}\lvert X_s - X_t \rvert^2}$ 

___
## References
1. https://tcsmath.wordpress.com/2010/07/18/the-majorizing-measures-theorem/
2. https://homes.cs.washington.edu/~jrl/cse599wi23/notes/mm2.pdf
3. Michel Talagrand. "Majorizing measures: the generic chaining." Ann. Probab. 24 (3) 1049 - 1103, July 1996. https://doi.org/10.1214/aop/1065725175