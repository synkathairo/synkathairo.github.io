---
layout: entry
title: modal logic
aliases:
  - 模态逻辑
type:
reference:
course:
lecture:
statement:
created: 2024-12-04T19:54:27-05:00
tags:
  - modal_logic
  - logic
---

## Overview of logics

| **Logic**       | **Symbols** | **Expressions Symbolized**           |
| --------------- | ----------- | ------------------------------------ |
| Modal Logic     | $\Box$      | It is _necessary_ that …             |
|                 | $\Diamond$  | It is _possible_ that …              |
| Deontic Logic   | $O$         | It is _obligatory_ that …            |
|                 | $P$         | It is _permitted_ that …             |
|                 | $F$         | It is _forbidden_ that …             |
| Temporal Logic  | $G$         | It _will always be the case_ that …  |
|                 | $F$         | It _will be the case_ that …         |
|                 | $H$         | It _has always been the case_ that … |
|                 | $P$         | It _was the case_ that …             |
| Doxastic Logic  | $Bx$        | $x$ _believes_ that …                |
| Epistemic Logic | $Kx$        | $x$ _knows_ that …                   |

alethic, deontic, axiological, epistemic, doxastic, boulomaic modal operators ...

## Kripke system, $\mathbf{K}$

(Saul Kripke)

$\mathbf{K}$ results from adding the following to the principles of [[propositional logic]].

- Necessitation Rule: If $A$ is a theorem of $\mathbf{K}$, then so is $\Box A$.
- Distribution Axiom: $\Box ( A \to B ) \to ( \Box A \to \Box B )$ .

#incomplete

[[S5 modal logic]]

## See also

- [[modal collapse]]

---

## References

1. https://plato.stanford.edu/entries/logic-modal/
2. https://plato.stanford.edu/entries/logics-for-games/
3. https://ai.stanford.edu/~epacuit/classes/modal-spr2012/ck-modal.pdf
4. Michael C. Nagle, S. K. Thomason. "The Extensions of the Modal Logic K5", _The Journal of Symbolic Logic_, Vol. 50, No. 1 (Mar., 1985), pp. 102-109 (8 pages) https://doi.org/10.2307/2273793
5. Linh Anh Nguyen. "Sequent-like Tableau Systems with the Analytic Superformula Property for the Modal Logics KB, KDB, K5, KD5". https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=d35d37361c45213917f0f9644d790c0e87d1ef54
6. Olivier Gasquet, Andreas Herzig, Bilal Said, François Schwarzentruber. "Kripke’s Worlds An introduction to modal logics via the tableau method", _ESSLLI 2010_, Institut de Recherche en Informatique de Toulouse (IRIT), Université de Toulouse, 2010. https://www.irit.fr/~Andreas.Herzig/Cours/CTableaux/Esslli10.pdf
7. R. Zach, _Boxes and Diamonds: An Open Introduction to Modal Logic_. S.l.: Independently published, 2019. [Online]. Available: [https://bd.openlogicproject.org/](https://bd.openlogicproject.org/)
8. <https://en.wikipedia.org/wiki/Modal_operator>
9. <https://iep.utm.edu/modal-lo/>
