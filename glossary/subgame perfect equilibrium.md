---
layout: entry
title: subgame perfect equilibrium
aliases:
  - subgame perfect Nash equilibrium
  - SPE
  - SPNE
type:
  - definition
reference:
course:
  - ECE6263
lecture:
  - ece6263-8
  - ece6263-10
statement: "A [[strategy]] vector $\\sigma^*$ (in [[mixed strategy|mixed strategies]] or [[strategy#Behavior strategy|behavior strategies]]) in an [[extensive form game]] $\\Gamma$ is called a **subgame perfect equilibrium** if for every subgame, the restriction of the strategy vector $\\sigma^*$ to the subgame is a [[Nash equilibrium]] of that subgame: for every player $i \\in N$, every strategy $\\sigma_i$, and every subgame $\\Gamma(x)$, $u_i(\\sigma^* \\vert x) \\geq u_i(\\sigma_i, \\sigma_{-i}^* \\vert x)$"
created: 2024-11-29T12:04:31-05:00
tags:
  - game_theory
---

## Definition

A [[strategy vector]] $\sigma^*$ (in [[mixed strategy|mixed strategies]] or [[behavior strategy|behavior strategies]]) in an [[extensive form game]] $\Gamma$ is called a **subgame perfect equilibrium** if for every [[subgame]], the restriction of the strategy vector $\sigma^*$ to the subgame is a [[Nash equilibrium]] of that subgame: for every player $i \in N$, every strategy $\sigma_i$, and every subgame $\Gamma(x)$,
$$u_i(\sigma^* \vert x) \geq u_i(\sigma_i, \sigma_{-i}^* \vert x)$$

### Remark

Since every game is a subgame of itself, by definition, every _subgame perfect equilibrium_ is a [[Nash equilibrium]].

## Definition (subgame)

$$J_i^{(k)}(\mu_i, \mu_{-i} \vert h_k) = \sum_{t=k}^T u_i (t, \mu_i(t, h_t), \mu_{-i}(t, h_t) \vert h_t)$$
$$\{\mu_i(t,h_t)\}_{t=k}^T$$

### SPNE for strategy profile in terms of horizon restriction

A _strategy profile_ $\{\mu_i^*\}^N_i$ is a **subgame perfect Nash equilibrium** (SPNE) if for any $k$, and its associated $h_k \in H_k$, the restriction $\{\mu_i\}^N_{i=1}$ to the _horizon_ $t \in \{k,k+1,...,T\}$ is also a [[Nash equilibrium]].

$J_i^{(k)}(\mu_i^*, \mu_{-i}^* | h_k) \geq J_i^{(k)}(\mu_i, \mu_{-i}^* | h_k)$ for every feasible $\mu_i \in \Gamma_i$, $h_

### Notes:

- consider _finite horizon problem_

### SPNE for infinite horizon game

#incomplete

## Theorem

In an _extensive form game_ without non-trivial subgames, every _Nash equilibrium_ (in _mixed strategies_ or _behavior strategies_) is a _subgame perfect equilibrium_.

## Theorem

Let $\sigma^*$ be a _Nash equilibrium_ (in _mixed strategies_ or _behavior strategies_) of an _extensive-form game_ $\Gamma$, and let $\Gamma(x)$ be a subgame of $\Gamma$. If $\mathbf{P}_{\sigma^*}(x) > 0$, then the _strategy vector_ $\sigma^*$ restricted the subgame $\Gamma(x)$ is a Nash equilibrium (in mixed strategies or behavior strategies) of $\Gamma(x)$.

## See also

- [[trembling hand perfect Nash equilibrium|perfect equilibrium]]

---

## References

1. M. Maschler, E. Solan, and Shmuel Zamir, _Game Theory_, Cambridge University Press, 2013, pp. 254-255.
