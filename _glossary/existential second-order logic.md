---
layout: entry
title: existential second-order logic
aliases:
  - ESO
type:
  - definition
reference: 
course: 
lecture: 
statement: $\exists X^k \varphi = \lnot (\forall X^k \lnot \varphi)$
created: 2025-07-02T19:20:30-04:00
tags:
  - logic
---
## Definition

Set of *formulas* of **existential second-order logic** (i.e. $\Sigma_1^1$ logic) of [[vocabulary]] $\tau$ (formulas of $\mathbf{ESO}[\tau]$) is the smallest set containing all formulas of $\mathbf{FO}[\tau]$ ([[first-order logic]] of *vocabulary* $\tau$), and closed under the following two rules:

1. if $\phi$ is an $\mathbf{ESO}[\tau \cup \{f\}]$ formula, then $(\exists f) \phi$ is an $\mathbf{ESO}[\tau]$ formula
2. if $\phi$ is an $\mathbf{ESO}[\tau \cup \{R\}]$ formula, then $(\exists R) \phi$ is an $\mathbf{ESO}[\tau]$ formula

(where $\phi$ is a *first-order sentence*)

Alternatively,
$(SO\exists)$, set of **second-order existential boolean queries**, i.e. **existential second-order quantification**,
$$\exists X^k \varphi = \lnot (\forall X^k \lnot \varphi)$$

## Notes

- it is a *fragment* of [[second-order logic]]
- compare also: [[universal second-order logic]], $\Pi_1^1 = \mathbf{USO}$

## See also
- [[Fagin's theorem]]

___
## References

1. https://plato.stanford.edu/entries/logic-if/supplement.html
2. M. Bannach, F. Chudigiewitsch, and T. Tantau, “Existential Second-Order Logic Over Graphs: Parameterized Complexity,” Oct. 02, 2023, _arXiv_: arXiv:2310.01134. doi: [10.48550/arXiv.2310.01134](https://doi.org/10.48550/arXiv.2310.01134).
3. https://people.cs.umass.edu/~immerman/book/ch7.pdf
4. https://courses.grainger.illinois.edu/cs474/fa2021/fa2020Notes/SecondOrderLogic.pdf
