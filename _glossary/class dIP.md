---
layout: page
title: class dIP
aliases:
  - deterministic interactive proof system
  - k-round deterministic interactive proof system
  - deterministic proof system
  - dIP
  - deterministic interactive proof
type:
  - definition
  - complexity class
reference: 
course: 
lecture: 
statement: 
created: 2025-03-04T22:45:18-05:00
tags:
  - complexity_theory
---
## Definition (*deterministic proof system*)
Say a [[decision problem|language]] has **k-round deterministic interactive proof system** if there is a deterministic [[Turing machine|TM]] $V$ that on input $x, a_1,...,a_i$ runs in time [[class P|polynomial]] in $\lvert x \rvert$, and can have [[k-round interaction]] with any function $P$ such that

- (*completeness*) $x \in L \Rightarrow \exists P: \{0,1\}^* \to \{0,1\}^*\ \mathtt{out}_V \langle V,P \rangle (x) = 1$
	- if $x \in L$, there is a *prover* strategy that makes the *verifier* accept
- (*soundness*) $x \notin L \Rightarrow \forall P: \{0,1\}^* \to \{0,1\}^*\ \mathtt{out}_V \langle V,P \rangle (x) = 0$
	- if $x \notin L$, then for any *prover* strategy, the *verifier* rejects

## Definition (*class dIP*)
Class $\mathbf{dIP}$ contains all *languages* with $k(n)$-round deterministic interactive proof system where $k(n)$ is polynomial in $n$.

## Lemma
$\mathbf{dIP} =$ [[class NP|NP]]

Proof:
- trivially, every NP language has a 1-round deterministic proof system and is thus in dIP, thus $\mathbf{NP} \subseteq \mathbf{dIP}$
- show if $L \in \mathbf{dIP}$, then $L \in \mathbf{NP}$:
	- if $V$ is verifier for $L$, then certificate for input in $L$ is transcript $(a_1,a_2,...,a_k)$ causing $V$ to accept
		- checking $V(x) = a_1$, $V(x,a_1,a_2) = a_3$, ..., $V(x,a_1,...,a_k) = 1$
		- if $x \in L$, such a transcript exists
	- conversely, existence of such transcript allows defining prover function $P$ satisfying $P(x,a_1) = a_2$, $P(x,a_1,a_2,a_3) = a_4$ etc
		- deterministic prover satisfies $\mathtt{out}_V \langle V,P \rangle (x) = 1$, implying $x \in L$

## See also
- [[class IP|IP]], where the verifier is *probabilistic*
- [[propositional proof system]]

___
## References
1. S. Arora, B. Barak. *Computational Complexity: A Modern Approach*, Cambridge University Press, 2009, p. 145.
2. https://cseweb.ucsd.edu/classes/wi20/cse200-a/notes/9-interactive%20proofs.pdf
3. https://www.cs.princeton.edu/courses/archive/spr06/cos522/ip.pdf
