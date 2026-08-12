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
Since every game is a subgame of itself, by definition, every *subgame perfect equilibrium* is a [[Nash equilibrium]].

## Definition (subgame)
$$J_i^{(k)}(\mu_i, \mu_{-i} \vert h_k) = \sum_{t=k}^T u_i (t, \mu_i(t, h_t), \mu_{-i}(t, h_t) \vert h_t)$$
$$\{\mu_i(t,h_t)\}_{t=k}^T$$
### SPNE for strategy profile in terms of horizon restriction

A *strategy profile* $\{\mu_i^*\}^N_i$ is a **subgame perfect Nash equilibrium** (SPNE) if for any $k$, and its associated $h_k \in H_k$, the restriction $\{\mu_i\}^N_{i=1}$ to the *horizon* $t \in \{k,k+1,...,T\}$ is also a [[Nash equilibrium]].

$J_i^{(k)}(\mu_i^*, \mu_{-i}^* | h_k) \geq J_i^{(k)}(\mu_i, \mu_{-i}^* | h_k)$ for every feasible $\mu_i \in \Gamma_i$, $h_

### Notes:
- consider *finite horizon problem*

### SPNE for infinite horizon game
#incomplete 


## Theorem
In an *extensive form game* without non-trivial subgames, every *Nash equilibrium* (in *mixed strategies* or *behavior strategies*) is a *subgame perfect equilibrium*.

## Theorem
Let $\sigma^*$ be a *Nash equilibrium* (in *mixed strategies* or *behavior strategies*) of an *extensive-form game* $\Gamma$, and let $\Gamma(x)$ be a subgame of $\Gamma$. If $\mathbf{P}_{\sigma^*}(x) > 0$, then the *strategy vector* $\sigma^*$ restricted the subgame $\Gamma(x)$ is a Nash equilibrium (in mixed strategies or behavior strategies) of $\Gamma(x)$.

## See also

- [[trembling hand perfect Nash equilibrium|perfect equilibrium]]

___
## References
1. M. Maschler, E. Solan, and Shmuel Zamir, *Game Theory*, Cambridge University Press, 2013, pp. 254-255.
