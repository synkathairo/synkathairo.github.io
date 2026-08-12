---
layout: page
title: Measure of central tendency
type:
  - definition
reference: 
lecture: cs6763-3
statement: "$q^{th}$ central moment: $\\mathbb{E}[(X-\\mathbb{E}X)^q]$"
created: 2023-10-16T18:08:50-04:00
course: CS6763
---
variance is a natural measure of central tendancy, but there are others.

$q^{th}$ central moment: $\mathbb{E}[(X-\mathbb{E}X)^q]$ 

$q=2$ gives the variance

___

In proof of [[Hoeffding inequality]]:

Idea in brief: Apply [[Markov's inequality]] to $\mathbb{E}[(X − \mathbb{E}X)^q]$ for larger q, or more generally to $f(X − \mathbb{E}X)$ for some other non-negative function $f$. E.g., to $\exp(X − EX)$.

___

References:
1. [CS6763 Lecture 3](https://www.chrismusco.com/amlds2023/lectures/lec3_annotated.pdf), page 14