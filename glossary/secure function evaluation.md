---
layout: entry
title: secure function evaluation
aliases:
type:
  - definition
reference:
course:
lecture:
statement:
created: 2025-10-25T18:15:06-04:00
tags:
  - cryptography
---

## Definition (_secure function evaluation_)

Suppose $u$ users, $i$-th user possesses $x_i \in \{0,1\}^n$, [[function]] $F_i \{0,1\}^{nu} \to \{0,1\}^m$. Then, we wish to construct a protocol such that upon completion, $i$-th user knows $F_i(x_1,...,x_u)$ but knows nothing more about $x_j$ where $j \neq i$.

### Security models

_Honest-but-curious_:

#incomplete

---

## References

1. <https://crypto.stanford.edu/pbc/notes/crypto/sfe.html>
