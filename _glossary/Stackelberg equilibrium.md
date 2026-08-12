---
layout: page
title: Stackelberg equilibrium
aliases:
type:
  - definition
reference:
course:
  - ECE6263
lecture:
statement: In a *two-person finite game* with P1 as the leader, [[strategy]] $\gamma^{1*} \in \Gamma^1$ is called a **Stackelberg equilibrium strategy** for the leader, if $\max_{\gamma^2 \in R^2(\gamma^{1*})} J^1(\gamma^{1*},\gamma^2) = \min_{\gamma^1 \in \Gamma^1} \max_{\gamma^2 \in R^2(\gamma^1)} J^1(\gamma^1,\gamma^2) \triangleq J^{1*}$
created: 2024-11-01T14:31:49-04:00
tags:
  - game_theory
---
## Definition (Stackelberg game)
Divide the game into a leader who moves first and followers ([[Stackelberg game]])

## Definition (Stackelberg equilibrium)
In a *two-person finite game* with P1 as the leader, [[strategy]] $\gamma^{1*} \in \Gamma^1$ is called a **Stackelberg equilibrium strategy** for the leader, if
$$\max_{\gamma^2 \in R^2(\gamma^{1*})} J^1(\gamma^{1*},\gamma^2) = \min_{\gamma^1 \in \Gamma^1} \max_{\gamma^2 \in R^2(\gamma^1)} J^1(\gamma^1,\gamma^2) \triangleq J^{1*}$$
where $J^{1*}$ is the **Stackelberg cost** of the leader. (similar if P2 is leader with superscripts changed)

## Stackelberg solution

#incomplete 

## Notes

- intuition: player 1 chooses a strategy, and player 2 chooses the best strategy based on player 1's move, and then according to both choices, player 1 obtains a utility
- assuming player 2 chooses best strategy utility-wise by whatever player 1 chooses, then player 1 may determine which utility would result from each choice as the leader, on the assumption that the final utility results from the permutation of that choice and the choice of player 2 optimal based on prior choice of player 1
- thus, player 1 chooses optimal strategy based on this assumption
- considerations: bimatrix game vs single matrix (or zero-sum) game
	- under zero-sum game, Stackelberg equilibrium and Nash equilibrium coincide

## See also
- $N$-person nonzero-sum finite game
- [[extensive form game]]
- sequential equilibrium
- feedback Stackelberg solution
- [[Nash equilibrium]]

___
## References
1. T. Başar and G.J. Olsder, *Dynamic Noncooperative Game Theory*, 2nd edition, Classics in Applied Mathematics, SIAM, Philadelphia, 1999, pp. 131-148, 196-197.
	- see sections 3.6, 4.4, 4.7
2. https://bpb-us-e1.wpmucdn.com/wp.nyu.edu/dist/5/2123/files/2019/12/Lecture_Scribe-2.pdf
3. https://www.columbia.edu/~ck2945/files/ai_games_markets/lecture_note_16_stackelberg_games.pdf
4. https://www.columbia.edu/~ck2945/files/main_ai_games_markets.pdf chapter 16
5. https://web.stanford.edu/~rjohari/teaching/notes/246_lecture7_2007.pdf
6. https://www.cs.cmu.edu/~conitzer/stackelbergJAIR11.pdf