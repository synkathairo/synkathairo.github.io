---
layout: entry
title: perceptron
aliases:
type:
  - definition
reference:
course:
  - ECE7143
lecture:
  - ece7143-2
statement: "A **perceptron** is a linear classifier which uses the loss:$$L(y,f(x,w)) = \\frac{1}{n} \\sum_{i \\in \\{\\text{misclassified}\\}} -y_i f(x_i, w) = \\frac{1}{n} \\sum_{i \\in \\{\\text{misclassified}\\}} -y_i w^T x_i$$where $i \\in \\{\\text{misclassified}\\} \\iff \\{ i : y_i x_i^T w \\leq 0 \\}$."
created: 2025-01-21T15:04:11-05:00
tags:
  - machine_learning
---

Consider _binary classification_, two possible labels $y \in \{-1,1\}$, with binary output according to
$$g(z) = \begin{cases} -1 \quad \text{if } z < 0 \\ +1 \quad \text{if } z \geq 0 \end{cases}$$
where $z= f(x,w)$ is a model's predication.

Assume a _linear model_ $f(x,w) = w^T x$.

A **perceptron** is a linear classifier which uses the loss:
$$L(y,f(x,w)) = \frac{1}{n} \sum_{i \in \{\text{misclassified}\}} -y_i f(x_i, w) = \frac{1}{n} \sum_{i \in \{\text{misclassified}\}} -y_i w^T x_i$$
where $i \in \{\text{misclassified}\} \iff \{ i : y_i x_i^T w \leq 0 \}$.

---

## References

1. Anna Choromanska. ECE-GY 7143 course slides, lecture 2.
