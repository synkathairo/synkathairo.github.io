---
layout: entry
title: distributional Johnson-Lindenstrauss lemma
aliases:
  - distributional JL Lemma
type:
  - lemma
reference: 
lecture:
  - cs6763-5
  - cs6763-12
statement: $(1-\epsilon)||\mathbf{x}||_2^2 \leq ||\mathbf{\Pi x}||_2^2 \leq (1+\epsilon)||\mathbf{x}||_2^2$
created: 2023-10-11T22:07:52-04:00
course:
  - CS6763
---

Let $\mathbf{Π} ∈ \mathbb{R}^{k×d}$ be chosen so that each entry equals $\frac{1}{\sqrt{k}} \mathcal{N}(0, 1)$, where $\mathcal{N}(0, 1)$ denotes a standard [[Gaussian distribution|Gaussian]] [[random variable]]. If we choose $k = O ( \frac{\log(1/δ)}{\epsilon^2})$, then for any vector $\mathbf{x}$, with probability $(1 − δ)$:

$$(1-\epsilon)||\mathbf{x}||_2^2 \leq ||\mathbf{\Pi x}||_2^2 \leq (1+\epsilon)||\mathbf{x}||_2^2$$

May be used to prove [[Johnson-Lindenstrauss lemma]].

## Corollary
For any fixed $\mathbf{x}$, 

#incomplete (TODO: see lecture 12 )

## Proof
Want to argue that, with probability $(1-\delta)$, 
$$(1-\epsilon)||\mathbf{x}||_2^2 \leq ||\mathbf{\Pi x}||_2^2 \leq (1+\epsilon)||\mathbf{x}||_2^2$$
Claim: $\mathbb{E}||\mathbf{\Pi x}||_2^2 = ||\mathbf{x}||_2^2$

Intermediate claim: $\mathbb{E}\left[||\mathbf{\Pi x}||_2^2\right] = \mathbb{E}\left[(\langle \mathbf{\pi}_i, \mathbf{x}\rangle)^2\right]$

$$\langle \mathbf{\pi}, \mathbf{x}\rangle = Z_1 \cdot \mathbf{x}[1] + Z_2 \cdot \mathbf{x}[2] + Z_d \cdot \mathbf{x}[d]$$
where each $Z_1, … , Z_d$ is a standard normal $\mathcal{N}(0,1)$ random variable.

We have that $Z_i \cdot \mathbf{x}(i)$ is a normal $\mathcal{N}(0,\mathbf{x}(i)^2)$ random variable.

What type of random variable is $\langle \mathbf{\pi}_i, \mathbf{x}\rangle$?
Use [[stability of Gaussian random variables]].

$\langle \mathbf{\pi}_i, \mathbf{x}\rangle = \mathcal{N}(0,\mathbf{x}[1]^2+\mathcal{N}(0,\mathbf{x}[2]^2+...+\mathcal{N}(0,\mathbf{x}(d)^2) = \mathcal{N}(0,||\mathbf{x}||_2^2)$

So $\mathbb{E}||\mathbf{\Pi x}||_2^2 =\mathbb{E}\left[(\langle \mathbf{\pi}_i, \mathbf{x}\rangle)^2\right]= \mathbb{E}[\mathcal{N}(0,||\mathbf{x}||_2^2)^2] = ||\mathbf{x}||_2^2$, as desired.

$||\mathbf{x}||_2^2 = \mathrm{Var}(\mathcal{N}(0,||\mathbf{x}||_2^2)) = \mathbb{E}[\mathcal{N}(0,||\mathbf{x}||_2^2)^2] - \cancelto{0}{\mathbb{E}[\mathcal{N}(0,||\mathbf{x}||_2^2)]^2}$

Need to use concentration bound
$$||\mathbf{\Pi x}||_2^2=\frac{1}{k}\sum_{i=1}^k(\langle \mathbf{\pi}_i, \mathbf{x}\rangle)^2 = \frac{1}{k}\sum_{i=1}^k\mathcal{N}(0,||\mathbf{x}||_2^2)$$

“chi-squared random variable with $k$ degrees of freedom”

___
See [[Gaussian distribution|Gaussian concentration]]

See also: [[CS6763 Homework 2#Proof of $ mathbb{E}[ mathbf{ Pi x} _2 2]= mathbf{x} _2 2$|Homework 2]] for proof of $\mathbb{E}[||\mathbf{\Pi x}||_2^2]=||\mathbf{x}||_2^2$
