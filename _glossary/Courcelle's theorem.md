---
layout: page
title: Courcelle's theorem
aliases: 
type:
  - theorem
reference: 
course: 
lecture: 
statement: 
created: 2025-07-29T13:51:32-04:00
tags:
  - graph_theory
  - logic
---
## Theorem (*Courcelle's theorem*)

Let $k \in \mathbb{N}$ and let $\varphi$ be an [[monadic second-order logic|mso]] *formula* over the *vocabulary* of *graphs*, i.e. using a *binary relation* $E(x,y)$. There is a *cubic algorithm* which inputs a [[undirected graph|undirected graphs]] and fails or answers if the graph satisfies $\varphi$. The algorithm succeeeds if the graph has [[treewidth]] $\leq k$ 

___
## References

1. https://www.mimuw.edu.pl/~bojan/20152016-2/jezyki-automaty-i-obliczenia-2/monadic-second-order-logic-and-courcelles-theorem
2. https://en.wikipedia.org/wiki/Courcelle%27s_theorem
3. https://logic.rwth-aachen.de/files/SeminarMetaWS21/5-Courcelle_Gey.pdf