---
layout: entry
title: online gradient descent
type:
  - algorithm
reference: 
course:
  - CS6763
lecture:
  - cs6763-8
statement: 
created: 2023-11-28T17:39:15-05:00
tags:
  - machine_learning
---
## Algorithm
Like (offline) [[gradient descent|gradient descent]] but instead of $f$, we use $f_i$, $i \in 1,…,T$ 

$\mathbf{x}^* = \arg \min_{\mathbf{x}} f_i(\mathbf{x})$ (the offline optimum)

Assume:
- $f_1,.,,f_T$ are all [[convex function|convex]]
- Each is G-[[Lipschitz function|Lipschitz]]: for all $\mathbf{x}$, $i$, $||\nabla f_i(\mathbf{x})||_2 \leq G$ 
- starting radius: $||\mathbf{x}^{*}-\mathbf{x}^{(1)}||_2 \leq R$

### Online Gradient descent:
- Choose $\mathbf{x}^{(1)}$ and $\eta = \frac{R}{G \sqrt{T}}$.
- For $i=0,…,T$:
	- Play $\mathbf{x}^{(i)}$
	- Observe $f_i$ and incur cost $f_i(\mathbf{x}^{(i)})$
	- $\mathbf{x}^{(i+1)}=\mathbf{x}^{(i)}-\eta \nabla f_i(\mathbf{x}^{(i)})$

## Online gradient descent analysis

### online gradient descent regret bound

(see [[regret bound]], [[online regret bound]])

After $T$ steps, $\epsilon = [\sum_{i=1}^T f_i(\mathbf{x}^{(i)})]-[\sum_{i=1}^T f_i(\mathbf{x}^{*})] \leq RG\sqrt{T}$

average regret over time is bounded by $\frac{\epsilon}{T} \leq \frac{RG}{\sqrt{T}}$, goes $\rightarrow 0$ as $T \rightarrow \infty$ 

Note: no assumptions on how $f_1,…,f_T$ relate to each other, allowing even for these to be chosen *adversarially*, e.g. with $f_i$ depending on our choice of $\mathbf{x}_i$ and all previous choices.

## See also
- [[Lyapunov function]]

___
## References
1. https://www.chrismusco.com/amlds2023/lectures/lec8_annotated.pdf
2. L. Bottou, “On-line Learning and Stochastic Approximations,” in _On-Line Learning in Neural Networks_, 1st ed., D. Saad, Ed., Cambridge University Press, 1999, pp. 9–42. doi: [10.1017/CBO9780511569920.003](https://doi.org/10.1017/CBO9780511569920.003).
