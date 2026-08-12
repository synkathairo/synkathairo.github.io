---
layout: entry
title: SimHash
type:
  - definition
reference: "M. S. Charikar, “Similarity estimation techniques from rounding algorithms,” in _Proceedings of the thiry-fourth annual ACM symposium on Theory of computing_, Montreal Quebec Canada: ACM, May 2002, pp. 380–388. doi: [10.1145/509907.509965](https://doi.org/10.1145/509907.509965)."
lecture:
  - cs6763-5
statement: "LSH function scheme for cosine similarity: Let $\\mathbf{g}_1,...,\\mathbf{g}_r \\in \\mathbb{R}^d$ be randomly chosen with each entry $\\mathcal{N}(0,1)$. Let $f : \\{-1,1\\}^r \\rightarrow \\{1,…,m\\}$ be a [[Uniformly Random Hash Function]]. Define the LSH hash function $h: \\mathbb{R}^d \\rightarrow \\{1,…,m\\}$ as: $h(x) = f([\\mathrm{sign}(\\langle \\mathbf{g}_1,x \\rangle),...,\\mathrm{sign}(\\langle \\mathbf{g}_r,x \\rangle)])$"
created: 2023-10-18T01:00:19-04:00
course: CS6763
---

a [[Locality sensitive hash function]] scheme for [[Cosine similarity]]:

- Let $\mathbf{g}_1,...,\mathbf{g}_r \in \mathbb{R}^d$ be randomly chosen with each entry $\mathcal{N}(0,1)$.
- Let $f : \{-1,1\}^r \rightarrow \{1,…,m\}$ be a [[uniformly random hash function]].
- Define the LSH hash function $h: \mathbb{R}^d \rightarrow \{1,…,m\}$ as:
  $$h(x) = f([\mathrm{sign}(\langle \mathbf{g}_1,x \rangle),...,\mathrm{sign}(\langle \mathbf{g}_r,x \rangle)])$$

## Proof

Let $\theta = \theta(\mathbf{x},\mathbf{y})$. Will show that (theorem to prove):
$$\mathrm{Pr}[h(\mathbf{x}) = h(\mathbf{y})] = (1 − \frac{θ}{\mathbf{Π}}+\frac{1}{m})$$
Intermediate result to show that:

$$ \begin{aligned}
\Pr( \langle \mathbf{g}, \mathbf{x} \rangle = \langle \mathbf{g},
\mathbf{y} \rangle )
= 1 - \frac{\theta}{\pi}
\end{aligned}$$
Consider random vector $\mathbf{g}$ and its hyperplane. Since it is drawn from the standard normal distribution, the direction of $\mathbf{g}$ is uniformly distributed around the unit circle. Similarly, the hyperplane is also uniformly distributed around the unit circle. The _sign_ of the inner product $\langle \mathbf{g},\mathbf{x} \rangle$ specifies which side of the hyperplane $\mathbf{x}$ is on. Intuitively, the probability that $\mathbf{x}$ and $\mathbf{y}$ are on the same side of the hyperplane is proportional to their angle.

The probability that they lie on _different_ sides of the hyperplane is the probability that the random hyperplane falls between $\mathbf{x}$ and $\mathbf{y}$ which is $\frac{2\theta}{2\pi}$. Then the probability that they lie on the _same_ side of the hyperplane is $1−\frac{\theta}{\pi}$.

In higher dimensions, we can use the same intuition. There is always some rotation matrix $\mathbf{U}$ such that $\mathbf{Ux}$ and $\mathbf{Uy}$ are spanned by the first two standard basis vectors and have the same cosine similarity as $\mathbf{x}$ and $\mathbf{y}$. Then we can apply the result in one dimension to $\mathbf{Ux}$ and $\mathbf{Uy}$.

___

SimHash can be tuned, just like our [[MinHash (Broder, 1997)|MinHash]] based function for [[Jaccard similarity]]
- Suppose $g_1,…,g_r \in \mathbb{R}^d$ be randomly chosen with each $\mathcal{N}(0,1)$.
- Let $f: \{-1,1\}^r \rightarrow \{1,...,m\}$ be a [[uniformly random hash function]]
- $h: \mathbb{R}^d \rightarrow \{1,…,m\}$ is defined
- $h(\mathbf{x}) = f ([\mathrm{sign}(⟨\mathbf{g}_1, \mathbf{x}⟩), . . . , \mathrm{sign}(⟨\mathbf{g}_r, \mathbf{x}⟩)])$.
- $\mathrm{Pr}[h(\mathbf{x}) == h(\mathbf{y})] = (1 − \frac{θ}{\mathbf{Π}})^r$

___

$SimHash(x) = \mathrm{sign}(⟨x,t⟩)$ for a random vector $t$.

___
see [[Hashing]]

References:
1. M. S. Charikar, “Similarity estimation techniques from rounding algorithms,” in _Proceedings of the thiry-fourth annual ACM symposium on Theory of computing_, Montreal Quebec Canada: ACM, May 2002, pp. 380–388. doi: [10.1145/509907.509965](https://doi.org/10.1145/509907.509965).
2. https://www.chrismusco.com/amlds2023/notes/lecture05.html#SimHash
3. https://en.wikipedia.org/wiki/SimHash
4. https://ferd.ca/simhashing-hopefully-made-simple.html
5. https://datascience.stackexchange.com/questions/6086/minhashing-vs-simhashing
6. https://people.cs.umass.edu/~cmusco/CS514F20/slides/lecture8/lecture8Compressed.pdf
7. https://sumonbis.github.io/academic-project/simhash/
8. https://www.fromkk.com/posts/near-duplicate-with-simhash/
$$
