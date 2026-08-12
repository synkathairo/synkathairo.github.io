---
layout: page
title: separation oracle
type:
  - definition
reference: 
course:
  - CS6763
lecture:
  - cs6763-9
statement: Given a convex set $\mathcal{K}$, separation oracle $S_\mathcal{K}$ returns:$$S_\mathcal{K}=\begin{cases} \emptyset & \textrm{if }\mathbf{y}\in \mathcal{K}\\\textrm{separating hyperplane } \mathcal{H} & \textrm{if }\mathbf{y}\notin \mathcal{K}\end{cases}$$
created: 2023-11-27T03:52:51-05:00
---
Given a [[convex set|convex set]] $\mathcal{K}$, separation oracle $S_\mathcal{K}$ returns:
$$S_\mathcal{K}=\begin{cases} \emptyset & \textrm{if }\mathbf{y}\in \mathcal{K}\\
\textrm{separating hyperplane } \mathcal{H} & \textrm{if }\mathbf{y}\notin \mathcal{K}
\end{cases}$$
Let $\mathcal{H} = \{\mathbf{x} : \mathbf{a}^\intercal \mathbf{x} = c\}$.

___
used in [[ellipsoid method|ellipsoid method]]

___
References:
1. https://www.chrismusco.com/amlds2023/notes/lecture09.html
2. https://en.wikipedia.org/wiki/Hyperplane_separation_theorem