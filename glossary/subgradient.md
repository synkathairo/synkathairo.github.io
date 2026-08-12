---
layout: entry
title: subgradient
aliases:
type:
  - definition
reference:
course:
  - CSCI2945
lecture:
statement: "A vector $g \\in \\mathbb{R}^n$ is a **subgradient** of $f: \\mathbb{R}^n \\to \\mathbb{R}$ at $x \\in \\operatorname{dom} f$ if for all $z \\in \\operatorname{dom} f$, $f(z) \\geq f(x) + g^T (z-x)$"
created: 2025-02-13T21:57:39-05:00
tags:
  - convex_optimization
---

## Definition

A vector $g \in \mathbb{R}^n$ is a **subgradient** of $f: \mathbb{R}^n \to \mathbb{R}$ at $x \in \operatorname{dom} f$ if for all $z \in \operatorname{dom} f$,
$$f(z) \geq f(x) + g^T (z-x)$$

## See also

- [[subdifferential]]

---

## References

1. https://web.stanford.edu/class/ee364b/lectures/subgradients_notes.pdf
