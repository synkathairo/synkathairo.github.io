---
layout: page
title: Johnson-Lindenstrauss lemma
aliases:
  - JL Lemma
type:
  - theorem
  - lemma
reference: "doi: 10.1007/BF02764938"
lecture:
  - cs6763-5
statement: $(1-\epsilon)||\mathbf{q}_i-\mathbf{q}_j||_2 \leq ||\mathbf{\Pi q}_i-\mathbf{\Pi q}_j||_2 \leq (1+\epsilon)||\mathbf{q}_i-\mathbf{q}_j||_2$ <br />$(1-\epsilon)||\mathbf{q}_i-\mathbf{q}_j||_2^2 \leq ||\mathbf{\Pi q}_i-\mathbf{\Pi q}_j||_2^2 \leq (1+\epsilon)||\mathbf{q}_i-\mathbf{q}_j||_2^2$
created: 2023-10-11T22:07:52-04:00
course:
  - CS6763
  - CS9233
---
## Johnson-Lindenstrauss lemma (1984)
For any set of $n$ data points $\mathbf{q}_1,...,\mathbf{q}_n \in \mathbb{R}^d$, there exists a linear map $\mathbf{\Pi}: \mathbb{R}^d \rightarrow \mathbb{R}^k$ where $k=O(\frac{\log{n}}{\epsilon^2})$ such that for all $i,j$,
$$(1-\epsilon)||\mathbf{q}_i-\mathbf{q}_j||_2 \leq ||\mathbf{\Pi q}_i-\mathbf{\Pi q}_j||_2 \leq (1+\epsilon)||\mathbf{q}_i-\mathbf{q}_j||_2$$

Equivalently,
$$(1-\epsilon)||\mathbf{q}_i-\mathbf{q}_j||_2^2 \leq ||\mathbf{\Pi q}_i-\mathbf{\Pi q}_j||_2^2 \leq (1+\epsilon)||\mathbf{q}_i-\mathbf{q}_j||_2^2$$
because for small $\epsilon$, $(1+\epsilon)^2 = 1+O(\epsilon)$ and  $(1-\epsilon)^2 = 1-O(\epsilon)$.

Equivalently,
$$(1-\epsilon)||\mathbf{\Pi q}_i-\mathbf{\Pi q}_j||_2^2 \leq ||\mathbf{q}_i-\mathbf{q}_j||_2^2 \leq (1+\epsilon)||\mathbf{\Pi q}_i-\mathbf{\Pi q}_j||_2^2$$
because for small $\epsilon$, $\frac{1}{1+\epsilon}=1-O(\epsilon)$ and $\frac{1}{1-\epsilon}=1+O(\epsilon)$.

Such a map can be computed in $\operatorname{poly}(n,d,1/\epsilon)$-time.
## Proof using [[distributional Johnson-Lindenstrauss lemma]]:

We have a set of vectors $\mathbf{q}_1,...,\mathbf{q}_n$. Fix $i,j \in \{1,...,n\}$.

Let $\mathbf{x}=\mathbf{q}_i - \mathbf{q}_j$. By linearity, $\mathbf{Πx} = \mathbf{Π}(\mathbf{q}_i −\mathbf{q}_j) = \mathbf{Πq}_i −\mathbf{Πq}_j$.

By distributional JL Lemma, with probability $1-\delta$,
$$(1-\epsilon)||\mathbf{\mathbf{q}_i - \mathbf{q}_j}||_2 \leq ||\mathbf{\Pi q}_i - \mathbf{\Pi q}_j||_2 \leq (1+\epsilon)||\mathbf{\mathbf{q}_i - \mathbf{q}_j}||_2$$

Finally, set $δ = \frac{1}{n^2}$ . Since there are $< n^2$ total $i,j$ pairs, by a [[union bound]] we have that with probability $9/10$, the above will hold for all $i, j$, as long as we compress to:

$k=O(\frac{\log(1/(1/n^2))}{\epsilon^2})=O(\frac{\log{n}}{\epsilon^2})$ dimensions.

___
This is a type of [[Euclidean dimensionality reduction]].

Reference:
1. W. B. Johnson, J. Lindenstrauss, and G. Schechtman, “Extensions of lipschitz maps into Banach spaces,” _Israel J. Math._, vol. 54, no. 2, pp. 129–138, Jun. 1986, doi: [10.1007/BF02764938](https://doi.org/10.1007/BF02764938).
2. S. Dasgupta and A. Gupta, “An elementary proof of a theorem of Johnson and Lindenstrauss,” _Random Struct. Alg._, vol. 22, no. 1, pp. 60–65, Jan. 2003, doi: [10.1002/rsa.10073](https://doi.org/10.1002/rsa.10073).
3. https://en.wikipedia.org/wiki/Johnson%E2%80%93Lindenstrauss_lemma
4. [[CS6763 Course miscellanea#^e09534|Anupam Gupta: Advanced Algorithms]], see full lecture notes, section 10: Dimension Reduction and the JL Lemma
5. https://yao-lab.github.io/2020.csic5011/slides/Lecture04_RP.pdf, slide 17
6. https://simons.berkeley.edu/sites/default/files/docs/721/dubhashislides.pdf
7. https://www.cs.cmu.edu/afs/cs/academic/class/15456-s14/Handouts/Har-Peled-Chap19.pdf
8. https://people.eecs.berkeley.edu/~satishr/cs270/sp17/rough-notes/measure-concentration.pdf
9. https://www.chrismusco.com/amlds2025/notes_by_topic/07_dimensionality_reduction.html
10. https://www.cs.princeton.edu/~smattw/Teaching/Fa19Lectures/lec9/lec9.pdf