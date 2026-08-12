---
layout: entry
title: von Neumann-Morgenstern utility theorem
aliases:
  - von Neumann-Morgenstern axioms
type:
  - theorem
reference:
course:
  - ECE6263
lecture:
statement: If player 's preference relation over the set of compound lotteries  is complete and transitive, and satisfies the four von Neumann-Morgenstern axioms, then this preference relation can be represented by a linear utility function.
created: 2024-11-09T15:44:27-05:00
tags:
  - game_theory
---
## Theorem
If player $i$'s [[preference relation|preference relation]] $\succsim_i$ over the set of [[compound lottery|compound lotteries]] $\hat{\mathcal{L}}$ is *complete* and *transitive*, and satisfies the four [[von Neumann-Morgenstern utility theorem#von Neumann-Morgenstern axioms|von Neumann-Morgenstern axioms]], then this *preference relation* can be represented by a [[Linear utility function|linear utility function]].

## von Neumann-Morgenstern axioms
Assume $\succsim_i$ defined over the set of *compound lotteries* $\hat{\mathcal{L}}$. Player $i$'s [[utility function|utility function]], representing his *preference relation* $\succsim_i$, is therefore a function $u_i : \hat{\mathcal{L}} \to \mathbb{R}$ satisfying
$$u_i(\hat{L}_1) \geq u_i(\hat{L}_2) \iff \hat{L}_1 \succsim_i \hat{L}_2, \quad \forall \hat{L}_1, \hat{L}_2 \in \hat{\mathcal{L}}$$
### Axiom of Continuity
For every triplet of outcomes $A \succsim_i B \succsim_i C$, there exists a number $\theta_i \in [0,1]$ such that
$$B \approx_i [\theta_i(A), (1-\theta_i)(C)]$$
(where $\approx_i$ denotes an [[indifference relation|indifference relation]])

### Axiom of Monotonicity
Let $\alpha, \beta$ be numbers in $[0,1]$, and suppose that $A \succ_i B$ ([[strict preference relation|strict preference]]). Then,
$$[\alpha(A) , (1-\alpha)(B)] \succsim_i [\beta(A) , (1-\beta)(B)]$$
if and only iff $\alpha \geq \beta$.

#### Theorem
If a preference relation satisfies the Axioms of [[von Neumann-Morgenstern utility theorem#Axiom of Continuity|Continuity]] and [[von Neumann-Morgenstern utility theorem#Axiom of Monotonicity|Monotonicity]], and if $A \succsim_i B \succsim_i C$, and $A \succ_i C$, then the value of $\theta_i$ defined in the Axiom of Continuity is *unique*.

##### Corollary
If a preference relation $\succsim_i$ over $\hat{\mathcal{L}}$ satisfies the Axioms of Continuity and Monotonicity, and if $A_K \succ_i A_1$, then for each $k = 1,2,...,K$ there exists a *unique* $\theta_i^k \in [0,1]$ such that
$$A_k \approx_i [\theta_i^k (A_K), (1-\theta_i^k)(A_1)]$$
The corollary and the fact that $A_1 \approx_i [0 (A_K), 1(A_1)]$ and $A_k \approx_i [1 (A_K), 0(A_1)]$ imply that
$$\theta_i^1 = 0, \quad \theta_i^K = 1$$

### Axiom of Simplification of Compound Lotteries
For each $j = 1,...,J$, let $L_j$ be the [[lottery (probability)|simple lottery]] 
$$L_j=[p_1^j (A_1), p_2^j (A_2),...,p_K^j (A_K)]$$
and let $\hat L$ be the [[compound lottery|compound lottery]] 
$$\hat L = [q_1(L_1), q_2(L_1), ..., q_J(L_J)]$$
For each $k=1,...,K$, define the overall probability that the outcome of $\hat L$ will be $A_k$,
$$r_k = q_1 p_k^1 + q_2 p_k^2 + ... + q_J p_k^J$$
Consider simple lottery 
$$L = [r_1(A_1),r_2(A_2),...,r_K(A_K)]$$
Then, 
$$\hat L \approx_i L$$

### Axiom of Independence
Let $\hat L = [q_1(L_1), q_2(L_1), ..., q_J(L_J)]$ be a [[compound lottery|compound lottery]], and let $M$ be a [[lottery (probability)|simple lottery]]. If $L_j \approx_i M$ then
$$\hat L \approx_i [q_1(L_1),...,q_{j-1}(L_j),q_j(M),q_{j+1}(L_{j+1}),...,q_J(L_J)]$$

#### Notes
- Can extend Axioms of Simplification and Independence to compound lotteries of any order. By induction over levels of compounding, it follows that the player's preference relation over all compound lotteries (of any order) is determined by the player's preference relation over simple lotteries.
- *completeness*: for any [[lottery (probability)|lotteries]] $L$ and $M$, either $L \succeq M$ or $M \succeq L$.
- *transitivity*: if $L \succeq M$ and $M \succeq N$, then $L \succeq N$
- *Archimedean property*: if $L \prec M \prec N$, then there exists probability $\varepsilon \in (0,1)$ s.t. $(1-\varepsilon)L + \varepsilon N \prec M \prec \varepsilon L + (1-\varepsilon) N$ (only one of this or continuity need be assumed)
- may also state 4 axioms of VNM-rationality as: completeness, transitivity, continuity, independence

___
## References
1. M. Maschler, E. Solan, and Shmuel Zamir, *Game Theory*, Cambridge University Press, 2013, pp. 14-17.
2. https://en.wikipedia.org/wiki/Von_Neumann%E2%80%93Morgenstern_utility_theorem#The_theorem
3. Neumann, John von and Morgenstern, Oskar, *Theory of Games and Economic Behavior*. Princeton, NJ. Princeton University Press, 1953.
4. https://isa-afp.org/entries/Neumann_Morgenstern_Utility.html
