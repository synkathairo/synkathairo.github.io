---
layout: entry
title: binomial distribution
aliases:
  - 二项分布
type:
  - definition
  - probability_distribution
reference: 
course: 
lecture: 
statement: 
created: 2025-04-10T22:32:44-04:00
tags:
  - probability
  - statistics
---
## Definition
probability of getting $k$ successes in $n$ independent trials each with same rate $p$

## probability mass function
The [[probability mass function]] is given by
$$f(k,n,p) = \Pr[X=k] = {n \choose k} p^k (1-p)^{n-k}$$
where *binomial coefficient* for $k=0,1,2,...,n$ is given by
$${n \choose k} = \frac{n!}{k! (n-k)!}$$

## Notes
- special case when $n=1$ (only one trial) is the [[Bernoulli distribution]]

___
## References
1. https://en.wikipedia.org/wiki/Binomial_distribution
