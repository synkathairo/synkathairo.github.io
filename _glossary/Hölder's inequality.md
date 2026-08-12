---
layout: entry
title: Hölder's inequality
aliases:
  - Hoedler's inequality
  - Holder's inequality
type: 
reference: 
course:
  - CSCI2945
lecture: 
statement: 
created: 2024-04-23T13:34:02-04:00
---
Let $\frac{1}{p}+\frac{1}{q} = 1$, with $p,q >1$, then
$$\|fg\|_{1}\leq \|f\|_{p}\|g\|_{q}$$
more generally for sums,
$$\sum_{k=1}^n \lvert a_k b_k \rvert \leq \left( \sum_{k=1}^n \lvert a_k \rvert^p \right)^{1/p} \left( \sum_{k=1}^n \lvert b_k \rvert^q \right)^{1/q}$$
with equality when $\lvert b_k \rvert = c \lvert a_k \rvert^{p-1}$. $p=q=2$ yields Cauchy's inequality.

For integrals,
$$\int_a^b \lvert f(x) g(x) \rvert dx \leq \left[ \int_a^b \lvert f(x) \rvert^p dx \right]^{1/p} \left[ \int_a^b \lvert g(x) \rvert^q dx \right]^{1/q}$$
with equality when $\lvert g(x) \rvert = c \lvert f(x) \rvert^{p-1}$. $p=q=2$ yields Schwarz's inequality

___

For vector $p$-norms: the [[Lagrange dual problem|dual]] of the $\ell_p$ norm is the $\ell_q$ norm.
e.g. dual of $\ell_2$ norm is $\ell_2$ norm, dual of $\ell_1$ norm is $\ell_\infty$ norm.

___
See also: [[Jensen's inequality]] (note that Hölder's inequality can be derived from this)

___
References
1. https://mathworld.wolfram.com/HoeldersInequalities.html
2. https://math.stackexchange.com/questions/211633/h%C3%B6lder-inequality-from-jensen-inequality
3. https://artofproblemsolving.com/wiki/index.php/H%C3%B6lder%27s_Inequality
4. https://en.wikipedia.org/wiki/H%C3%B6lder%27s_inequality
