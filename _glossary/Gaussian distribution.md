---
layout: entry
title: Gaussian distribution
aliases:
  - Gaussian concentration
  - Gaussian function
  - normal distribution
  - 正态分布
type:
  - definition
reference: 
lecture:
  - cs6763-2
  - ece6303-6
statement: $\mathrm{Pr}[X=\mu \pm x] \sim \frac{1}{\sigma\sqrt{2\pi}}e^{-x^2/2\sigma^2}$
created: 2023-10-12T14:16:01-04:00
course:
  - CS6763
  - ECE6303
tags:
  - probability
---
## Definition (*Gaussian concentration*)
For $X \sim \mathcal{N}(\mu,\sigma^2)$:
$$\mathrm{Pr}[X=\mu \pm x] \sim \frac{1}{\sigma\sqrt{2\pi}}e^{-x^2/2\sigma^2}$$

See [[Gaussian tail bound]]

in terms of $G$ function, 
#incomplete 

### Probability density function (pdf) of Gaussian distribution
The [[probability density function]] of a **normally distributed** [[random variable]], with [[expected value]] $\mu = b$, and [[variance]] $\sigma^2 = c^2$, is
$$g(x)={\frac {1}{\sigma {\sqrt {2\pi }}}}\exp \left(-{\frac {1}{2}}{\frac {(x-\mu )^{2}}{\sigma ^{2}}}\right)$$

## Gaussian function

Gaussian function takes the form $f(x) = \exp(-x^2)$,
and parametric extension $f(x)=a\exp \left(-{\frac {(x-b)^{2}}{2c^{2}}}\right)$, $a,b,c \in \mathbb{R}$.

## Jointly Gaussian
### two variables
$(X,Y) = \mathcal{N}(\eta_1, \eta_2, \sigma_1^2,\sigma_2^2,r)$
where $|r|\leq 1$  ([[Pearson correlation coefficient|correlation coefficient]])

*pdf* given by
#incomplete 



___
## See also: 
- [[concentration inequality]]

___
## References:
1. [Gaussian function - Wikipedia](https://en.wikipedia.org/wiki/Gaussian_function):
