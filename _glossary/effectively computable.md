---
layout: entry
title: effectively computable
aliases:
  - effective computability
  - computable function
  - computable
type:
  - definition
reference:
course:
lecture:
statement:
created: 2025-07-14T21:42:39-04:00
tags:
  - complexity_theory
---

## Definition

Let $D,E$ be sets. A [[partial function|partial mathematical function]] $f : D \to E_\bot$ is **effectively computable** if there is an _effective procedure_ such that for any $x \in D$:

1. the procedure eventually _halts_, yielding $f(x) \in E$, if $f(x)$ is defined;
2. the procedure never halts if $f(x)$ is undefined

## Proposition

The set of all _effectively computable_ partial functions from $IN$ to $IN$ is _countable_.

(by [[Church-Turing thesis]] each _effectively computable function_ represented by [[Turing machine]] which may be represented as finite string of symbols over [[alphabet]], whereas set of finite strings over any finite alphabet is countable)

### Corollary

The set of all _effectively computable_ total functions from $IN$ to $IN$ is _countable_.

## Notes

- from proposition, shows existence of uncomputable functions, example is [[halting problem]]

## See also

- compare [[effectively decidable]], which uses (sub)set definition instead of function
- [[effectively enumerable]]

---

## References

1. N. D. Jones, _Computability and complexity: from a programming perspective_. in Foundations of computing. Cambridge, Mass: MIT Press, 1997, pp. 10-11, 15-16.
2. https://proofwiki.org/wiki/Definition%3AEffectively_Computable_Function
