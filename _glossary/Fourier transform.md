---
layout: page
title: Fourier transform
type:
  - function
reference: 
course:
  - ECE6123
lecture:
  - ece6123-2-ft
statement: $\phi(x,u)=e^{j2\pi ux}, u \in (-\infty,+\infty)$
created: 2023-10-18T14:36:01-04:00
---
## 1D Continuous Time Fourier Transform
## Basis functions (complex sinusoidal or exponential)
$$\phi(x,u)=e^{j2\pi ux}, u \in (-\infty,+\infty)$$
$u$ = frequency = # cycles per unit of $x$, $\omega=2\pi u$ (radian freq.)

### Inverse transform
$$f(x)=F^{-1}\{F(u)\}=\int_{-\infty}^\infty F(u)e^{j2\pi ux}\, du$$
### Forward Transform: $F(u) =\langle f(x), \phi(x,u) \rangle$
$$F(u)=F\{f(x)\} = \int_{-\infty}^\infty f(x) e^{-j2\pi u x} \, dx$$
Here we use frequency (rather then radian frequency) to define FT. Inverse transform does not need the factor of $1/2\pi$

## Representation of FT


#incomplete 

___
## References
1. https://mathworld.wolfram.com/FourierTransform.html