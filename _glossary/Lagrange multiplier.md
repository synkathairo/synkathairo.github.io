---
layout: page
title: Lagrange multiplier
type:
  - algorithm
reference: 
course:
  - ECE6123
  - CSCI2945
lecture:
  - ece6123-7-imagerecovery
statement: Method of Lagrange multipliers 1. Solve the following system of equations:$$\begin{aligned}\nabla f\left( {x,y,z} \right) & = \lambda \,\,\nabla g\left( {x,y,z} \right)\\ g\left( {x,y,z} \right) & = k\end{aligned}$$ 2. Plug in all solutions, $(x,y,z)$, from the first step into $f(x,y,z)$ and identify the minimum and maximum values, provided they exist and $\nabla g \ne \vec{0}$ at the point. The constant, $λ$ is called the **Lagrange Multiplier**.
created: 2023-11-02T22:40:20-04:00
---
## Overview
We want to optimize (i.e. find the minimum and maximum value of) a function, $f(x,y,z)$, subject to the constraint $g(x,y,z)=k$. Again, the constraint may be the equation that describes the boundary of a region or it may not be. The process is actually fairly simple, although the work can still be a little overwhelming at times.

## Method of Lagrange multipliers
1. Solve the following system of equations:
$$\begin{aligned}\nabla f\left( {x,y,z} \right) & = \lambda \,\,\nabla g\left( {x,y,z} \right)\\ g\left( {x,y,z} \right) & = k\end{aligned}$$
2. Plug in all solutions, $(x,y,z)$, from the first step into $f(x,y,z)$ and identify the minimum and maximum values, provided they exist and $\nabla g \ne \vec{0}$ at the point.
The constant, $λ$ is called the **Lagrange Multiplier**.

#incomplete 
## Lagrange multiplier theorem
#incomplete 
## Notes
Why are Lagrange multipliers chosen as such? This is so that for example, $\partial L /\partial \lambda$ brings back the constraint, and so forth.

___

$$\displaystyle {\begin{aligned}{\underset {x,y}{\text{maximize}}}\quad &f(x,y)\\{\text{subject to}}\quad &g(x,y)=0.\end{aligned}}$$

___
## References:
1. https://en.wikipedia.org/wiki/Lagrange_multiplier
2. https://tutorial.math.lamar.edu/classes/calciii/lagrangemultipliers.aspx
3. https://www.math.cmu.edu/~gautam/sj/teaching/2016-17/269-vector-analysis/pdfs/lagrange.pdf
4. Gilbert Strang, _Linear Algebra and its Applications_, ch. 6.4, p. 378, 4th ed., 2006.
