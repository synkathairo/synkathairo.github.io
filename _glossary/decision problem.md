---
layout: page
title: decision problem
aliases:
  - language
  - 决定性问题
  - formal language
type:
  - definition
reference: 
course: 
lecture: 
statement: "Consider a special case of functions mapping strings to strings, Boolean functions which output a single bit. Identify such a function $f$ with subset $L_f = \\{x : f(x) = 1\\}$ of $\\{0,1\\}^*$, and call such sets **languages** or **decision problems**."
created: 2025-01-23T16:53:59-05:00
tags:
  - complexity_theory
  - formal_language_theory
---
## Definition (*mapping of strings to Boolean functions*)

Consider a special case of functions mapping strings to strings, Boolean functions which output a single bit.

Identify such a function $f$ with subset $L_f = \{x : f(x) = 1\}$ of $\{0,1\}^*$, and call such sets **languages** or **decision problems**.

Note $^*$ is used for the [[Kleene star]] operator identifying all possible strings that may be formed by elements of the set.

Identify the computational problem of computing $f$ (i.e. given $x$ compute $f(x)$) with problem of deciding $L_f$ (i.e. if $x \in L_f$).

## Definition (*set of words*)

A **language** $L \subseteq \Sigma^*$ is a set of [[word|words]] (where $\Sigma^*$ is the set of all words over [[alphabet]] $\Sigma$)

## Notes

- *Decision problem* is the *formal language* of all inputs (answer to yes-no question for given input) for which the output is YES.
- a new language may be definable from existing ones via set operations

___

## References

1. S. Arora, B. Barak. *Computational Complexity: A Modern Approach*, Cambridge University Press, 2009, p. 3.
2. M. Avanzini, Lecture Notes, Topic: “finite automata.” M1-AL, Centre Inria d’Université Côte d’Azur, 2021. <https://www-sop.inria.fr/members/Martin.Avanzini/teaching/2021/AL/slides/w1.pdf>
