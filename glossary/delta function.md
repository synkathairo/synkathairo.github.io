---
layout: entry
title: delta function
aliases:
  - Dirac delta
  - unit impulse
  - δ-function
type:
  - function
reference:
course:
  - ECE6123
  - ECE6253
lecture:
  - ece6123-2-ft
  - ece6253-3
statement: $\delta(x)=\infty$, if $x=0$, else (when $x \neq 0$), $\delta(x)=0$. $\int_{-\infty}^{\infty} \delta(x) \, dx  = 1$
created: 2023-10-25T00:07:13-04:00
---

i.e. Dirac delta function, unit impulse

$\delta(x)=\infty$, if $x=0$, else (when $x \neq 0$), $\delta(x)=0$. $\int_{-\infty}^{\infty} \delta(x) \, dx  = 1$

## a fundamental property of the delta function:

$$\int_{-\infty}^\infty f(x) \delta(x-a)\, dx = f(a)$$
and for $\epsilon > 0$,
$$\int_{a-\epsilon}^{a+\epsilon} f(x) \delta(x-a)\, dx = f(a)$$

## additional identities (for $x \neq a$):

$$ \begin{aligned}
\delta(x-a)=0 \\
\delta(a \, x) = \frac{1}{|a|} \delta(x) \\
\delta(x^2 - a^2) = \frac{1}{2|a|}[\delta(x+a) + \delta(x-a)]
\end{aligned}$$
___

one of the [[Singularity functions]],
$$\mu_0(t) \triangleq \delta(t)$$
with impulse/Dirac delta
$$\int_{-\infty}^t f(\lambda) \delta(\lambda - \tau)d\lambda = \begin{cases}0 \quad \text{for } t < \tau \\ f(\tau) \quad \text{for } t > \tau \end{cases}$$

**[[Sifting property]]**:
![[Sifting property#Continuous form]]

___
Discrete form: [[Kronecker delta]]

Derivative of [[Heaviside step function]]

![[Heaviside step function#relationship between delta function and unit function]]

___

References:
1. P. A. M. Dirac, _The Principles of Quantum Mechanics_. Oxford University Press, 1930.
2. https://en.wikipedia.org/wiki/Dirac_delta_function
3. https://mathworld.wolfram.com/DeltaFunction.html
4. https://lpsa.swarthmore.edu/BackGround/ImpulseFunc/ImpFunc.html
$$
