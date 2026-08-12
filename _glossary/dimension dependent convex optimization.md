---
layout: page
title: dimension dependent convex optimization
type:
  - theorem
reference: 
course:
  - CS6763
lecture:
  - cs6763-10
statement: The Center-of-Gravity Method finds $\hat{\mathbf{x}}$ satisfying $f(\hat{\mathbf{x}}) ≤ \min_{\mathbf{x} \in \mathcal{S}} f(\mathbf{x}) + \epsilon$ using $O(d \log(B/\epsilon))$ calls to a function and gradient [[Oracle machine|oracle]] for convex $f$.
created: 2023-11-27T04:19:39-05:00
---
Consider a [[convex function]] $f(\mathbf{x})$ bounded between $[-B,B]$ on a constraint set $\mathcal{S}$.

The [[center-of-gravity method]] finds $\hat{\mathbf{x}}$ satisfying $f(\hat{\mathbf{x}}) ≤ \min_{\mathbf{x} \in \mathcal{S}} f(\mathbf{x}) + \epsilon$ using $O(d \log(B/\epsilon))$ calls to a function and gradient [[oracle machine|oracle]] for [[convex function|convex]] $f$.

#incomplete 

___
see: [[convex optimization]]

___
References:
1. https://cims.nyu.edu/~cfgranda/pages/OBDA_fall17/notes/convex_optimization.pdf