---
layout: entry
title: Rice's theorem
aliases:
type:
  - theorem
reference:
course:
lecture:
statement:
created: 2025-01-29T16:00:44-05:00
tags:
  - complexity_theory
---

## Theorem

Define a [[partial function]] from $\{0,1\}^*$ to $\{0,1\}^*$ as a function not necessarily defined on all its inputs.
Furthermore say that a [[Turing machine|TM]] $M$ computes a _partial function_ $f$ if for every $x$ where $f$ is defined, $M(x) = f(x)$, and for every $x$ where $f$ is not defined, $M$ results into an infinite loop when executing on input $x$.
If $\mathcal{S}$ is the set of partial functions, define $f_\mathcal{S}$ to be the Boolean function that on input $\alpha$ outputs $1$ iff [[Turing machine|TM]] $M$ computes a partial function in $\mathcal{S}$.

**Rice's theorem** says that for every nontrivial $\mathcal{S}$ (not empty nor set of all partial functions computable by some Turing machine), $f_\mathcal{S}$ is not [[effectively computable|computable]].

## Notes

- may be used to prove [[halting problem#Theorem|theorem]] regarding [[halting problem|HALT]] non-computability by any TM
- another wording of the theorem is, for a class $A$ of _recursively enumerable sets_, if the _index set_ (the set of _Gödel numbers_ of functions with domains belonging to $A$) is a _recursive set_, then $A$ is empty or $A$ contains all _recursively enumerable sets_

---

## References

1. S. Arora, B. Barak. _Computational Complexity: A Modern Approach_, Cambridge University Press, 2009, p. 35.
2. http://kilby.stanford.edu/~rvg/154/handouts/Rice.html
3. https://courses.grainger.illinois.edu/cs373/fa2013/Lectures/lec25.pdf
4. https://mathworld.wolfram.com/RicesTheorem.html
