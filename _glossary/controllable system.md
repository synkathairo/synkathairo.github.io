---
layout: entry
title: controllable system
aliases:
  - controllability
type:
  - definition
reference: 
course:
  - ECE6253
lecture:
  - ece6253-8
statement: A system is called (completely) controllable if for any initial time $t_0$, any initial state $\mathbf{x}(t_0)$ can be transferred to any final state $\mathbf{x}^*$ (i.e. $\mathbf{x}(t) = \mathbf{x}^*(t)$) using some input $\underset{\sim}{\mathbf{u}}[t_0, t]$ over a finite time interval (i.e. $t$ is finite).
created: 2024-11-11T17:00:42-05:00
tags:
  - control_theory
  - linear_systems
---
## Definition
A system is called (completely) **controllable** if for any initial time $t_0$, any initial state $\mathbf{x}(t_0)$ can be transferred to any final state $\mathbf{x}^*$ (i.e. $\mathbf{x}(t) = \mathbf{x}^*(t)$) using some input $\underset{\sim}{\mathbf{u}}[t_0, t]$ over a finite time interval (i.e. $t$ is finite).

## Refinements
### Total controllability
If the system is completely controllable over every (or almost every) finite interval.

### Strong controllability
If the system is controllable from each input terminal.

### Output controllability
If the system output (rather than state) can be set arbitrarily at some finite time $t$, by using an appropriate input.

## Controllability conditions for analog systems
Consider [[continuous time state equations|analog linear system]]
$$\begin{aligned} \\
\dot{\mathbf{x}}(t) = A(t)\mathbf{x}(t)+B(t)\mathbf{u}(t) \\ \\
\mathbf{y}(t) = C(t)\mathbf{x}(t)+D(t)\mathbf{u}(t)
\end{aligned}$$

with analog bounded $A(t)$.

Define 
$$P(t_0,t) = \int_{t_0}^t \phi(t,\tau) B(\tau)B^T(\tau)\phi^T(t,\tau)d\tau$$
where $\phi(t,\tau)$ denotes a [[transition matrix]] from time $t$ to time $\tau$.

Alternatively using $\phi(t,\tau) = \phi(t,t_0)\phi(t_0,\tau)$,
$$P(t_0,t) = \phi(t_0,\tau)\int_{t_0}^t \phi(t_0,\tau) B(\tau)B^T(\tau)\phi^T(t_0,\tau)d\tau \phi(t,t_0)$$

### Controllability from origin
The system is controllable if any state can be reached from the origin in finite time.

### Condition 1
This system is *controllable* if and only if given any $t_0$, $P(t_0,t)$ is *nonsingular* for some finite $t > t_0$.

When $A(t)$ is bounded for all finite $t$, we know that $\phi(t,t_0)$ is nonsingular for all finite $t$, so $P(t_0,t)$ is nonsingular if and only if the matrix 
$$\hat{S}(t_0,t) \triangleq \int_{t_0}^t \phi(t_0,\tau) B(\tau)B^T(\tau)\phi^T(t_0,\tau)d\tau$$
is nonsingular. Equivalently, if for every constant vector $\mathbf{\mu} \neq \mathbf{0}$,
$$\mathbf{\mu}^T \hat{S}(t_0,t)\mathbf{\mu} = \int_{t_0}^t \mathbf{\mu}^T \phi(t_0,\tau) B(\tau)B^T(\tau)\phi^T(t_0,\tau)\mathbf{\mu} d\tau > 0$$

### Condition 2
This continuous-time system is *controllable* if and only if given any $t_0$, and for every $\mathbf{\mu} \neq \mathbf{0}$, the vector $\mathbf{z}(\tau) \triangleq B^T(\tau) \phi^T(t_0,\tau)\mathbf{\mu}$ is not identically zero for $\tau \geq t_0$.

### Controllability test for fixed continuous-time system
Controllable if and only if for every $\mathbf{\mu} \neq \mathbf{0}$,
$$B^T (A^k) \mathbf{\mu} \neq \mathbf{0}$$
for at least one $k = 0,1,2,...,n-1$.

### Controllability test for fixed analog-time system
(In the case of the standard form state equations, this occurs when $A,B,C,D$ are not dependent upon $t$)

#### Controllability grammian matrix
$$\Gamma = [B\ AB\ A^2B\ ...\ A^{n-1}B]$$


## Controllability conditions for discrete systems
Consider [[discrete time state equations|discrete linear system]]
$$\begin{aligned}
\mathbf{x}(k+1) = A(k) \mathbf{x}(k) + B(k) \mathbf{u}(k) \\
\mathbf{y}(k) = C(k) \mathbf{x}(k) + D(k) \mathbf{u}(k)
\end{aligned}$$
### Condition 1'
The system is *controllable* if and only if given any $k_0$, there exists a finite $k > k_0$ such that
$$P'(k_0,k) \triangleq \sum_{i=k_0}^{k-1} \phi(k,i+1)B(i)B^T(i)\phi^T(k,i+1)$$
is nonsingular. Note $\phi(k,i+1)$ is the [[transition matrix]] between $k$ and $i+1$. 

### Condition 2'
The system is *controllable* if and only if given any $k_0$ there exists a finite $k>k_0$ such that for every $\mathbf{\lambda} \neq \mathbf{0}$, the vector $\mathbf{v}(i) = B^T(i)\phi^T(k,i+1)\mathbf{\lambda}$ is nonzero for some value $i = k_0,...,k-1$, i.e. $\underset{\sim}v \neq 0$ on $[k_0,k-1]$.

### Condition 2''
The system is controllable if and only if given any $k_0$ and for every $\mathbf{\mu} \neq \mathbf{0}$, the vector $\mathbf{z}(i) = B^T(i) \phi^T(k_0,i+1)\mathbf{\mu}$ is nonzero for some value of $i \geq k_0$.

Here $\phi^T(k_0,i+1) \triangleq [A(i) A(i-1)...A(k_0)]^{-1}$ for $i \geq k_0$.

### Controllability test for fixed discrete-time system
For [[fixed system|fixed]] discrete-time systems, the state equation becomes

For 

$\Gamma$ 


### Condition 3


#incomplete 

___
## References
1. P. E. Sarachik, *Principles of Linear Systems*, Cambridge Press, 1996, pp. 151-158.
