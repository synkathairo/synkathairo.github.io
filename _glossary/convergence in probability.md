---
layout: page
title: convergence in probability
aliases: 
type:
  - definition
reference: 
course:
  - ECE6303
lecture:
  - ece6303-10
statement: 
created: 2025-04-16T19:38:47-04:00
tags:
  - probability
  - analysis
---
## Definition
A *sequence* of numbers $X_1,...,X_n$ **converges in probability** to a *random variable* $X$, i.e. $X_n \ \xrightarrow{p}\ X$, if for all $\epsilon>0$,
$$\lim_{n \rightarrow \infty} P\big(|X_n-X| \geq \epsilon \big)=0$$

("$X_n \to X$ in probability")

## See also
- [[convergence]]

___
## References
1. https://www.probabilitycourse.com/chapter7/7_2_5_convergence_in_probability.php