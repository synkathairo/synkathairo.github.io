---
layout: entry
title: class PSPACE
aliases:
  - PSPACE
  - polynomial space
  - 多项式空间
type:
  - definition
  - space complexity
reference: 
course: 
lecture: 
statement: $\mathbf{PSPACE} = \cup_{c > 0} \mathbf{SPACE}(n^c)$
created: 2025-02-21T18:02:21-05:00
tags:
  - complexity_theory
---
## Definition
$\mathbf{PSPACE}$ represents [[decision problem|decision problems]] decidable in polynomial amounts of space, i.e.
$$\mathbf{PSPACE} = \cup_{c > 0} \mathbf{SPACE}(n^c)$$
([[class SPACE|SPACE]])
## Proposition
[[class P|P]] $\subseteq$ [[class NP|NP]] $\subseteq$ [[polynomial hierarchy|PH]] $\subseteq \mathbf{PSPACE} =$ [[class NPSPACE|NPSPACE]] $\subseteq$ EXPTIME

## Notes
- PSPACE and NSPACE can be thought of as the space analogs of time complexity classes [[class P|P]] and [[class NP|NP]] respectively

## See also
- NPSPACE
- L
- NL
- [[P versus NP problem]]
- [[class SPACE|SPACE]]

___
## References
1. S. Arora, B. Barak. *Computational Complexity: A Modern Approach*, Cambridge University Press, 2009, p. 81.
2. https://home.csulb.edu/~tebert/teaching/lectures/419-519/pspace/pspace.pdf
3. https://webdocs.cs.ualberta.ca/~zacharyf/courses/complexity_2019/notes/complexity-w19-lec03.pdf
4. https://mathoverflow.net/questions/39690/how-is-p-related-to-other-complexity-classes
