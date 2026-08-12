---
layout: page
title: non-interactive zero-knowledge proof system
aliases:
  - NIZK
type: 
reference: 
course: 
lecture: 
statement: 
created: 2025-07-29T19:24:56-04:00
tags:
  - cryptography
  - proof_system
---
## Definition

A pair of [[class PPT|PPT]] algorithms $(P,V)$ is a **non-interactive zero-knowledge proof system** (NIZK proof system) for a [[decision problem|language]] $L \in$ [[class NP|NP]] if:

- *Completeness*: for any $x \in L$, (with $|x| = k$), *witness* $w$ for $x$, have
	- $\Pr[r \gets \{0,1\}^{\mathsf{poly}(k)}; \pi \gets P(r,x,w) : V(r,x,\pi)=1] = 1$ 
	- ([[random variable|random]] string $r$ given to both parties. $P$ given $r,x$ and witness that $x\in L$, produces proof $\pi$ sent to $V$. Verifier given $r,x,\pi$ decides to *accept* or *reject*. If $x \in L$ and honest parties, $V$ always accepts)
- *Soundness*: if $x \notin L$, then $\forall P^*$ (even all-powerful $P^*$), the following is negligible (in $|x| = k$)
	- $\Pr[r \gets \{0,1\}^{\mathsf{poly}(k)}; \pi \gets P^*(r,x) : V(r,x,\pi)=1]$ 
- *Zero-knowledge*: exists a *PPT* simulator $S$ such that for all $x \in L$ (with $|x| = k$, security parameter) and any witness $w$ for $x$, the following distributions are computationally indistinguishable
	1. $\{r \gets \{0,1\}^{\mathsf{poly}(k)}; \pi \gets P(r,x,w) : (r,x,\pi)\}$
	2. $\{(r,\pi) \gets S(x): (r,x,\pi)\}$
	- (restricts info $V$ may obtain from $P$. Intuition: if $V$ "learns" anything from interacting with $P$, could have also learned himself using polynomial-time simulator $S$)


## See also

- [[proof calculus|proof system]]
- [[chosen ciphertext attack security]]
- [[class ZKP|zero-knowledge proof]]


___
## References

1. https://www.cs.umd.edu/~jkatz/gradcrypto2/NOTES/lecture5.pdf
2. https://www.cs.umd.edu/~jkatz/gradcrypto2/NOTES/lecture6.pdf