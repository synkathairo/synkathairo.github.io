---
layout: entry
title: class NP
aliases:
  - NP
  - non-deterministic polynomial time
  - NP puzzle
type:
  - definition
  - complexity class
  - time complexity
reference:
course:
lecture:
statement:
created: 2025-01-23T17:55:16-05:00
tags:
  - complexity_theory
---

## Definition (_class $\mathbf{NP}$_)

A [[decision problem|language]] $L \subseteq \{0,1\}^*$ is in $\mathbf{NP}$ if there exists a polynomial $p : \mathbb{N} \to \mathbb{N}$ and a [[class P|polynomial-time]] [[Turing machine|TM]] $M$ (called the _verifier_ for $L$) such that for every $x \in \{0,1\}^*$,
$$x \in L \iff \exists u \in \{0,1\}^{p(\lvert x \rvert)} \text{ s.t.} M(x,u)=1$$

If $x \in L$ and $u \in \{0,1\}^{p(\lvert x \rvert)}$ satisfy $M(x,u) = 1$, then we can call $u$ a _certificate_ for $x$ (with respect to language $L$, machine $M$). Also known in some texts as _witness_.

In other words, $\mathbf{NP}$ is the set of all [[decision problem|languages]] $L$ such that there exists a _polynomial-time_ algorithm $A$ with $x \in L \iff \exists y \text{ s.t. } A(x,y) = 1$.

(there is a polynomial-time algorithm to verify "yes" instances given the appropriate certificate)

## Definition (_NP puzzle_)

An **NP puzzle** consists of a [[class P|poly-time]] [[effectively computable|computable]] _relation_ $R(y, x)$. Think of $y$ as a _puzzle_ or _statement_, and $x$ as a _solution_ or _witness_. The _relation_ $R$ tests if $x$ is a good solution for the problem $y$ and _outputs_ $1$ (_accept_) or $0$ (_reject_).

## Notes

- $\mathbf{P} \subseteq \mathbf{NP}$ as it is possible that $p(\lvert x \rvert)$ is $0$ (i.e. $u$ can be empty string)
- In describing [[class PCP|PCP]] (as every $L \in \mathbf{NP}$ has a $\mathbf{PCP}$), it is useful to describe $\mathbf{NP}$ as follows: the language $L \in \mathbf{NP}$ iff there is polynomial-time deterministic _verifier_ and arbitrarily powerful _prover_ $P$ such that
  - _completeness_: $\forall x \in L$, $P$ can write proof of length $\operatorname{poly}(\lvert x \rvert)$ that $V$ accepts
  - _soundness_: $\forall x \notin L$, no matter what $\operatorname{poly}(\lvert x \rvert)$-length proof $P$ writes, $V$ rejects.
- $\Sigma_1^P = \mathbf{NP}$ (see: [[polynomial hierarchy]])

## Theorem (in terms of NTIME)

$\mathbf{NP} = \cup_{c \in \mathbb{N}} \mathbf{NTIME}(n^c)$
(see [[class NTIME|NTIME]])

### see also

- [[class NTIME|NTIME]]
- $\mathbf{NP}$ can be considered in relation to a [[non-deterministic Turing Machine|NDTM]], which is how it was originally defined
- compare to [[class coNP|coNP]]
- [[proof calculus|proof system]], [[class IP|interactive proof system]] (NP may be considered a very simple IPS)
- [[average hard NP puzzle]]

---

## References

1. S. Arora, B. Barak. _Computational Complexity: A Modern Approach_, Cambridge University Press, 2009, p. 39.
2. https://www.cs.williams.edu/~shikha/teaching/spring20/cs256/lectures/Lecture22.pdf
3. https://baike.baidu.com/item/NP%E5%AE%8C%E5%85%A8%E9%97%AE%E9%A2%98/4934286
4. https://webdocs.cs.ualberta.ca/~zacharyf/courses/complexity_2019/notes/complexity-w19-lec03.pdf
5. https://math.stackexchange.com/questions/2334429/what-is-the-difference-between-np-and-conp
6. https://courses.cs.washington.edu/courses/cse533/05au/pcp-theorem.pdf
7. <https://www.khoury.northeastern.edu/home/wichs/class/crypto-fall17/lecture7.pdf>
