---
layout: entry
title: Bregman divergence
aliases:
  - Bregman distance
type:
  - definition
reference:
course:
lecture:
statement: The **Bregman divergence** from $x$ to $y$ with respect to function $h$ is $D_h(y || x) := h(y) - h(x) - \langle \nabla h(x), y-x \rangle$
created: 2025-10-12T16:06:26-04:00
tags:
  - convex_optimization
  - analysis
---

## Definition

Given a _strictly_ [[convex function]] $h$, may define a _distance function_ based on how the function differs from its linear approximation:

The **Bregman divergence** from $x$ to $y$ with respect to function $h$ is 
$$D_h(y \Vert x) := h(y) - h(x) - \langle \nabla h(x), y-x \rangle$$

The function $h$ may be called the _distance-generating function_ (DGF) for the divergence.

## Notes

e.g. for a function $h : \mathbb{R} \to \mathbb{R}$
![[Pasted image 20251012160858.png|300]]
(intuition: $h(x) + \langle \nabla h(x), y-x \rangle$ would be the linear approximation)

---

## References

1. https://www.cs.cmu.edu/afs/cs.cmu.edu/academic/class/15850-f20/www/notes/lec19.pdf
2. https://www.mit.edu/~gfarina/2025/67220s25_L14_mirror_descent/
3. https://www.mit.edu/~gfarina/2024/67220s24_L18_omd/L18.pdf
4. http://www.lamda.nju.edu.cn/zhaop/course/AOpt2023fall/Lecture7_OnlineMirrorDescent.pdf
