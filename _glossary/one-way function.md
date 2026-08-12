---
layout: entry
title: one-way function
aliases:
  - OWF
type: 
reference: 
course: 
lecture: 
statement: 
created: 2025-08-01T15:21:42-04:00
tags:
  - cryptography
---
## Definition

A [[function]] $f : \{0,1\}^* \to \{0,1\}^*$ is a **one-way function** if:

- $f$ can be computed in [[class P|polynomial time]]
- $\forall$ [[class PPT|PPT]] adversaries $A$:
	- $\Pr[f(x')=y : x \gets \{0,1\}^n, y = f(x), x' \gets A(1^n,y)] = \mathsf{negl}(n)$
		- ([[negligible function]])

(intuitively: $f$ easy to evaluate, hard to invert, meaning hard to find preimage of given $y= f(x)$)
## Notes

- [[Goldreich-Levin theorem]]
- $f$ doesn't have to be [[injective function|one-to-one]]
- special case of bijective $f$ is [[one-way permutation]]
- existence of *one-way functions* would imply [[P versus NP problem|P≠NP]]

___
## References

1. <https://www.khoury.northeastern.edu/home/wichs/class/crypto-fall17/lecture7.pdf>
2. <https://www.cs.purdue.edu/homes/hmaji/teaching/Fall%202017/lectures/19.pdf>
3. <https://github.com/cpeikert/TheoryOfCryptography/blob/master/lec02%20-%20Computational%20Hardness.pdf>
4. <https://en.wikipedia.org/wiki/One-way_function>
