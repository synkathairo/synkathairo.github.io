---
layout: page
title: S5 modal logic
aliases:
  - S5模态逻辑
  - Kripke's S5 system
type:
  - definition
  - logic
reference: 
course:
  - ECE6263
lecture:
  - ece6263-6
statement: 
created: 2024-12-04T19:57:22-05:00
tags:
  - game_theory
  - modal_logic
  - logic
---
## Definition
Consider axioms of [[propositional logic]] to hold. In addition,
#incomplete 

## Kripke's S5 system (formulated via knowledge operators)
[[Aumann model of incomplete information#Definition (operator)|Knowledge operator]] $K_i$ of player $i$ satisfies following five properties, collectively known as **Kripke's S5 System**:
1. $K_i Y = Y$: player knows $Y$ is set of all states of the world
2. $K_i A \cap K_i B = K_i (A \cap B)$: if player knows event $A$ and knows event $B$ ten he knows event $A \cap B$.
3. $K_i A \subseteq A$: if player knows event $A$ then event $A$ *obtains*
4. $K_i K_i A = K_i A$: if player knows event $A$ then he knows he knows event $A$ and vice versa
5. $(K_i A)^c = K_i((K_i A)^C)$: if the player does not know event $A$, then he knows he does not know event $A$, and vice versa

## Notes
This is a type of [[modal logic]]. It may be alternatively formulated using the language of modal operators, 
#incomplete 

$\mathbf{K}$ logic 

___

## References
1. https://plato.stanford.edu/entries/logic-modal/#ModLog
2. M. Maschler, E. Solan, and Shmuel Zamir, _Game Theory_, Cambridge University Press, 2013, p. 327.
3. https://ncatlab.org/nlab/show/S5+modal+logic
4. https://math.stackexchange.com/questions/815455/why-is-square-square-square-and-diamond-diamond-diamond-in-the-s5-modal
5. https://www3.cs.stonybrook.edu/~cse371/13(modal).pdf
6. https://en.wikipedia.org/wiki/S5_(modal_logic)
7. https://mally.stanford.edu/s5.html
8. https://en.wikipedia.org/wiki/Alvin_Plantinga#Modal_ontological_argument