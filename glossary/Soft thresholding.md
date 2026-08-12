---
layout: entry
title: Soft thresholding
type:
  - function
reference:
course:
  - ECE6123
lecture:
  - ece6123-7-imagerecovery
statement: $\mathrm{soft}(x,T) := \begin{cases}x + T & x \leq -T \\0 & |x| \leq T \\x - T & x \geq T\end{cases}$
created: 2023-11-02T20:36:53-04:00
---

$$ \mathrm{soft}(x,T)
:= \begin{cases}
x + T & x \leq -T \\
0 & |x| \leq T \\
x - T & x \geq T
\end{cases}
$$

---

See also:

- https://en.wikipedia.org/wiki/LogSumExp
- https://en.wikipedia.org/wiki/Rectifier_(neural_networks)#Softplus
