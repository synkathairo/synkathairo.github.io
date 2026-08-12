---
layout: entry
title: transition matrix
aliases: 
type:
  - definition
reference: 
course:
  - ECE6253
lecture:
  - ece6253-4
statement: $\phi(t,t_0) = Q(t) Q^{-1}(t)$ such that $x(t) = \phi(t, t_0) x(t_0)$, for fixed system $\phi(t,t_0) = e^{A(t-t_0)}$
created: 2024-10-21T19:36:42-04:00
---
## Continuous-time systems
For continuous-time state equations,
![[continuous time state equations#Definition]]

### Definition

Suppose homogeneous system (unforced system) $\dot{\mathbf{x}} = A(t) \mathbf{x}(t)$, then, if a solution exists such that $\dot Q(t) = A(t) Q(t)$, then we may define **transition matrix**,
$$\phi(t,t_0) = Q(t) Q^{-1}(t)$$
such that 
$$\mathbf{x}(t) = \phi(t, t_0) \mathbf{x}(t_0)$$

### Properties

1. $\phi(t_0,t_0) = I$ 
2. $\phi(t_2,t_1)\phi(t_1,t_0) = \phi(t_2,t_0)$
3. $\mathbf{x}(t_2) = \phi(t_2, t_1) \mathbf{x}(t_1) = \phi(t_2, t_1) \phi(t_1, t_2) \mathbf{x}(t_2)$
	1. $\phi(t_2,t_1)\phi(t_1,t_2) = I$
	2. for all finite $t_1, t_2$ on $I$, $\phi(t_1, t_2) = \phi^{-1} (t_2, t_1)$

### Evaluation
Given transition matrix $\phi(t,t_0)$, $A(t)$ can be evaluated as follows
$$\dot{\mathbf{x}}(t) = \dot{\phi}(t,t_0)\mathbf{x}(t_0)$$
Also, $$\dot{\mathbf{x}}(t) = A(t)\mathbf{x}(t)= A(t) \phi(t,t_0) \mathbf{x}(t_0)$$
Furthermore,
$$\begin{aligned}
\dot{\phi}(t,t_0) = A(t) \phi(t,t_0) \\
\dot{\phi}(t,t_0)|_{t_0 = t} = A(t)
\end{aligned}$$

### Solution of forced system equations
Consider forced system with input present,
$$\dot{\mathbf{x}}(t) = A(t) \mathbf{x}(t) + B(t)\mathbf{u}(t)$$

Assume complete solution has form,
$$\mathbf{x}(t) = \phi(t,t_0) \mathbf{f}(t)$$
Seek conditions of $\mathbf{f}(t)$ to make this assumption true.

Thus,
$$\begin{aligned}
\dot{\mathbf{x}}(t) & = \dot{\phi}(t,t_0)\mathbf{f}(t) + \phi(t,t_0) \dot{\mathbf{f}}(t) \\
& = A(t) \phi(t,t_0) \mathbf{f}(t) + \phi(t,t_0) \dot{\mathbf{f}}(t) \\
& = A(t) \mathbf{x}(t) + \phi(t,t_0)\dot{\mathbf{f}}(t)
\end{aligned}$$

Therefore
$$\phi(t,t_0)\dot{\mathbf{f}}(t) = B(t) \mathbf{u}(t)$$

then
$$\begin{aligned}
\mathbf{x} & = \phi(t,t_0) \mathbf{x}(t_0) + \int_{t_0}^t \phi(t,\lambda) B(\lambda) \mathbf{u}(\lambda) d\lambda \\
y(t) & = C(t) \phi(t,t_0) \mathbf{x}(t_0) + \int_{t_0}^t C(t) \phi(t,\lambda) B(\lambda) \mathbf{u}(\lambda) d\lambda + D(t) \mathbf{u}(t)
\end{aligned}$$
where $C(t) \phi(t,t_0) \mathbf{x}(t_0)$ is the *zero-input response* and $\int_{t_0}^t C(t) \phi(t,\lambda) B(\lambda) \mathbf{u}(\lambda) d\lambda + D(t) \mathbf{u}(t)$ is the *zero-state response*.



#### Fixed systems
#### Constant $A$ matrix

#### General solution 
$$\phi(t,t_0) = e^{A(t-t_0)}$$
note, this is a [[matrix exponential]],
![[matrix exponential#Definition]]

$$\mathbf{x}(t) = e^{A(t-t_0)} \mathbf{x}(t_0)$$

Solution of the forced system equations
$$\begin{aligned}
\mathbf{x}(t) = e^{At} \mathbf{x}(0) + \int_{t_0}^t e^{A(t-\tau)}Bu(\tau) d\tau \\
h(t) = Ce^{At} B 1(t) + D \delta(t)
\end{aligned}$$

## Discrete systems
In the case of discrete time state equations, 
![[discrete time state equations#Definition]]

The transition matrix takes the form
$$\phi(k,i) \triangleq A(k-1) A(k-2) ... A(i) \quad \text{for } k \geq i+1$$


#incomplete 
___
## References
1. https://crrl.poly.edu/6253/lectures/lect4.pdf
2. P. E. Sarachik, *Principles of Linear Systems*, Cambridge Press, 1996, pp. 60-88.
3. https://en.wikipedia.org/wiki/State-transition_matrix
4. https://people.engr.tamu.edu/spb/courses/linearsystems/ECEN605Lecture07.pdf
5. https://faculty.washington.edu/ratliffl/teaching/2020_LinearSystems.pdf p 12
