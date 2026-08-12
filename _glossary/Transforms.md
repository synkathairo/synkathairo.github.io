---
layout: entry
title: Transforms
type:
  - definition
reference: 
course:
  - ECE6123
lecture:
  - ece6123-2-ft
statement: Transforms are decompositions of a function $f(x)$ into some basis functions $Ø(x, u)$. $u$ indicates which basis function.
created: 2023-10-24T21:04:23-04:00
---

Transforms are decompositions of a function $f(x)$ into some basis functions $Ø(x, u)$. $u$ indicates which basis function.

## Important transform pairs:
- $f(x)=1 \Leftrightarrow F(u)=\delta(u)$
- $f(x)=e^{j2\pi f_0x} \Leftrightarrow F(u)=\delta(u- f_0)$
- $f(x)=\cos(2\pi f_0x) \Leftrightarrow F(u)=\frac{1}{2}(\delta(u-f_0)+\delta(u+f_0))$
- $f(x)=\sin(2\pi f_0x) \Leftrightarrow F(u)=1(\delta(u-f_0)-\delta(u+f_0))$
- $f (x) = \begin{cases} 1, x < x_0 \\ 0, \text{otherwise} \end{cases} \Leftrightarrow F(u) = \frac{\sin(2\pi x_0u)}{\pi u} = 2x_0 \mathrm{sinc}(2x_0u)$, where, $\mathrm{sinc}(t)=\frac{\sin(\pi t)}{\pi t}$

[[delta function]]: $\delta(x)=\infty$, if $x=0$, else (when $x \neq 0$), $\delta(x)=0$. $\int_{-\infty}^{\infty} \delta(x) \, dx  = 1$

___
Decomposition in vector space:

$f = \alpha_1 \phi_1 + \alpha_2 \phi_2 + \alpha_3 \phi_3$

## See also
- [[Laplace transform]]
- [[Fourier transform]]
