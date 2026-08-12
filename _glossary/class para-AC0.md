---
layout: page
title: class para-AC0
aliases:
  - para-AC0
  - para-AC⁰
type:
  - definition
reference: 
course: 
lecture: 
statement: 
created: 2025-07-23T14:16:25-04:00
tags:
  - complexity_theory
---


#incomplete 

## Definition (*para-AC⁰*)

Let $(Q,\kappa)$ be a [[parameterized problem]]. Then $(Q,\kappa)$ is in **para-$\mathbf{AC}^0$** if there exists a family $(\mathsf{C}_{n,k})_{n,k \in \mathbb{N}}$ of *boolean circuits* ($n$ input gates and *parameter* $k$) such that
1. the depth of every $\mathsf{C}_{n,k}$ is bounded by a fixed constant
2. $|\mathsf{C}_{n,k}| \leq f(k) \cdot n^{O(1)}$ for every $n,k \in \mathbb{N}$, where $f: \mathbb{N} \to \mathbb{N}$ is a [[effectively computable|computable function]]
3. let $x \in \Sigma^*$, then ($x \in Q$ if and only if $\mathsf{C}_{|x|,\kappa(x)}=1$)
4. there is a [[Turing machine|deterministic Turing machine]] that on input $(1^n, 1^k)$ computes the circuit $\mathsf{C}_{n,k}$ in time $g(k) + O(\log n)$, where $g: \mathbb{N} \to \mathbb{N}$ is a *computable function*

## See also

- [[class AC0|AC⁰]], for which this is the *parameterized* version
- Rossman's theorem on families of boolean circuits (2008)
	- $\text{p-CLIQUE} \notin \text{para-AC}^0$


___
## References

1. Y. Chen and J. Flum, “Some lower bounds in parameterized AC0,” _Information and Computation_, vol. 267, pp. 116–134, Aug. 2019, doi: [10.1016/j.ic.2019.03.008](https://doi.org/10.1016/j.ic.2019.03.008).