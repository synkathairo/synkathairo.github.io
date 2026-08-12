---
layout: page
title: knowledge hierarchy
aliases: 
type:
  - definition
reference: 
course:
  - ECE6263
lecture:
  - ece6263-6
statement: A **knowledge hierarchy** among players in *state of the world* $\omega$ over the set of states of the world $Y$ is a system of "yes" or "no" answers to each question of the form "in a state of the world $\omega$, does player $i_1$ know that player $i_2$ knows that player $i_3$ knows... that player $i_l$ knows event $A$"? for any event $A \subseteq Y$ and any finite sequence $i_1, i_2, ...,i_l$ of players in $N$.
created: 2024-12-04T22:35:43-05:00
tags:
  - game_theory
---
## Definition
A **knowledge hierarchy** among players in *state of the world* $\omega$ over the set of states of the world $Y$ is a system of "yes" or "no" answers to each question of the form "in a state of the world $\omega$, does player $i_1$ know that player $i_2$ knows that player $i_3$ knows... that player $i_l$ knows event $A$"? for any event $A \subseteq Y$ and any finite sequence $i_1, i_2, ...,i_l$ of players in $N$.

Answer to this equation is affirmative if $\omega \in K_{i_1} K_{i_2} ... K_{i_l}A$, negative otherwise.

Since for every event $A$ and sequence of players $i_1, i_2, ...,i_l$, event $K_{i_1} K_{i_2} ... K_{i_l}A$ is well-denited and calculable in an [[Aumann model of incomplete information]], every state of the world defines a *knowledge hierarchy*. 

This may be formalized as a [[Aumann situation of incomplete information#Theorem (knowledge hierarchy)|theorem]].

___
## References
1. M. Maschler, E. Solan, and Shmuel Zamir, *Game Theory*, Cambridge University Press, 2013, pp. 330-331.