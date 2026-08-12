---
layout: entry
title: covariance
type:
  - definition
reference:
course:
  - CS6763
  - ECE6303
lecture:
  - cs6763-1
  - ece6303-8
statement: $\mathrm{Cov}[X,Y]\triangleq \mathbb{E}[(X-\mathbb{E}[X])(Y-\mathbb{E}[Y])]$
created: 2023-10-19T18:09:09-04:00
tags:
  - probability
  - statistics
---

## Definition

The **covariance** of two [[random variable|random variables]] $X$ and $Y$ is defined by:
$$\mathrm{Cov}[X,Y]\triangleq \mathbb{E}[(X-\mathbb{E}[X])(Y-\mathbb{E}[Y])]$$
or equivalently,
$$\mathrm{Cov}[X,Y] = \mathbb{E}[XY]-\mathbb{E}[X]\mathbb{E}[Y]$$

Note that [[variance]] is a special case:
$$\mathrm{Var}[X]=\mathrm{Cov}[X,X]$$

## General rules

$$\operatorname{Cov}\left(\sum_{i=1}^n a_i X_i, \sum_{j=1}^m a_j X_j\right) = \sum_{i=1}^n \sum_{j=1}^m \operatorname{Cov}(X_i, Y_j)$$

$$\operatorname{Var}\left( \sum_{i=1}^n X_i \right) = \sum_{i=1}^n \operatorname{Var}(X_i) + \mathop{\sum\sum}_{i < j} \operatorname{Cov}(X_i, X_j)$$

## Sample covariance matrix

for a _sample_ of data on _random variables_ we may define the **sample covariance matrix** as a $K$-by-$K$ matrix $\mathbf{Q} = [q_{jk}]$ where $$q_{jk} = \frac{1}{N-1}\sum_{i=1}^N (x_{ij}-\bar{x}_j)(x_{ik}-\bar{x}_k)$$ with $q_{jk}$ as estimate of _covariance_ between $j$-th and $k$-th variables underlying the data; we may also write $$\mathbf{Q} = \frac{1}{N-1}\sum_{i=1}^N (\mathbf{x}_i-\bar{\mathbf{x}})(\mathbf{x}_i-\bar{\mathbf{x}})^T$$

## Notes

- intuitively, is a "measure of the joint variability of two [[random variable|random variables]]"
- the _sample covariance_ is an _unbiased estimate_ of the _covariance matrix_
  - see also: _sample mean_ (c.f. [[expectation|mean]])

## See also

- [[Pearson correlation coefficient|correlation coefficient]]

---

## References:

1. https://cs229.stanford.edu/section/cs229-prob.pdf
2. https://www.randomservices.org/random/expect/Covariance.html
3. V. M. Panaretos, _Statistics for Mathematicians_. in Compact Textbooks in Mathematics. Cham: Springer International Publishing, 2016. doi: [10.1007/978-3-319-28341-8](https://doi.org/10.1007/978-3-319-28341-8). p. 158.
4. https://en.wikipedia.org/wiki/Covariance
5. https://en.wikipedia.org/wiki/Sample_mean_and_covariance
