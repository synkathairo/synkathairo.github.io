---
layout: entry
title: Rademacher complexity
aliases:
type:
  - definition
reference:
course:
lecture:
statement:
created: 2025-10-14T18:29:11-04:00
tags:
  - computational_learning_theory
---

## Definition

Let $A \subseteq \mathbb{R}^m$ be a bounded set of vectors. The **Rademacher average** of $A$ is 
$$\mathsf{Rad}(A) = \mathbb{E}_{\sigma \in \{\pm 1 \}^m} \left[ \sup_{a \in A} \frac{\sigma \cdot a}{m} \right] = \mathbb{E}_{\sigma \in \{\pm 1 \}^m} \left[ \sup_{a \in A} \frac{1}{m} \sum_{i=1}^m \sigma_i a_i \right]$$
where $\sigma_i \overset{\text{i.i.d.}}{\sim} \operatorname{unif}\{-1,1\}$ ([[Rademacher concentration|Rademacher random variable]]).

Fix $m \in \mathbb{N}$, let $\mathcal{X}$ be a nonempty set, and suppose class of functions $\mathcal{F}: \mathcal{X} \to [-1,1]$. For any set $S = (x_1,...,x_m) \in \mathcal{X}^m$, let 
$$\mathcal{F}(S) = \{(f(x_1),...,f(x_m)): f \in \mathcal{F}\} \subseteq \mathbb{R}^m$$
Fix sample $S \in \mathcal{X}^m$, then the **empirical Rademacher complexity of $\mathcal{F}$ with respect to $S$** is 
$$\mathsf{Rad}_S(\mathcal{F}) = \mathsf{Rad}(\mathcal{F}(S)) = \mathbb{E}_{\sigma \in \{\pm 1 \}^m} \left[ \sup_{f \in \mathcal{F}} \frac{1}{m} \sum_{i=1}^m \sigma_i f(x_i) \right]$$

Let $\mathcal{D}$ be a [[probability density function|distribution]] over $\mathcal{X}$, then the **Rademacher complexity of size $m$ of $\mathcal{F}$ with respect to $\mathcal{D}$** is

## Notes

- _Rademacher complexity_ can be applied to estimate partition function of an [[Lenz–Ising model|Ising model]] (Kuck, Sabharwal, Ermon 2018)

## See also

- [[Vapnik-Chervonenkis dimension|VC dimension]]

---

## References

1. J. Shafer, Class Lecture, Topic: "Unit 6: Rademacher Complexity." CS 294-220, UC Berkeley, Spring 2021. https://piazza.com/class_profile/get_resource/khs64r6r5yn154/km1at8uo4o3mk
2. C. Scott, Class Lecture, Topic: "10: Rademacher Complexity." EECS 598, University of Michigan, Winter 2014. https://web.eecs.umich.edu/~cscott/past_courses/eecs598w14/notes/10_rademacher.pdf
3. https://people.math.binghamton.edu/qiao/math605/book/rademacher-complexity.html
4. https://www.cs.cmu.edu/~ninamf/ML11/lect1117.pdf
5. J. Kuck, A. Sabharwal, and S. Ermon, “Approximate Inference via Weighted Rademacher Complexity,” Jan. 27, 2018, _arXiv_: arXiv:1801.09028. doi: 10.48550/arXiv.1801.09028.
