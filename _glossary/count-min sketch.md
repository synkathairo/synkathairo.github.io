---
layout: entry
title: count-min sketch
type:
  - algorithm
reference: "doi: 10.1016/j.jalgor.2003.12.001"
lecture:
  - cs6763-1
statement: $\mathbf{A}[h(v)] = f(v) + \sum_{y \neq v} \mathbb{1}[h(y)=h(v)]\cdot f(y)$
created: 2023-10-12T16:18:53-04:00
course:
  - CS6763
---
## Algorithm

A random hashing-based method for frequent elements problem.

Solves point query problem: given any value $v$, let $f(v)=\sum_{i=1}^n \mathbb{1}[x_i=v]$ be the number of times $v$ appears in the stream.

Goal: return estimate $\tilde{f}(v)$ such that $f(v) \leq \tilde{f}(v) \leq f(v) + \frac{\epsilon}{k}n$.

Solving Frequent items: return all items for which $\tilde{f}(v) \geq \frac{n}{k}$.

(assume access to a [[uniformly random hash function]])

Count-Min Update:
 - Choose random hash function $h$ mapping to $\{1,…,m\}$
 - For $i=1,…,n$: given item $x_i$, set $\mathbf{A}[h(x_i)]=\mathbf{A}[h(x_i)]+1$

return estimate $\tilde{f}(v) = \mathbf{A}[h(v)]$
 - always have $\mathbf{A}[h(v)] \geq f(v)$

$$\mathbf{A}[h(v)] = f(v) + \sum_{y \neq v} \mathbb{1}[h(y)=h(v)]\cdot f(y)$$ (this rightward summation term is error in frequency estimate)

Expected error is
$$\begin{aligned}
\mathbb{E}\left[\sum_{y \neq v} \mathbb{1}[h(y)=h(v)]\cdot f(y)\right] = \sum_{y \neq v} \mathbb{E}[\mathbb{1}[h(y)=h(v)]\cdot f(y)] \\
= \sum_{y \neq v} f(y) \mathbb{E}[\mathbb{1}[h(y)=h(v)]] = \frac{1}{m} \sum_{y \neq v} f(y) \leq \frac{n}{m}
\end{aligned}$$

Bound of probability of error $\geq \frac{2n}{m}$?
Use [[Markov's inequality]]: $\mathrm{Pr}\left[ \sum_{y \neq x: h(y)=h(x)} f(y) \geq \frac{2n}{m} \right] \leq \frac{1}{2}$

Claim: for any $v$, with probability at least $1/2$, 
$$f(v)\leq A[h(v)] \leq f(v) + \frac{2n}{m}$$

To solve point query with error $\frac{\epsilon}{k}n$, set $m=\frac{2k}{\epsilon}$.

$t$ length $m$ arrays
Estimate $f(v)$ with $\tilde{f}(v) = \min_{i∈[t]} A_i[h_i(v)]$.
- for every $v$ and $i$ and $m=\frac{2k}{\epsilon}$, we know that with probability $\geq \frac{1}{2}$, $$f(v) \leq A_i [h_i(v)] \leq f(v) + \frac{\epsilon n}{k}$$
#incomplete 

## See also

- (ε, k)-Frequent Items Problem

___
## References

1. G. Cormode and S. Muthukrishnan, “An improved data stream summary: the count-min sketch and its applications,” _Journal of Algorithms_, vol. 55, no. 1, pp. 58–75, Apr. 2005, doi: [10.1016/j.jalgor.2003.12.001](https://doi.org/10.1016/j.jalgor.2003.12.001).
2. https://www.chrismusco.com/amlds2023/notes/lecture01.html#Count-Min_Sketch
3. https://www.chrismusco.com/amlds2023/lectures/lec1_annotated.pdf ^4e6aed
