---
layout: entry
title: Aumann situation of incomplete information
aliases: 
type:
  - definition
reference: 
course:
  - ECE6263
lecture:
  - cs6763-6
statement: 
created: 2024-12-04T20:55:00
tags:
  - game_theory
---
## Definition (Aumann situation of incomplete information)
An **Aumann situation of incomplete information** over a set of *states of nature* $S$ is a quintuple $(N, Y, (\mathcal{F}_i)_{i \in N}, \mathfrak{s}, \omega_*)$, where $(N, Y, (\mathcal{F}_i)_{i \in N}, \mathfrak{s})$ is an [[Aumann model of incomplete information]] and $\omega_* \in Y$.

State $\omega_*$ is the "*true state of the world*", each player knows the partition element $F_i (\omega_*)$ in his information partition that contains the true state.

Describes knowledge structure particular state of world, i.e. a particular reality. Compare [[Aumann model of incomplete information|models of incomplete information]] which allow us to analyze all possible situations.

## Theorem (knowledge hierarchy)
Every [[Aumann situation of incomplete information|situation of incomplete information]] $(N, Y, (\mathcal{F}_i)_{i \in N}, \mathfrak{s}, \omega_*)$ uniquely determines a [[knowledge hierarchy]] over the set of states of the world $Y$ in state of the world $\omega_*$.

For every subset $C \subseteq S$ of the set of states of nature, can consider the event that contains all states of the world whose state of nature is an element of $C$,
$$\mathfrak{s}^{-1}(C) := \{ \omega \in Y : \mathfrak{s}(\omega) \in C \}$$

### Corollary
Every situation of incomplete information $(N, Y, (\mathcal{F}_i)_{i \in N}, \mathfrak{s}, \omega_*)$ uniquely determines a [[knowledge hierarchy]] over the set of states of nature $S$ in state of world $\omega_*$.

___
## References
1. M. Maschler, E. Solan, and Shmuel Zamir, *Game Theory*, Cambridge University Press, 2013, p. 324.
