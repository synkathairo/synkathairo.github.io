---
layout: page
title: Borel-Cantelli lemma
aliases:
type:
  - lemma
  - theorem
reference:
course:
lecture:
statement:
created: 2025-03-13T20:19:12-04:00
tags:
  - probability
  - measure_theory
---

## Theorem

Let $\{A_n\}_{n=0}^\infty$ be sequence of events occurring with certain [[probability density function|probability distribution]] (in a sample space $\Omega$), $A$ be the event consisting of the occurrence of finite number of events $A_n$ for $n= 1,2,...$, then probability of an infinite number of the $A_n$ occurring is zero if
$$\sum_{n=1}^\infty P(A_n) < \infty$$

Equivalently, if $P(A_n) = 0$ for all $n$, probability that none of them occurs is $1$, and in particular probability of $A$ that a finite number occur is also $1$.

If the events $\{A_n\}_{n=0}^\infty$ are [[independence|independent]], then probability of an infinite number of the $A_n$ occurring is one if
$$\sum_{n=1}^\infty P(A_n) = \infty$$

### Theorem (stated in terms of measure spaces)

Consider [[measure space]] $(X,\Sigma,\mu)$, sequence of $\Sigma$-measurable sets $\langle E_n \rangle_{n \in \mathbb{N}}$, if
$$\sum_{n=1}^\infty \mu(E_n) < \infty$$
then
$$\mu \left({\limsup_{n \to \infty} E_n} \right)= 0$$
(_limit superior of set_)

---

## References

1. https://mathworld.wolfram.com/Borel-CantelliLemma.html
2. https://proofwiki.org/wiki/Borel-Cantelli_Lemma
3. https://www.math.mcgill.ca/dstephens/OldCourses/556-2006/Math556-BorelCantelli.pdf
4. https://en.wikipedia.org/wiki/Borel%E2%80%93Cantelli_lemma
