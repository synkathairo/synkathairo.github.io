---
layout: entry
title: class AC0
aliases:
  - AC0
  - alternating circuit
  - unbounded fan-in constant-depth circuits
  - AC⁰
  - AC0-circuits
  - AC⁰-circuits
type:
  - definition
reference: 
course: 
lecture: 
statement: 
created: 2025-07-23T14:15:42-04:00
tags:
  - complexity_theory
---
## Definition

**AC⁰** is a subclass of [[class AC hierarchy|ACⁱ]], corresponding to *constant-depth* ($O(1)$), *unbounded-fanin* of *AND* and *OR* gates (*NOT* gates allowed at inputs), *polynomial-size* circuits

in other words,

Let $Q \subseteq \Sigma^*$, then say $Q \in \mathbf{AC}^0$ if there exists a family of *boolean circuits* $(\mathsf{C}_n)_{n \in \mathbb{N}}$ such that
1. depth of every $\mathsf{C}_n$ is bounded by a fixed constant 
2. $|\mathsf{C}_n| = n^{O(1)}$
3. let $x \in \Sigma^*$, then ($x \in Q$ if and only if $\mathsf{C}_{|x|}(x)=1$); in particular $\mathsf{C}_n$ has $n$ input gates
4. $(\mathsf{C}_n)_{n \in \mathbb{N}}$ is *dlogtime-uniform*, i.e. there is a *deterministic logtime* [[Turing machine]] $\mathbb{M}$ which on input $1^n$ outputs circuit $\mathsf{C}_n$; more precisely $\mathbb{M}$ recognizes language $\{ (b,i,1^n) | \text{the }i\text{th bit of the binary encoding of }\mathsf{C}_n\text{ is }b\}$

(fanin meaning number of inputs to a logic gate)

## Hierarchy of languages (based on number of layers)

can divide $\mathbf{AC}^0$ further into hierarchy of languages based on number of layers
$$\mathbf{AC}^0_1 \subset \mathbf{AC}^0_2 \subset ... \subset \mathbf{AC}^0 = \bigcup_{d=1}^\infty \mathbf{AC}^0_d$$

## See also

- [[class para-AC0|para-AC⁰]]
- [[class AC hierarchy|ACⁱ]]
- *P/poly*

___
## References

1. https://complexityzoo.net/Complexity_Zoo:A
2. Y. Chen and J. Flum, “Some lower bounds in parameterized AC0,” _Information and Computation_, vol. 267, pp. 116–134, Aug. 2019, doi: [10.1016/j.ic.2019.03.008](https://doi.org/10.1016/j.ic.2019.03.008).
3. https://en.wikipedia.org/wiki/AC0
