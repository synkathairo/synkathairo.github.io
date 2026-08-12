---
layout: page
title: Brouwer fixed-point theorem
aliases:
  - Brouwer's fixed-point theorem
type:
  - theorem
reference: 
course:
  - ECE6263
lecture:
  - ece6263-3
statement: If $S$ is a compact and convex subset of $\mathbb{R}^n$ and $f$ is a continuous function mapping $S$ into itself, then there exists at least one $x \in S$ such that $f(x) = x$.
created: 2024-04-10T22:10:39-04:00
---
## Definition (compact and convex subset in real space)

If $S$ is a (nonempty) [[compact set|compact]] and [[convex set|convex]] subset of $\mathbb{R}^n$ and $f$ is a continuous function mapping $S$ into itself, then there exists at least one $x \in S$ such that $f(x) = x$.

Such a point $x$ is called a *fixed point* of $f$.

## Alternative formulation ($n$-ball in real space)

Any continuous function $G : \mathbb{B}^n \to \mathbb{B}^n$ has a fixed point, where
$$\mathbb{B} = \{\mathbf{x} \in \mathbb{R}^n : x_1^2 + ... + x_n^2 \leq 1\}$$
is the unit $n$-ball.

## Notes
- an extension exists for topological vector spaces, [[Schauder fixed point theorem]]
- Compare [[Banach fixed-point theorem]], which involves [[Contraction mapping|contraction mappings]]
- also see [[Kakutani fixed-point theorem]]

___
## References:
1. T. Başar and G.J. Olsder, Dynamic Noncooperative Game Theory, 2nd edition, Classics in Applied Mathematics, SIAM, Philadelphia, 1999, pp. 166, 483.
    - Appendix C, theorem C.1
2. https://en.wikipedia.org/wiki/Brouwer_fixed-point_theorem
3. https://www.homepages.ucl.ac.uk/~ucahjde/tg/html/pi1-08.html
4. https://mathworld.wolfram.com/BrouwerFixedPointTheorem.html
5. Brouwer, 1910
6. Kuga, 1974
7. https://bpb-us-e1.wpmucdn.com/wp.nyu.edu/dist/5/2123/files/2019/12/Lecture-3-Scribe.pdf
8. https://math.uchicago.edu/~may/REU2017/REUPapers/Katz.pdf
9. A. Hatcher, *Algebraic Topology*, 2001, pp. 31-32. http://pi.math.cornell.edu/%7Ehatcher/AT/AT.pdf
	- https://math.stackexchange.com/questions/4540516/proof-of-brouwers-fixed-point-theorem-in-hatcher
10. https://ncatlab.org/nlab/show/Brouwer%27s+fixed+point+theorem