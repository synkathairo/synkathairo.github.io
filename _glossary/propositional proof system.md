---
layout: entry
title: propositional proof system
aliases:
  - PPS
  - Cook-Reckhow propositional proof system
  - pps
type:
  - definition
reference: 
course: 
lecture: 
statement: 
created: 2025-07-24T10:44:18-04:00
tags:
  - logic
  - propositional_logic
---
## Definition

A **propositional proof system** (pps) is a [[class P|polynomial time]] function $f$ with range on set of all propositional tautologies ($\text{TAUT}$). If $A$ is a formula, then any $w$ such that $f(w) = A$ is called a $f$-proof of $A$. Conditions defining *pps*:

- *completeness*: every propositional *tautology* has a $f$-proof
- *soundness*: if a propositional formula has a $f$-proof then it is a tautology,
	- that existence of the proof implies the given formula
- *efficiency*: $f$ runs in polynomial time

(concisely: **propositional proof system** is a [[proof calculus|proof system]] for the set $\text{TAUT}$)

An **abstract propositional proof system** is a [[class P|polynomial time]] [[effectively computable|computable function]] $f$ such that the range of $f$ is $\text{TAUT}$, the set of all boolean (propositional) tautologies. An *$f$-proof* of a formula $A$ is a string $w$ such that $f(w) = A$.

## Notes

- for *abstract propositional proof system*, $f$ need not be *polynomially honest*, i.e. does not need to be a polynomial $p$ such that $\forall w$, $p(|f(w)|) > |w|$ 
- can it be considered a [[class dIP|dIP]]?
	- the language of tautologies, $\text{TAUT}$
	- *completeness*: $A \in \text{TAUT}$ implies $\exists w$ s.t. $V(A,w) = 1$ 
		- i.e. every propositional tautology $A$ has an $f$-proof
	- *soundness*: $A \notin \text{TAUT}$ implies $\forall w$, $V(A,w) = 0$
		- (contrapositive of above pps soundness, if not tautology, does not have an $f$-proof, hence verifier fails)
- is a [[proof calculus|proof system]]
- so, PPS $\subseteq$ [[class NP|NP]]?
	- see also [[Fagin's theorem]], [[existential second-order logic|ESO]] and [[Church-Turing thesis]]
	- implies PPS can be written as ESO

## See also

- [[Frege proof system]]
	- *Hilbert system*

___
## References

1. https://mathweb.ucsd.edu/~sbuss/CourseWeb/Math268_2014W/Beame_IAS_proofcomplexity.pdf
2. https://en.wikipedia.org/wiki/Propositional_proof_system
3. S. A. Cook and R. A. Reckhow, “The relative efficiency of propositional proof systems,” _J. symb. log._, vol. 44, no. 1, pp. 36–50, Mar. 1979, doi: [10.2307/2273702](https://doi.org/10.2307/2273702).
4. https://www.karlin.mff.cuni.cz/~krajicek/ecm.pdf
5. https://cstheory.stackexchange.com/questions/34699/is-there-any-work-relating-type-systems-and-cook-reckhow-proof-systems
6. https://mathweb.ucsd.edu/~sbuss/ResearchWeb/marktoberdorf97/paper.pdf
