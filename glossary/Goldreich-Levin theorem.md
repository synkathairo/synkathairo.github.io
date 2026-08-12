---
layout: entry
title: Goldreich-Levin theorem
aliases:
type:
reference:
course:
  - CSCI3210
lecture:
statement:
created: 2024-11-20T20:53:39-05:00
tags:
  - cryptography
---

## Theorem (_Goldreich-Levin_)

If $f$ is a [[one-way function]], then $g(x,r) = (f(x),r)$ is also a _one-way function_ and $hc(x,r) = \langle x,r \rangle = \sum (x_i \cdot r_i) (\mod 2)$ is a [[hard-core predicate]] of $g$.

## Notes

- allows constructing [[pseudorandom generator|PRG]] from any [[one-way permutation]]

---

## References

1. <https://www.ccs.neu.edu/home/wichs/class/crypto-fall15/lecture7.pdf>
2. <https://www.ccs.neu.edu/home/wichs/class/crypto-fall15/lecture8.pdf>
3. <https://cs.stanford.edu/people/trevisan/pacc/lecture9.pdf>
4. <https://www.cs.cmu.edu/~goyal/s18/15503/scribe_notes/lecture6.pdf>
