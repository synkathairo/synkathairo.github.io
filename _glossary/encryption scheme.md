---
layout: entry
title: encryption scheme
aliases:
  - valid encryption scheme
type:
  - definition
reference:
course:
  - CSCI3210
lecture:
  - csci3210-1
statement: "An encryption scheme is a pair of polynomial time algorithms $\\operatorname{Enc}: \\mathcal{K} \\times \\mathcal{M} \\to \\mathcal{C} \\qquad \\operatorname{Enc}(k,m) = \\operatorname{Enc}_k(m)$ and $\\operatorname{Dec}: \\mathcal{K} \\times \\mathcal{M} \\to \\mathcal{C} \\qquad \\operatorname{Dec}(k,m) = \\operatorname{Dec}_k(m)$ such that $\\forall k \\in \\mathcal{K}$, $\\forall m \\in \\mathcal{M}$,$\\operatorname{Dec}(k, \\operatorname{Enc}(k,m)) = m$"
created: 2024-10-24T18:24:26-04:00
---

## Definition

Let $\mathcal{K}$ denote the key space, $\mathcal{M}$ denote the message space, and $\mathcal{C}$ denote the cipher space.
An encryption scheme is a pair of [[class P|polynomial time]] algorithms

$$ \begin{aligned}
\operatorname{Enc}: \mathcal{K} \times \mathcal{M} \to \mathcal{C} \qquad \operatorname{Enc}(k,m) = \operatorname{Enc}_k(m)\\
\operatorname{Dec}: \mathcal{K} \times \mathcal{M} \to \mathcal{C} \qquad \operatorname{Dec}(k,m) = \operatorname{Dec}_k(m)
\end{aligned}$$
such that $\forall k \in \mathcal{K}$, $\forall m \in \mathcal{M}$,
$$\operatorname{Dec}(k, \operatorname{Enc}(k,m)) = m$$
(*correctness*)

## Encryption problem
Alice has a plaintext *message* $m$, which she wants to send to Bob. It is *encrypted* with a *key*, $k$, producing a *ciphertext*, $c$, which is received by Bob, who *decrypts* it to recover $m$. Eve, an eavesdropper, should not learn $m$.

___
## References
1. https://intensecrypto.org/public/lec_01_introduction.html
$$
