---
layout: entry
title: Cosine similarity
type:
  - definition
reference:
lecture: cs6763-6
statement: $\cos(\theta(x,y)) = \frac{\langle x,y\rangle}{||x||_2 ||y||_2}$
created: 2023-10-13T14:39:34-04:00
course: CS6763
---

$\cos(\theta(x,y)) = \frac{\langle x,y\rangle}{\Vert x \rVert_2 \lVert y \rVert_2}$

with cosine similarity closer to 1 means more similar, farther from 1 means more different

Notes: can think of as natural ‘inverse’ to Euclidean distance $||\mathbf{x}-\mathbf{y}||_2^2$

Suppose $\mathbf{x},\mathbf{y}$ are unit vectors, then,

$$ ||\mathbf{x}-\mathbf{y}||_2^2 = \langle \mathbf{x} - \mathbf{y},\mathbf{x} - \mathbf{y} \rangle
=||\mathbf{x}||_2^2+||\mathbf{y}||_2^2-2\langle x,y \rangle
= 2 - 2 \cos(\theta(\mathbf{x},\mathbf{y}))$$
$$
