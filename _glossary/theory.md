---
layout: entry
title: theory
aliases: 
type:
  - definition
reference: 
course: 
lecture: 
statement: A **theory** is a set $T$ of [[sentence|sentences]] such that for any *sentence* $\phi$, if $T \models \phi$, then $\phi \in T$.
created: 2025-07-29T18:04:55-04:00
tags:
  - formal_language_theory
---
## Definition (*theory*)

A **theory** is a [[set]] $T$ of [[closed formula|sentences]] such that for any *sentence* $\phi$, if $T \models \phi$, then $\phi \in T$.

(a *theory* is *closed* under logical consequence)
## Notes

- A *theory* is [[effectively decidable|decidable]] if the problem of belonging to $T$ is *decidable*
	- exists a decision procedure for reasoning about $T$
- A *theory* $T$ is *complete* if for any sentence $\phi$ we have $\phi \in T$ or $\neg \phi \in T$ 

___
## References

1. M. Avanzini, Lecture Notes, Topic: “weak monadic second-order logic (WMSO).” M1-AL, Centre Inria d’Université Côte d’Azur, 2021. <https://www-sop.inria.fr/members/Martin.Avanzini/teaching/2021/AL/slides/w2.pdf>
2. https://en.wikipedia.org/wiki/Theory_(mathematical_logic)
