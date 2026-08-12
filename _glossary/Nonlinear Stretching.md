---
layout: page
title: Nonlinear Stretching
type:
  - function
reference: 
course: ECE6123
lecture:
  - ece6123-1-contrastenhancement
statement: 
created: 2023-10-22T00:04:17-04:00
---
- Nonlinear functions with a fixed form 
- Fewer parameters to adjust
- Satisfying $0=f_{\min} \leq g \leq f_{\max} =L-1$
- Examples
	- Logarithmic transformation: $g=b \log(af +1)$
		- Stretch dark region, suppress bright region
	- Exponential transformation: $g=b(e^{af}-1)$
		- Expand bright region
	- Power Law: $g=af^k$
		- $K=2$: square law, similar to exponential
		- $K=1/3$: cubic root, similar to logarithmic

___
See: [[Point-Wise Transformation]]