---
layout: entry
title: Gapless power method convergence
aliases: 
type:
  - theorem
reference: 
course:
  - CS6763
lecture:
  - cs6763-11
statement: If [[Power method]] is initialized with a random [[Gaussian concentration|Gaussian]] vector then, with high probability, after $T  = O(\frac{\log d/\epsilon}{\epsilon})$ steps, we obtain a $\mathbf{z}$ satisfying$$\lVert \mathbf{X} - \mathbf{Xzz}^{\sf T} \rVert_F^2 \leq (1 + \epsilon) \lVert \mathbf{X} - \mathbf{Xv}_1\mathbf{v}_1^{\sf T} \rVert_F^2$$
created: 2023-12-04T01:10:12-05:00
---
If [[Power method]] is initialized with a random [[Gaussian distribution|Gaussian]] vector then, with high probability, after $T  = O(\frac{\log d/\epsilon}{\epsilon})$ steps, we obtain a $\mathbf{z}$ satisfying

$$\lVert \mathbf{X} - \mathbf{Xzz}^{\sf T} \rVert_F^2 \leq (1 + \epsilon) \lVert \mathbf{X} - \mathbf{Xv}_1\mathbf{v}_1^{\sf T} \rVert_F^2$$

___
Intuition: For a good low-rank approximation, we don’t actually need to converge to v1 if σ1 and σ2 are the same or very close. Would suffice to return either v1 or v2, or some linear combination of the two.

___
Compare: [[Basic power method convergence]]
