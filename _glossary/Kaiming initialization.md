---
layout: page
title: Kaiming initialization
aliases: 
type:
  - definition
reference: 
course:
  - ECE9483
lecture:
  - ece9483-1
statement: $W \sim \mathcal{N}\left(0,\frac{2}{n^l}\right)$
created: 2025-01-23T15:32:45-05:00
tags:
  - deep_learning
  - dnn
---
Designed for modern deep neural networks that use ReLU,

$$W \sim \mathcal{N}\left(0,\frac{2}{n^l}\right)$$
Target: ensure activation variance across different layers

Assumptions: ReLU activation, weight normally distributed with mean of zero, weight and activations are independent.

___
## References
1. He, Kaiming, et al. "Delving deep into rectifiers: Surpassing human-level performance on imagenet classification." *Proceedings of the IEEE international conference on computer vision*. 2015.