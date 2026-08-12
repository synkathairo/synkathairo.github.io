---
layout: entry
title: Laplace transform
aliases:
type:
  - approach
reference:
course:
  - ECE6253
lecture:
  - ece6253-6
statement:
created: 2024-10-22T17:13:00-04:00
---

## Definition

The (unilateral) Laplace transform $\mathcal{L}$ is defined by
$$\mathcal{L}[f(t)](s) \equiv \int_0^\infty f(t) e^{-st} dt$$
The inverse of the Laplace transform, i.e. the Bromwich integral, is given by
$$F(t) = \frac{1}{2\pi i} \int_{\gamma - i \infty}^{\gamma + i \infty} e^{st} f(s) ds$$

## Table

#incomplete

## linear time-invariant continuous-time system

![[theorem, fundamental property of fixed linear analog systems#Theorem]]

Output, $y(t) = S\{u(t)\} = \frac{1}{2\pi i} \int_{c-i\infty}^{c+i\infty} U(s) S\{e^{st}\} ds = \frac{1}{2\pi i} \int_{c-i\infty}^{c+i\infty} U(s) H(s) ds$
$$Y(s) = H(s) U(s)$$

(note: some engineering notations use $j$ instead of $i$ for the imaginary unit)

## Differentiation theorem of $\mathcal{L}$ transforms

$$\mathcal{L}\{\dot{\mathbf{x}}(t)\} = s \mathbf{X}(s) - \mathbf{x}(0)$$

## Convolution theorem of $\mathcal{L}$ transforms

If $y(t) = \int_0^\infty x_1 (t - \tau) x_2 (\tau) d\tau$, then,
$$Y(s) = X_1(s) X_2(s)$$

## transformation of time-invariant system

$$ \begin{aligned}
\mathbf{X}(s) &= [sI - A]^{-1} \mathbf{x}(0) + [sI-A]^{-1}B \mathbf{U}(s) \\
\mathbf{Y}(s) &= C[sI - A]^{-1} \mathbf{x}(0) + [C[sI-A]^{-1}B + D] \mathbf{U}(s)
\end{aligned}$$
then, for the [[transition matrix]],
$$\mathcal{L}\{\phi(t)\} [sI - A]^{-1}$$
and [[transfer function]] matrix,
$$H(s) = \mathcal{L}\{H(t)\} = [C[sI-A]^{-1}B + D]$$

___
## See also
- [[Laplacian pyramid]]

## References
1. https://mathworld.wolfram.com/LaplaceTransform.html
2. https://mathworld.wolfram.com/BromwichIntegral.html
3. https://crrl.poly.edu/6253/lectures/lect7.pdf
$$
