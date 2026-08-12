---
layout: entry
title: probably approximately correct learning theory
aliases:
  - PAC learning theory
  - PAC learning
  - probably approximately correct learner
  - PAC learner
type:
  - definition
reference:
course:
lecture:
statement:
created: 2025-03-18T22:05:29-04:00
tags:
  - machine_learning
  - computational_learning_theory
---

## Definition (_PAC learner_)

Let $\mathcal{X}$ and $\mathcal{Y}$ be nonempty sets, $\mathcal{F}$ the set of all functions from $\mathcal{X} \to \mathcal{Y}$, and $\mathcal{H} \subseteq \mathcal{F}$ a class of functions. Say that a (possibly randomized) _algorithm_ $A$ is a **probably approximately correct (PAC) learner** for $\mathcal{H}$ if there exists a [[sample complexity]] function $m : (0,1)^2 \to \mathbb{N}$ such that for every _precision parameter_ $\varepsilon \in (0,1)$, every _confidence parameter_ $\delta \in (0,1)$, every _target function_ $f \in \mathcal{H}$ and every [[probability density function|distribution]] $\mathcal{D}$ over $\mathcal{X}$, if $A$ receives as input parameters $\varepsilon, \delta$ and _sample_ $S$ of size $m = m(\varepsilon,\delta)$ such that $S = \left( (x_1, f(x_1)),...,(x_m, f(x_m)) \right)$ where $x_1,...,x_m$ [[random variable|sampled]] [[independence|independently]] from $\mathcal{D}$, then $A$ [[halting problem|halts]] and outputs _hypothesis_ $h \in \mathcal{F}$ that with probability at least $1-\delta$ (over sample $S$ and randomness of $A$) has [[loss function|loss]] $L_{\mathcal{D},f}(h) \leq \varepsilon$.

## Notes

- intuitively: find with probability at least $(1-\delta)$ a concept $h$ such that error between $h$ and $f$ is at most $\varepsilon$

## See also

- [[Vapnik-Chervonenkis dimension|VC dimension]]
- [[learning problem]]
- _PAC verification_ (Goldwasser, Rothblum, Shafer, Yehudayoff 2021), prover and verifier [[proof calculus|proof system]] where verifier takes random samples from fixed unknown distribution, prover attempts to convince regarding certain classifier

---

## References

1. J. Shafer, Class Lecture, Topic: "Unit 2: Probably Approximately Correct: A Probabilistic Definition of Learning." CS 294-220, UC Berkeley, Spring 2021. https://piazza.com/class_profile/get_resource/khs64r6r5yn154/kkeojz4edrt27
2. D. A. Simovici, "The Probably Approximately Correct (PAC) Learning." University of Maryland, Baltimore, 2023. https://www.cs.umb.edu/~dsim/S3-PAC.pdf
3. E. Xing, Class Lecture, Topic: "VC Dimension and Model Complexity." 10-701, School of Computer Science, Carnegie Mellon University, Pittsburgh, Fall 2015. https://www.cs.cmu.edu/~epxing/Class/10701/slides/lecture16-VC.pdf
4. S. Mutreja and J. Shafer, “PAC verification of statistical algorithms,” in _Proceedings of thirty sixth conference on learning theory_, G. Neu and L. Rosasco, Eds., in Proceedings of machine learning research, vol. 195. PMLR, July 2023, pp. 5021–5043. \[Online\]. Available: [https://proceedings.mlr.press/v195/mutreja23a.html](https://proceedings.mlr.press/v195/mutreja23a.html)
5. S. Goldwasser, G. N. Rothblum, J. Shafer, and A. Yehudayoff, “Interactive Proofs for Verifying Machine Learning,” _LIPIcs, Volume 185, ITCS 2021_, vol. 185, p. 41:1-41:19, 2021, doi: [10.4230/LIPICS.ITCS.2021.41](https://doi.org/10.4230/LIPICS.ITCS.2021.41).
6. https://www.cs.utexas.edu/~klivans/f06lec2.pdf
