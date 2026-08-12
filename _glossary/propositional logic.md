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

**Propositional logic** is a sub-branch of *symbolic logic* studying the *truth values* of *propositional formulas*.

- a [[proposition]] is a statement that can be either *true* or *false*, but not both (i.e. having a *truth value*)
- an **atomic proposition** has a truth value (truth or falsity) not dependent upon the truth value of any other proposition
	- may abbreviate as **propositional variable**, e.g. $p,q,r...$
- **connectives** allow building up *complex propositions*
	- $\land$, `And`, *conjunction*, e.g. $p \land q$
	- $\lor$, `Or`, *disjunction*, e.g. $p \lor q$
	- $\implies$, `If... Then...`, *conditional* or *implication*, e.g. $p \implies q$
	- $\iff$, `Iff`, *biconditional*, e.g. $p \iff q$
		- "if and only if"
	- $\lnot$, `Not`, *negation*, e.g. $\lnot p$
	- $(\quad)$, `Comments`, *disambiguation*, e.g. $(p \land (q \implies r)) \lor s$
		- parentheses

## Notes

- various systems for determining *truth values* of *propositional formulas*, such as *natural deduction* and *method of truth tables*

## See also

- [[predicate]]
- [[SAT problem|Boolean satisfiability problem]]
- *truth table*
- compare [[syllogistic logic]] (introduced by Aristotle in *Posterior Analytics*)

___
## References

1. https://proofwiki.org/wiki/Definition:Propositional_Logic
2. <https://ncatlab.org/nlab/show/propositional+logic>
3. https://plato.stanford.edu/entries/logic-propositional/
4. http://intrologic.stanford.edu/chapters/chapter_02.html
5. <https://www.cs.ox.ac.uk/people/michael.wooldridge/teaching/soft-eng/lect07.pdf>
