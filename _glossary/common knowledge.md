---
layout: entry
title: common knowledge
aliases:
type:
  - definition
reference:
course:
  - ECE6263
lecture:
  - ece6263-6
statement:
created: 2024-12-04T23:05:52-05:00
tags:
  - game_theory
---

## Definition (common knowledge)

### intuition

Fact $F$ is **common knowledge** among players of a game if all players know $F$, akll the players know that all players know $F$, all players know that all players know that all players know $F$, etc. (for finite number of levels).

### formal definition

Let $(N, Y, (\mathcal{F}_i)_{i \in N},\mathfrak{s})$ be an [[Aumann model of incomplete information]], let $A \subseteq Y$ be an [[Aumann model of incomplete information#Definition (event)|event]], and let $\omega \in Y$ be a state of the world. The event $A$ is **common knowledge** in $\omega$ if for every finite sequence of players $i_1, i_2, ..., i_l$,
$$\omega \in K_{i_1} K_{i_2} ... K_{i_{l-1}} K_{i_l}A$$

i.e. event $A$ is common knowledge at state of the world $\omega$ if in $\omega$ every player knows event $A$, every player knows that every player knows event $A$, etc.

## Theorem (common knowledge for connected component of graph)

#incomplete

---

## References

1. M. Maschler, E. Solan, and Shmuel Zamir, _Game Theory_, Cambridge University Press, 2013, p. 331.
2. https://en.wikipedia.org/wiki/Common_knowledge_%28logic%29
