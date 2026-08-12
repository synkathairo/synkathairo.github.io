---
layout: entry
title: Sifting property
aliases:
type:
reference:
course:
  - ECE6253
lecture:
  - ece6253-3
statement: $f(\tau)=\int_{-\infty}^\infty f(\lambda) \delta (\tau - \lambda) d \lambda$
created: 2024-10-21T16:31:37-04:00
---

## Continuous form

see [[delta function|δ-function]],
sifting property states
$$f(\tau)=\int_{-\infty}^\infty f(\lambda) \delta (\tau - \lambda) d \lambda$$

arbitrary function expressed as linear combination of $\delta$ functions

## Discrete form

expressing an arbitrary discrete function as a linear combination of [[Kronecker delta|discrete delta functions]]:
$$f(k) = \sum_{i=-\infty}^\infty f(i) \delta(k-i)$$
