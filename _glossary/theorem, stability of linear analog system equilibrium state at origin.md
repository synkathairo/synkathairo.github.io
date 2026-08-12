---
layout: entry
title: theorem, stability of linear analog system equilibrium state at origin
aliases: 
type:
  - theorem
reference: 
course:
  - ECE6253
lecture:
  - ece6253-9
statement: 
created: 2024-11-26T16:47:39-05:00
tags:
---
## Theorem
For a linear analog system, the equilibrium state at the origin is 
- stable (thus also bounded) if and only if $\lVert \phi(t,t_0) \rVert$ ) is bounded for all $t \geq t_0$, where
	- $\phi(t,t_0)$ is the [[transition matrix]], and
	- $\lVert \cdot \rVert$ is the *norm of a matrix* defined as $\lVert \mathbf{T} \rVert = \max_{\mathbf{x} \neq \mathbf{0}} \frac{\lVert\mathbf{Tx} \rVert}{\lVert \mathbf{x} \rVert}$
- asymptomatically stable if and only if in addition to the previous condition, $\lVert \phi(t,t_0) \rVert \to 0$ as $t \to \infty$.

## Corollary
For a linear analog system, equilibrium state is S if and only if $\lvert \phi_{ij}(t,t_0) \rvert$ is bounded for all $i,j$ and all $t \geq t_0$. It is AS if and only if in addition for all $i$ and $j$, $\phi_{ij}(t,t_0) \to 0$ as $t \to \infty$.

___
## See also
- [[State equation of finite dimensional linear systems]]
## References
1. P. E. Sarachik, _Principles of Linear Systems_, Cambridge Press, 1996, p. 186.
	- (Theorem 9.1)
