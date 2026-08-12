---
layout: entry
title: filter
aliases:
type:
  - definition
reference:
course:
lecture:
statement:
created: 2025-08-06T18:05:03-04:00
tags:
  - logic
  - set_theory
---

## Definition

A _subset_ $F$ of a [[partial order|partial order]] $L$ is called a **filter** if it is _upward-closed_ and _downward directed_, i.e.

1. if $A \leq B$ in $L$ and $A \in F$, then $B \in F$ (_upward closed_)
2. for some $A$ in $L$, $A \in F$ (_nonempty_)
3. if $A \in F$ and $B \in F$, then for some $C \in F$, $C \leq A$ and $C \leq B$ (_downward directed_)

## Notes

- can define filter in terms of [[predicate]] being a _filter_ under similar conditions (whereas instead membership of $F$ it is defined in terms of truth condition $F(A)$ being _satisfiable_ on some _type_ $A$)

## Lean4 definition

> A filter `F` on a type `α` is a collection of sets of `α` which contains the whole `α`, is upwards-closed, and is stable under intersection. We do not forbid this collection to be all sets of `α`.

```lean
structure Filter (α : Type*) where
  /-- The set of sets that belong to the filter. -/
  sets : Set (Set α)
  /-- The set `Set.univ` belongs to any filter. -/
  univ_sets : Set.univ ∈ sets
  /-- If a set belongs to a filter, then its superset belongs to the filter as well. -/
  sets_of_superset {x y} : x ∈ sets → x ⊆ y → y ∈ sets
  /-- If two sets belong to a filter, then their intersection belongs to the filter as well. -/
  inter_sets {x y} : x ∈ sets → y ∈ sets → x ∩ y ∈ sets
```

## See also

- [[SAT problem|Boolean satisfiability problem]]

---

## References

1. <https://mathworld.wolfram.com/Filter.html>
2. <https://ncatlab.org/nlab/show/filter>
3. <https://math.stackexchange.com/questions/5045043/is-the-empty-filter-a-filter>
