---
layout: post
title: Logic and Complexity
date: 2025-07-24 16:00:02 -0400
excerpt: Descriptive complexity relates the realms of logic and complexity theory...
published: true
latex: true
---

Descriptive complexity relates the realms of logic and complexity theory.

Fagin's theorem[^1] states the following:

> A class $\mathcal{C}$ of finite structures is definable by a sentence of [existential second-order logic](https://plato.stanford.edu/entries/logic-if/supplement.html) if and only if it is decidable by a *non-deterministic machine* running in *polynomial time*.
>
> i.e. $\mathsf{ESO} = \mathsf{NP}$

In other words, a problem lies in [NP](https://en.wikipedia.org/wiki/NP_(complexity)#Formal_definition) iff it can be described by a formula with a pattern in $E_i^* (ae)^*$ ([monadic existential second-order formula](https://www-sop.inria.fr/members/Martin.Avanzini/teaching/2021/AL/slides/w2.pdf)) for some arity $i$[^2].

The [Cook-Levin theorem](https://en.wikipedia.org/wiki/Cook%E2%80%93Levin_theorem) states that boolean satisfiability ([SAT](https://en.wikipedia.org/wiki/Boolean_satisfiability_problem)) is [NP-complete](https://en.wikipedia.org/wiki/NP-completeness).

## References

[^1]:N. Immerman, “Second-Order Logic and Fagin’s Theorem,” in *Descriptive Complexity*, New York, NY: Springer New York, 1999, pp. 113–124. doi: [10.1007/978-1-4612-0539-5_8](https://doi.org/10.1007/978-1-4612-0539-5_8).
[^2]:Bannach, M., Chudigiewitsch, F., & Tantau, T. (2023). Existential second-order logic over graphs: Parameterized complexity. *arXiv preprint arXiv:2310.01134*. <https://arxiv.org/abs/2310.01134>
