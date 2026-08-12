---
layout: page
title: big-Oh notation
aliases: 
type:
  - definition
reference: 
course: 
lecture: 
statement: 
created: 2025-01-23T17:01:25-05:00
tags:
  - complexity_theory
---
## Definition

If $f$, $g$ are two functions from $\mathbb{N}$ to $\mathbb{N}$, then we say that 
1. $f = O(g)$ if $\exists c$ such that $f(n) \leq c \cdot g(n)$ for every sufficiently large $n$
2. $f = \Omega(g)$ if $g = O(f)$
3. $f = \Theta(n)$ if $f = O(g)$ and $g = O(f)$
4. $f = o(g)$ if for every $\epsilon>0$, $f(n) \leq \epsilon \cdot g(n)$ for every sufficiently large $n$
5. $f = \omega(g)$ if $g = o(f)$

Notation: may also write as $f(n) = O(g(n))$ etc.

## Extensions

- $f= \tilde{O}(g(n)) = O(g(n)\log^k(n))$ (soft-$O$), means $\exists k$ such that $f(n) = O(g(n)\log^k(n))$

## See also

- *complexity class*
- [[class DTIME|DTIME]]

___
## References
1. S. Arora, B. Barak. *Computational Complexity: A Modern Approach*, Cambridge University Press, 2009, pp. 3-4.
2. https://en.wikipedia.org/wiki/Big_O_notation
3. https://cs.stackexchange.com/questions/63264/what-does-tilde-mean-in-big-o-notation