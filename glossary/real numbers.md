---
layout: entry
title: real numbers
aliases:
  - real number
  - reals
  - real
type:
  - definition
reference:
course:
lecture:
statement:
created: 2026-02-16T15:23:12-05:00
tags:
  - analysis
---

## Definition (_Cantor construction_)

The set of **real numbers**, $\mathbb{R}$ may be defined as the set of [[equivalence class|equivalence classes]] of [[Cauchy sequence|Cauchy sequences]] of [[rational numbers]] under the [[equivalence relation]] $\{x_i\} \sim \{y_i\}$ if the [[interleave sequence]] of the two sequences is itself a _Cauchy sequence_.

## Lean4 representation

```lean
/-- The type `ℝ` of real numbers constructed as equivalence classes of Cauchy sequences of rational numbers. -/
structure Real where ofCauchy ::
	/-- The underlying Cauchy completion -/
	cauchy : CauSeq.Completion.Cauchy (abs : ℚ → ℚ)
```

## Notes

- there are different equivalent constructions
- these constructions demonstrate satisfaction of axiomatic requirements for reals
- [[rational numbers]] are [[dense]] in the _reals_

---

## References

1. https://planetmath.org/realnumber
2. https://ncatlab.org/nlab/show/real+number
3. https://blog.richmond.edu/math320/2017/09/22/cantors-construction-of-the-real-numbers/
4. https://web.archive.org/web/20180712113707/http://www.math.uni-konstanz.de:80/~krapp/Constructions_of_the_real_numbers.pdf
5. https://mathworld.wolfram.com/RealNumber.html
6. https://leanprover-community.github.io/mathlib4_docs/Mathlib/Data/Real/Basic.html
