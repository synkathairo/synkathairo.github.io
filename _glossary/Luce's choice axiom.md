---
layout: entry
title: Luce's choice axiom
aliases:
type:
reference:
course:
lecture:
statement:
created: 2025-09-19T17:08:33-04:00
tags:
  - game_theory
---

## Overview

Consider set $X$ of outcomes, selection rule $P$, such that $\forall a \in A \subset X$, $A$ finite set, selector selects $a$ from $A$ with probability $P(a|A)$.

- Luce's choice axiom 1 (independence from irrelevant alternatives, IIA):
  - if $P(a | A) = 0$, $P(b | A) > 0$, then for any $a,b \in B \subset A$, still have $P(a | B) = 0$
- Luce's choice axiom 2 ("path independence"):
  - for any $a \in B \subset A$, $P(a|A) = P(a | B) \sum_{b \in B} P(b | A)$

Note: choice axiom 1 is implied by choice axiom 2

## Formulation in terms of finite subsets

Suppose $P_S(R)$ is probability (subjective weight) choice from finite set of $S$ alternatives falls within $R \subset S$. Then, **choice axiom** defined by, for $T$ finite subset such that for every $S \subset T$, $P_S$ defined,

- if $P(x,y) \neq 0$, for all $x,y \in T$, $then for $R \subset S \subset T$,
  - $P_T(R) = P_S(R) P_T(S)$
- if $P(x,y) = 0$, for some $x,y \in T$, then for every $S \subset T$,
  - $P_T(S) = P_{T - \{x\}} (S - \{x\})$

## See also

- matching law formulation
- [[conditional probability]]
- [[Bayes' theorem|Bayes' rule]]

---

## References

1. Luce, R. D. (1959/2005) _Individual Choice Behavior: A Theoretical Analysis_. New York: Wiley. Reprinted by Dover Publications.
2. https://en.wikipedia.org/wiki/Luce%27s_choice_axiom
3. http://www.scholarpedia.org/article/Luce%27s_choice_axiom
4. https://tomasz.scholars.harvard.edu/sites/g/files/omnuum5871/files/tomasz/files/tomasz_strzalecki_-_stochastic_choice.pdf
