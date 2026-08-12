---
layout: entry
title: hard-core predicate
aliases:
  - hard-core bit
  - hardcore predicate
  - HCP
type: 
reference: 
course: 
lecture: 
statement: 
created: 2025-08-01T15:02:32-04:00
tags:
  - cryptography
---
## Definition (*unpredictability*)

Given a [[function]] $f: \{0,1\}^n \to \{0,1\}^m$, a [[predicate]] $h : \{0,1\}^n \to \{0,1\}$ is a **hard-core predicate** for $f$ if

- $h$ is [[effectively computable|computable]] in [[class P|polynomial time]]
- there is a [[negligible function]] $\nu(\cdot)$ such that for every [[class PPT|PPT]] adversary $\mathcal{A}$ and for every $n$, we have: $$\Pr[x \overset{\$}{\gets} \{0,1\}^n : \mathcal{A}(f(x)) = h(x)] \leq \frac{1}{2} + \nu(n)$$ (where $x \overset{\$}{\gets} S$ means 'choose $x$ *uniformly at random* from set $S$)

(given $f(x)$, computationally bounded adversary who wants to figure out $h(x)$ cannot do much better than just randomly guessing $0$ or $1$ with equal probability)

## Definition (*indistinguishability*)

A [[class P|polynomial time]] *function* $h : \{0,1\}^* \to \{0,1\}$ is a **hard-core predicate** of $f$ if $(f(x),h(x)) \approx (f(x),b)$ where $x \gets \{0,1\}^n$, $b \gets \{0,1\}$

(where $\approx$ means [[computationally indistinguishable]])

## Notes

- why do this? suppose we are encrypting a message, want to do so efficiently, but make it difficult for an eavesdropper to recover the message from the encryption
- can use [[one-way permutation]] and *hard-core predicate* to create a [[pseudorandom function|PRF]]
- can define as $\varepsilon$-*hardcore* function by replacing $\nu(n)$ with $\frac{\varepsilon}{2}$

## See also

- [[one-way function]]

___
## References

1. <https://www.cs.cmu.edu/~goyal/s18/15503/scribe_notes/lecture6.pdf>
2. <https://en.m.wikipedia.org/wiki/Hard-core_predicate>
3. <https://people.seas.harvard.edu/~madhusudan/courses/Spring2020/scribe/lect23.pdf>
4. <https://www.ccs.neu.edu/home/wichs/class/crypto-fall15/lecture7.pdf>
5. <https://people.csail.mit.edu/ronitt/COURSE/F17/NOTES/lec25-scribe.pdf>
6. <https://www.cs.cmu.edu/~odonnell/boolean-analysis/lecture17.pdf>
