---
layout: entry
title: class PPAD
aliases:
  - polynomial parity arguments on directed graphs
  - EOTL
  - class EOTL
  - PPAD
type:
  - definition
  - complexity class
reference:
course:
lecture:
statement:
created: 2025-10-22T16:34:59-04:00
tags:
  - complexity_theory
  - game_theory
---

## Definition (_end-of-line problem_/_end-of-the-line_/_EOTL_)

Suppose an (implicit) [[directed graph]] of possibly exponential size, where in and out-degree of each vertex is one.

- Take inputs $S,P : \{0,1\}^n \to \{0,1\}^n$, which are two [[class P|poly-time]] [[effectively computable|computable]] circuits, with special $0$ vertex such that $S(0) \neq 0$, $P(0) = 0$. These two circuits are called _successor_ and _predecessor_.
- Then, the output is a vertex $v \neq 0$ such that $S(P(v)) \neq v$ or $P(S(v)) \neq v$.

(examples: end of any line, start of any lines that are not $0$ vertex, and vertices where $S$ and $P$ are inconsistent)

(i.e. find any source or sink of the direct graph other than vertex $0$)

## Definition (_PPAD_)

Any problem is in **PPAD** (Polynomial Parity Arguments on Directed graphs) if there is a [[polynomial-time Karp reducible|polynomial-time reduction]] from it to the _End-of-Line problem_.

## Notes

- [[Nash equilibrium]] is PPAD-complete
- considered a _function problem_ (hence in function problem complexity hierarchy), specifically in [[class TFNP|TFNP]] (total function nondeterministic polynomial)
- [[Brouwer fixed-point theorem]]
- under the _PCP for PPAD conjecture_ (Babichenko et al 2015): $\exists \epsilon, \delta >0$ such that _EOTL_ has [[polynomial-time Karp reducible|polynomial-time reduction]] to $(\epsilon,\delta)$-[[generalized circuit problem|GCircuit]] problem

---

## References

1. https://web.stanford.edu/class/cs354/scribe/lecture05.pdf
2. https://viterbi-web.usc.edu/~shanghua/teaching/Fall2010/lect9.pdf
3. https://cs.stackexchange.com/questions/11604/end-of-the-line-augmented-problem-of-ppad
4. C. Daskalakis, N. Golowich, and K. Zhang, “The Complexity of Markov Equilibrium in Stochastic Games,” in _Proceedings of Thirty Sixth Conference on Learning Theory_, G. Neu and L. Rosasco, Eds., in Proceedings of machine learning research, vol. 195. PMLR, July 2023, pp. 4180–4234. [Online]. Available: [https://proceedings.mlr.press/v195/daskalakis23a.html](https://proceedings.mlr.press/v195/daskalakis23a.html)
5. https://courses.grainger.illinois.edu/cs580/fa2021/Slides/Lec9.pdf
