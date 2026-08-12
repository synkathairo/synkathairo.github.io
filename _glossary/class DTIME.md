---
layout: page
title: class DTIME
aliases:
  - DTIME
type:
  - definition
  - complexity class
  - time complexity
reference: 
course: 
lecture: 
statement: "Let $T : \\mathbb{N} \\to \\mathbb{N}$ be some function. A language $L$ is in $\\mathbf{DTIME}(T(n))$ iff there is a [[Turing machine]] that runs in time $c \\cdot T(n)$ for some constant $c > 0$ and decides $L$."
created: 2025-01-23T17:11:21-05:00
tags:
  - complexity_theory
---
## Definition (class $\mathbf{DTIME}$)
Let $T : \mathbb{N} \to \mathbb{N}$ be some function. A [[decision problem|language]] $L$ is in $\mathbf{DTIME}(T(n))$ iff there is a [[Turing machine]] that runs in time $c \cdot T(n)$ for some constant $c > 0$ and decides $L$.

___
## References
1. S. Arora, B. Barak. *Computational Complexity: A Modern Approach*, Cambridge University Press, 2009, p. 25.
2. https://www.wisdom.weizmann.ac.il/~oded/PS/CC/l26.pdf