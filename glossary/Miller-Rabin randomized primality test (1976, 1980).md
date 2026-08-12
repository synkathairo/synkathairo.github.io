---
layout: entry
title: Miller-Rabin randomized primality test (1976, 1980)
type:
  - algorithm
reference: |-
  G. L. Miller, “Riemann’s hypothesis and tests for primality,” _Proceedings of seventh annual ACM symposium on Theory of computing  - STOC ’75_, pp. 234–239, May 1975. doi:10.1145/800116.803773
  M. O. Rabin, “Probabilistic algorithm for testing primality,” _Journal of Number Theory_, vol. 12, no. 1, pp. 128–138, 1980. doi:10.1016/0022-314x(80)90084-0
lecture:
  - cs6763-3
statement: "*__MillerRabin(n)__*<br />If $n 2$ and $n$ is even, return **composite**. <br />/\\* Factor $n − 1$ as $2^s t$ where $t$ is odd. \\*/<br />$s ← 0$ <br />$t ← n − 1$<br />**while** $t$ is even <br />&emsp;$s ← s + 1$<br />&emsp;$t ← t/2$<br />**end** /* Done. $n − 1 = 2^s t$. \\*/ <br />Choose $x ∈ \\{1, 2, . . . , n − 1\\}$ uniformly at random. <br />Compute each of the numbers $x_t , x^{2t} , x^{4t} , . . . , x^{2^st} = x^{n−1} \\mod n$. <br />If $x^{n−1} \\not\\equiv 1 \\pmod n$, return **composite**. <br />**for** $i = 1, 2, . . . , s$<br />&emsp;If $x^{2^i t} ≡ 1 \\pmod n$ and $x^{2^{i−1} t} \\not\\equiv ±1 \\pmod n$, return **composite**. <br />**end** /\\* Done checking for fake square roots. \\*/ <br />Return **probably prime.**"
created: 2023-10-17T15:34:17-04:00
course: CS6763
---

There is a randomized algorithm running in $O(n^3 \log_2(1/\delta))$ time that, with probability $1-\delta$ determines if an $n$-bit integer $x$ is prime.

> _**MillerRabin(n)**_
> If $n > 2$ and $n$ is even, return **composite**.
> /\* Factor $n − 1$ as $2^s t$ where $t$ is odd. \*/
> $s ← 0$
> $t ← n − 1$
> **while** $t$ is even
> &emsp;&emsp;$s ← s + 1$
> &emsp;&emsp;$t ← t/2$
> **end** /* Done. $n − 1 = 2^s t$. \*/
> Choose $x ∈ \{1, 2, . . . , n − 1\}$ uniformly at random.
> Compute each of the numbers $x_t , x^{2t} , x^{4t} , . . . , x^{2^st} = x^{n−1} \mod n$.
> If $x^{n−1} \not\equiv 1 \pmod n$, return **composite**.
> **for** $i = 1, 2, . . . , s$
> &emsp;&emsp;If $x^{2^i t} ≡ 1 \pmod n$ and $x^{2^{i−1} t} \not\equiv ±1 \pmod n$, return **composite**.
> **end** /\* Done checking for fake square roots. \*/
> Return **probably prime.**

---

See also: [PRIMES is in P](https://annals.math.princeton.edu/2004/160-2/p12) paper

References:

1. G. L. Miller, “Riemann’s hypothesis and tests for primality,” _Proceedings of seventh annual ACM symposium on Theory of computing  - STOC ’75_, pp. 234–239, May 1975. doi: [10.1145/800116.803773](https://doi.org/10.1145/800116.803773)
2. M. O. Rabin, “Probabilistic algorithm for testing primality,” _Journal of Number Theory_, vol. 12, no. 1, pp. 128–138, 1980. doi: [10.1016/0022-314x(80)90084-0](<https://doi.org/10.1016/0022-314x(80)90084-0>)
3. https://en.wikipedia.org/wiki/Miller%E2%80%93Rabin_primality_test
4. https://www.cs.cornell.edu/courses/cs4820/2010sp/handouts/MillerRabin.pdf
