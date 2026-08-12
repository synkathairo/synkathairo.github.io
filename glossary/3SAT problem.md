---
layout: entry
title: 3SAT problem
aliases:
  - 3SAT
  - 3-satisfiability
type:
  - definition
  - computational problem
reference:
course:
lecture:
statement: Denote by $\mathtt{3SAT}$ the [[decision problem|language]] of all satisfiable 3[[conjunctive normal form|CNF]] formulae.
created: 2025-01-23T22:02:59-05:00
tags:
  - complexity_theory
---

## Definition

Denote by $\mathtt{3SAT}$ the [[decision problem|language]] of all satisfiable 3[[conjunctive normal form|CNF]] formulae.

(see [[SAT problem]])

## Notes

- $\mathtt{3SAT} \in$ [[class NP|NP]]
- $\mathtt{3SAT} \in$ [[class PSPACE|PSPACE]]
- $\mathtt{3SAT}$ is [[class NP-complete|NP-complete]]
- [[SAT problem|SAT]] reduces to $\mathtt{3SAT}$ in [[class P|polynomial time]], i.e. $\mathtt{SAT} \leq_p \mathtt{3SAT}$
- it is a simple example of a _constraint satisfaction problem_

---

## References

1. S. Arora, B. Barak. _Computational Complexity: A Modern Approach_, Cambridge University Press, 2009, pp. 45, 81-82.
2. https://cstheory.stackexchange.com/questions/7213/direct-sat-to-3-sat-reduction
3. https://ocw.mit.edu/courses/6-045j-automata-computability-and-complexity-spring-2011/567d75f927ca3c11a819baee9ab260ac_MIT6_045JS11_lec16.pdf
4. https://cse.iitkgp.ac.in/~palash/2018AlgoDesignAnalysis/SAT-3SAT.pdf
