---
layout: entry
title: class coNP
aliases:
  - coNP
type:
  - definition
  - complexity class
  - time complexity
reference: 
course: 
lecture: 
statement: 
created: 2025-01-29T16:12:48-05:00
tags:
  - complexity_theory
---
## Definition
$\mathbf{coNP}$ is the set of [[decision problem|languages]] $L$ such that there exists a [[class P|polynomial time]] algorithm $A$ with $x \in L \iff A(x,y) = 0$.

In other words, there is a *polynomial-time* algorithm to verify "no" instances given an appropriate certificate.

## Notes
- It is known that $\mathbf{P} \subseteq \mathbf{coNP}$
- It is conjectured that $\mathbf{NP} \neq \mathbf{coNP}$
- compare to [[class NP|NP]]
	- open question if $\mathbf{coNP}$ is different from $\mathbf{NP}$
- coNP-complete: in coNP and every coNP language is [[polynomial-time Karp reducible]] to it
	- (c.f. [[class NP-complete|NP-complete]])


___
## References
1. https://people.csail.mit.edu/dmoshkov/courses/adv-comp/scribe1.pdf
2. https://math.stackexchange.com/questions/2334429/what-is-the-difference-between-np-and-conp
