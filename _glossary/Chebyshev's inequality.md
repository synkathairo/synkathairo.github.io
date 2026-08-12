---
layout: page
title: Chebyshev's inequality
type:
  - lemma
reference: 
lecture:
  - cs6763-2
statement: $\mathrm{Pr}[|X-\mathbb{E}[X]|\geq k \cdot \sigma]\leq \frac{1}{k^2}$
created: 2023-10-12T15:00:55-04:00
course:
  - CS6763
tags:
  - analysis
  - probability
---
Let $X$ be a [[random variable]] with expectation $\mathbb{E}[X]$ and variance $\sigma^2 = \mathrm{Var}[X]$. Then for any $k>0$,
$$\mathrm{Pr}[|X-\mathbb{E}[X]|\geq k \cdot \sigma]\leq \frac{1}{k^2}$$

$\sigma = \sqrt{\mathrm{Var}[X]}$ is standard deviation of $X$; intuitively the bound is tighter when $\sigma$ is smaller.

## Proof
This can be derived from [[Markov's inequality]] (can be considered a corollary or special case of).

Apply Markov’s inequality to the non-negative random variable $S=(X-\mathbb{E}[X])^2$:
$$\mathrm{Pr}[(X-\mathbb{E}[X])^2 \geq k^2 \sigma^2] \leq \frac{\mathbb{E}[(X-\mathbb{E}[X])^2]}{k^2 \sigma^2} = \frac{\sigma^2}{k^2 \sigma^2} = \frac{1}{k^2}$$
___

Example of [[concentration inequality]].

___
see also: multidimensional Chebyshev’s inequality