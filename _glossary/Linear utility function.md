---
layout: entry
title: Linear utility function
aliases:
  - von Neumann-Morgenstern utility function
type:
  - definition
reference:
course:
  - ECE6263
lecture:
statement: A utility function $u_i$ is called **linear** if for every lottery $L = p_1(A_1), p_2(A_2), ..., p_K(A_K)$, it satisfies $u_i(L) = p_1 u_i(A_1) + p_2 u_i(A_2) + ... + p_K u_i(A_K)$
created: 2024-11-09T20:38:21-05:00
tags:
  - game_theory
---

## Definition

A [[utility function|utility function]] $u_i$ is called **linear** if for every [[lottery (probability)|lottery]] $L = [p_1(A_1), p_2(A_2), ..., p_K(A_K)]$, it satisfies
$$u_i(L) = p_1 u_i(A_1) + p_2 u_i(A_2) + ... + p_K u_i(A_K)$$

## Notes

Note that $u_i$ is a linear function in the probabilities $(p_k)_{k=1}^K$.
If a utility function is linear, the utility of the lottery is the [[expectation|expected value]] of the outcomes.
A linear utility function is also known as a **von Neumann-Morgenstern utility function**.

---

## References

1. M. Maschler, E. Solan, and Shmuel Zamir, _Game Theory_, Cambridge University Press, 2013, p. 14.
