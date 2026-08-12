---
layout: entry
title: independence
aliases:
  - independent
type:
  - definition
reference: 
lecture:
  - cs6763-2
  - ece6303-2
statement: $\mathrm{Pr}[X_i=v_i \mathrm{and} X_j=v_j]=\mathrm{Pr}[X_i=v_i]\cdot\mathrm{Pr}[X_j=v_j]$
created: 2023-10-12T18:22:55-04:00
course:
  - CS6763
  - ECE6303
tags:
  - probability
---
## Definition

For *events* $A$ and $B$ to be **independent**, 
$$\Pr(A \cap B) = \Pr(A) \cdot \Pr(B)$$

### independence of random variables
Suppose we have *random variables* $X_1,…,X_k$. We say $X_i$ and $X_j$ are **independent** if, for all possible values $v_i,v_j$, 
$$\mathrm{Pr}[X_i=v_i \text{ and } X_j=v_j]=\mathrm{Pr}[X_i=v_i]\cdot\mathrm{Pr}[X_j=v_j]$$
(in this case event $A$ is when $X_i = v_i$, and $B$ when $X_j = v_j$)

### cdf and pdf
$X$ and $Y$ are independent iff [[probability density function|pdf]] adheres to
$$f_{XY}(x,y) = f_X(x)f_Y(y)$$

$X$ and $Y$ independent iff [[cumulative distribution function|cdf]] adheres to 
$$F_{XY}(x,y) = F_X(x)F_Y(y)$$

## conditional probability when independent
When events $A$ and $B$ are *independent*, then,
$$\Pr(A|B) = \Pr(A)$$
(this follows from definition of [[conditional probability]] and the definition of independence given above)

## independent r.v.'s are uncorrelated
When two *random variables* are *independent*, then they are *uncorrelated* (see [[Pearson correlation coefficient|correlation coefficient]]). However, the converse does not necessarily hold.
## See also
- [[types of independence]]
- [[pairwise independence]]
- [[mutual independence]]

___
## References:
1. https://www.mathcounterexamples.net/mean-independent-and-correlated-variables/
