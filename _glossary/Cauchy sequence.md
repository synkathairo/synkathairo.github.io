---
layout: page
title: Cauchy sequence
aliases:
  - Cauchy 列
type:
  - definition
reference:
course:
lecture:
statement: $\forall \epsilon, \exists N, \forall i,j \geq N, d(x_i,x_j)<\epsilon$
created: 2025-07-06T14:26:55-04:00
tags:
  - analysis
---
## Definition

In a [[metric space]], a [[sequence]] is a **Cauchy sequence** if, for every $\epsilon >0$, almost all terms are within $\epsilon$ of each other (relative to [[metric]] $d$), i.e.
$$\forall \epsilon, \exists N, \forall i,j \geq N, d(x_i,x_j)<\epsilon$$

(for real numbers, using $|x_i - x_j| < \epsilon$)

## Lean4 definition

> Cauchy sequences. Usually defined on [[natural numbers|ℕ]], but often it is also useful to say that a [[function]] defined on [[real numbers|ℝ]] is Cauchy at +∞ to deduce [[convergence]]. Therefore, we define it in a type class that is general enough to cover both ℕ and ℝ, which are the main motivating examples

```lean
def CauchySeq [Preorder β] (u : β → α) :=
  Cauchy (atTop.map u)
```

([[preorder]] as in a reflexive and transitive relation `≤`, `atTop` the filter representing limit `→ ∞` on an [[ordered set]])

> A [[filter|filter]] `f` is Cauchy if for every [[entourage|entourage]] `r`, there exists an `s ∈ f` such that `s × s ⊆ r`. This is a generalization of Cauchy sequences, because if `a : ℕ → α` then the filter of sets containing [[cofinite set|cofinitely]] many of the `a n` is Cauchy iff `a` is a Cauchy sequence.
  
```lean
def Cauchy (f : Filter α) :=
  NeBot f ∧ f ×ˢ f ≤ 𝓤 α
```

(`NeBot` means the filter is not equal to `⊥` i.e. empty set does not belong to the filter, `×ˢ` refers to [[Cartesian product]], `𝓤` means uniformity as in a filter on `α × α` inferred from an ambient uniform space structure on `α`, and `α` is a type)

___
## References

1. <https://en.wikipedia.org/wiki/Cauchy_sequence>
2. <https://personal.math.ubc.ca/~cass/courses/m220-00/cauchy.pdf>
3. <https://leanprover-community.github.io/mathlib4_docs/Mathlib/Topology/UniformSpace/Cauchy.html#CauchySeq>
4. <https://ncatlab.org/nlab/show/Cauchy+sequence>