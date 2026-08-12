---
layout: entry
title: orthonormal basis
type:
  - function
  - definition
reference:
course:
  - ECE6123
  - CS6763
lecture:
  - ece6123-2-ft
  - cs6763-10
  - ece6123-5-transform
statement: "Orthonormal basis function: $\\int_{-\\infty}^\\infty \\phi(x,u_1) \\phi^*(x,u_2) dx = \\begin{cases}1, u_1 = u_2 \\\\ 0, u_1 \\neq u_2\\end{cases}$"
created: 2023-10-24T21:07:02-04:00
tags:
  - linear_algebra
---

A subset $\{v_1,...,v_k\}$ of a vector space $\mathbf{V}$, with the inner product $\langle,\rangle$, is called **orthonormal** if $\langle v_i,v_j \rangle=0$ when $i \neq j$. That is, the vectors are mutually perpendicular. Moreover, they are all required to have length one: $\langle v_i,v_i \rangle=1$.

---

## Representation of 1D Signal Using An Orthonormal Basis

### Orthonormal basis function

$$\int_{-\infty}^\infty \phi(x,u_1) \phi^*(x,u_2) dx = \begin{cases}1, u_1 = u_2 \\ 0, u_1 \neq u_2\end{cases}$$

- Each basis has norm 1
- Different bases are orthogonal to each other

### Inverse transform

- Representing $f(x)$ as integral (limit of sum) of $φ(x,u)$ for all $u$, with weight $F(u)$
  $$\int_{-\infty}^\infty F(u) \phi(x,u) \, du$$

### Forward transform

- determining the weight through inner product
  $$F(u) = \langle f(x), \phi(x,u)\rangle = \int_{-\infty}^\infty f(x) \phi^*(x,u) \, dx$$

## Orthonormal basis vectors

$\{\mathbf{h}_k,k=0,...,N-1\}$ are OBV if

$$ \langle \mathbf{h}_k,\mathbf{h}_l \rangle
=\delta_{k,l}
=\begin{cases} 1 & k=l\\
 0 & k \neq l\end{cases}$$

with OBV
$$\begin{aligned}
\langle \mathbf{h}_l, \mathbf{f} \rangle = \langle \mathbf{h}_l, \sum_{k=0}^{N-1} t(k) \mathbf{h}_k \rangle=t(l)=\mathbf{h}_l^H \mathbf{f} \\
\mathbf{t}=\begin{bmatrix} \mathbf{h}_0^H \\ \mathbf{h}_1^H\\ \vdots \\ \mathbf{h}_{N-1}^H \end{bmatrix} \\
\mathbf{B}^{-1}=\mathbf{B}^H \textrm{ or } \mathbf{B} = \mathbf{B} \mathbf{B}^H = \mathbf{I}
\end{aligned}$$
where $\mathbf{B}$ is unitary.

___
References:
1. https://mathworld.wolfram.com/OrthonormalBasis.html
2. https://www.sciencedirect.com/topics/computer-science/orthonormal-basis
$$
