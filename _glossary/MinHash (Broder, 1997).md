---
layout: page
title: MinHash (Broder, 1997)
type:
  - algorithm
reference: "A. Z. Broder, “On the resemblance and containment of documents,” in Proceedings. Compression and Complexity of SEQUENCES 1997 (Cat. No.97TB100171), Salerno, Italy: IEEE Comput. Soc, 1998, pp. 21–29. doi: 10.1109/SEQUEN.1997.666900."
lecture: cs6763-5
statement: "Choose $k$ random hash functions $h_1,…,h_k: \\{1,…,n\\} \\rightarrow [0,1]$. For $i \\in 1,…,k$, let $c_i = \\min_{j,\\mathbf{q}_j =1} h_i(j)$.$C(\\mathbf{q}) = [c_1,...,c_k]$"
created: 2023-10-17T17:16:10-04:00
course: CS6763
---
Choose $k$ random [[hash function|hash functions]] $h_1,…,h_k: \{1,…,n\} \rightarrow [0,1]$. 
For $i \in 1,…,k$, let $c_i = \min_{j,\mathbf{q}_j =1} h_i(j)$.
$C(\mathbf{q}) = [c_1,...,c_k]$

Claim: For all $i$, $\mathrm{Pr}[c_i(\mathbf{q})=c_i(\mathbf{y})]=J(\mathbf{q},\mathbf{y})=\frac{|\mathbf{q}\cap\mathbf{y}|}{|\mathbf{q}\cup\mathbf{y}|}$
Proof: 

#incomplete 

___
See [[Hashing]].

References:
1. A. Z. Broder, “On the resemblance and containment of documents,” in _Proceedings. Compression and Complexity of SEQUENCES 1997 (Cat. No.97TB100171)_, Salerno, Italy: IEEE Comput. Soc, 1998, pp. 21–29. doi: [10.1109/SEQUEN.1997.666900](https://doi.org/10.1109/SEQUEN.1997.666900).
2. https://en.wikipedia.org/wiki/MinHash
3. https://www.chrismusco.com/amlds2023/notes/lecture05.html
4. https://people.cs.umass.edu/~cmusco/CS514F21/slides/lecture9/lecture9Annotated.pdf
5. https://ekzhu.com/datasketch/minhash.html
6. https://users.cs.utah.edu/~jeffp/teaching/cs5955/L5-Minhash.pdf
7. https://aksakalli.github.io/2016/03/01/jaccard-similarity-with-minhash.html