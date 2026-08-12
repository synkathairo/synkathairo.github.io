---
layout: entry
title: first-order logic
aliases:
  - predicate logic
type:
  - definition
reference: 
course: 
lecture: 
statement: 
created: 2025-07-29T15:55:54-04:00
tags:
  - logic
---
## Definition (*first-order logic*)

- Let $\mathcal{V} = \{x,y,...,\}$ be a set of *variables*. 
- Let $\mathcal{R} = \{P,Q,...\}$ and $\mathcal{F} = \{f,g,...\}$ be a [[vocabulary]] of [[predicate]]/*function* *symbols*. 
- predicate and function symbols equipped with [[arity]] $\operatorname{ar} : \mathcal{R} \cup \mathcal{F} \to \mathbb{N}$
- *first-order terms* and *formulas* over $\mathcal{V}, \mathcal{R}, \mathcal{F}$ given by *grammar*:
	- $s, t ::= x \mid f(t_1,...,t_{\operatorname{ar}(f)})$ (*terms*)
	- $\phi, \psi ::= \top \mid \bot$ (*atomic truth values*)
		- $\mid P(t_1,...,t_{\operatorname{ar}(f)}) \mid s = t$ (*predicates and equality*)
		- $\mid \phi \lor \psi \mid \neg \phi$ (*Boolean connectives*)
		- $\mid \exists x.\phi$ (*existential quantification*)
- further *connectives* definable:
	- $\phi \to \psi \triangleq \neg \phi \lor \psi$ 
	- $s \neq t \triangleq \neg (s=t)$
	- $\phi \land \psi \triangleq \neg(\neg \phi \lor \neg \psi)$
	- $\forall x.\phi \triangleq \neg(\exists x.\neg\phi)$
	- etc.
- fix precedence to avoid parentheses: $\neg$ > $\land, \lor$ > $\exists, \forall$

## Notes

- *first-order logic* allows general assertions using [[quantifier|quantifiers]]
	- *universal quantifier* $\forall$
	- *existential quantifier* $\exists$
		- it is *dual* to *universal quantifier* (c.f. [[modal logic]] $\Box$ and $\Diamond$)

## See also

- [[propositional logic]], which is more limited than *first-order logic*

___
## References

1. https://www-sop.inria.fr/members/Martin.Avanzini/teaching/2021/AL/slides/w2.pdf
2. https://en.wikipedia.org/wiki/First-order_logic
3. https://leanprover-community.github.io/logic_and_proof/first_order_logic.html
4. <https://web.stanford.edu/class/archive/cs/cs103/cs103.1232/lectures/04/Condensed%20Slides.pdf>
5. _Forall x: Calgary: an introduction to formal logic_. Calgary: University of Calgary, 2023. \[Online\]. Available: [https://forallx.openlogicproject.org/](https://forallx.openlogicproject.org/)
