---
layout: entry
title: learning parity with noise
aliases:
  - LPN
type:
  - definition
  - assumption
reference:
course:
lecture:
statement:
created: 2026-01-22T16:44:55-05:00
tags:
  - cryptography
---
## Cryptographic assumption

The **learning parity with noise** (LPN) assumption states that distributions $\mathcal{D}_{\mathsf{lpn}}$ and $\mathcal{D}_{\mathsf{unif}}$ are [[computationally indistinguishable]], where 
- $\mathcal{D}_{\mathsf{lpn}} := \{(\mathbf{a}_i,b_i): \mathbf{s} \gets \mathbb{F}^k, \mathbf{a}_i \gets \mathbb{F}^k,e_i \gets \mathsf{Bin}_p, b_i = \langle \mathbf{a}_i, \mathbf{s} \rangle + e_i \}_{i \in [n]}$
- $\mathcal{D}_{\mathsf{unif}} := \{(\mathbf{a}_i,b_i): \mathbf{a}_i \gets \mathbb{F}^k, b_i \gets \mathbb{F} \}_{i \in [n]}$ 
for [[finite field]] $\mathbb{F}$, $\mathsf{Bin}_p$ *error distribution* over $\mathbb{F}$ outputting random non-zero element of $\mathbb{F}$ with probability $p$ and $0$ with probability $1-p$.

## See also
- [[learning with errors problem]]

___
## References
1. A. Blum, M. Furst, M. Kearns, and R. J. Lipton, “Cryptographic Primitives Based on Hard Learning Problems,” in _Advances in Cryptology — CRYPTO’ 93_, vol. 773, D. R. Stinson, Ed., in Lecture Notes in Computer Science, vol. 773. , Berlin, Heidelberg: Springer Berlin Heidelberg, 1994, pp. 278–291. doi: [10.1007/3-540-48329-2_24](https://doi.org/10.1007/3-540-48329-2_24).
2. V. Vaikuntanathan and O. Zamir, “Improving Algorithmic Efficiency using Cryptography: Trapdoored Matrices and Applications,” _Proceedings of the 2026 Annual ACM-SIAM Symposium on Discrete Algorithms (SODA)_, pp. 2554–2574, Jan. 2026. doi: [10.1137/1.9781611978971.92](https://doi.org/10.1137/1.9781611978971.92).
3. https://crypto.stackexchange.com/questions/65999/are-lpn-and-lwe-problems-equivalent
