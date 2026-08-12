---
layout: page
title: Pareto optimal
aliases:
  - Pareto improvement
  - Pareto efficient
  - Pareto optimum
type:
  - definition
reference:
course:
lecture:
statement:
created: 2025-09-14T18:53:05-04:00
tags:
  - game_theory
---
## Definition (*Pareto optimal*)

Suppose an instance of *multiobjective optimization*, with a certain *feasible space* (given by the constraints) known as the *design space* for the problem.

The *design space* has as its axes the values $x_1, x_2$, whereas a *criterion space* may be defined having the axes $f_1, f_2$ consisting of the two objective functions.

The edge between the minimum $f_1$ and minimum $f_2$ may be deemed as the **Pareto front** whereas along this edge, improvements in one objective come with tradeoff in the other objective, and any point along this edge is considered **Pareto optimal**. 

However, a point in the feasible region not along this *Pareto front* is **Pareto inefficient** and may be improved by a **Pareto improvement** towards the Pareto front helping one objective or both without harm to the other.

## Definition (*efficient points*)

Denote $PO(S)$ the **set of efficient points** of $S$, whereas $x \in S$ is an **efficient point** when there does not exist an alternative $y \in S$, $y \neq x$, such that $y \geq x$. (i.e. set of *Pareto optimal* points)

A solution concept $\varphi$ is **efficient** (or satisfies the **efficiency property**) if $\varphi(S,d) \in PO(S)$ for each [[bargaining game]] $(S,d) \in \mathcal{F}$.

An alternative $x \in S$ is called **weakly efficient** in $S$ if there is no $y \in S,$ $y \neq x$ strictly preferred to $x$ by both players, i.e. satisfying $y \gg x$ 

## illustration

![[Pasted image 20250916165805.png|300]]
here, the purple line is the *Pareto front*
(image from Stanford notes)

![[Pasted image 20250916172233.png|300]]
weakly efficient points, vis-a-vis the design space (note here, $PO(S)$ is the diagonal without the vertical and horizontal segments)
on vertical/horizontal segments, improvement is not preferred by both players (only by one player)
(image from Maschler et al textbook)

## See also

- [[polytope]]
- [[convex optimization]]
- [[bargaining game]]
	- [[Rubenstein bargaining]]
- [[zero-sum game]]

___
## References

1. https://en.wikipedia.org/wiki/Pareto_efficiency
2. https://web.stanford.edu/group/sisl/k12/optimization/MO-unit5-pdfs/5.8Pareto.pdf
3. M. Maschler, E. Solan, and S. Zamir, _Game Theory_, 1st ed. Cambridge University Press, 2013. doi: [10.1017/CBO9780511794216](https://doi.org/10.1017/CBO9780511794216), pp. 627-628.
