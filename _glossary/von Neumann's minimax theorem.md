---
layout: page
title: von Neumann's minimax theorem
aliases:
  - 极小极大定理
  - minimax theorem
type:
  - theorem
reference: 
course:
  - ECE6263
lecture:
  - ece6263-2
statement: In any [[matrix game]] $A$, the average [[security strategy|security levels]] of the players in [[mixed strategy|mixed strategies]] coincide, that is, $\overline{V}_m(A) = \min_Y \max_Z y' Az = \max_Z \min_Y y' Az = \underline{V}_m(A)$. This is known as the **value** of the game.
created: 2024-11-15T21:30:40-05:00
tags:
  - game_theory
---

## Theorem
In any [[matrix game]] $A$, the average [[security strategy|security levels]] of the players in [[mixed strategy|mixed strategies]] coincide, that is,
$$\overline{V}_m(A) = \min_Y \max_Z y' Az = \max_Z \min_Y y' Az = \underline{V}_m(A)$$

This is known as the **value** of the game.

## Corollary
#incomplete 

## Theorem (von Neumann, 1928)
Every [[two-player zero-sum game]]  in which a player has a finite number of [[pure strategy|pure strategies]] has a **value** in [[mixed strategy|mixed strategies]].

### Note
The *value* is also known as *saddle-point equilibrium*, so every finite [[zero-sum game|zero-sum]] [[matrix game]] has a [[saddle-point equilibrium (game theory)#Definition (SPE in mixed strategies)|saddle point equilibrium in mixed strategies]].

There is a connection noted by von Neumann to [[topology]], wherefore the "immediate reason for this is the occurrence of a certain "minimum-maximum" problem, familiar from the calculus of variations." (von Neumann 1945)

### finite two-player zero-sum extensive-form game
Every finite two-player zero-sum extensive-form game with perfect information has a value.

___
## See also
- minimax solution, minimax strategies
- minmax strategy, maxmin strategy
- Sion's minimax theorem (a generalization of von Neumann's minimax theorem)
- [[Yao's minimax lemma|Yao's lemma]], an application to randomized algorithms

___
## References
1. M. Maschler, E. Solan, and Shmuel Zamir, *Game Theory*, Cambridge University Press, 2013, pp. 27-28, 151.
2. https://mathworld.wolfram.com/MinimaxTheorem.html
3. https://en.wikipedia.org/wiki/Minimax_theorem
4. v. Neumann, J. (1928). Zur theorie der gesellschaftsspiele. _Mathematische annalen_, _100_(1), 295-320. https://doi.org/10.1007/BF01448847
5. v. Neumann, J. (1945). A model of general economic equilibrium. _The Review of Economic Studies_, _13_(1), 1-9. https://doi.org/10.2307/2296111
	- original: Neumann, V. (1937). Über ein ökonomsiches Gleichungssystem und eine Verallgemeinering des Brouwerschen Fixpunktsatzes. In _Erge. Math. Kolloq._ (Vol. 8, pp. 73-83).