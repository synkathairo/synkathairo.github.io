---
layout: entry
title: Black-Scholes equation
aliases:
type:
  - PDE
  - mo
reference:
course:
lecture:
statement:
created: 2024-11-26T09:17:50-05:00
tags:
  - finance
---

## Definition

Black-Scholes PDE for call-option on non-dividend paying stock $K$ with strike $K$ and maturity $T$
$$rS_t \frac{\partial C}{\partial S} + \frac{\partial C}{\partial t} + \frac{1}{2} \sigma^2 S^2 \frac{\partial^2 C}{\partial S^2} -rC = 0$$

## Derivation

Assume the stock follows [[geometric Brownian motion]], such that $$dS_t = \mu S_t \, dt + \sigma S_t \, dW_t$$ where $W_t$ is standard [[Wiener process|Brownian motion]], with constants $\mu$ (_percentage drift_) and $\sigma$ (_percentage volatility_).

Assume constant _interest rate_ such that $1$ unit of currency will be worth $B_t := \exp(rt)$ at time $t$. For value of _call option_ $C(S,t)$ at time $t$, by [[Itô lemma|Itô's lemma]], #incomplete

---

## References

1. https://www.columbia.edu/~mh2078/FoundationsFE/BlackScholes.pdf
2. https://tobydriscoll.net/fnc-julia/diffusion/blackscholes.html
