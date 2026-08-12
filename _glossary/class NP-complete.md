---
layout: page
title: class NP-complete
aliases:
  - NP-complete
  - NP-C
  - NPC
type:
  - definition
  - time complexity
reference: 
course: 
lecture: 
statement: Define $L'$ as $\mathbf{NP}$-**complete** if $L'$ is $\mathbf{NP}$-hard and $L' \in \mathbf{NP}$.
created: 2025-02-02T21:27:06-05:00
tags:
  - complexity_theory
---
## Definition
Define [[decision problem|language]] $L'$ as **$\mathbf{NP}$-complete** if $L'$ is [[class NP-hard|NP-hard]] and $L' \in$ [[class NP|NP]].

(see *NP*, *NP-hard*)

## Notes

- if [[P versus NP problem|P≠NP]], then by *Ladner's theorem* there exists problems which are *$\mathbf{NP}$-intermediate* (NPI), i.e. between NP and NPC in complexity
	- else (if P=NP), then P = NP = NPC
- intuition: if a problem X is in NPC, every problem Y in NP may be reduced to it, thus solving X efficiently means solving NP efficiently; similarly, every problem in NPC may be reduced to one in NP hard

___
## References
1. S. Arora, B. Barak. *Computational Complexity: A Modern Approach*, Cambridge University Press, 2009, p. 42.
2. <https://webdocs.cs.ualberta.ca/~zacharyf/courses/complexity_2019/notes/complexity-w19-lec04.pdf>
3. <https://www.cs.princeton.edu/courses/archive/spr06/cos522/lec2.pdf>
4. <https://stackoverflow.com/questions/1857244/what-are-the-differences-between-np-np-complete-and-np-hard>