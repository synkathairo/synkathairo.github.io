---
layout: entry
title: Fagin's theorem
aliases: 
type:
  - theorem
reference: 
course: 
lecture: 
statement: 
created: 2025-07-02T19:21:29-04:00
tags:
  - logic
  - complexity_theory
---
## Theorem
A class $\mathcal{C}$ of finite structures is definable by a sentence of [[existential second-order logic]] if and only if it is decidable by a [[non-deterministic Turing Machine|non-deterministic machine]] running in [[class P|polynomial time]], i.e. [[existential second-order logic|ESO]] = [[class NP|NP]]

in other words,
a problem lies in [[class NP|NP]] iff it can be described by a formula with a pattern in $E_i^* (ae)^*$ ([[arity|monadic]] [[existential second-order logic|existential second-order formula]]) for some arity $i$.

## Corollary
A class $\mathcal{C}$ of *finite structures* is definable by a sentence of *existential second-order logic* if and only if it is decidable by a *nondeterministic machine* running in *polynomial time*, i.e. [[universal second-order logic|USO]] = [[class coNP|co-NP]]

## See also

- [[polynomial hierarchy]]

___
## References
1. https://en.wikipedia.org/wiki/Fagin%27s_theorem
2. N. Immerman, “Second-Order Logic and Fagin’s Theorem,” in _Descriptive Complexity_, New York, NY: Springer New York, 1999, pp. 113–124. doi: [10.1007/978-1-4612-0539-5_8](https://doi.org/10.1007/978-1-4612-0539-5_8).
	-  https://people.cs.umass.edu/~immerman/book/ch7.pdf
3. https://www.karlin.mff.cuni.cz/~krajicek/anuj1.pdf
4. https://cs.stackexchange.com/questions/26500/could-someone-explain-fagins-theorem-on-the-equivalence-between-np-and-existent
5. Bannach, M., Chudigiewitsch, F., & Tantau, T. (2023). Existential second-order logic over graphs: Parameterized complexity. _arXiv preprint arXiv:2310.01134_. https://arxiv.org/abs/2310.01134
6. https://www.cl.cam.ac.uk/teaching/0910/L15/handout5.pdf
7. https://www.cs.cornell.edu/courses/cs6810/2009sp/scribe/lecture5.pdf
