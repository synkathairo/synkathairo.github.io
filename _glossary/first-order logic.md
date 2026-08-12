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

## Definition (_first-order logic_)

- Let $\mathcal{V} = \{x,y,...,\}$ be a set of _variables_.
- Let $\mathcal{R} = \{P,Q,...\}$ and $\mathcal{F} = \{f,g,...\}$ be a [[vocabulary]] of [[predicate]]/_function_ _symbols_.
- predicate and function symbols equipped with [[arity]] $\operatorname{ar} : \mathcal{R} \cup \mathcal{F} \to \mathbb{N}$
- _first-order terms_ and _formulas_ over $\mathcal{V}, \mathcal{R}, \mathcal{F}$ given by _grammar_:
  - $s, t ::= x \mid f(t_1,...,t_{\operatorname{ar}(f)})$ (_terms_)
  - $\phi, \psi ::= \top \mid \bot$ (_atomic truth values_)
    - $\mid P(t_1,...,t_{\operatorname{ar}(f)}) \mid s = t$ (_predicates and equality_)
    - $\mid \phi \lor \psi \mid \neg \phi$ (_Boolean connectives_)
    - $\mid \exists x.\phi$ (_existential quantification_)
- further _connectives_ definable:
  - $\phi \to \psi \triangleq \neg \phi \lor \psi$
  - $s \neq t \triangleq \neg (s=t)$
  - $\phi \land \psi \triangleq \neg(\neg \phi \lor \neg \psi)$
  - $\forall x.\phi \triangleq \neg(\exists x.\neg\phi)$
  - etc.
- fix precedence to avoid parentheses: $\neg$ > $\land, \lor$ > $\exists, \forall$

## Notes

- _first-order logic_ allows general assertions using [[quantifier|quantifiers]]
  - _universal quantifier_ $\forall$
  - _existential quantifier_ $\exists$
    - it is _dual_ to _universal quantifier_ (c.f. [[modal logic]] $\Box$ and $\Diamond$)

## See also

- [[propositional logic]], which is more limited than _first-order logic_

---

## References

1. https://www-sop.inria.fr/members/Martin.Avanzini/teaching/2021/AL/slides/w2.pdf
2. https://en.wikipedia.org/wiki/First-order_logic
3. https://leanprover-community.github.io/logic_and_proof/first_order_logic.html
4. <https://web.stanford.edu/class/archive/cs/cs103/cs103.1232/lectures/04/Condensed%20Slides.pdf>
5. _Forall x: Calgary: an introduction to formal logic_. Calgary: University of Calgary, 2023. \[Online\]. Available: [https://forallx.openlogicproject.org/](https://forallx.openlogicproject.org/)
