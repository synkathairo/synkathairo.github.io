---
layout: entry
title: center-of-gravity method
type:
  - algorithm
reference:
course:
  - CS6763
lecture:
  - cs6763-10
statement: $\mathcal{S}_1=\mathcal{S}$<br />For $t=1,…,T$:<br />&emsp;$\mathbf{c}_t = \textrm{center of gravity of } \mathcal{S}_t$.<br />&emsp;compute $\nabla f(\mathbf{c}_t)$.<br />&emsp;$\mathcal{H}= \{\mathbf{x}|\langle \nabla f(\mathbf{c}_t),\mathbf{x}-\mathbf{c}_t \rangle\leq 0\}$ <br />&emsp;$\mathcal{S}_{t+1} = \mathcal{S}_t \cap H$<br />Return $\hat{\mathbf{x}} = \arg \min_t f(\mathbf{c}_t)$
created: 2023-11-03T16:02:02-04:00
---

For convex set $\mathcal{S} \subseteq \mathbb{R}^n$, convex function $f: \mathbb{R}^n \rightarrow \mathbb{R}$, we want to minimize $f(\mathbf{x})$ over $\mathbf{x} \in \mathcal{S}$

## Algorithm:

- $\mathcal{S}_1=\mathcal{S}$
- For $t=1,…,T$:
  - at step $t$, let $\mathbf{c}_t = \textrm{center of gravity of } \mathcal{S}_t$.
  - compute gradient $\nabla f(\mathbf{c}_t)$.
  - $\mathcal{H}= \{\mathbf{x}|\langle \nabla f(\mathbf{c}_t),\mathbf{x}-\mathbf{c}_t \rangle\leq 0\}$
  - $\mathcal{S}_{t+1} = \mathcal{S}_t \cap H$
- Return $\hat{\mathbf{x}} = \arg \min_t f(\mathbf{c}_t)$

## Proof

By [[Grünbaum's theorem]], cut the volume of the search space by constant every step.
#incomplete

---

idea: minimizing convex function over convex set using “natural plane-cutting method”

center of gravity of convex set $\mathcal{S}$ defined as:

$$ c = \frac{\int_{x \in \mathcal{S}} x , dx}{\text{vol}(\mathcal{S})}
= \frac{\int_{x \in \mathcal{S}} x \, dx}{\int_{x \in \mathcal{S}} 1
dx}$$
Additionally, for two convex sets $\mathcal{A}$ and $\mathcal{B}$, the intersection $\mathcal{A} \cap \mathcal{B}$ is also convex. To see this, consider two points $\mathbf{x}, \mathbf{y} \in \mathcal{A} \cap \mathcal{B}$. Then for any $\lambda \in (0,1)$, we have
$$\lambda \mathbf{x} + (1-\lambda) \mathbf{y} \in \mathcal{A}$$

because $\mathbf{x},\mathbf{y}$ are in $\mathcal{A}$ and
$$\lambda \mathbf{x} + (1-\lambda) \mathbf{y} \in \mathcal{B}$$

because $\mathbf{x},\mathbf{y}$ are in $\mathcal{B}$.

___
Drawbacks: computing centroid in general is hard, \#P-hard when $\mathcal{S}$ is intersection of half-spaces (polytope)

…

Hence, consider [[ellipsoid method]]

___
References:
1. A. Y. Levin. On an algorithm for the minimization of convex functions over convex functions. *Soviet Mathematics Doklady*, 160(1244–1247), 1965. <https://www.mathnet.ru/php/archive.phtml?wshow=paper&jrnid=dan&paperid=30770&option_lang=eng>
2. D. J. Newman. Location of the maximum on unimodal surfaces. *J. ACM*, 12(3):395–398, July 1965.
3. https://www.chrismusco.com/amlds2023/notes/lecture09.html
4. https://www.cs.cmu.edu/~anupamg/advalgos17/scribes/lec16.pdf
$$
