---
layout: entry
title: P versus NP problem
aliases:
  - Algorithmica
  - P=NP
  - P =? NP
  - P≠NP
  - P≟NP
  - Impagliazzo's worlds
type:
reference:
course:
lecture:
statement:
created: 2025-01-23T21:42:00-05:00
tags:
  - complexity_theory
  - cryptography
---

## Notes

extremely important, if $\mathbf{P} = \mathbf{NP}$ (i.e. every [[class P]] and [[class NP]] are the same), then
#incomplete

- yet unresolved if $\mathbf{P} = \mathbf{NP}$ is true
- $\mathbf{P} \subseteq \mathbf{NP}$ is known
- BIG OPEN QUESTION IN COMPUTER SCIENCE!
- most believe that $\mathbf{P} \neq \mathbf{NP}$, although this is not proven

## "Worlds" in complexity theory (_Russell, Impaggliazo 1995_)

- "_Algorithmica_": $\mathbf{P} = \mathbf{NP}$ or $\mathbf{BPP} = \mathbf{NP}$
- "_Heuristica_": $\mathbf{P} = \mathbf{NP}$ on average(?)
  - $\mathbf{P} \neq \mathbf{NP}$, but [[average hard NP puzzle|average hard NP puzzles]] don't exist
- "_Pessiland_": $\mathbf{P} = \mathbf{NP}$ but crypto does not exist (?)
  - [[average hard NP puzzle|average hard NP puzzles]] exist but [[one-way puzzle|one-way puzzles]] don't exist
- "_Minicrypt_": [[symmetric key encryption]] with short keys exists
  - [[one-way puzzle|one-way NP puzzles]] exist therefore [[one-way function|one-way functions]] exist
- "_Cryptomania_": [[public key encryption]] exists

---

## References

1. S. Arora, B. Barak. _Computational Complexity: A Modern Approach_, Cambridge University Press, 2009, pp. 39, 369.
2. https://blog.csdn.net/danielxinhj/article/details/127599435
3. https://cstheory.stackexchange.com/questions/33845/deeper-look-at-algorithmica
4. https://cs.stackexchange.com/questions/1810/are-there-np-problems-not-in-p-and-not-np-complete
5. <https://www.khoury.northeastern.edu/home/wichs/class/crypto-fall17/lecture7.pdf>
