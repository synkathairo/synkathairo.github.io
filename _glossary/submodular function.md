---
layout: entry
title: submodular function
aliases:
type:
  - definition
reference:
course:
  - CS9233
lecture:
  - cs9233-4
statement:
created: 2025-02-27T21:15:04-05:00
tags:
  - convex_optimization
  - game_theory
---
## Definition (*submodular utility function*)

Say [[utility function]] $u$ is submodular if for all $\alpha, \beta \in \{0,1,*\}^n$, if $\alpha$ is an extension to $\beta$ and $\alpha_i = \beta_i = *$ then 
$$\begin{aligned}
u(\alpha_{i \gets 0}) - u(\alpha) \leq u(\beta_{i \gets 0}) - u(\beta)  \\
u(\alpha_{i \gets 1}) - u(\alpha) \leq u(\beta_{i \gets 1}) - u(\beta) 
\end{aligned}$$
where e.g. $\alpha_{i \gets 1}$ is the partial assignment derived from $\alpha$ by setting $\alpha_i = 1$.

($\alpha$, $\beta$ are *realizations*)

(can also formulate in terms of $X \subseteq Y$)

## Definition (*submodular set function*)

A set function $f: 2^V \to \mathbb{R}$, for $X, Y \subseteq V$, is called **submodular** if $$f(X) + f(Y) \geq f(X \cup Y) + f(X \cap Y)$$

## See also

- [[gross substitutes function]]

___
## References

1. https://en.wikipedia.org/wiki/Submodular_set_function
2. K. Murota, “Convexity and Steinitz’s Exchange Property,” _Advances in Mathematics_, vol. 124, no. 2, pp. 272–310, Dec. 1996, doi: [10.1006/aima.1996.0084](https://doi.org/10.1006/aima.1996.0084).
3. https://theory.stanford.edu/~jvondrak/MATH233B-2017/lec14.pdf
