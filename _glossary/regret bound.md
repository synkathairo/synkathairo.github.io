---
layout: page
title: regret bound
type:
  - definition
reference: 
course:
  - CS6763
lecture:
  - cs6763-8
statement: Choose $\mathbf{x}^{(1)},…,\mathbf{x}^{(T)}$ so that:$$\sum_{i=1}^T f_i (\mathbf{x}^{(i)}) \leq \left[\min_\mathbf{x} \sum_{i=1}^T f_i (\mathbf{x})\right] + \epsilon$$Here $\epsilon$ is called the regret of our solution sequence $\mathbf{x}^{(1)},…,\mathbf{x}^{(T)}$.
created: 2023-11-03T14:26:39-04:00
---
## Definition (regret)
Choose $\mathbf{x}^{(1)},…,\mathbf{x}^{(T)}$ so that:
$$\sum_{i=1}^T f_i (\mathbf{x}^{(i)}) \leq \left[\min_\mathbf{x} \sum_{i=1}^T f_i (\mathbf{x})\right] + \epsilon$$

Here $\epsilon$ is called the **regret** of our solution sequence $\mathbf{x}^{(1)},…,\mathbf{x}^{(T)}$. Regret compares to the best fixed solution in hindsight.

We typically observe $\epsilon$ to be growing sublinearly in $T$.

## Notes
- Either $f_1, . . . , f_T$ are similar or changing slowly, so we can learn predict $f_i$ from earlier functions.
- Or $f_1, . . . , f_T$ are very different, in which case $\min_x \sum_{i=1}^T f_i(x)$ is large, so regret bound is easy to achieve.
- Or we live somewhere in the middle.

## See also
- [[online regret bound]]

___
References:
1. https://www.chrismusco.com/amlds2023/lectures/lec8_annotated.pdf
2. https://www.chrismusco.com/amlds2023/notes/lecture09.html
3. http://sbubeck.com/LecturesALL_Bubeck.pdf
4. https://www.jmlr.org/papers/volume11/jaksch10a/jaksch10a.pdf
5. https://arxiv.org/abs/2206.04640
6. https://datascience.stackexchange.com/questions/62141/what-are-regret-bounds
7. https://cs.adelaide.edu.au/~javen/talk/bounds_slide5.pdf
8. https://tongzhang-ml.org/lt-book/chap01-introduction-slides.pdf