---
layout: page
title: online perceptron algorithm
aliases: 
type:
  - algorithm
reference: 
course:
  - ECE7143
lecture:
  - ece7143-2
statement: 
created: 2025-01-21T15:52:11
tags:
  - machine_learning
---
Consider the [[perceptron]], then the [[gradient descent|GD]] update becomes 
$$w^{t+1} = w^t - \eta \nabla_w L \mid_{w^t} = w^t + \eta \frac{1}{n} \sum_{i \in \{\text{misclassified}\}} y_i x_i$$
and [[SGD]] update is based on a single misclassified data point,
$$w^{t+1} = w^t + y_i x_i$$

The [[stochastic gradient descent|SGD]] update gives rise to an **online perceptron algorithm**:
- intialize $w^0$ (at random, close to $0$)
- while not converged (no update (practically, within tolerance bound) is made to $w$ during one epoch or maximum iterations reached) do
	- pick up $i \in \{1,2,...,n\}$ at random
	- if $(y_i x_i^T w^t \leq 0)$


___
## References
1. Anna Choromanska. ECE-GY 7143 course slides, lecture 2.