---
layout: page
title: Projection from 3-D to 2-D camera plane
type:
  - function
reference: 
course: ECE6123
lecture:
  - ece6123-1-imageformation
statement: $\mathbf{X} \xrightarrow[P]{} \mathbf{x}$<br />$\psi(P(\mathbf{X}),t)=\overline{\psi}(\mathbf{X},t)$<br />$\psi(\mathbf{x},t)=\overline{\psi}(P^{-1}(\mathbf{x}),t)$
created: 2023-10-21T23:28:11-04:00
---
$\mathbf{X} \xrightarrow[P]{} \mathbf{x}$
$\mathbf{x}$: 2D position in camera plane

Image function: 
$$\psi(P(\mathbf{X}),t)=\overline{\psi}(\mathbf{X},t)$$
or
$$\psi(\mathbf{x},t)=\overline{\psi}(P^{-1}(\mathbf{x}),t)$$

The projection operator is non-linear
– Perspective projection  
– Orthographic projection  
– More on this later

___

$\overline{\psi} (\mathbf{X},t)$ is [[Camera absorption function]]