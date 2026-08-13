---
layout: entry
title: mirror descent
aliases:
type:
  - algorithm
reference:
course:
lecture:
statement:
created: 2025-10-12T16:52:04-04:00
tags:
  - machine_learning
  - convex_optimization
---

## Overview

Suppose [[Bregman divergence]] centered in $y$ for distance generating function $\varphi$, $D_\varphi(x \Vert y)$.

### Theorem

Let $\varphi : \Omega \to \mathbb{R}$ be differentiable and $\mu$-strongly [[convex function|convex]] with respect to norm $\lVert \cdot \rVert$. For any $y \in \Omega$, function $x \mapsto D_\varphi (x \Vert y)$ is $\mu$-strongly convex with respect to $\lVert \cdot \rVert$, i.e.
$$D_\varphi(x' \Vert y) \geq D_\varphi(x \Vert y) + \langle \nabla_x D_\varphi(x \Vert y), x'-x \rangle + \frac{\mu}{2} \lVert x' - x \rVert^2 \quad \forall x, x' \in \Omega$$

### Proximal step

Define the _proximal step_ problem
$$\operatorname{Prox}_\varphi (\eta \nabla f(x_t),x_t) := \arg \min_x \eta \langle \nabla f(x_t),x \rangle + D_\varphi(x \Vert x_t) \quad \text{s.t. } x \in \Omega$$

notes

- is well-defined (solution exists and is unique)
- sanity check: Euclidean DGF (distance-generating function) $\varphi(x) = \frac{1}{2} \lVert x \rVert_2^2$ recovers Euclidean [[projected gradient descent]] where $\Omega = \mathbb{R}^n$, i.e. 
    $$\operatorname{Prox}_\varphi (\eta \nabla f(x),x) = \Pi_\Omega (x - \eta \nabla f(x)) \quad \forall x \in \Omega$$

### Mirror descent algorithm

The **mirror descent** algorithm update is defined as 
$$x_{t+1} := \operatorname{Prox}_\varphi(\eta \nabla f(x_t),x_t)$$

## Analysis

consider generalization of [[gradient descent]] lemma, #incomplete

### mirror descent lemma

#incomplete

## Online mirror descent

Recall [[online gradient descent]] and [[Hedge update]], then,

#incomplete

## See also

- [[Bregman divergence]]
- [[projected gradient descent]]
- [[gradient descent]], which may be considered a special case of mirror descent
  - gradient as a special case of mapping into dual space

---

## References

1. https://www.cs.cmu.edu/afs/cs.cmu.edu/academic/class/15850-f20/www/notes/lec19.pdf
2. https://www.mit.edu/~gfarina/2025/67220s25_L14_mirror_descent/
3. https://www.mit.edu/~gfarina/2024/67220s24_L18_omd/L18.pdf
4. http://www.lamda.nju.edu.cn/zhaop/course/AOpt2023fall/Lecture7_OnlineMirrorDescent.pdf
5. https://www.pengzhao-ml.com/course/AOpt2024fall/Lecture6_OnlineMirrorDescent.pdf
