---
layout: entry
title: propositional logic
aliases:
  - PropLog
  - 0th-order logic
  - sentential logic
  - zeroth order logic
  - sentential calculus
  - propositional calculus
  - theory of deduction
type:
reference:
course:
lecture:
statement:
created: 2025-07-03T21:24:42-04:00
tags:
  - logic
  - propositional_logic
---

## Description

**Propositional logic** is a sub-branch of _symbolic logic_ studying the _truth values_ of _propositional formulas_.

- a [[proposition]] is a statement that can be either _true_ or _false_, but not both (i.e. having a _truth value_)
- an **atomic proposition** has a truth value (truth or falsity) not dependent upon the truth value of any other proposition
  - may abbreviate as **propositional variable**, e.g. $p,q,r...$
- **connectives** allow building up _complex propositions_
  - $\land$, `And`, _conjunction_, e.g. $p \land q$
  - $\lor$, `Or`, _disjunction_, e.g. $p \lor q$
  - $\implies$, `If... Then...`, _conditional_ or _implication_, e.g. $p \implies q$
  - $\iff$, `Iff`, _biconditional_, e.g. $p \iff q$
    - "if and only if"
  - $\lnot$, `Not`, _negation_, e.g. $\lnot p$
  - $(\quad)$, `Comments`, _disambiguation_, e.g. $(p \land (q \implies r)) \lor s$
    - parentheses

## Notes

- various systems for determining _truth values_ of _propositional formulas_, such as _natural deduction_ and _method of truth tables_

## See also

- [[predicate]]
- [[SAT problem|Boolean satisfiability problem]]
- _truth table_
- compare [[syllogistic logic]] (introduced by Aristotle in _Posterior Analytics_)

---

## References

1. https://proofwiki.org/wiki/Definition:Propositional_Logic
2. <https://ncatlab.org/nlab/show/propositional+logic>
3. https://plato.stanford.edu/entries/logic-propositional/
4. http://intrologic.stanford.edu/chapters/chapter_02.html
5. <https://www.cs.ox.ac.uk/people/michael.wooldridge/teaching/soft-eng/lect07.pdf>
