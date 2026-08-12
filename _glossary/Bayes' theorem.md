---
layout: entry
title: Bayes' theorem
aliases:
  - Bayes' rule
type:
  - theorem
reference: 
course:
  - CS6763
lecture:
  - cs6763-1
statement: $P_{Y|X}(y|x)=\frac{P_{XY}(x,y)}{P_X(x)}=\frac{P_{X|Y}(x|y)P_Y(y)}{\sum_{y'\in Val(Y)}P_{X|Y}(x|y')P_Y(y')}$ <br />$f_{X|Y}(y|x)=\frac{f_{XY}(x,y)}{f_X(x)}=\frac{f_{X|Y}(x|y)f_Y(y)}{\int_{-\infty}^\infty f_{X|Y}(x|y')f_Y(y') dy'}$
created: 2023-10-19T18:13:17-04:00
tags:
  - probability
---
## Theorem
In the case of discrete random variables $X$ and $Y$, 
$$P_{Y|X}(y|x)=\frac{P_{XY}(x,y)}{P_X(x)}=\frac{P_{X|Y}(x|y)P_Y(y)}{\sum_{y'\in Val(Y)}P_{X|Y}(x|y')P_Y(y')}$$

If the random variables $X$ and $Y$ are continuous,
$$f_{X|Y}(y|x)=\frac{f_{XY}(x,y)}{f_X(x)}=\frac{f_{X|Y}(x|y)f_Y(y)}{\int_{-\infty}^\infty f_{X|Y}(x|y')f_Y(y') dy'}$$

([[conditional probability]])


___
## References:
1. https://cs229.stanford.edu/section/cs229-prob.pdf
2. https://en.wikipedia.org/wiki/Bayes%27_theorem
3. https://en.wikipedia.org/wiki/Bayesian_inference
4. https://en.wikipedia.org/wiki/Prior_probability
