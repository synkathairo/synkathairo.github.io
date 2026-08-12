---
layout: page
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
| Modal Logic     | $\Box$      | It is *necessary* that …             |
|                 | $\Diamond$  | It is *possible* that …              |
| Deontic Logic   | $O$         | It is *obligatory* that …            |
|                 | $P$         | It is *permitted* that …             |
|                 | $F$         | It is *forbidden* that …             |
| Temporal Logic  | $G$         | It *will always be the case* that …  |
|                 | $F$         | It *will be the case* that …         |
|                 | $H$         | It *has always been the case* that … |
|                 | $P$         | It *was the case* that …             |
| Doxastic Logic  | $Bx$        | $x$ *believes* that …                |
| Epistemic Logic | $Kx$        | $x$ *knows* that …                   |

alethic, deontic, axiological, epistemic, doxastic, boulomaic modal operators ...

## Kripke system, $\mathbf{K}$ 
(Saul Kripke)

$\mathbf{K}$ results from adding the following to the principles of [[propositional logic]]. 
- Necessitation Rule:   If $A$ is a theorem of $\mathbf{K}$, then so is $\Box A$.
- Distribution Axiom: $\Box ( A \to B ) \to ( \Box A \to \Box B )$ .

#incomplete 

[[S5 modal logic]]

## See also

- [[modal collapse]]


___
## References
1. https://plato.stanford.edu/entries/logic-modal/
2. https://plato.stanford.edu/entries/logics-for-games/
3. https://ai.stanford.edu/~epacuit/classes/modal-spr2012/ck-modal.pdf
4. Michael C. Nagle, S. K. Thomason. "The Extensions of the Modal Logic K5", *The Journal of Symbolic Logic*, Vol. 50, No. 1 (Mar., 1985), pp. 102-109 (8 pages) https://doi.org/10.2307/2273793
5. Linh Anh Nguyen. "Sequent-like Tableau Systems with the Analytic Superformula Property for the Modal Logics KB, KDB, K5, KD5". https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=d35d37361c45213917f0f9644d790c0e87d1ef54
6. Olivier Gasquet, Andreas Herzig, Bilal Said, François Schwarzentruber. "Kripke’s Worlds An introduction to modal logics via the tableau method", *ESSLLI 2010*, Institut de Recherche en Informatique de Toulouse (IRIT), Université de Toulouse, 2010. https://www.irit.fr/~Andreas.Herzig/Cours/CTableaux/Esslli10.pdf
7. R. Zach, _Boxes and Diamonds: An Open Introduction to Modal Logic_. S.l.: Independently published, 2019. [Online]. Available: [https://bd.openlogicproject.org/](https://bd.openlogicproject.org/)
8. <https://en.wikipedia.org/wiki/Modal_operator>
9. <https://iep.utm.edu/modal-lo/>