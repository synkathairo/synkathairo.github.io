---
layout: entry
title: variance
type:
  - definition
  - proposition
reference: 
lecture:
  - cs6763-1
statement: $\mathrm{Var}[X]=\mathbb{E}[(X-\mathbb{E}[X])^2]=\mathbb{E}[X^2]-\mathbb{E}[X]^2$<br />$\mathrm{Var}[X+Y]=\mathrm{Var}[X]+\mathrm{Var}[Y]+2\mathrm{Cov}[X,Y]$
created: 2023-10-11T22:07:52-04:00
course:
  - CS6763
tags:
  - statistics
---
## Definition

Let $X$ be a (scalar) [[random variable]] taking value in some [[set]] $\mathcal{S}$. Then, the **variance** is

$$\mathrm{Var}[X]=\mathbb{E}[(X-\mathbb{E}[X])^2]=\mathbb{E}[X^2]-\mathbb{E}[X]^2 \leq \mathbb{E}[X^2]$$

## Proposition

$$\mathrm{Var}[X+Y]=\mathrm{Var}[X]+\mathrm{Var}[Y]+2\mathrm{Cov}[X,Y]$$

If $X$ and $Y$ are independent, then [[covariance]] $\mathrm{Cov}[X,Y]=0$. (under this condition there is linearity of variance)

## Notes
- $\operatorname{Var}[aX] = a^2 \operatorname{Var}[X]$

___

## References:
1. http://theanalysisofdata.com/probability/2_3.html
2. https://www.kellogg.northwestern.edu/faculty/weber/decs-433/Notes_4_Random_variability.pdf
3. https://cs229.stanford.edu/section/cs229-prob.pdf
4. https://stats.stackexchange.com/questions/184998/the-linearity-of-variance
5. https://math.stackexchange.com/questions/1708266/why-square-a-constant-when-determining-variance-of-a-random-variable

___
See also: Jensen’s inequality
