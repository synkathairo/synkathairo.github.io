---
layout: entry
title: sample complexity
aliases:
type:
  - definition
reference:
course:
lecture:
statement:
created: 2025-10-22T19:39:14-04:00
tags:
  - computational_learning_theory
---

## Definition

Let $A$ be an _algorithm_ that is a naïve [[probably approximately correct learning theory|PAC learner]] for functions $\mathcal{X} \to \mathcal{Y}$, for some sets $\mathcal{X}, \mathcal{Y}$. The **sample complexity** of $A$ is a function $m: (0,1)^2 \to \mathbb{N}$ such that for every $\varepsilon, \delta \in (0,1)$, the number $m(\varepsilon, \delta)$ is the minimal sample size for which $A$ satisfies the requirement of _naïve PAC learning_, $$\mathbb{P}_{S \sim (\mathcal{D},f)^m} [L_{\mathcal{D},f}(h) \leq \varepsilon] \geq 1 - \delta$$

---

## References

1. J. Shafer, Class Lecture, Topic: "Unit 2: Probably Approximately Correct: A Probabilistic Definition of Learning." CS 294-220, UC Berkeley, Spring 2021. https://piazza.com/class_profile/get_resource/khs64r6r5yn154/kkeojz4edrt27
