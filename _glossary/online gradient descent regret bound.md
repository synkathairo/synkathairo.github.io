---
layout: page
title: online gradient descent regret bound
aliases:
  - OGD regret bound
type:
  - theorem
reference: 
course:
  - CS6763
lecture:
  - cs6763-8
statement: After $T$ steps, $\epsilon = [\sum_{i=1}^T f_i(\mathbf{x}^{(i)})]-[\sum_{i=1}^T f_i(\mathbf{x}^{*})] \leq RG\sqrt{T}$
created: 2023-11-28T19:10:57-05:00
---
(OGD Regret Bound)

After $T$ steps, $\epsilon = [\sum_{i=1}^T f_i(\mathbf{x}^{(i)})]-[\sum_{i=1}^T f_i(\mathbf{x}^{*})] \leq RG\sqrt{T}$

average regret over time is bounded by $\frac{\epsilon}{T} \leq \frac{RG}{\sqrt{T}}$, goes $\rightarrow 0$ as $T \rightarrow \infty$ 

Note: no assumptions on how $f_1,…,f_T$ relate to each other, allowing even for these to be chosen *adversarially*, e.g. with $f_i$ depending on our choice of $\mathbf{x}_i$ and all previous choices.

___

See: [[regret bound]], [[online regret bound]]