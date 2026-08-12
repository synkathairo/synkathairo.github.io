---
layout: entry
title: theorem, composition of monotonically strictly increasing function with utility function
aliases:
type:
  - theorem
reference:
course:
  - ECE6263
lecture:
statement: "Let $O$ be a set of outcomes, and let $\\succsim$ be a complete, reflexive, and transitive preference relation over $O$. Suppose $u$ is a utility function representing $\\succsim$. Then for every monotonically strictly increasing function $v : \\mathbb{R} \\to \\mathbb{R}$, the composition $v \\circ u$ defined by $(v \\circ u)(x) = v(u(x))$ is also a utility function representing $\\succsim$."
created: 2024-11-09T20:26:04-05:00
tags:
  - game_theory
---

## Theorem

Let $O$ be a [[set]] of outcomes, and let $\succsim$ be a complete, reflexive, and transitive [[preference relation|preference relation]] over $O$. Suppose $u$ is a [[utility function|utility function]] representing $\succsim$. Then for every monotonically strictly increasing function $v : \mathbb{R} \to \mathbb{R}$, the composition $v \circ u$ defined by
$$(v \circ u)(x) = v(u(x))$$
is also a utility function representing $\succsim$.

## Notes

The [[utility function]] is often called an **ordinal function** as a result of this theorem, as it represents only the order of preferences between outcomes. Numerical values a utility function associates with outcomes have no significance, and do not represent in any way the "intensity" of the player's preferences.

---

## References

1. M. Maschler, E. Solan, and Shmuel Zamir, Game Theory, Cambridge University Press, 2013, p. 11.
