---
layout: entry
title: Aumann model of incomplete information
aliases:
type:
  - definition
reference:
course:
  - ECE6263
lecture:
  - cs6763-6
statement:
created: 2024-11-17T23:20:40-05:00
tags:
  - game_theory
---

## Definition (Aumann model of incomplete information)

Let $S$ be a [[finite set]] of _states of nature_. An **Aumann model of incomplete information** over set $S$ of states of nature consists of four components $(N, Y, (\mathcal{F}_i)_{i \in N}, \mathfrak{s})$ where

- $N$ is a finite set of players
- $Y$ is a finite set of elements called _states of the world_
- $\mathcal{F}_i$ is a partition of $Y$, for each $i \in N$ (i.e. collection of disjoint nonempty subsets of $Y$ whose union is $Y$)
- $\mathfrak{s}: Y \to S$ is a function associating each state of the world with a state of nature

## Other definitions

### Definition (event)

An **event** is a subset of $Y$.

Event $A$ _obtains_ in state of world $\omega$ if $\omega \in A$.
It follows that if event $A$ obtains in state of the world $\omega$ and if $A \subseteq B$, then event $B$ obtains in $\omega$.

### Definition (knowledge)

Let $\omega \in Y$ be a state of the world, and let $A \subseteq Y$ be an event. Player $i$ **knows** $A$ in $\omega$ if
$$F_i(\omega) \subseteq A$$
If $F_i(\omega) \subseteq A$, then in state of world $\omega$ player $i$ knows event $A$ obtains, even though he may not know the state of world is $\omega$, as according to his information, $F_i(\omega)$ are included in the event $A$.

### Definition (operator)

Define **operator** $K_i : 2^Y \to 2^Y$ (where $2^Y$ is the collection of all subsets of $Y$) by
$$K_i(A) := \{\omega \in Y: F_i(\omega) \subseteq A\}$$
i.e. set of all states of world in which player $i$ knows event $A$; often denoted as $K_i A$.

Player $i$ knows event $A$ in state of the world $\omega_*$ iff $\omega_* \in K_i A$.

## Theorem (states of world knowing an event are subsets of states of the world with the event)

$K_i A \subseteq A$ for every event $A \subseteq Y$ and every player $i \in N$.

## Theorem (knowledge of an event which is contained in another event)

For every pair of events $A, B \subseteq Y$, and every player $i \in N$,
$$A \subseteq B \implies K_i A \subseteq K_i B$$

If event $A$ contained in event $B$, states of world in which player $i$ knows event $A$ form a subset of states of world in which player knows event $B$. In other worlds, in every state of the world in which a player knows event $A$, he also knows event $B$.

## Theorem (knowledge of knowledge of event)

For every event $A \subseteq Y$ and every player $i \in N$, we have $K_i K_i A = K_i A$.

More generally, _knowledge operator_ $K_i$ of player $i$ satisfies [[S5 modal logic#Kripke's S5 system (formulated via knowledge operators)|Kripke's S5 system]].

---

## Notes

Most widely accepted statistical approach to dealing with decision problems in situations of incomplete information is the _Bayesian approach_.

## References

1. M. Maschler, E. Solan, and Shmuel Zamir, _Game Theory_, Cambridge University Press, 2013, pp. 323-324.
2. https://cet.econ.northwestern.edu/dekel/pdf/hierarchies-beliefs-common-knowledge.pdf
3. https://www.cambridge.org/core/journals/economics-and-philosophy/article/states-of-nature-and-the-nature-of-states/A527742E164FB1D451763C4BCEDA2DD4
