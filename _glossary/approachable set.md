---
layout: page
title: approachable set
aliases: 
type:
  - definition
reference: 
course:
  - ECE6263
lecture: 
statement: 
created: 2024-11-14T15:19:03-05:00
tags:
  - game_theory
---
## Definition
Let $\mathscr{C}$ be a [[convex set|convex]] and closed subset of $\mathbb{R}^L$. The [[set]] $\mathscr{C}$ is **approachable** by decision-maker $i$ if there is a procedure (behavior strategy) for $i$ that guarantees that the average vector payoff $D_t$ approaches the set $\mathscr{C}$ (i.e. $\operatorname{dist}(D_t,\mathscr{C}) \to 0$ almost surely as $t \to \infty$), regardless of the choices of the opponent $-i$. 

___
## References
1. Hart S, Mas-Colell A. *A Simple Adaptive Procedure Leading to Correlated Equilibrium*. *Econometrica*, 2000; 68(5): 1127-1150.
2. https://ocw.mit.edu/courses/18-657-mathematics-of-machine-learning-fall-2015/b21de17384706de8db8078cd767d459e_MIT18_657F15_L22.pdf