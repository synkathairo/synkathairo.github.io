---
layout: page
title: regular language
aliases:
  - regular
type:
  - definition
reference: 
course: 
lecture: 
statement: 
created: 2025-07-29T18:10:22-04:00
tags:
  - formal_language_theory
---
## Definition

The class $\operatorname{REG}(\Sigma)$ of **regular languages** is the *smallest class* (i.e. [[set]] of) [[decision problem|languages]] (for [[alphabet]] $\Sigma$) such that

- $\emptyset \in \operatorname{REG}(\Sigma)$ and $\{a\} \in \operatorname{REG}(\Sigma)$ for every $a \in \Sigma$
- if $L,M \in \operatorname{REG}(\Sigma)$ then $L \cup M \in \operatorname{REG}(\Sigma)$ (*union*), $L \cdot M \in \operatorname{REG}(\Sigma)$ (*concatenation*), and $L^* \in \operatorname{REG}(\Sigma)$ ([[Kleene star]])

## Notes

- every finite language is regular

## See also

- [[Kleene's theorem]]
- [[Chomsky hierarchy]]

___
## References

1. M. Avanzini, Lecture Notes, Topic: “finite automata.” M1-AL, Centre Inria d’Université Côte d’Azur, 2021. <https://www-sop.inria.fr/members/Martin.Avanzini/teaching/2021/AL/slides/w1.pdf
2. https://en.wikipedia.org/wiki/Regular_language
3. https://www.cs.hunter.cuny.edu/~sweiss/course_materials/csci265/KleenesTheorem.pdf