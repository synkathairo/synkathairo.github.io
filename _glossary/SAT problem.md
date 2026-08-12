---
layout: entry
title: SAT problem
aliases:
  - SAT
  - Boolean satisfiability problem
  - B-SAT
  - SATISFIABILITY
  - propositional satisfiability problem
type:
  - definition
  - computational problem
reference:
course:
lecture:
statement: Denote by $\mathtt{SAT}$ the set of all satisfiable [[conjunctive normal form|CNF]] formulae.
created: 2025-01-23T22:26:10-05:00
tags:
  - complexity_theory
---

## Definition

Denote by $\mathtt{SAT}$ the [[set]] of all _satisfiable_ [[conjunctive normal form|CNF]] formulae.

(_satisfiable_ meaning there is some assignment of variables such that the formula evaluates to TRUE)

## Notes

- $\mathtt{SAT} \in \mathbf{NP}$ (see [[class NP|NP]])
  - as a _proof_ of satisfiability may simply be a satisfying truth assignment
  - however, not clear for formulas not in SAT, what a proof of unsatisfiability could be, answer could yield insight on NP =? coNP (unresolved)
- $\mathtt{SAT}$ is [[class NP-hard|NP-hard]]
- [[Cook-Levin theorem]] states that $\mathtt{SAT}$ is [[class NP-complete|NP-complete]]
  - [[k-SAT problem|k-SAT]] is NP-complete for all $k\geq 3$
  - however, 2SAT can be solved in $O(n+m)$ for $n$ variables, $m$ clauses
- $\mathtt{SAT} \leq_p$ [[k-SAT problem|3SAT]] ([[polynomial-time Karp reducible|reduces]] in polynomial time)
- By [[Fagin's theorem]], [[existential second-order logic|ESO]] = [[class NP|NP]], thus SAT may be represented by [[existential second-order logic|ESO]]
  - $\exists$ (variables) such that CNF statement = true

---

## References

1. S. Arora, B. Barak. _Computational Complexity: A Modern Approach_, Cambridge University Press, 2009, p. 45.
2. https://webdocs.cs.ualberta.ca/~zacharyf/courses/complexity_2019/notes/complexity-w19-lec04.pdf
3. https://imangodoc.com/1SPxYenE.html
4. https://en.wikipedia.org/wiki/Boolean_satisfiability_problem
5. https://people.csail.mit.edu/virgi/6.1420/lecture1.pdf
6. https://mathweb.ucsd.edu/~sbuss/CourseWeb/Math268_2014W/Beame_IAS_proofcomplexity.pdf
