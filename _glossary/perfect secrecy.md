---
layout: entry
title: perfect secrecy
aliases:
  - perfectly secret
  - Shannon secrecy
type:
  - definition
reference:
course:
  - CSCI3210
lecture:
  - csci3210-1
statement: An encryption scheme is perfectly secret if for all distributions/random variables $\mathbf{M}$ over $\mathcal{M}$, $\forall m \in \mathcal{M}$, $\forall c \in \operatorname{supp}\mathcal{C}$ where $\mathcal{C} = \operatorname{Enc}_\mathbf{K}(\mathbf{M})$, $\mathbf{K}$ uniform over $\mathcal{K}$, $\Pr[M=m] = \Pr[M=m | C = c]$
created: 2024-10-25T18:09:17-04:00
---

## Definition

An [[encryption scheme|encryption scheme]] is **perfectly secret** if for all distributions/[[random variable|random variables]] $\mathbf{M}$ over $\mathcal{M}$, $\forall m \in \mathcal{M}$, $\forall c \in \operatorname{supp}\mathcal{C}$ where $\mathcal{C} = \operatorname{Enc}_\mathbf{K}(\mathbf{M})$, $\mathbf{K}$ uniform over $\mathcal{K}$,
$$\Pr[M=m] = \Pr[M=m | C = c]$$
(_a posteriori_, _a priori_)

(_Shannon secrecy_ and _perfect secrecy_ are equivalent)

## Definition (size of message space)

An [[encryption scheme]] $(E,D)$ is **perfectly secret** if there for every set $\mathcal{M} \subseteq \{0,1\}^\ell$ of plaintexts, and for every strategy used by Eve, if we choose at random $m \in \mathcal{M}$ and a random $b \in \{0,1\}$ and a random key $k \in \{0,1\}^n$, then the probability that Eve guesses $m$ after seeing $\operatorname{Enc}_\mathbf{K}(m)$ is at most $1/\lvert \mathcal{M} \rvert$.

## Notes

- [[Shannon theorem of perfect secrecy]] holds in the case of perfect secrecy
- intuition: _a posteriori_ distribution over the message given the ciphertext is identical to the _a priori_ distribution

---

## References

1. https://www.khoury.northeastern.edu/home/wichs/class/crypto-fall17/lecture1.pdf
2. https://people.cs.uchicago.edu/~davidcash/284-autumn-19/03-perfect-secrecy.pdf
3. https://intensecrypto.org/public/lec_01_introduction.html
4. https://github.com/cpeikert/TheoryOfCryptography/blob/master/lec02%20-%20Computational%20Hardness.pdf
