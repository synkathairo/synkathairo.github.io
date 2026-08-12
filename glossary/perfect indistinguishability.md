---
layout: entry
title: perfect indistinguishability
aliases:
  - perfectly indistinguishable
type:
  - definition
reference:
course:
  - CSCI3210
lecture:
statement:
created: 2024-11-20T21:06:26-05:00
tags:
---

## Definition

An [[encryption scheme]] is **perfectly indistinguishable** if $\forall m_0, m_1 \in \mathcal{M}$, $forall c \in \mathcal{C}$,
$$\Pr[\operatorname{Enc}_\mathbf{K}(m_0)=c] = \Pr[\operatorname{Enc}_\mathbf{K}(m_1)=c]$$
where $\mathbf{K}$ is uniform over $\mathcal{K}$.

(with $\mathcal{M}$ message space, $\mathcal{K}$ key space, $\mathcal{C}$ cipher space)
