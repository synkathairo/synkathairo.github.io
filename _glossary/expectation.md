---
layout: entry
title: expectation
aliases:
  - expected value
  - 期望
  - mean
type:
  - definition
reference:
lecture:
  - cs6763-1
statement: $\mathbb{E}[X]=\sum_{s \in \mathcal{S}} \mathrm{Pr}[X=s]\cdot s$ <br />for continuous r.v., $\mathbb{E}[X]=\int_{s \in \mathcal{S}} \mathrm{Pr}(s)\cdot s \,ds$
created: 2023-10-11T22:07:52-04:00
course:
  - CS6763
tags:
  - probability
---
## Definition

Let $X$ be a [[random variable]] taking value in some set $\mathcal{S}$. Then,
$$\mathbb{E}[X]=\sum_{s \in \mathcal{S}} \mathrm{Pr}[X=s]\cdot s$$

or for continuous r.v., 
$$\mathbb{E}[X]=\int_{s \in \mathcal{S}} \mathrm{Pr}(s)\cdot s \,ds$$

## Conditional expectation
#incomplete
