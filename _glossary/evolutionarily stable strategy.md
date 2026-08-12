---
layout: entry
title: evolutionarily stable strategy
aliases:
  - ESS
  - 进化稳定策略
type:
  - definition
reference: 
course:
  - ECE6263
lecture:
  - ece6263-5
statement: A [[mixed strategy]] $x^*$ in a two-player symmetric game is an **evolutionarily stable strategy** (ESS) if for every mixed strategy $x$ that differs from $x^*$ there exists $\epsilon_0 = \epsilon_0(x) > 0$ such that, for all $\epsilon \in (0,\epsilon_0)$, $(1-\epsilon) u_1(x, x^*) + \epsilon u_1(x,x) < (1-\epsilon) u_1(x^*, x^*) + \epsilon u_1(x^*, x)$
created: 2024-11-14T16:45:52-05:00
tags:
  - game_theory
---
## Definition
A [[mixed strategy]] $x^*$ in a two-player symmetric game is an **evolutionarily stable strategy** (ESS) if for every mixed strategy $x$ that differs from $x^*$ there exists $\epsilon_0 = \epsilon_0(x) > 0$ such that, for all $\epsilon \in (0,\epsilon_0)$,
$$(1-\epsilon) u_1(x, x^*) + \epsilon u_1(x,x) < (1-\epsilon) u_1(x^*, x^*) + \epsilon u_1(x^*, x)$$
where $u_1$ denotes the [[utility function]] for player 1

## Application to dove-hawk population game
- see [[dove-hawk game#Equal payoffs]]

## Theorem (symmetric Nash equilibrium)
If $x^*$ is an *evolutionarily stable strategy* in a two-player symmetric game, then $(x^*, x^*)$ is a symmetric [[Nash equilibrium]] in the game.

## Theorem (condition for ESS)
A strategy $x^*$ is *evolutionarily stable* if and only if for each $x \neq x^*$ only one of the following two conditions obtains:
- $u_1(x, x^*) < u_1(x^*, x^*)$, or
	- (if a mutation deviates from $x^*$, it will lose in its encounters with the normal population)
- $u_1(x, x^*) < u_1(x^*, x^*)$ and $u_1(x, x) < u_1(x^*, x)$
	- (if the payoff a mutation receives from encountering a normal individual is equal to that received by a normal individual encountering a normal individual, mutation will receive a smaller payoff when it encounters the same mutation than a normal individual would receive when encountering the mutation)

## Corollary (strict symmetric equilibrium)
In a symmetric game, if $(x^*, x^*)$ is a strict symmetric equilibrium then $x^*$ is an *evolutionarily stable equilibrium*.

(recall strict symmetric equilibrium means no player can change strategy without reducing payoff)

## Notes
- Vincent et al. 2011 generalize ESS to evolutionary games governed by a system of ODEs 

___
## References
1. M. Maschler, E. Solan, and Shmuel Zamir, *Game Theory*, Cambridge University Press, 2013, p. 190.
2. Smith, J. M., & Price, G. R. (1973). The logic of animal conflict. _Nature_, _246_(5427), 15-18. https://doi.org/10.1038/246015a0
3. https://wiki.mbalib.com/wiki/%E8%BF%9B%E5%8C%96%E7%A8%B3%E5%AE%9A%E7%AD%96%E7%95%A5
4. https://knowledgehive.github.io/Game-Theory/lecture%2012.html
5. https://plato.stanford.edu/entries/game-evolutionary/
6. Vincent, Thomas L., Tania L.S. Vincent, and Yosef Cohen. 2011. “Darwinian Dynamics and Evolutionary Game Theory.” _Journal of Biological Dynamics_ 5 (3): 215–26. [https://doi.org/10.1080/17513758.2010.526306](https://doi.org/10.1080/17513758.2010.526306).
7. https://vknight.org/Year_3_game_theory_course/Content/Chapter_11_Population_Games_and_Evolutionary_stable_strategies/
