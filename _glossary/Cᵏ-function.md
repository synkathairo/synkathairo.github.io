---
layout: entry
title: Cᵏ-function
aliases:
  - Ck-function
type:
  - definition
reference:
course:
lecture:
statement:
created: 2026-01-12T15:44:09-05:00
tags:
  - analysis
---
## Definition
For an [[open set]] $U \subseteq \mathbb{R}^n$ a **Cᵏ-function** is a [[continuous function]] $f: U \to \mathbb{R}$ if all of its *partial derivatives* of order at most $k$ exist and are *continuous* on $U$, with $$\partial^\alpha f := \frac{\partial^{|\alpha|} f}{\partial x^\alpha} := \frac{\partial^{|\alpha|} f}{(\partial x^1)^{\alpha_1}...(\partial x^n)^{\alpha_n}}$$ where $| \alpha | = \alpha_1 + ... + \alpha_n \leq k$.

___
## References
1. http://staff.ustc.edu.cn/~wangzuoq/Courses/18F-Manifolds/Notes/Lec02.pdf
