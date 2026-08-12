---
layout: page
title: Bernoulli's theorem
aliases: 
type:
  - theorem
reference: 
course:
  - ECE6303
lecture:
  - ece6303-2
statement: Let $A$ denote an event with a probability $p$ to occur in a single trial. Then, if $k$ is the number of occurrences of $A$ in $n$ independent trials, $P\left(\left\lvert \frac{k}{n} - p \right\rvert > \varepsilon\right) < \frac{pq}{n\varepsilon^2}$
created: 2025-02-03T20:00:16-05:00
tags:
  - probability
---
## Theorem
Let $A$ denote an event with a probability $p$ to occur in a single trial. Then, if $k$ is the number of occurrences of $A$ in $n$ independent trials, 
$$P\left(\left\lvert \frac{k}{n} - p \right\rvert > \varepsilon\right) < \frac{pq}{n\varepsilon^2}$$

Alternatively, this is described in a limit form:
$$\lim_{n \to \infty} \left(\left\lvert \frac{k}{n} - p \right\rvert \geq \varepsilon\right) = 0$$
or
$$\lim_{n \to \infty} \left(\left\lvert \frac{k}{n} - p \right\rvert < \varepsilon\right) = 1$$
or simply
$$\lim_{n \to \infty} \frac{k}{n} = p$$

## See also
- [[Chebyshev's inequality]], which can be used to prove this theorem
- [[concentration inequality]], which this is an example of

___
## References
1. A. Papoulis, U. Pillai. *Probability, random variables, and stochastic processes*, McGraw-Hill, 2002, pp. 58-60.
2. https://proofwiki.org/wiki/Bernoulli%27s_Theorem
3. https://link.springer.com/referenceworkentry/10.1007/978-0-387-32833-1_28