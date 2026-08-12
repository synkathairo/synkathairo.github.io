---
layout: entry
title: Khintchine inequality
aliases:
type:
  - theorem
  - lemma
reference:
course:
  - CS6763
lecture:
  - cs6763-13
statement: Let $R_1,…,R_n$ be Rademacher random variables (i.e. uniform $\pm 1$). Then for any vector $\mathbf{a} \in \mathbb{R}^n$, $\mathrm{Pr}\left[ \sum_{i=1}^n R_i a_i \geq t \lVert \mathbf{a} \rVert_2 \right] \leq e^{-t^2 /2}$
created: 2025-10-08T16:19:38-04:00
tags:
  - probability
---
## Lemma (Rademacher concentration inequality)

Let $R_1,…,R_n$ be [[Rademacher concentration|Rademacher random variables]] (i.e. [[uniform distribution|uniform]] $\pm 1$). Then for any vector $\mathbf{a} \in \mathbb{R}^n$, 
$$\mathrm{Pr}\left[ \sum_{i=1}^n R_i a_i \geq t \lVert \mathbf{a} \rVert_2 \right] \leq e^{-t^2 /2}$$
This is the **Khintchine inequality**.

## Notes
- compare to [[Bernstein inequality]]

___
## References

1. https://www.chrismusco.com/amlds2023/lectures/lec13_annotated.pdf
2. https://www.chrismusco.com/amlds2023/notes/lecture13.html
3. https://almostsuremath.com/2020/08/04/the-khintchine-inequality/
4. https://en.wikipedia.org/wiki/Rademacher_distribution
5. https://tongzhang-ml.org/lt-book/chap06-rademacher-concentration-slides.pdf
6. https://cs.stanford.edu/~ermon/papers/rademacher-aaai2018.pdf
7. https://piazza.com/class_profile/get_resource/khs64r6r5yn154/km1at8uo4o3mk
