---
layout: entry
title: discrete step function
aliases:
type:
  - definition
reference:
course:
  - ECE6253
lecture:
  - ece6253-3
statement: $1(k) = \begin{cases} 1 \quad \text{for } k \geq 0 \\ 0 \quad \text{otherwise} \end{cases}$
created: 2024-10-21T19:18:21-04:00
---

## Definition

$$1(k) = \begin{cases} 1 \quad \text{for } k \geq 0 \\ 0 \quad \text{otherwise} \end{cases}$$

## Relationship between discrete delta, step, delta response, step response

$$ \begin{aligned}
\delta(k) = 1(k) - 1(k-1) \\
1(k) = \sum_{j=0}^\infty \delta(k-j) \\
h(k,i) = a(k,i) - a(k,i+1) \\
a(k,i) = \sum_{j=0}^\infty h(k,i+j)
\end{aligned}$$
$$
