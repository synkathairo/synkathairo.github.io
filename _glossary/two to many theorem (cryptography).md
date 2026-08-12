---
layout: page
title: two to many theorem (cryptography)
aliases: 
type:
  - theorem
reference: 
course:
  - CSCI3210
lecture:
  - csci3210-1
statement: An [[encryption scheme]] $(E,D)$ is [[perfect secrecy|perfectly secret]] if and only if for every two distinct plaintexts $\{ m_0, m_1\} \subseteq \{0,1\}^\ell$ and every strategy used by Eve, if we choose at random $b \in \{0,1\}$ and a random key $k \in \{0,1\}^n$, then the probability that Eve guesses $m_b$ after seeing $E_k(m_b)$ is at most $1/2$.
created: 2024-11-20T21:19:46-05:00
tags:
  - cryptography
---
## Theorem
An [[encryption scheme]] $(E,D)$ is [[perfect secrecy|perfectly secret]] if and only if for every two distinct plaintexts $\{ m_0, m_1\} \subseteq \{0,1\}^\ell$ and every strategy used by Eve, if we choose at random $b \in \{0,1\}$ and a random key $k \in \{0,1\}^n$, then the probability that Eve guesses $m_b$ after seeing $E_k(m_b)$ is at most $1/2$.

## Proof
### "only if"
this is a special case of *perfect secrecy* when $\lvert \mathcal{M} \rvert=2$, "for every two distinct plaintexts" vs "for every set of plaintexts"

### "if"
this is harder to show. Use proof by contradiction. 



#incomplete 

___
## References
1. https://intensecrypto.org/public/lec_01_introduction.html
	- see proof of theorem
