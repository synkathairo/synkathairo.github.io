---
layout: entry
title: Vapnik-Chervonenkis dimension
aliases:
  - VC dimension
type:
  - definition
reference:
course:
  - CS9233
lecture:
  - cs9233-6
statement:
created: 2025-03-19T16:38:20-04:00
tags:
  - machine_learning
  - computational_learning_theory
  - probability
---

## Definition

$T$ is **shattered** if $\lvert\{T \cap S | S \in \mathcal{F}\}\rvert = 2^{|T|}$.

(i.e. the _concept class_/_hypothesis class_ $\mathcal{F}$ can realize all possible subsets of $T$, or there is a hypothesis $S$ that predicts every possible assignment)

$(U, \mathcal{F})$ has **VC** $\dim \leq d$ if no set of size $d+1$ can be _shattered_.

## See also

- [[probably approximately correct learning theory|PAC learning]]
- [[set cover problem]]
- [[Rademacher complexity]]
- Theorem, Brönnimann-Goodrich 1995
- Theorem, Sauer-Shelah-Perles

---

## References

1. https://www.cs.cmu.edu/~epxing/Class/10701/slides/lecture16-VC.pdf
2. https://andrewcharlesjones.github.io/journal/vc-dimension.html
3. https://www.cs.umd.edu/class/fall2021/cmsc754/Lects/lect19-vc-dim.pdf
4. https://sarielhp.org/book/chapters/vc_dim.pdf
5. M. J. Kearns and U. Vazirani, _An Introduction to Computational Learning Theory_. The MIT Press, 1994. doi: [10.7551/mitpress/3897.001.0001](https://doi.org/10.7551/mitpress/3897.001.0001).
6. https://people.math.binghamton.edu/qiao/math605/book/vapnik-chervonekis-vc-theory.html
7. https://en.wikipedia.org/wiki/Growth_function
