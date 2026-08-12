---
layout: page
title: complete metric space
aliases:
type:
  - definition
reference:
course:
lecture:
statement:
created: 2025-10-16T14:37:33-04:00
tags:
  - topology
---
## Definition

A **complete metric space** is a [[metric space]] in which every [[Cauchy sequence]] is [[convergence|convergent]].

## Lean4

```lean4
/-- A complete space is defined here using uniformities. A uniform space
  is complete if every Cauchy filter converges. -/
class CompleteSpace (α : Type u) [UniformSpace α] : Prop where
  /-- In a complete uniform space, every Cauchy filter converges. -/
  complete : ∀ {f : Filter α}, Cauchy f → ∃ x, f ≤ 𝓝 x
```

(Cauchy [[filter]] is generalization of Cauchy sequence)
## Notes

- examples: [[real numbers]] with usual metric, complex numbers, etc

___
## References

1. https://mathworld.wolfram.com/CompleteMetricSpace.html
2. https://leanprover-community.github.io/mathlib4_docs/Mathlib/Topology/UniformSpace/Cauchy.html#CompleteSpace
