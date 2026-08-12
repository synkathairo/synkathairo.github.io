---
layout: entry
title: two player zero-sum game
aliases:
  - two-person zero-sum game
type:
  - definition
reference: 
course:
  - ECE6263
lecture:
  - cs6763-2
statement: 
created: 2024-11-09T23:59:17-05:00
tags:
---
## Definition
A *two-player game* is a [[zero-sum game|zero-sum game]] if for each pair of *strategies* $(s_I, s_{II})$ one has
$$u_I (s_I, s_{II}) + u_{II} (s_I, s_{II}) = 0$$

### Notes
Assuming that the players have [[Linear utility function|von Neumann-Morgenstern utilities]], any player's [[utility function|utility function]] is only determined only up to a positive [[affine transformation|affine transformation]].

### Maxmin and minmax strategies
As payoffs satisfy $u_I + u_{II} = 0$, we may focus on one function $u_1 = u$, $u_{II} = -u$. Suppose player 1 (P1) seeks to maximize, and player 2 (P2) seeks to minimize (note: this convention is reversed in some textbooks). 

Then, P1's maxmin value is given by
$$v_I = \max_{s_I \in S_I} \min_{s_{II} \in S_{II}} u(s_I, s_{II})$$
and P2's maxmin value is 
$$v_{II} = \min_{s_{II} \in S_{II}} \max_{s_I \in S_I}  u(s_I, s_{II})$$

#### Security level and security strategy
See [[theorem, security levels of matrix game players]]
$$\min_i a_{ij^*} = \underline{V}(A) \leq \overline{V}(A) = \max_j a_{i^* j}$$


## Finite two-person zero-sum game
Game where
- player set: $N = \{1,2\}$
- action set $A_i$ for player $i$: $a = (a_1, a_2) \in A = A_1 \times A_2$, $A_1$ and $A_2$ are finite sets
- [[utility function|utility function]] (or payoff function) for player $i$: 
	- $u_i: A \mapsto \mathbb{R}$
	- $u = (u_1, u_2)$ such that $u_1(a) + u_2(a) = 0$ for all $a \in A$

### Notes
It is a [[zero-sum game]] and a [[game of pure competition]]


___
## References
1. M. Maschler, E. Solan, and Shmuel Zamir, *Game Theory*, Cambridge University Press, 2013, pp. 111-116.
2. T. Başar and G.J. Olsder, *Dynamic Noncooperative Game Theory*, 2nd edition, Classics in Applied Mathematics, SIAM, Philadelphia, 1999.
3. https://bpb-us-e1.wpmucdn.com/wp.nyu.edu/dist/5/2123/files/2019/12/Lecture-2-Scribe.pdf
