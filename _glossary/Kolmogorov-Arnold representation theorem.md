---
layout: entry
title: Kolmogorov-Arnold representation theorem
aliases:
  - Kolmogorov-Arnold theorem
  - superposition theorem
  - 柯尔莫哥洛夫–阿诺德表示定理
  - ‌Kolmogorov–Arnold表示定理
  - KAT
type:
  - theorem
reference: 
course: 
lecture: 
statement: 
created: 2025-03-12T21:27:31-04:00
tags:
  - deep_learning
  - analysis
---
## Theorem
Suppose $f$ is multivariate and [[continuous function|continuous]] on a bounded domain, then it may be written as a finite sum of continuous univariate functions. More specifically for continuous and [[smooth function|smooth]] $f: [0,1]^n \to \mathbb{R}$, 
$$f(\mathbf{x}) = f(x_1,...,x_n) = \sum_{q=1}^{2n+1} \Phi_q \left(\sum_{p=1}^n \phi_{q,p}(x_p)\right)$$
where $\phi_{q,p}: [0,1] \to \mathbb{R}$ are univariate functions,  and $\Phi_q : \mathbb{R} \to \mathbb{R}$ composes these to reconstruct $f(\mathbf{x})$.

## Hilbert's 13th problem
#incomplete 

## Application: KANs
see [[Kolmogorov-Arnold network]]

## See also
- [[universal approximation theorem]]

___
## References
1. https://en.wikipedia.org/wiki/Kolmogorov%E2%80%93Arnold_representation_theorem
2. Z. Liu, Y. Wang, S. Vaidya, F. Ruehle, J. Halverson, M. Soljačić, T. Y. Hou, and M. Tegmark, “KAN: Kolmogorov-Arnold Networks,” Feb. 09, 2025, _arXiv_: arXiv:2404.19756. doi: [10.48550/arXiv.2404.19756](https://doi.org/10.48550/arXiv.2404.19756).
3. A. N. Kolmogorov, “On the representation of continuous functions of many variables by superposition of continuous functions of one variable and addition”, *Dokl. Akad. Nauk SSSR*, **114**:5 (1957), 953–956. http://mi.mathnet.ru/dan22050
4. R. Hecht-Nielsen, “Kolmogorov’s mapping neural network existence theorem,” in _Proceedings of the international conference on neural networks_, IEEE press New York, NY, USA, 1987, pp. 11–14. [Online]. Available: [https://cs.uwaterloo.ca/~y328yu/classics/Hecht-Nielsen.pdf](https://cs.uwaterloo.ca/~y328yu/classics/Hecht-Nielsen.pdf)
5. https://kindxiaoming.github.io/pykan/intro.html
6. https://www.reddit.com/r/MachineLearning/comments/1clcu5i/d_kolmogorovarnold_network_is_just_an_mlp/
7. https://blog.csdn.net/qq_44648285/article/details/143316549
