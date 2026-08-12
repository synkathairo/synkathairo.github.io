---
layout: page
title: Flajolet-Martin algorithm
type:
  - algorithm
reference: "P. Flajolet and G. Nigel Martin, “Probabilistic counting algorithms for data base applications,” Journal of Computer and System Sciences, vol. 31, no. 2, pp. 182–209, Oct. 1985, doi: 10.1016/0022-0000(85)90041-8"
lecture:
  - cs6763-2
statement: "Choose random hash function $h: \\mathcal{U} \\rightarrow [0,1]. $S = 1$. For $i=1,…,n$: $S \\rightarrow \\min(S,h(x_i))$. return: $\\tilde{D} = \\frac{1}{S}-1$"
created: 2023-10-16T16:35:29-04:00
course: CS6763
---
## Flajolet-Martin (simplified):
 - Choose [[Hashing#Random hash functions|random hash function]] $h: \mathcal{U} \rightarrow [0,1]$.
 - $S = 1$
 - For $i=1,…,n$:
	 - $S \rightarrow \min(S,h(x_i))$ 
 - return: $\tilde{D} = \frac{1}{S}-1$

## Lemma:
$D$ distinct items in our stream,
$$\mathbb{E}[S] = \frac{1}{D+1}$$

### proof:
⚠️ add to notes here later

## Lemma:
$$\mathrm{Var}[S] = \mathbb{E}[S^2]-\mathbb{E}[S]^2 = \frac{2}{(D+1)(D+2)}-\frac{1}{(D+1)^2} \leq \frac{1}{(D+1)^2}$$
### proof:
⚠️ add to notes here later #incomplete

___
References:
- https://en.wikipedia.org/wiki/Flajolet%E2%80%93Martin_algorithm
- P. Flajolet and G. Nigel Martin, “Probabilistic counting algorithms for data base applications,” _Journal of Computer and System Sciences_, vol. 31, no. 2, pp. 182–209, Oct. 1985, doi: [10.1016/0022-0000(85)90041-8](https://doi.org/10.1016/0022-0000(85)90041-8).
