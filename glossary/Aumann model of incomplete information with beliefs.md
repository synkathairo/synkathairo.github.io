---
layout: entry
title: Aumann model of incomplete information with beliefs
aliases:
type:
  - definition
reference:
course:
  - ECE6263
lecture:
  - cs6763-6
statement:
created: 2024-12-04T20:55:00
tags:
  - game_theory
---

## Definition (Aumann model of incomplete information with beliefs)

An **Aumann model of incomplete information with beliefs** (over a set of _states of nature_ $S$) consists of five elements $(N, Y, (\mathcal{F}_i)_{i \in N}, \mathfrak{s}, \mathbf{P})$

- the four elements from the [[Aumann model of incomplete information]]
  - $N$ is a finite set of players
  - $Y$ is a finite set of elements called _states of the world_
  - $\mathcal{F}_i$ is a partition of $Y$, for each $i \in N$
  - $\mathfrak{s}: Y \to S$ is a function associating each state of the world with a state of nature
- additionally, $\mathbf{P}$ is a probability distribution over $Y$ such that $\mathbf{P}(\omega) > 0$ for each $\omega \in Y$

### Theorem

Let $(N, Y, (\mathcal{F}_i)_{i \in N}, \mathfrak{s}, \mathbf{P})$ be an _Aumann model of incomplete information with beliefs_. Then $\forall \omega \in Y$, $\forall i \in N$ (players), $\forall A \subseteq Y$ (events), player $i$ knows event $A$ in state of the world $\omega$ if and only if he attributes probability $1$ to that event:
$$\mathbf{P}(A \vert F_i(\omega)) = 1 \iff F_i(\omega) \subseteq A$$

---

## See also

- [[Aumann model of incomplete information]]
- [[Aumann's agreement theorem]]

## References

1. M. Maschler, E. Solan, and Shmuel Zamir, _Game Theory_, Cambridge University Press, 2013, pp. 323-324.
2. https://cet.econ.northwestern.edu/dekel/pdf/hierarchies-beliefs-common-knowledge.pdf
