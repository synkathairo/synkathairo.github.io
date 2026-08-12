---
layout: entry
title: Point-Wise Transformation
type:
  - function
reference:
course: ECE6123
lecture:
  - ece6123-1-contrastenhancement
statement: $B(i,j)=g(A(i,j))$, $i=0,...,N-1$, $j=0,...,M-1$
created: 2023-10-21T23:49:25-04:00
---

Use a “function” $g(f)$ to generate a new image B from a given image A via:
$B(i,j)=g(A(i,j))$, $i=0,...,N-1$, $j=0,...,M-1$

used to change [[Histogram]]

The function $g(f)$ operates on each image pixel independently. All pixels with original gray level f are changed to have gray level $g(f)$

Properties that $g(f)$ should satisfy

- Monotonically non-decreasing, so that relative brightness of pixels do not change.
- $G(f)$ in the same range as original $f$, i.e. with same min (e.g. 0) and max values (e.g. 255), and be integers for digital images.
  - Rounding/truncation may be needed

How to design the transformation function $g(f)$?

- depends on the histogram of the original image $h_A(f)$ and the

desired histogram of the transformed image $h_B(f)$.

- To enhance contrast, we like $h_B(f)$ to be as flat as possible.

Different approaches

- Using fixed functional forms: linear, non-linear
- Using adaptive transform, that is determined from $h_A(f)$ and $h_B(f)$:
  - Histogram equalization ($h_B(f )$ is uniform): Fully automatic!
  - Histogram specification or matching

- How to design the transformation function $g(f)$?
  - depends on the histogram of the original image $h_A(f)$ and the desired histogram of the transformed image $h_B(f)$.
- To enhance contrast, we like $h_B(f)$ to be as flat as possible.

Different approaches

- Using fixed functional forms: linear, non-linear
- Using adaptive transform, that is determined from $h_A(f)$ and $h_B(f)$:
  - Histogram equalization ($h_B(f)$ is uniform): Fully automatic!
  - Histogram specification or matching

---

see: [[Nonlinear Stretching]]
