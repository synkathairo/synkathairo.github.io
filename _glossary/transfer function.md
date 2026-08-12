---
layout: page
title: transfer function
aliases: 
type:
  - definition
  - function
reference: 
course:
  - ECE6253
lecture: 
statement: 
created: 2024-11-25T17:50:31-05:00
tags:
  - control_theory
---
## Definition
Suppose a [[fixed system|fixed]], linear, analog system,
$$\begin{aligned}
\dot{\mathbf{x}}(t) & = A \mathbf{x}(t) + B \mathbf{u}(t) \\
\mathbf{y}(t) & = C \mathbf{x}(t) + D \mathbf{u}(t)
\end{aligned}$$
take [[Laplace transform]] ($\mathscr{L}$-transform) of both sides 
$$\begin{aligned}
\mathscr{L}\{\dot{\mathbf{x}}(t)\} & = A \mathscr{L}\{\mathbf{x}(t)\} + B \mathscr{L}\{\mathbf{u}(t)\} \\
\mathscr{L}\{\mathbf{y}(t)\} & = C \mathscr{L}\{\mathbf{x}(t)\} + D \mathscr{L}\{\mathbf{u}(t)\}
\end{aligned}$$
then, let $\mathscr{L}\{\mathbf{u}(t)\} = \mathbf{U}(s)$, $\mathscr{L}\{\mathbf{y}(t)\} = \mathbf{Y}(s)$, $\mathscr{L}\{\mathbf{x}(t)\} = \mathbf{X}(s)$

using Laplace differentiation theorem, where $\mathscr{L}\{\dot{\mathbf{x}}(t)\} = s \mathbf{X}(s) - \mathbf{x}(0)$,
$$\begin{aligned}
s \mathbf{X}(s) - \mathbf{x}(0) & = A \mathbf{X}(s) + B \mathbf{U}(s) \\
\mathbf{Y}(s) & = C \mathbf{X}(s) + D \mathbf{U}(s)
\end{aligned}$$



#incomplete 

Then
$$[C (sI - A)^{-1} B + D] = H(s)$$

$\mathscr{L}$-transform of convolution integral gives
$$\mathbf{Y}(s) = \mathscr{L}\{H(t)\}\mathbf{U}(s)$$
where $\mathscr{L}\{H(t)\} = H(s)$.

___
## See also
- [[transition matrix]]

## References
1. P. E. Sarachik, *Principles of Linear Systems*, Cambridge Press, 1996, pp. 101-102, 125.
