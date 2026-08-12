---
layout: entry
title: time-constructible function
aliases:
  - time-constructible
type:
  - definition
reference:
course:
lecture:
statement:
created: 2025-12-05T20:44:17-05:00
tags:
  - complexity_theory
---

## Definition

Let $f : \{0,1\}^* \to \{0,1\}^*$ and let $T: \mathbb{N} \to \mathbb{N}$ be some functions, and let $M$ be a [[Turing machine]]. Say that $M$ [[effectively computable|computes]] $f$ if for every $x \in \{0,1\}^*$, when $M$ is initialized to start configuration on input $x$, it halts with $f(x)$ written on its output tape. Say $M$ computes $f$ in $T(n)$-time if its computation on every input $x$ requires at most $T(\lvert x \rvert)$ steps.

A [[function]] $T: \mathbb{N} \to \mathbb{N}$ is **time-constructible** if $T(n) \geq n$ and there is a [[Turing machine|TM]] $M$ that computes the function $x \mapsto \llcorner T(\lvert x\rvert ) \lrcorner$ in time $T(n)$. (where $\llcorner T(\lvert x\rvert ) \lrcorner$ denotes binary representation of number $T(\lvert x\rvert )$)

## Notes

- this is about runtime!
- $|x|$ denotes the length of the string representing $x$ here

---

## References

1. S. Arora, B. Barak. _Computational Complexity: A Modern Approach_, Cambridge University Press, 2009, pp. 1, 15-16.
