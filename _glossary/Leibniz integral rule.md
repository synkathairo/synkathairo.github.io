---
layout: page
title: Leibniz integral rule
aliases:
  - Leibniz's rule of integration
type:
  - theorem
reference: 
course: 
lecture: 
statement: For an integral of the form $\int_{a(z)}^{b(z)} f(x,z)\ dx$, i.e. a definite integral whose limits are functions of the differential variable,  $\frac{\partial}{\partial z}\int_{a(z)}^{b(z)}f(x,z)\ dx = \int_{a(z)}^{b(z)}\frac{\partial f}{\partial z}\ dx+f(b(z),z)\frac{\partial b}{\partial z}-f(a(z),z)\frac{\partial a}{\partial z}$
created: 2025-03-11T18:45:04-04:00
tags:
  - calculus
---
## Theorem

For an integral of the form $\int_{a(z)}^{b(z)} f(x,z)\ dx$, 
$$\frac{\partial}{\partial z}\int_{a(z)}^{b(z)}f(x,z)\ dx = \int_{a(z)}^{b(z)}\frac{\partial f}{\partial z}\ dx+f(b(z),z)\frac{\partial b}{\partial z}-f(a(z),z)\frac{\partial a}{\partial z}$$

___
## References
1. https://mathworld.wolfram.com/LeibnizIntegralRule.html
2. https://en.wikipedia.org/wiki/Leibniz_integral_rule
3. https://zackyzz.github.io/feynman.html
4. https://tracingcurves.wordpress.com/2023/04/02/leibniz-rule-differentiate-under-the-integral-sign-general-case/