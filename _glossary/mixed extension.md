---
layout: page
title: mixed extension
aliases: 
type:
  - definition
reference: 
course:
  - ECE6263
lecture:
  - ece6263-4
statement: "Let $G = (N, (S_i)_{i \\in N},(u_i)_{i \\in N})$ be a [[normal-form game|strategic-form game]] in which for every player $i \\in N$, the set of [[pure strategy|pure strategies]] $S_i$ is nonempty and finite. Denote by $S := S_1 \\times S_2 \\times ... \\times S_n$ the set of pure strategy vectors. The **mixed extension** of $G$ is the game $\\Gamma = (N, (\\Sigma_i)_{i \\in N}, (U_i)_{i \\in N})$ in which for each $i \\in N$, player $i$'s set of strategies is $\\Sigma_i = \\Delta(S_i)$, and his payoff function is $U_i : \\Sigma \\to \\mathbb{R}$, which associates each strategy vector $\\sigma = (\\sigma_1,...,\\sigma_n) \\in \\Sigma = \\Sigma_1 \\times ... \\times \\Sigma_n$ with the payoff $U_i(\\sigma) = \\mathbf{E}_\\sigma[u_i(\\sigma)] = \\sum_{(s_1,...,s_n)\\in S} u_i (s_1,...,s_n)\\sigma_1(s_1)\\sigma_2(s_2)...\\sigma_n(s_n)$"
created: 2024-11-15T19:24:27-05:00
tags:
  - game_theory
---
## Definition
Let $G = (N, (S_i)_{i \in N},(u_i)_{i \in N})$ be a [[normal-form game|strategic-form game]] in which for every player $i \in N$, the set of [[pure strategy|pure strategies]] $S_i$ is nonempty and finite. Denote by $S := S_1 \times S_2 \times ... \times S_n$ the set of pure [[strategy vector|strategy vectors]]. The **mixed extension** of $G$ is the game
$$\Gamma = (N, (\Sigma_i)_{i \in N}, (U_i)_{i \in N})$$
in which for each $i \in N$, player $i$'s set of strategies is $\Sigma_i = \Delta(S_i)$, and his payoff function is $U_i : \Sigma \to \mathbb{R}$, which associates each strategy vector $\sigma = (\sigma_1,...,\sigma_n) \in \Sigma = \Sigma_1 \times ... \times \Sigma_n$ with the payoff
$$U_i(\sigma) = \mathbf{E}_\sigma[u_i(\sigma)] = \sum_{(s_1,...,s_n)\in S} u_i (s_1,...,s_n)\sigma_1(s_1)\sigma_2(s_2)...\sigma_n(s_n)$$

___
## References
1. M. Maschler, E. Solan, and Shmuel Zamir, *Game Theory*, Cambridge University Press, 2013, p. 147.
2. https://homepages.cwi.nl/~apt/stra/ch9.pdf

