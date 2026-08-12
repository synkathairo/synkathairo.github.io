---
layout: entry
title: t-out-of-n threshold secret-sharing scheme
aliases:
  - threshold secret-sharing scheme
type:
  - definition
reference: 
course: 
lecture: 
statement: 
created: 2025-04-25T23:04:25-04:00
tags:
  - cryptography
---
## Definition
A **_t_-out-of-_n_ threshold secret-sharing scheme** (*TSSS*) consists of algorithms
- $\mathsf{Share}$: randomized algorithm that takes a *message* $m \in \mathcal{M}$ as input, and outputs a sequence $\mathbf{s} = (s_1,...,s_n)$ of *shares*
- $\mathsf{Reconstruct}$: deterministic algorithm that takes a collection of $t$ or more shares, and outputs a message

Consider $\mathcal{M}$ the *message space* of the scheme, and $t$ its threshold, scheme $\Sigma$

### correctness
A *TSSS* satisfies *correctness* if for all authorized sets $U \subseteq \{1,...,n\}$ (i.e. $|U| \geq t$ and for all $\mathbf{s} \gets \mathsf{Share}(m)$, $\mathsf{Reconstruct}(\{s_i \vert i \in U\}) = m$

### security
intuition: if you know unauthorized number of shares, then you learn no information about the choice of secret message

formally:
Let $\Sigma$ be a TSSS, then $\Sigma$ is said to be **secure** if $\mathcal{L}_{\textsf{tsss-L}}^\Sigma=\mathcal{L}_{\textsf{tsss-R}}^\Sigma$  
where for $\mathcal{L}_{\textsf{tsss-L}}^\Sigma$, $\text{SHARE}(m_L, m_R \in \Sigma.\mathcal{M}, U)$ returns `err` if $|U| \geq \Sigma.t$, else, $\mathbf{s} \gets \Sigma.\mathsf{Share}(m_L)$, and $\{s_i | i \in U\}$ is returned. $\mathcal{L}_{\textsf{tsss-R}}^\Sigma$ is similarly described, but for $m_R$. $U \subseteq \{1,...,\Sigma.n\}$


## Notes
- the [[one-time pad]] may be considered as the simplest *secret-sharing scheme*, 2-out-of-2, where
	- Share(m): $s_1 \gets \{0,1\}^\ell$, $s_2 := s_1 \oplus m$ 
	- Reconstruct($s_1,s_2$): return $s_1 \oplus s_2$
- furthermore, OTP satisfies security as a 2-out-of-2 TSSS

___
## References
1. https://joyofcryptography.com/pdf/chap3.pdf
