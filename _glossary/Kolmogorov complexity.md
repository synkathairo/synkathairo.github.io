---
layout: page
title: Kolmogorov complexity
aliases:
  - Kolmogorov-Chaitin complexity
  - descriptive complexity
  - stochastic complexity
  - 柯氏复杂性
  - 柯尔莫戈洛夫复杂性
type:
  - definition
reference: 
course: 
lecture: 
statement: "$K(x) := C_U(x) = \\min\\{\\lvert \\langle M,w \\rangle \\rvert : \\text{TM }M\\text{ halts on input }w\\text{ and outputs }x\\}$"
created: 2025-03-12T22:54:34-04:00
tags:
  - information_theory
  - complexity_theory
---
## Definition
The **Kolmogorov complexity** of a *string* $x$ is 
$$K(x) := C_U(x) = \min\{\lvert \langle M,w \rangle \rvert : \text{TM }M\text{ halts on input }w\text{ and outputs }x\}$$

(see: [[halting problem]], [[Turing machine]])

## See also
- [[incompressible string]]
- [[entropy of a random variable]]
- *minimum description length* (MDL)

___
## References
1. https://en.wikipedia.org/wiki/Kolmogorov_complexity
2. https://www.sciencedirect.com/topics/computer-science/kolmogorov-complexity
3. https://nautil.us/kolmogorov-complexity-and-our-search-for-meaning-237158/
4. A. C. Šen, _Kolmogorov complexity and algorithmic randomness_. Providence, Rhode Island: American Mathematical Society, 2017. https://www.lirmm.fr/~ashen/kolmbook-eng-scan.pdf
5. https://scottaaronson.blog/?p=791
6. https://www.cs.cmu.edu/~venkatg/teaching/15252-sp20/notes/Kolmogorov-Complexity.pdf
7. https://www.lesswrong.com/w/kolmogorov-complexity
8. https://www.xuzhe.tj.cn/index.php/2024/02/22/%E6%9F%AF%E5%B0%94%E8%8E%AB%E6%88%88%E6%B4%9B%E5%A4%AB%E5%A4%8D%E6%9D%82%E6%80%A7%EF%BC%88kolmogorov-complexity%EF%BC%89%E7%90%86%E8%AE%BA/
9. https://zhuanlan.zhihu.com/p/138258602