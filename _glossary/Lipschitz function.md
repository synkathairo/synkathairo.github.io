---
layout: page
title: Lipschitz function
aliases:
  - G-Lipschitz
  - Lipschitz continuous
  - Lipschitz continuity
type:
  - definition
reference: 
course:
  - CS6763
lecture:
  - cs6763-8
statement: a function $f$ such that$$|f(x)-f(y)| \leq C |x-y|$$for all $x$ and $y$, where $C$ is a constant independent of $x$ and $y$
created: 2023-11-13T18:36:24-05:00
tags:
  - analysis
---
## Definition
A **Lipschitz function** is a function $f$ such that
$$|f(x)-f(y)| \leq C |x-y|$$
for all $x$ and $y$ (or for all $x$ and $y$ in the set if bound), where $C$ is a constant independent of $x$ and $y$

(*Lipschitz continuous*)

more general form:

Given two [[metric space|metric spaces]] $(X,d_X)$ and $(Y,d_Y)$, where $d_X$ denotes the [[metric]] on the set $X$ and $d_Y$ is the metric on set $Y$, a function $f: X → Y$ is called **Lipschitz continuous** if there exists a real constant $K ≥ 0$ such that, for all $x_1$ and $x_2$ in $X$, 
$$d_Y(f(x_1),f(x_2)) \leq Kd_X(x_1,x_2)$$

___

## G-Lipschitz

for all $\mathbf{x}$, $||\nabla f(\mathbf{x})||_2 \leq G$

(note: norm of gradient, )

___

Properties:

differentiable at x ⇒ Lipchitz continuous at x ⇒ continuous at x (but the converse is not true)

___
## References:
1. https://www.chrismusco.com/amlds2023/lectures/lec8_annotated.pdf
2. https://mathworld.wolfram.com/LipschitzFunction.html
3. https://math.berkeley.edu/~mgu/MA128ASpring2017/MA128ALectureWeek9.pdf
4. https://en.wikipedia.org/wiki/Lipschitz_continuity
5. https://users.wpi.edu/~walker/MA500/HANDOUTS/LipschitzContinuity.pdf