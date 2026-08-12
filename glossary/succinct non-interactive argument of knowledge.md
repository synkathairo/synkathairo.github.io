---
layout: entry
title: succinct non-interactive argument of knowledge
aliases:
  - SNARK
  - SNARKs
  - succinct preprocessing NARK
  - 简短无交互证明
type:
  - definition
reference:
course:
lecture:
statement:
created: 2025-07-25T18:35:35-04:00
tags:
  - cryptography
  - proof_system
---

## Definition

A **succinct preprocessing NARK** is a triple $(S,P,V)$:

- $S(C)$, public parameters $(pp,vp)$ for prover and verifier
- $P(pp,x,w)$, short proof $\pi$
  - $\operatorname{len}(\pi) = O_\lambda(\operatorname{polylog}(|C|))$
- $V(vp, x, \pi)$, fast to verify
  - $\operatorname{time}(V) = O_\lambda(|x|, \operatorname{polylog}(|C|))$

## Construction (_PCP-based SNARK_)

- recall [[class PCP|PCP theorem]];
- Use [[Fiat-Shamir transform]] to make the proof non-interactive
- #incomplete
- (impractical as not efficient)

## See also

- [[succinct non-interactive arguments|SNARGs]]
- [[non-interactive argument of knowledge|(preprocessing) NARK]]
- [[non-interactive zero-knowledge proof system|NIZK]]
- [[proof calculus|proof system]]

---

## References

1. https://cs251.stanford.edu/lectures/lecture15.pdf
2. https://rdi.berkeley.edu/zkp-course/assets/Lecture2-2023.pdf
3. https://en.wikipedia.org/wiki/Non-interactive_zero-knowledge_proof
4. https://crypto.stackexchange.com/questions/74382/zk-snarks-vs-zk-starks-vs-bulletproofs-definitions
5. https://a16zcrypto.com/posts/article/snark-security-and-performance/
6. https://www.cryptologie.net/posts/theyre-all-snarks/
7. https://zhuanlan.zhihu.com/p/714666313
8. https://zhuanlan.zhihu.com/p/150246147
