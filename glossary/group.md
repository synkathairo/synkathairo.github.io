---
layout: entry
title: group
aliases:
  - 群
type:
  - definition
reference:
course:
lecture:
statement:
created: 2025-07-23T17:03:26-04:00
tags:
  - algebra
  - algebra
---

## Definition

A **group** is a [[set]] $G$ with binary operation (i.e. a [[law of composition]]) $*$ satisfying axioms of:

- _closure_
  - for all elements $g$ and $h$ of $G$, $g * h$ is an element of $G$
- _associativity_
  - $(g * h) * k = g * (h * k)$ for all $g,h,k \in G$
- _existence of identity_
  - exists element $e \in G$, _identity_ (or _unit_) of $G$ such that $e * g = g * e = g$ for all $g \in G$
- _existence of inverse_
  - for every $g \in G$ there exists an element $h \in G$ called the _inverse_ of $g$ such that $e * g = g * e = g$ for all $g \in G$

An **abelian** or **commutative** group is a _group_ $(G,*)$ also satisfying

- _commutativity_
  - $g * h = h * g$ for all $g,h \in G$

## Notes

- a _group_ is a special case of [[semigroup]] where there is existence of _identity_ and _inverse_
- it can also be considered as a special case of a [[monoid]] with an _inverse_
- _closure_ is sometimes omitted in definitions, in this case, it is incorporated into the properties required for the relevant _law of composition_ instead

---

## References

1. https://people.tamu.edu/~yvorobets/MATH433-2010B/Lect2-05web.pdf
2. https://www.bananaspace.org/wiki/%E7%BE%A4
3. https://zhuanlan.zhihu.com/p/314567658
4. https://math.stackexchange.com/questions/63697/why-is-closure-omitted-in-some-group-definitions
5. M. Artin, _Algebra_, 2. ed. Boston, Mass. Munich: Pearson Education, Prentice Hall, 2011, pp. 42-43.
