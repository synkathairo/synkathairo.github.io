---
layout: page
title: Kleene star
aliases: 
type:
  - definition
reference: 
course: 
lecture: 
statement: 
created: 2025-07-23T17:41:45-04:00
tags:
  - formal_language_theory
---

## Definition

For [[alphabet]] $L$, the **Kleene star** yields a [[decision problem|language]], defined as the set of all [[word|words]] over alphabet $L$, i.e.
$$L^* = \bigcup_{n \in \mathbb{N}} L^n$$
where $L^0 = \{\epsilon\}$ ($\epsilon$ empty word) and $L^{n+1} = L \cdot L^n$ (concatenation)

## Notes

- the *Kleene star* $A^*$ of an *alphabet* is a [[free monoid]] on the set $A$
- (see [[monoid]] and [[free monoid]])

___
## References

1. M. Avanzini, Lecture Notes, Topic: “finite automata.” M1-AL, Centre Inria d’Université Côte d’Azur, 2021. <https://www-sop.inria.fr/members/Martin.Avanzini/teaching/2021/AL/slides/w1.pdf>
2. https://en.wikipedia.org/wiki/Kleene_star
3. https://en.wikipedia.org/wiki/Free_monoid#Kleene_star
