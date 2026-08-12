---
layout: entry
title: dove-hawk game
aliases: 
type:
  - game
reference: 
course:
  - ECE6263
lecture:
  - ece6263-5
statement: D H<br /> D (4,4) (2,8) <br /> H (8,2) (1,1)
created: 2024-11-14T16:41:21-05:00
tags:
  - game_theory
---
## Game
Suppose two types of animals, hawks (aggressive) and doves (peaceful).

Hawk aggressively repels invader of territory, dove yields. If both doves, one leaves with probability $1/2$. If both are hawks, fight ensures, both injured, at most one will remain in the territory and produce offspring.

|              |      | **Invader** |              |
| ------------ | ---- | ----------- | ------------ |
|              |      | Dove ($y$)  | Hawk ($1-y$) |
| **Defender** | Dove | $4, 4$      | $2, 8$       |
|              | Hawk | $8, 2$      | $1, 1$       |

"Single species" population, as both players have same set of strategies, payoff functions satisfy $u_1(s_1,s_2) = u_2(s_1,s_2)$, game is symmetric.

Describe a **mutation**, an individual in the population characterized by a particular behavior: type hawk or type dove. Type $x$ where $0 \leq x \leq 1$ (dove with probability $x$), hawk with probability $1-x$.

### Mutation population game:

|              |      | **Population** |              |
| ------------ | ---- | -------------- | ------------ |
|              |      | Dove ($y$)     | Hawk ($1-y$) |
| **Mutation** | Dove | $4, 4$         | $2, 8$       |
|              | Hawk | $8, 2$         | $1, 1$       |
The column player is the population, the row player as the mutation chooses its type.

Population is implementing a fixed mixed strategy \[$y$(Dove), $(1-y)$(Hawk)\], behaving with probability $y$ as a dove, $1-y$ as a hawk.

Expected payoff of a mutation from a random encounter is 
- $4y + 2(1-y)$ if it is a dove,  
- $8y + (1-y)$ if it is a hawk, 
- $x(4y + 2(1-y)) + (1-x)(8y + (1-y))$ if of type $x$.

### Equal payoffs
|              |      | **Population** |              |
| ------------ | ---- | -------------- | ------------ |
|              |      | Dove ($y$)     | Hawk ($1-y$) |
| **Mutation** | Dove | $4, 4$         | $2, 2$       |
|              | Hawk | $2, 2$         | $2, 2$       |
In this case the dove strategy ($x^* = 1$) is an [[evolutionarily stable strategy]]:
$$(1-\epsilon) u_1(x, x^*) + \epsilon u_1(x,x) = y \cdot 2 + (1-y) \cdot 2 < y \cdot 4 + (1-y) \cdot 2 = (1-\epsilon) u_1(x^*, x^*) + \epsilon u_1(x^*, x)$$
note that $\varepsilon$ represents the proportion of mutations

## Notes
- example of an evolutionary game

___
## References
1. M. Maschler, E. Solan, and Shmuel Zamir, *Game Theory*, Cambridge University Press, 2013, p. 187-189.
