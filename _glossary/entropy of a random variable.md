---
layout: page
title: entropy of a random variable
aliases:
  - Shannon entropy
  - entropy
  - information entropy
type:
  - definition
reference: 
course:
  - ECE6123
lecture:
  - ece6123-5-transform
statement: $H(\mathcal{F})=-\sum_{f \in \mathcal{A}} p_{\mathcal{F}}(f) \log_2 p_{\mathcal{F}}(f)$
created: 2023-10-18T15:55:02-04:00
tags:
  - probability
  - information_theory
---
## Definition
Consider [[random variable|RV]] $F={f_1,f_2,...,f_K}$, with probability $p_k=\mathrm{Prob}\{F= f_K\}$

Self-Information of one realization $f_k : H_k= -\log(p_k)$
- $p_k=1$: always happen, no information
- $P_k \sim 0$: seldom happen, its realization carries a lot of information

**Entropy** = average information
$$H(\mathcal{F})=-\sum_{f \in \mathcal{A}} p_{\mathcal{F}}(f) \log_2 p_{\mathcal{F}}(f)$$
- Entropy is a measure of uncertainty or information content, unit=bits
- Very uncertain -> high information content

## Notes

- see [[Kullback-Leibler divergence|relative entropy]]

___
## References
1. https://en.wikipedia.org/wiki/Entropy_(information_theory)
2. https://ee.stanford.edu/~gray/it.pdf
