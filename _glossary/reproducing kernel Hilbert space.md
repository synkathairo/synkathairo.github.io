---
layout: entry
title: reproducing kernel Hilbert space
aliases:
  - RKHS
type:
  - definition
reference:
course:
lecture:
statement:
created: 2025-10-16T14:25:16-04:00
tags:
  - computational_learning_theory
---
## Definition

$k(\cdot, \cdot)$ is a **reproducing kernel** of a [[Hilbert space]] $\mathcal{H}$ if $\forall f \in \mathcal{H}$, $f(x) = \langle k(x,\cdot),f(\cdot)\rangle$.

A **reproducing kernel Hilbert space** (*RKHS*) is a *Hilbert space* $H$ with a *reproducing kernel* whose [[span]] is [[dense]] in $H$. 

Or equivalently, **RKHS** is a *Hilbert space* of [[function|functions]] with all [[evaluation functional|evaluation functionals]] bounded and [[linear functional|linear]].

(continuous evaluation functional)

For a ([[compact set|compact]]) $\mathcal{X} \subseteq \mathbb{R}^d$, and a [[Hilbert space]] $\mathcal{H}$ of functions $f : \mathcal{X} \to \mathbb{R}$, say $\mathcal{H}$ is a **reproducing kernel Hilbert space** if $\exists k : \mathcal{X} \to \mathbb{R}$ such that
- $k$ has the *reproducing property* (kernel trick)
	-  i.e. $\forall x \in \mathcal{X}, \forall f(\cdot) \in \mathcal{H}, f(x) = \langle k(x,\cdot),f(\cdot)\rangle$ (or shorter notation $\langle f, \phi(x) \rangle_\mathcal{H}$)
- $k$ [[span|spans]] $\mathcal{H}=\overline{\operatorname{span}\{k(\cdot,x) : x \in \mathcal{X}\}}$

## Notes

- role in kernelized [[gradient descent]]
- the *reproducing kernel* $k : \mathcal{X} \times \mathcal{X} \to \mathbb{R}$ may be a [[kernel]] if it is symmetric and *positive semidefinite* (i.e. its Gram matrix $K_{ij} = k(x_i,x_j)$ is [[positive semidefinite]])
- [[Mercer's theorem]] may be used to characterize symmetrpic positive semidefinite kernel

___
## References

1. https://people.eecs.berkeley.edu/~bartlett/courses/281b-sp08/7.pdf
2. https://www.gatsby.ucl.ac.uk/~gretton/coursefiles/lecture4_introToRKHS.pdf
3. http://mlss.tuebingen.mpg.de/2015/slides/gretton/part_1.pdf
4. https://oneweirdkerneltrick.com/
5. https://teazrq.github.io/SMLR/reproducing-kernel-hilbert-space.html
