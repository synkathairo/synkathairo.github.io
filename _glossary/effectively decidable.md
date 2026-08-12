---
layout: entry
title: effectively decidable
aliases:
  - decidable
type:
  - definition
reference:
course:
lecture:
statement:
created: 2025-07-14T22:16:58-04:00
tags:
  - complexity_theory
---

## Definition

Given a set $D$, and subset $S \subseteq D$, $S$ is **effectively decidable** iff there is an _effective procedure_ which, when given an object $x \in D$, will eventually answer "yes" if $x \in S$, and will eventually answer "no" if $x \notin S$.

Note: procedure eventually _halts_ for any input $x$

## Notes

- if there is some [[Turing machine|TM]] that accepts every string in language $L$ and either rejects or loops every string not in $L$, then $L$ _semi-decidable_ or _completely enumerable_

## See also

- [[effectively computable]]
- [[effectively enumerable]]
- [[decision problem]]

---

## References

1. N. D. Jones, _Computability and complexity: from a programming perspective_. in Foundations of computing. Cambridge, Mass: MIT Press, 1997, p. 13.
2. https://www.cs.ox.ac.uk/people/paul.goldberg/FCS/slides3.pdf
