---
layout: entry
title: class PCP
aliases:
  - probabilistically checkable proof theorem
  - PCP
  - probabilistically checkable proof
  - PCP theorem
type:
  - definition
  - theorem
  - complexity class
reference: 
course: 
lecture: 
statement: 
created: 2025-03-04T15:12:43-05:00
tags:
  - complexity_theory
  - approximation_algorithms
  - proof_system
---
## Definition (*PCP system, PCP verifier*)

Define a $(r(n), q(n))$-**PCP** *verifier* (**PCP** system) on input string $x \in \{0,1\}^n$, for language $L$ and $q,r : \mathbb{N} \to \mathbb{N}$:
- *prover* $P$ writes down proof $\pi$
	- where $\pi \in \{0,1\}^*$ is a $\operatorname{poly}(n)$-bit-length *proof*, of length at most $q(n) 2^{r(n)}$
- *verifier* $V$ looks at $x$ and does [[class P|polynomial time]] deterministic computation, then uses at most $r(n)$ bits of [[randomness]] (random coins) to choose (nonadaptive queries) $q(n)$ random locations in the proof $\pi$. $V$ also uses these random bits to produce a deterministic test (*predicate*) $\phi$ on $q(n)$ bits
- $V$ reads bits in the $q(n)$ randomly chosen locations from the proof and does test $\phi$ on them, accepting ($1$) or rejecting ($0$), where $V^\pi(x)$ is the [[random variable]] representing $V$'s output on input $x$ with random access to $\pi$
- **completeness**: if $x \in L$ then $P$ can write a proof that $V$ accepts w.p. $1$, i.e. $\exists \pi \in \{0,1\}^*$ such that $\Pr[V^\pi(x) = 1] = 1$. Call string $\pi$ is the *correct proof* for $x$.
- **soundness**: for every $x \notin L$, no matter what proof $P$ writes, $V$ accepts w.p. at most $1/2$, i.e. $\forall \pi \in \{0,1\}^*$, $\Pr[V^\pi(x) = 1] \leq \frac{1}{2}$

(alternatively, may define *completeness* and *soundness* using parameters $c$ and $s$ for bounds of acceptance respectively, thus forming **class $\text{PCP}_{c,s}(r(n),q(n))$** from the class of [[decision problem|languages]] for which there exists a *PCP verifier* with those requisite completeness and soundness conditions; standard parameters are indeed $c=1$ and $s = \frac{1}{2}$)

## PCP Theorem \[*Arora-Safra 1998; Arora-Lund-Motwani-Sudan-Szegedy 1998*]
All [[decision problem|languages]] $L \subseteq$ [[class NP|NP]] have a highly efficient *PCP* verifier, 

i.e. there is a universal constant $q > 0$ such that $$\mathbf{NP} = \mathbf{PCP}(\log n,1)$$

(or $\mathbf{NP} = \mathbf{PCP}(O(\log n), O(1))$ )

## Theorem (*scaled-up PCP*)
Let $\mathbf{PCP}(\operatorname{poly}(n),1) = \cup_{c \geq 1}\mathbf{PCP}(n^c,1)$. Then,
$$\mathbf{PCP}(\operatorname{poly}(n),1)=\mathbf{NEXP}$$

([[class NEXP|NEXP]])
## Notes

- [[class NP|NP]] $=$ [[class dIP|dIP]] $= \mathbf{PCP}(O(\log n), O(1)) \subseteq$ [[class IP|IP]] $=$ [[class PSPACE|PSPACE]]
- as the verifier is probabilistic, can give wrong answers

## See also

- generalization of [[class NP|NP]] which itself is a simple [[proof calculus|proof system]]

___
## References
1. https://courses.cs.washington.edu/courses/cse533/05au/pcp-theorem.pdf
2. https://www.cs.utexas.edu/~danama/XRDS.pdf
3. https://en.wikipedia.org/wiki/PCP_theorem
4. https://en.wikipedia.org/wiki/Probabilistically_checkable_proof
5. S. Arora, B. Barak. *Computational Complexity: A Modern Approach*, Cambridge University Press, 2009, pp. 240-241.
6. S. Arora and S. Safra. "Probabilistic checking of proofs: A new characterization of NP". _Journal of the ACM (JACM)_, 45(1):70–122, 1998. https://doi.org/10.1145/273865.273901
7. S. Arora, C. Lund, R. Motwani, M. Sudan, and M. Szegedy. "Proof verification and the hardness of approximation problems". *Journal of the ACM (JACM)*, 45(3):501–555, 1998. https://doi.org/10.1145/278298.278306
8. https://people.seas.harvard.edu/~cs125/fall16/lec22.pdf
9. https://www.quantamagazine.org/computer-scientists-combine-two-beautiful-proof-methods-20241004/
10. https://users.cs.duke.edu/~reif/courses/complectures/Miltersen/Probabilistically%20Checkable%20Proofs.pdf
