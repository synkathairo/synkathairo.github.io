---
layout: page
title: utility function
aliases:
  - payoff function
  - 效用函数
type:
  - definition
  - function
reference: 
course:
  - ECE6263
lecture:
  - ece6263-2
statement: "Let $O$ be a set of outcomes and let $\\succsim$ be a complete, reflexive, and transitive preference relation over $O$. A function $u : O \\to \\mathbb{R}$ is called a **utility function representing** $\\succsim$ if for all $x, y \\in O$, $x \\succsim y \\iff u(x) \\geq u(y)$"
created: 2024-11-09T15:54:50-05:00
tags:
  - game_theory
---
## Definition
Let $O$ be a set of outcomes and let $\succsim$ be a complete, reflexive, and transitive [[preference relation|preference relation]] over $O$. A function $u : O \to \mathbb{R}$ is called a **utility function representing $\succsim$** if for all $x, y \in O$,
$$x \succsim y \iff u(x) \geq u(y)$$

## Definition (lotteries)
Let $\succsim_i$ be a [[preference relation|preference relation]] for player $i$ over the set of [[lottery (probability)|lotteries]] $\mathcal{L}$. A **utility function** $u_i$ representing the preferences of player $i$ is a real-valued function defined over $\mathcal{L}$ satisfying
$$u_i(L_1) \geq u_i(L_2) \iff L_1 \succsim_i L_2 \quad \forall L_1, L_2 \in \mathcal{L}$$

## Notes
Utility function $u$ is a function associating each outcome $x$ with a real number $u(x)$ in a way such that the more an outcome is preferred, the larger the real number associated with it.

If the set of outcomes is *finite*, any complete, reflexive, and transitive preference relation can be easily represented by a utility function.

## See also
- [[Linear utility function]]

___

## References
1. M. Maschler, E. Solan, and Shmuel Zamir, *Game Theory*, Cambridge University Press, 2013, p. 11.
2. https://math.ucr.edu/home/baez/games/games_6.html
