---
layout: entry
title: Approximation filters
type:
  - image filter
reference:
course: ECE6123
lecture:
  - ece6123-6-wavelet
statement: Any filter for prefiltering before downsampling by 2
created: 2023-10-18T14:39:00-04:00
---

Approximation filters:

- Any filter for prefiltering before downsampling by 2
- Binomial filter: `[1 4 6 4 1]/16`
  - (used in the original paper [Burt-Adelson1993a](http://persci.mit.edu/pub_pdfs/pyramid83.pdf), can be implemented with shifts and add only)
