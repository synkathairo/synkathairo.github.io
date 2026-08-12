---
layout: page
title: Singular value decomposition
aliases:
  - SVD
type:
  - theorem
reference: 
course:
  - CS6763
lecture:
  - cs6763-11
statement: Without loss of generality, suppose that $n \geq d$. Any matrix $\mathbf{X} \in \mathbb{R}^{n \times d}$ can be written in the form:$$\mathbf{X} = \mathbf{U}\mathbf{\Sigma}\mathbf{V}^{\sf T}$$
created: 2023-12-03T20:09:28-05:00
---
Without loss of generality, suppose that $n \geq d$. Any matrix $\mathbf{X} \in \mathbb{R}^{n \times d}$ can be written in the form:
$$\mathbf{X} = \mathbf{U}\mathbf{\Sigma}\mathbf{V}^{\sf T}$$
![[Pasted image 20231203201544.png]]

where $\mathbf{U} \in \mathbb{R}^{n \times d}$, $\mathbf{\Sigma} \in \mathbb{R}^{d \times d}$, $\mathbf{V} \in \mathbb{R}^{d \times d}$.

Denote the left singular vectors as columns in matrix $\mathbf{U}$ ($n \times d$), singular values $\sigma_1, \sigma_2, …, \sigma_{d-1}, \sigma_d$ on the diagonal of matrix $\mathbf{\Sigma}$ ($d \times d$), and right singular vectors as rows in matrix $\mathbf{V}^{\sf T}$ ($d \times d$).

The following are satisfied: $\mathbf{U}^{\sf T} \mathbf{U} = \mathbf{I}$, $\mathbf{V}^{\sf T} \mathbf{V} = \mathbf{I}$, and $\sigma_1 \geq \sigma_2 \geq … \sigma_d \geq 0$.

This is called the **Singular Value Decomposition (SVD)** of $\mathbf{X}$.
- The diagonals of $\mathbf{\Sigma}$ are called *singular values* of $\mathbf{X}$ (often sorted in decreasing order).
- The columns of $\mathbf{U}$ are called the *left singular vectors* of $\mathbf{X}$.
- The columns of $\mathbf{V}$ are called the *right singular vectors* of $\mathbf{X}$.

## Characteristics
#incomplete 


## Geometric interpretation of SVD

Given any matrix $\mathbf{A} \in \mathbb{R}^{m \times n}$, it defines a linear transformation
$$f : \mathbb{R}^n \mapsto \mathbb{R}^m \qquad \textrm{with}\quad f(\mathbf{x}) = \mathbf{Ax}$$

SVD of $\mathbf{A}$ indicates linear transformation $f$ can be decomposed into a sequence of three operations
$$\mathbf{Ax} = \mathbf{U} \cdot \mathbf{\Sigma} \cdot \mathbf{V}^{\sf T}\mathbf{x}$$
full transformation equals rotation rescaling rotation



___
“one of the most fundamental results in linear algebra”

___
See also: [[spectral decomposition]]

___
## References:

1. https://www.chrismusco.com/amlds2023/notes/lecture11.html#Singular_Value_Decomposition
2. Avrim Blum, John Hopcroft, and Ravindran Kannan, “3.4 Singular Value Decomposition (SVD)” in _Foundations of Data Science_, 2018, pp. 45-47. https://www.cs.cornell.edu/jeh/book.pdf
3. https://www.cs.cmu.edu/~venkatg/teaching/CStheory-infoage/book-chapter-4.pdf
4. G. Strang, “6.3 Singular Value Decomposition” in _Introduction to Linear Algebra_, 4th ed., Wellesley, MA: Wellesley-Cambridge Press, 2009, pp. 367-376.
5. https://www.sjsu.edu/faculty/guangliang.chen/Math253S20/lec5svd.pdf

#incomplete 