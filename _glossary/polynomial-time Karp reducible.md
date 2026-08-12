---
layout: entry
title: polynomial-time Karp reducible
aliases:
  - polynomial-time reducible
  - many-to-one reducibility
  - polynomial-time mapping reducibility
  - Karp reduction
  - Karp reducible
type:
  - definition
  - time complexity
reference:
course:
lecture:
statement:
created: 2025-02-01T16:57:21-05:00
tags:
  - complexity_theory
---

## Definition (_polynomial-time Karp reducible_)

A [[decision problem|language]] $L \subseteq \{0,1\}^*$ is **polynomial-time Karp reducible** (polynomial-time reducible) to language $L' \subseteq \{0,1\}^*$, denoted $L \leq_p L'$, if there is a [[class P|polynomial-time]] computable function $f: \{0,1\}^* \to \{0,1\}^*$ such that $x \in \{0,1\}^*$, $x \in L$ if and only if $f(x) \in L'$.

## Theorem

1. (_transitivity_) If $L \leq_p L'$ and $L' \leq_p L''$, then $L \leq_p L''$.
2. If [[decision problem|language]] $L$ is [[class NP-hard|NP-hard]] and $L \in \mathbf{P}$, then [[P versus NP problem|P=NP]]
3. If [[decision problem|language]] $L$ is [[class NP-complete|NP-complete]], then $L \in \mathbf{P}$ if and only if [[P versus NP problem|P=NP]].

## Definition (_many-one reducible_)

A **many-one reduction** (_many-one reducible_, _m-reducible_) from [[decision problem|formal language]] $A$ to $B$ (with [[alphabet|alphabets]] $\Sigma$ and $\Gamma$ respectively) is a _total_ [[effectively computable|computable function]] $f: \Sigma^* \to \Gamma^*$ such that each word $w$ is in $A$ iff $f(w)$ is in $B$.

Denote as $A \leq_m B$.

## Notes

- the _polynomial time Karp reduction_ is a special case of _many-one reduction_ computable in _polynomial time_ ($f$ _computable_ in _polynomial time_)

## See also

- [[Levin reduction]]

---

## References

1. S. Arora, B. Barak. _Computational Complexity: A Modern Approach_, Cambridge University Press, 2009, pp. 42-43.
2. https://courses.cs.washington.edu/courses/cse417/21wi/lecture/21-reductions1.pdf
3. https://en.wikipedia.org/wiki/Many-one_reduction
4. https://www.cs.cmu.edu/~avrim/451/lectures/lect1102.pdf
