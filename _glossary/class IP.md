---
layout: entry
title: class IP
aliases:
  - interactive proof
  - IP
  - IPS
  - interactive proof system
type:
  - definition
  - complexity class
reference:
course:
lecture:
statement: The **class** $\mathbf{IP}$ is the class of *languages* $L$ such that there exists an *IPS* for $L$.
created: 2025-03-04T17:08:44-05:00
tags:
  - complexity_theory
  - proof_system
---

## Definition (_IPS_)

Consider the following

- deterministic unbounded time _prover_ $P: \{0,1\}^* \to \{0,1\}^*$ (function)
- randomized (probabilistic) [[class P|polynomial time]] _verifier_ $V$ ([[Turing machine]])
- pair of conversation tapes on which $P$ and $V$ exchange information

An **interactive proof system** (_IPS_) is a protocol between $P$ and $V$ where

1. $P$ and $V$ are given an input $x$
2. through exchange of messages $P$ tries to prove to $V$ that $x \in L$ (i.e. that $x$ is in [[decision problem|language]] $L$)
3. at end of interaction $V$ outputs "accept" if proof is satisfactory or "reject" if not

(or say that [[decision problem|language]] $L$ is in $\mathbf{LP}[k]$, if the following hold, for $V$ having $k$-round interaction with $P$,)

Require that

1. (_completeness_) if both $P$ and $V$ follow the protocol and $x \in L$, then $$\Pr[V \text{ accepts } x] \geq \frac{2}{3}$$ i.e., $x \in L \Rightarrow \exists P \Pr[\mathtt{out}_V \langle V,P \rangle (x) = 1] \geq 2/3$
2. (_soundness_) if $x \notin L$ and $V$ follows the protocol, then regardless of what $P$ does, $$\Pr[V \text{ rejects } x] \geq \frac{2}{3}$$ i.e., $x \notin L \Rightarrow \forall P \Pr[\mathtt{out}_V \langle V,P \rangle (x) = 1] \leq 2/3$

(probabilities over choice of $m$-bit [[random variable]] $r \in_R \{0,1\}^m$ for interaction $\langle f,g \rangle (x)$ over $r$)

## Definition (_class IP_)

Define $\mathbf{IP} = \cup_{c\geq 1} \mathbf{IP}[n^c]$.

In other words, the **class** $\mathbf{IP}$ is the class of _languages_ $L$ such that there exists an _IPS_ for $L$.

## Theorem \[Shamir 1992; Lund, Karloff, Fortnow, Nisan 1990\]

IP = [[class PSPACE|PSPACE]]

## Notes

- [[class NP|NP]] can be thought of an _IPS_ where $P$ sends $V$ exactly one message, hence $\mathbf{NP} \subset \mathbf{IP}$
- [[class ZKP|zero-knowledge proofs]] (ZKP) are IP proofs with the additional requirement of _zero-knowledge_ where $V$ does not learn anything other than the fact that the statement is true; it is known that $\mathbf{ZKP} \subset \mathbf{IP}$
  - $\mathbf{ZKP} \subseteq \mathbf{NP}$ in fact
- every language in [[class P♯P|P♯P]] has an _IPS_ \[Lund et al 1992\]
- compare to [[class dIP|dIP]], where the verifier is _deterministic_
- [[class MIP|MIP]], _multi-prover interactive proof_, a special case

## See also

- [[proof calculus|proof system]]
- _Arthur-Merlin proof system_

---

## References

1. https://people.csail.mit.edu/ronitt/COURSE/S12/handouts/lec6.pdf
2. https://en.wikipedia.org/wiki/IP_(complexity)
3. https://en.wikipedia.org/wiki/Interactive_proof_system
4. S. Arora, B. Barak. _Computational Complexity: A Modern Approach_, Cambridge University Press, 2009, pp. 146-147.
5. Shamir, A. (1992). IP = PSPACE. _Journal of the ACM (JACM)_, _39_(4), 869-877. https://doi.org/10.1145/146585.146609
6. Lund, C., Fortnow, L., Karloff, H., & Nisan, N. (1992). Algebraic methods for interactive proof systems. _Journal of the ACM (JACM)_, _39_(4), 859-868. https://doi.org/10.1145/146585.146605
7. https://crypto.stackexchange.com/questions/101451/what-do-we-know-about-the-relationship-between-ip-zkp
8. https://en.wikipedia.org/wiki/Zero-knowledge_proof
9. https://crypto.stackexchange.com/questions/64347/can-you-explain-what-an-np-statement-is-when-they-refer-to-it-in-zero-knowledge
10. S. Goldwasser, S. Micali, and C. Rackoff, “The Knowledge Complexity of Interactive Proof Systems,” _SIAM J. Comput._, vol. 18, no. 1, pp. 186–208, Feb. 1989, doi: [10.1137/0218012](https://doi.org/10.1137/0218012).
11. https://www.cs.umd.edu/~jkatz/complexity/f11/lecture19.pdf
