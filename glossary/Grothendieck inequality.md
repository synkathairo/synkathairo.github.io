---
layout: entry
title: Grothendieck inequality
aliases:
  - 格罗滕迪克不等式
  - Grothendieck's inequality
type:
  - theorem
reference: A. Grothendieck, “Résumé de la théorie métrique des produits tensoriels topologiques,” _Bol. Soc. Mat. Sao Paulo_, vol. 8, pp. 1–79, 1953.
course:
lecture:
statement:
created: 2025-05-29T15:53:48-04:00
tags:
  - analysis
---

## Theorem

Let $[a_{ij}]$ be an $n \times n$ scalar matrix, $n \geq 1$.

If for any $n$-tuples of scalars $(\alpha_i)$, $(\beta_j)$, it holds that 
$$\left|\sum a_{ij} \alpha_i \beta_j \right| \leq \sup_i |\alpha_i| \sup_j |\beta_j|$$
then for any [[Hilbert space]] $H$ and any $n$-tuples $(x_i)$, $(y_j)$ in $H$ we have 
$$\left|\sum a_{ij} \langle x_i, y_j \rangle \right| \leq K \sup \lVert x_i \rVert \sup \lVert y_j \rVert$$ 
where $K$ is a numerical constant.

Denote the best $K$ valid for all $H$ and all $n$ as $K_G$. In the case of real scalars, $K_G^\mathbb{R}$, and in the case of complex scalars, $K_G^\mathbb{C}$, where it is known that $1 < K_G^\mathbb{C} < K_G^\mathbb{R} \leq 1.782$.

## Notes

- the theorem was originally given by Grothendieck "the fundamental theorem of the metric theory of tensor products" as for $\left|\sum a_{ij} \alpha_i \beta_j \right| \leq 1$ where $|\alpha_i|\leq 1$, $|\beta_j|\leq 1$, and $[a_{ij}]$ is a finite matrix of reals, resulting in, for every set of unit vectors $(x_i)$, $(y_j)$ in Hilbert space, $\left|\sum a_{ij} \langle x_i, y_j \rangle \right| \leq K$ (where $\langle x_i, y_j \rangle$ is the inner product in the Hilbert space)
  - later in Lindenstrauss and Pełczyński (1975) given in the more generalized form above
- although the original GT corresponds to a case of bipartite graphs, it has been used in computer science for finite graphs, applied to optimization problems to render them faster to solve using semidefinite programming relaxations using methods such as the ellipsoid method

## See also

- [[John decomposition]]
- [[Banach space]]

---

## References

1. A. Grothendieck, “Résumé de la théorie métrique des produits tensoriels topologiques,” _Bol. Soc. Mat. Sao Paulo_, vol. 8, pp. 1–79, 1953.
2. J. Lindenstrauss and A. Pełczyński, “Absolutely summing operators in $ℒ_{p}$-spaces and their applications,” _Studia Math._, vol. 29, no. 3, pp. 275–326, 1968, doi: [10.4064/sm-29-3-275-326](https://doi.org/10.4064/sm-29-3-275-326).
3. G. Pisier, “Grothendieck’s Theorem, past and present,” _Bull. Amer. Math. Soc._, vol. 49, no. 2, pp. 237–323, May 2012, doi: [10.1090/s0273-0979-2011-01348-9](https://doi.org/10.1090/s0273-0979-2011-01348-9).
4. https://en.wikipedia.org/wiki/Grothendieck_inequality
5. https://www.thenetworkcenter.nl/uploaded_files/inlineitem/JB_grothendieck_proof.pdf
6. https://www.math.uci.edu/~rvershyn/papers/HDP-book/HDP-book.html
7. https://web.stanford.edu/class/cs369h/lectures/lec5.pdf
8. https://zhuanlan.zhihu.com/p/389054705
9. https://www.cs.toronto.edu/~toni/Courses/Proofs-SOS-2018/Lectures/grothendieck.pdf
10. https://people.eecs.berkeley.edu/~jiantao/ee290/scribe/lecture14/lec14.pdf
