---
layout: page
title: class TISP
aliases: 
type:
  - definition
  - complexity class
  - time complexity
  - space complexity
reference: 
course: 
lecture: 
statement: 
created: 2025-01-29T16:18:39-05:00
tags:
  - complexity_theory
---
## Definition
Let $S,T : \mathbb{N} \to \mathbb{N}$ be constructible functions. A [[decision problem|language]] $L \subseteq \{0,1\}^*$ is in the *complexity class* $\mathbf{TISP}(T(n),S(n))$ if there exists a [[Turing machine|TM]] $M$ deciding $L$ in time $T(n)$ and space $S(n)$.

## Notes
- $\mathbf{TISP}(T(n),S(n)) \neq \mathbf{DTIME}(T(n)) \cap \mathbf{SPACE}(S(n))$ (see [[class DTIME|DTIME]] and *SPACE*)

___
## References
1. https://archive.model.in.tum.de/um/courses/complexity/SS11/slides/lecture11.pdf slide 6
