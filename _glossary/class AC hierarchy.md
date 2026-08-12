---
layout: entry
title: class AC hierarchy
aliases:
  - class AC
  - AC
  - class ACi
  - class ACⁱ
  - ACⁱ
  - AC hierarchy
type:
  - definition
  - complexity class
reference: 
course: 
lecture: 
statement: 
created: 2025-03-06T20:13:23-05:00
tags:
  - complexity_theory
---
## Definition
This is a complexity class hierarchy, where $\mathbf{AC}^i$ consists of *Boolean circuits* with depth $O(\log^i n)$ and polynomial number of unbounded *fan-in* AND and OR gates. (*circuit complexity*)

Total hierarchy of AC classes is defined as 
$${\mbox{AC}}=\bigcup _{i\geq 0}{\mbox{AC}}^{i}$$

## Examples
### $\mathbf{AC}^0$ complexity
#incomplete 
[[class AC0|AC⁰]]

## See also
- NC

___
## References
1. https://en.wikipedia.org/wiki/AC_(complexity)
2. https://complexityzoo.net/Complexity_Zoo:A
3. https://en.wikipedia.org/wiki/AC0
4. https://cstheory.stackexchange.com/questions/40408/why-is-the-circuit-class-ac0-unavoidable
5. https://people.cs.umass.edu/~immerman/cs601/lect12.pdf
6. S. Arora, B. Barak. *Computational Complexity: A Modern Approach*, Cambridge University Press, 2009, p. 118.
