---
layout: page
title: Nyström approximation
aliases:
type:
  - definition
reference:
course:
lecture:
statement: $\hat{A}_\text{nys} = A \langle \Omega \rangle := A \Omega (\Omega^* A \Omega)^{\dagger} \Omega^* A$
created: 2025-10-20T21:22:24-04:00
tags:
  - linear_algebra
  - approximation_algorithms
  - machine_learning
---
## Overview 

Suppose matrix $N\times N$ matrix, $A$, which is real symmetric or complex Hermitian, and [[positive semidefinite]]. Then, for an arbitrary $N \times k$ test matrix $\Omega$, define the **Nyström approximation** to be $$\hat{A}_\text{nys} = A \langle \Omega \rangle := A \Omega (\Omega^* A \Omega)^{\dagger} \Omega^* A$$
(note: for a matrix $M$, can replace [[Moore-Penrose pseudoinverse]] $M^\dagger$ with $M^{-1}$ *matrix inverse* if $M$ is invertible; $M^*$ denotes [[conjugate transpose]])

or in terms of sketch matrix $Y = A \Omega$, $$A \langle \Omega \rangle = Y (\Omega^* Y)^{\dagger} Y^*$$

## Notes

- (why do this?) obtains a $k$-rank approximation (low-rank approximation)

___
## References

1. https://andrewcharlesjones.github.io/journal/nystrom-approximation.html
2. https://www.ethanepperly.com/index.php/2022/10/11/low-rank-approximation-toolbox-nystrom-approximation/
3. R. Xu and Y. Lu, “What is a Sketch-and-Precondition Derivation for Low-Rank Approximation? Inverse Power Error or Inverse Power Estimation?,” May 22, 2025, _arXiv_: arXiv:2502.07993. doi: [10.48550/arXiv.2502.07993](https://doi.org/10.48550/arXiv.2502.07993).