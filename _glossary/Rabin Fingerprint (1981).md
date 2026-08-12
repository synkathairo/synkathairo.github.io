---
layout: entry
title: Rabin Fingerprint (1981)
type:
  - algorithm
reference: M. O. Rabin, ‘Fingerprinting by random polynomials’, Technical report, 1981.
lecture:
  - cs6763-3
statement: "Construct $h$ randomly: choose random prime number $p$ between 2 and $tn \\log(tn)$ for a constant $t$. $h(f)=f \\pmod p$. $h(f)$ takes $\\log(p)$ bits to store."
created: 2023-10-17T15:43:46-04:00
course:
  - CS6763
---
Let file $f = 010…1101$ of length $n$ be interpreted as an $n$ bit integer, i.e. between 0 and $2^n$.
Construct $h$ randomly: choose random prime number $p$ between 2 and $tn \log(tn)$ for a constant $t$.
$$h(f)=f \pmod p$$
$h(f)$ takes $\log(p)$ bits to store

#incomplete 

___

See also: [[Miller-Rabin randomized primality test (1976, 1980)]]

Used in **Rabin–Karp_algorithm** #incomplete 

___
References:
1. M. O. Rabin, ‘Fingerprinting by random polynomials’, _Technical report_, 1981.
2. https://www.cs.cmu.edu/afs/cs/academic/class/15451-f14/www/lectures/lec6/karp-rabin-09-15-14.pdf
3. https://en.wikipedia.org/wiki/Rabin_fingerprint
