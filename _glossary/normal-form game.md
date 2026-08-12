---
layout: entry
title: normal-form game
aliases:
  - strategic-form game
  - matrix-form game
  - strategic normal form
type:
  - definition
reference:
course:
  - ECE6263
lecture:
  - ece6263-2
statement: Lists what payoffs players get as function of their actions. Suitable representation of a zero-sum game when each player's information is static in nature, as it suppresses all dynamic aspects of the decision problem.
created: 2024-11-15T19:30:15-05:00
tags:
  - game_theory
---

## Definition

Lists what payoffs players get as function of their actions. Suitable representation of a [[zero-sum game]] when each player's information is static in nature, as it suppresses all dynamic aspects of the decision problem.

### finite $n$-player normal form game $\langle N, A, u \rangle$

- Player (index) set: $N = \{1,2,...,n\}$
- Action set $A_i$ for player $i$: $a = (a_1, a_2, ..., a_n) \in A = A_1 \times A_2 \times ... \times A_n$ is an action profile
- [[utility function|Utility function]] (or payoff function) for player $i$: $u_i : A \mapsto \mathbb{R}$, $u = (u_1, u_2, ..., u_n)$ is a profile of utility

#### $N$-person finite static game in normal form

- players make decisions independently and each one unilaterally seeks the minimum possible loss, taking into account possible rational choices of the other players

## Matrix description

Games in strategic form are sometimes are sometimes called [[matrix game|matrix games]] due to being described by matrices. This is an $n$-dimensional matrix when there are $n \geq 2$ players. Each cell contains a vector with $n$ coordinates, containing payoffs to the $n$ players. Named **bimatrix game** when $n=2$, as there are two payoff matrices, one for each player.

---

## Compare

- [[extensive form game]] (tree)

## References

1. Quanyuan Zhu, Lecture 2 of ECE-GY 6263 Game Theory, Fall 2019. https://bpb-us-e1.wpmucdn.com/wp.nyu.edu/dist/5/2123/files/2019/12/Lecture-2-Scribe.pdf
2. M. Maschler, E. Solan, and Shmuel Zamir, _Game Theory_, Cambridge University Press, 2013, pp. 77-78.
3. T. Başar and G.J. Olsder, _Dynamic Noncooperative Game Theory_, 2nd edition, Classics in Applied Mathematics, SIAM, Philadelphia, 1999, p. 88.
