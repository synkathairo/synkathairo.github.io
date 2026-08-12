---
layout: entry
title: ellipsoid method
type:
  - algorithm
reference: 
course:
  - CS6763
lecture:
  - cs6763-10
statement: 
created: 2023-11-27T23:39:35-05:00
---
c.f. [[center-of-gravity method]]

Consider a more slightly general problem. Given [[convex set|convex set]] $\mathcal{K}$ via access to [[separation oracle|separation oracle]] $S_\mathcal{K}$ for the set, we want to determine if $\mathcal{K}$ is empty or, otherwise, return any point $\mathbf{x} \in \mathcal{K}$.

The hyperplane is parameterized by a normal vector $\mathbf{a}$ and offset $c$ so $\mathcal{H} = \{\mathbf{x}: \langle \mathbf{a},\mathbf{x}\rangle \leq c \}$.

#incomplete 
## Theorem (Khachiyan, 1979)
Assume $n = d$. The ellipsoid method solves any linear program with $L$-bit integer valued constraints exactly in $O(n^4 L)$ time.

___

## Separation Oracle Example

#incomplete 

___
**Basic ellipsoid method.** The basic ellipsoid algorithm is:
- *Ellipsoid method*
- **given** an initial ellipsoid $(P^{(0)}, x^{(0)})$ containing a minimizer of $f$.
- $k := 0$.
- **repeat**
	- Compute a subgradient: $g(k) ∈ ∂f (x^{(k)})$.
	- Normalize the subgradient: $\tilde{g} := \frac{1}{\sqrt{g^{(k)T} P^{(k)}g^{(k)}}} g^{(k)}$.
	- Update ellipsoid center: $x^{(k+1)} := x^{(k)} − \frac{1}{n+1} P^{(k)} \tilde{g}$.
	- Update ellipsoid shape: $P^{(k+1)} := \frac{n^2}{n^2 -1}\left( P^{(k)}-\frac{2}{n+1}P^{(k)}\tilde{g}\tilde{g}^T P^{(k)}\right)$
	- $k := k + 1$.

The ellipsoid method is not a descent method, so we keep track of the best point found.
We define
$$f^{(k)}_{best}=\min_{j=0,...,k} f(x^{(j)})$$

___
## References:
1. Khachiyan, L. G. 1979. "A Polynomial Algorithm in Linear Programming". _Doklady Akademii Nauk SSSR_ 244, 1093-1096 (translated in _Soviet Mathematics Doklady_ 20, 191-194, 1979).
2. https://www.nytimes.com/1979/11/07/archives/a-soviet-discovery-rocks-world-of-mathematics-russians-surprise.html
3. https://www.chrismusco.com/amlds2023/notes/lecture09.html#Ellipsoid_Method
4. https://www.cs.princeton.edu/courses/archive/fall18/cos521/Lectures/lec16.pdf
5. https://web.stanford.edu/class/ee364b/lectures/ellipsoid_method_notes.pdf
6. https://www.cs.ubc.ca/~nickhar/W13/Lecture4.pdf
