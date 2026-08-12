---
layout: entry
title: Lenz–Ising model
aliases:
  - Ising model
type:
  - physical model
reference:
course:
lecture:
statement:
created: 2025-03-12T23:06:09-04:00
tags:
  - statistical_mechanics
  - physics
---

## Description

- set of _lattice_ sites $\Lambda$ each with a set of adjacent sites, (a [[undirected graph|graph]]), forming a $d$-dimensional lattice
- _spin_ $\sigma_k \in \{-1,+1\}$, discrete variable for each lattice site $k \in \Lambda$
- _spin configuration_ $\sigma = \{\sigma_k\}_{k \in \Lambda}$, assigns a spin value to each lattice site
- _interaction_ $J_{ij}$ between adjacent $i,j \in \Lambda$
- _external magnetic field_ $h_j$ interacting with $j \in \Lambda$
- _energy_ of $\sigma$, from [[Hamiltonian]] function:
  - $H(\sigma) = - \sum_{\langle i j \rangle} J_{ij} \sigma_i \sigma_j - \mu \sum_j h_j \sigma_j$

## Mean field approximation

#incomplete

## Notes

- compare other statistical mechanics models, such as _Debye_, _Einstein_, and _Potts_

## See also

- [[Hadamard matrix]]

---

## References

1. https://en.wikipedia.org/wiki/Ising_model
2. https://jeffjar.me/statmech/intro4.html
3. https://farside.ph.utexas.edu/teaching/329/lectures/node110.html
4. https://web.mit.edu/ceder/publications/Ising%20Model.pdf
5. https://www.cond-mat.de/events/correl15/manuscripts/janis.pdf
