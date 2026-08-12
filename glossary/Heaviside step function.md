---
layout: entry
title: Heaviside step function
aliases:
  - Step function
type:
  - definition
reference:
course:
  - ECE6253
lecture:
  - ece6253-3
statement: $1(t) = \begin{cases}1 \quad \text{for } t \geq 0 \\ 0 \quad \text{for } t <0 \end{cases}$
created: 2024-10-21T15:57:04-04:00
---

## Definition

One definition (depends on convention of definition at $0$ is:
$$1(t) = \begin{cases}1 \quad \text{for } t \geq 0 \\ 0 \quad \text{for } t <0 \end{cases}$$

## Discrete form

#incomplete

## Further notes

See [[Singularity functions]], $\mu_1(t) = 1(t)$

Related to [[delta function]], $\mu_0(t) = \delta(t)$,

### relationship between delta function and unit function

$$1(t) = \int_{-\infty}^t \delta(\tau) d\tau$$

---

## References

1. https://lpsa.swarthmore.edu/BackGround/ImpulseFunc/ImpFunc.html
2. https://mathworld.wolfram.com/HeavisideStepFunction.html
3. https://en.wikipedia.org/wiki/Heaviside_step_function
