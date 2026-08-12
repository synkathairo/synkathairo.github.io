---
layout: page
title: class NPSPACE
aliases: 
type:
  - definition
  - space complexity
reference: 
course: 
lecture: 
statement: 
created: 2025-03-06T17:51:39-05:00
tags:
  - complexity_theory
---

## Definition
$\mathbf{NPSPACE}$ represents [[decision problem]]s decidable by a [[non-deterministic Turing Machine|NDTM]], i.e.
$$\mathbf{NPSPACE} = \cup_{c > 0} \mathbf{NSPACE}(n^c)$$
([[class NSPACE|NSPACE]])
## Proposition
$\mathbf{NPSPACE} =$ [[class PSPACE|PSPACE]]

## Notes
- [[class PSPACE|PSPACE]] and NSPACE can be thought of as the space analogs of time complexity classes [[class P|P]] and [[class NP|NP]] respectively

## See also
- Savitch's theorem: $\mathbf{NSPACE}(s(n)) \subseteq \mathbf{DSPACE}(s(n)^2)$

___
## References
1. S. Arora, B. Barak. *Computational Complexity: A Modern Approach*, Cambridge University Press, 2009, p. 81.
2. https://en.wikipedia.org/wiki/NSPACE
3. https://home.csulb.edu/~tebert/teaching/lectures/419-519/pspace/pspace.pdf
4. https://webdocs.cs.ualberta.ca/~zacharyf/courses/complexity_2019/notes/complexity-w19-lec03.pdf
5. https://mathoverflow.net/questions/39690/how-is-p-related-to-other-complexity-classes
6. https://www.cs.ubc.ca/~condon/cpsc506/lectures/lec4.pdf