---
layout: page
title: Hahn-Banach theorem
aliases: 
type:
  - theorem
reference: 
course: 
lecture: 
statement: 
created: 2024-04-11T12:57:24-04:00
---
## Theorem, ($\mathbb{R}$ version)
Let $\mathcal{X}$ be an $\mathbb{R}$-[[vector space]]. Suppose $q : \mathcal{X} \to \mathbb{R}$ is a *quasi-seminorm*. Suppose also we are given a [[linear subspace|linear subspace]] $\mathcal{Y} \subset \mathcal{X}$ and a *linear map* $\phi : \mathcal{Y} \to \mathbb{R}$, such that
$$\phi(y) \leq q(y), \quad \forall y \in \mathcal{Y}$$
Then there exists a linear map $\psi: \mathcal{X} \to \mathbb{R}$ such that $\psi |_\mathcal{Y} = \phi$ and $\psi(x) \leq q(x)$ for all $x \in \mathcal{X}$.

## Theorem, (normed linear spaces)

#incomplete 

## Theorem (*Helly, Hahn-Banach analytic form*)

Let $E$ be a [[vector space]] over $\mathbb{R}$. 

A [[functional]] is a *function* defined on $E$ or some *subspace* of $E$ with values in $\mathbb{R}$.

Suppose function $p : E \to \mathbb{R}$ to be a [[Minkowski functional]], i.e. satisfying 
- $p(\lambda x) = \lambda p(x) \qquad \forall x \in E \text{ and } \forall \lambda >0$
- $p(x+y) \leq p(x) + p(y) \quad \forall x, y \in E$

Let $G \subset E$ be a [[linear subspace]], and let $g : G \to \mathbb{R}$ be a [[linear functional]] such that 
- $g(x) \leq p(x) \quad \forall x \in G$

Then under these assumptions, there exists a *linear functional* $f$ defined on all of $E$ that *extends* $g$, i.e. $g(x) = f(x) \forall x \in G$, and such that 
- $f(x) \leq p(x) \quad \forall x \in E$

### Notes
- extension of *linear functional* defined on a *linear subspace* of $E$ by a *linear functional* defined on all of $E$
- This theorem may be proved using [[Kuratowski-Zorn lemma|Zorn's lemma]]

___
## References
1. https://www.ucl.ac.uk/~ucahad0/3103_handout_6.pdf
2. https://www.math.ksu.edu/~nagy/real-an/ap-e-h-b.pdf
3. H. Brezis, _Functional Analysis, Sobolev Spaces and Partial Differential Equations_. New York, NY: Springer New York, 2011, pp. 1-2. doi: [10.1007/978-0-387-70914-7](https://doi.org/10.1007/978-0-387-70914-7).