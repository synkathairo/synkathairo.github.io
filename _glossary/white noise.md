---
layout: page
title: white noise
aliases: 
type:
  - definition
reference: 
course:
  - ECE6303
lecture:
  - ece6303-12
statement: 
created: 2025-05-08T20:11:45-04:00
tags:
  - stochastic_processes
---
## Definition

- Assume $E[X(t)] = 0$, then $X(t)$ is **white noise** if $R(t_1, t_2) = E[X(t_1) X(t_2)] = 0$ for any $t_1, t_2$
- can write as $R(t_1, t_2) = q(t_1) \delta(t_1 - t_2)$ for some function 
	- suppose $q(t_1) = q$ constant, then $R(t_1, t_2) = q \delta(t_2 - t_1)$, thus $X(t)$ is [[wide sense stationary|WSS]]

(where $R(t_1, t_2)$ is [[autocorrelation]])