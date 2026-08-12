---
layout: entry
title: Locality sensitive hash function
aliases:
  - LSH function
type:
  - definition
reference:
lecture:
  - cs6763-5
  - cs6763-6
statement: "$\\mathrm{Pr}[h(\\mathbf{q})==h(\\mathbf{y})]$ higher when $s(\\mathbf{q},\\mathbf{y})$ higher (similar), lower when $s(\\mathbf{q},\\mathbf{y})$ lower (dissimilar)<br />Tunable LSH: Full LSH scheme has two parameters to tune: t tables and r bands; effect of increasing number of tables: fewer false negatives, more false positives; effect of increasing number of bands : more false negatives, fewer false positives"
created: 2023-10-13T14:32:56-04:00
course:
  - CS6763
---

Let $h: \mathbb{R}^d \rightarrow \{1,…,m\}$ be a random [[hash function]].

We call $h$ locality sensitive for similarity function $s(\mathbf{q},\mathbf{y})$ if $\mathrm{Pr}[h(\mathbf{q})==h(\mathbf{y})]$ is

- higher when $\mathbf{q}$ and $\mathbf{y}$ are more similar, i.e. $s(\mathbf{q},\mathbf{y})$ higher
- lower when $\mathbf{q}$ and $\mathbf{y}$ are more dissimilar, i.e. $s(\mathbf{q},\mathbf{y})$ lower

## Locality Sensitive Hash Family

For distances $r_1,r_2$ with $r_1 < r_2$, a family of hash functions $\mathcal{H}: U \rightarrow S$ is $(r_1,r_2,p_1,p_2)$-locality sensitive if for any $x,y \in U$:

1. If $d(x,y)\leq r_1$ then $\mathrm{Pr}_{h\in\mathcal{H}}[h(x)=h(y)]\geq p_1$
2. If $d(x,y)\geq r_2$ then $\mathrm{Pr}_{h\in\mathcal{H}}[h(x)=h(y)]\leq p_2$

(For our purposes, we always have $p_2 < p_1$. I.e. if two points are close together, they have a strictly higher probability of hashing to the same bucket than two points that are far apart. This property is ultimately what allows us to perform efficient near neighbor search.)

## Tunable LSH

Full LSH scheme has two parameters to tune: $t$ tables and $r$ bands

- effect of increasing number of tables $t$: fewer false negatives, more false positives
- effect of increasing number of bands $r$: more false negatives, fewer false positives

s-curve tuning,
collision probability vs Jaccard similarity

---

Crucial for [[Indyk and Motwani (1998)]] theorem.

Also see [[SimHash]] and [[MinHash (Broder, 1997)]].

References:

1. https://web.stanford.edu/class/cs246/slides/03-lsh.pdf
2. https://www.cs.princeton.edu/courses/archive/fall18/cos521/Lectures/lec12.pdf
3. https://users.cs.duke.edu/~kamesh/CPS294-PDF/Lecture4.pdf
4. https://www.pinecone.io/learn/series/faiss/locality-sensitive-hashing-random-projection/
5. http://infolab.stanford.edu/~ullman/mining/2009/similarity3.pdf
