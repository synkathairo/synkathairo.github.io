---
layout: entry
title: compound lottery
aliases:
type:
  - definition
reference:
course:
  - ECE6263
lecture:
statement: A **compound lottery** is a *lottery of lotteries*. A compound lottery is therefore given by $\hat L = [q_1(L_1), q_2(L_1), ..., q_J(L_J)]$
created: 2024-11-09T20:55:41-05:00
tags:
  - game_theory
  - probability
---

## Definition

A **compound lottery** is a _lottery of lotteries_. A compound lottery is therefore given by
$$\hat L = [q_1(L_1), q_2(L_1), ..., q_J(L_J)]$$
where $q_1,...,q_J$ are nonnegative numbers summing to $1$, and $L_1,...,L_J$ are [[lottery (probability)|lotteries]] in $\mathcal{L}$.

Therefore for each $1 \leq j \leq J$ there are nonnegative numbers $(p_k^j)_{k=1}^K$ summing to $1$ such that
$$L_j = [p_1^j(A_1), p_2^j(A_1), ..., p_K^j(A_K)]$$

## Identification with simple lottery

Every [[lottery (probability)|simple lottery]] can be identified with **compound lottery** that yields the simple lottery $L$ with probability $1$,
$$\hat L = [1(L)]$$

---

## References

1. M. Maschler, E. Solan, and Shmuel Zamir, _Game Theory_, Cambridge University Press, 2013, pp. 14-15.
