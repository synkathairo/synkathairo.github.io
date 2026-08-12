---
layout: entry
title: Kakutani fixed-point theorem
aliases:
type:
  - theorem
reference: "Kakutani, S., _Duke Math. J_., **8**, 457– 459 (1941). DOI: 10.1215/S0012-7094-41-00838-4"
course:
  - ECE6263
lecture:
  - ece6263-3
statement: Let $S$ be a compact and convex subset of $\mathbb{R}^n$, and let $f$ be an [[Upper semi-continuous function]] which assigns to each $X \in S$ a closed subset of $S$. Then there exists some $X \in S$ such that $x \in f(x)$.
created: 2024-10-21T18:41:24-04:00
---

## Theorem

Let $S$ be a (nonempty), [[compact set|compact]] and [[convex set|convex]] subset of $\mathbb{R}^n$, and let $f$ be an [[upper hemicontinuity|upper hemicontinuous function]] (u.h.c.) which assigns to each $x \in S$ a closed and convex subset of $S$. Then there exists some $x \in S$ such that $x \in f(x)$.

Alternatively,
Suppose $A \subset \mathbb{R}^N$ is nonempty, [[compact set|compact]], [[convex set|convex]] set. $f: A \to A$ [[upper hemicontinuity|u.h.c.]] with the property that $f(x) \subset A$ is nonempty and convex for every $x \in A$. Then $f(\cdot)$ has a _fixed point_: $\exists$ an $x \in A$ such that $x \in f(x)$.

## Theorem (mapping on simplex, original formulation by Kakutani 1941)

Let $\mathfrak{R}(S)$ be the family of all [[closed set|closed]] [[convex set|convex]] subsets of $S$.

If $x \to \phi(x)$ is an [[upper semicontinuous function|upper semicontinuous]] point-to-set mapping a $r$-dimensional closed [[simplex]] $S$ into $\mathfrak{R}(S)$, then there exist a $x_0 \in S$ such that $x_0 \in \phi(x_0)$.

### Proof

#incomplete

## Notes

There is an alternative definition with upper semicontinuous functions (slight difference from u.h.c.)

This differs from [[Brouwer fixed-point theorem]] in that it deals with set-valued maps, whereas Brouwer's fixed point theorem deals with continuous functions. (Kakutani, 1941) regards it as a generalization of Brouwer's theorem.

This is used by Nash's paper in demonstrating the [[Nash equilibrium]] for $n$-person games (Nash, 1950, doi: [10.1073/pnas.36.1.48](https://doi.org/10.1073/pnas.36.1.48)).

Kakutani uses this theorem to demonstrate [[von Neumann's minimax theorem]].

point-to-set mapping, i.e. a [[correspondence]].

---

## See also:

- [[Brouwer fixed-point theorem]]
- [[Weierstrass extreme value theorem]]

## References

1. https://en.wikipedia.org/wiki/Kakutani_fixed-point_theorem
2. T. Başar and G.J. Olsder, Dynamic Noncooperative Game Theory, 2nd edition, Classics in Applied Mathematics, SIAM, Philadelphia, 1999.
   - Appendix C, theorem C.2
3. Kakutani, S., _Duke Math. J_., **8**, 457– 459 (1941). DOI: [10.1215/S0012-7094-41-00838-4](https://doi.org/10.1215/S0012-7094-41-00838-4)
