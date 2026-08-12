---
layout: entry
title: Lyapunov function
aliases:
  - Lyapunov analysis
type:
  - theorem
reference:
course:
  - ECE6253
lecture:
statement:
created: 2024-11-26T19:36:23-05:00
tags:
  - linear_systems
  - analysis
---

## Theorem (Lyapunov's Direct Method for local stability)

### (locally) stable in the sense of Lyapunov (i.s.L.)

Given system $\dot{\mathbf{x}} = f(\mathbf{x})$, with $f$ [[continuous function|continuous]], for some region $\mathcal{D}$ around the origin (specifically open subset of $\mathbb{R}^n$ containing the origin), if there exists (can produce) a scalar, continuously-differentiable function $V(\mathbf{x})$ such that

$$ \begin{gathered}
      V(\mathbf{x}) > 0, \forall \mathbf{x} \in {\cal D} \setminus \{0\} \quad V(0) = 0,
      \text{ and} \\ \dot{V}(\mathbf{x}) = \frac{\partial V}{\partial \mathbf{x}} f(\mathbf{x}) \le 0, \forall \mathbf{x} \in
      {\cal D} \setminus \{0\} \quad \dot{V}(0) = 0
\end{gathered}$$
then the origin ($\mathbf{x} = 0$) is *stable in the sense of Lyapunov* (i.s.L.).

(i.e. if there exists a Lyapunov function $V(\mathbf{x},t)$ in some neighborhood $\mathcal{D}$ of the origin, then the equilibrium state at the origin is *stable*)
### (locally) asymptotically stable
If additionally,
$$\dot{V}(\mathbf{x}) = \frac{\partial V}{\partial \mathbf{x}} f(\mathbf{x}) < 0, \forall \mathbf{x} \in {\cal D} \setminus \{0\}
$$

then origin is (locally) _asymptotically stable_.

(i.e. if $\dot{V}(\mathbf{x},t)$ is _negative definite_ in neighborhood $\mathcal{D}$ then equilibrium state at origin is _asymptotically stable_)

### (locally) exponentially stable

Additionally if
$$\dot{V}(\mathbf{x}) = \frac{\partial V}{\partial \mathbf{x}} f(\mathbf{x}) \le -\alpha V(x), \forall \mathbf{x} \in {\cal D} \setminus \{0\}$$
for some $\alpha > 0$, then origin is (locally) _exponentially stable_.

## Theorem (Lyapunov analysis for global stability)

### globally asymptotically stable

Given system $\dot{\mathbf{x}} = f(\mathbf{x})$, with $f$ [[continuous function|continuous]], if there exists (can produce) a scalar, continuously-differentiable function $V(\mathbf{x})$ such that

$$ \begin{gathered} V(\mathbf{x}) \succ 0, \ \dot{V}(\mathbf{x}) = \frac{\partial V}{\partial \mathbf{x}}
    f(\mathbf{x}) \prec 0, \text{ and} \\ V(\mathbf{x}) \rightarrow \infty \text{ whenever
    } ||\mathbf{x}||\rightarrow \infty,
\end{gathered}$$
(note: $\succ$ denoting [[positive semidefinite|PSD]]) then the origin ($\mathbf{x} = 0$) is *globally asymptotically stable* (G.A.S.).
### globally exponentially stable
If additionally,
$$\dot{V}(\mathbf{x}) \preceq -\alpha V(\mathbf{x})$$
for some $\alpha > 0$, then the origin is *globally exponentially stable*.

## Theorem (Lyapunov analysis for stable linear systems)
Suppose [[linear system]] $\dot{\mathbf{x}} = \mathbf{A}\mathbf{x}$, where a *Lyapunov function* can be found,
$$V(\mathbf{x}) = \mathbf{x}^T {\bf P} \mathbf{x}, \quad {\bf P} ={\bf P^T} \succ 0$$
where
$$\dot{V}(\mathbf{x}) = \mathbf{x}^T {\mathbf{PA}} \mathbf{x} + \mathbf{x}^T {\bf A}^T {\bf P}\mathbf{x} \prec 0$$
then the origin is *globally exponentially stable*.

## Lyapunov functions for fixed linear systems

For unforced fixed linear system $\dot{\mathbf{x}} = A\mathbf{x}(t)$, can choose Lyapunov function $V(\mathbf{x}) = \mathbf{x}^T(t) M \mathbf{x}(t)$, where $M$ is a *symmetric* *positive definite* matrix.

Then, $\dot{V}(\mathbf{x}(t))$ #incomplete

___
## References
1. https://underactuated.mit.edu/lyapunov.html
2. P. E. Sarachik, _Principles of Linear Systems_, Cambridge Press, 1996, pp. 193-202.
3. https://math24.net/stability-theory-basic-concepts.html
4. https://ecs-pw-facweb.ecs.csus.edu/~fbelkhou/LSsummary1.pdf
5. https://www.cds.caltech.edu/~murray/courses/cds101/fa02/caltech/mls93-lyap.pdf
6. T. L. Vincent and J. S. Brown, _Evolutionary game theory, natural selection, and darwinian dynamics_. Cambridge: Cambridge university press, 2005, p. 51.
$$
