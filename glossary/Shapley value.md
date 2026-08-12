---
layout: entry
title: Shapley value
aliases:
type:
  - definition
reference:
course:
  - ECE6263
lecture:
statement:
created: 2024-12-16T23:39:00-05:00
tags:
  - game_theory
---

## Definition

Define the **Shapley value** as the [[solution concept]] $\operatorname{Sh}$, for [[coalitional game]] $(N; v)$ where $N$ is the set of players and $v(N)$ is the _worth_ of the _grand coalition_ $N$, $$\operatorname{Sh}_i(N;v) := \frac{1}{n!}\sum_{\pi \in \Pi(N)} (v(P_i(\pi) \cup \{i\}) - v(P_i(\pi))), \quad \forall i \in N$$

Equivalently, $$\phi_i(v) = \sum_{\substack{S \subset N\\ i \in S}} \frac{(|S|-1)!(n-|S|)!}{n!}[v(S)-v(S-\{i\})]$$

## Notes

- Shapley axioms

---

## References

1. M. Maschler, E. Solan, and S. Zamir, _Game Theory_, 1st ed. Cambridge University Press, 2013. doi: [10.1017/CBO9780511794216](https://doi.org/10.1017/CBO9780511794216), pp. 748-755.
2. T. S. Ferguson, Class Lecture, Topic: "Part IV. Games in Coalitional Form". Math 167, School of Computer Science, Carnegie Mellon University, Pittsburgh, Winter 2000. https://www.cs.cmu.edu/afs/cs/academic/class/15859-s05/www/ferguson/coal.pdf
3. https://shap.readthedocs.io/en/latest/example_notebooks/overviews/An%20introduction%20to%20explainable%20AI%20with%20Shapley%20values.html
