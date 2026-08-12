---
layout: entry
title: word
aliases:
  - string
type:
  - definition
reference:
course:
lecture:
statement:
created: 2025-07-31T16:47:27-04:00
tags:
  - formal_language_theory
---

## Definition

A (finite) **word** $w = a_1,...,a_n$ is a finite sequence of letters $a_i \in \Sigma$ (where $\Sigma$ is an [[alphabet]])

- $|w| \triangleq n$ is _length_ of word
- $w[i] \triangleq a_i$ is $i$-th _letter_ in word $w$
- $\epsilon$ is _empty_ word of length $0$
- $v \cdot w$ (or simply $vw$) denotes _concatenation_ of words $v$ and $w$
  - $\epsilon \cdot w = w = w \cdot \epsilon$
  - $u \cdot (v \cdot w) = (u \cdot v) \cdot w$
- $v^n$ is $v$ concatenated with itself $n$ times

## Notes

- $\Sigma^*$ is the _set of all words_ over alphabet $\Sigma$
- $\Sigma^+ \triangleq \Sigma^* \setminus \{\epsilon\}$ is _set of non-empty words_

---

## References

1. M. Avanzini, Lecture Notes, Topic: “finite automata.” M1-AL, Centre Inria d’Université Côte d’Azur, 2021. <https://www-sop.inria.fr/members/Martin.Avanzini/teaching/2021/AL/slides/w1.pdf>
