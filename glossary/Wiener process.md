---
layout: entry
title: Wiener process
aliases:
  - Brownian motion
type:
  - definition
reference:
course:
  - CS9233
lecture:
statement:
created: 2024-12-11T10:49:21-05:00
tags:
  - statistics
  - stochastic_processes
---

## Definition

A **standard (one-dimensional) Wiener process** (also called **Brownian motion**) is a stochastic process $\{W_t\}_{t\geq 0+}$ indexed by $t \in \mathbb{R}^+$ with properties:

1. $W_0 = 0$
2. With probability $1$, function $t \to W_t$ [[continuous function|continuous]] in $t$
3. _stationary_, _independent increments_ for process $\{W_t\}_{t\geq 0}$
4. [[Gaussian distribution|normal distribution]] $(0,t)$ for increment $W_{t+s} - W_s$

### $d$-dimensional

(Standard) **Brownian motion** is a [[stochastic process]] $(B_t)_{t \geq 0}$ in $\mathbb{R}^d$ that satisfies the following properties:

1. $B_0=0$
2. (_independence of increments_) For all $0 < t_1 < ... < t_k$, [[random variable|random variables]] $(B_{t_1}, B_{t_2}-B_{t_1},...,B_{t_k}-B_{t_{k-1}})$ are [[mutual independence|mutually independent]].
3. (_law of the increments_) For all $0 \leq s < t < \infty$, 
    $$B_t - B_s \sim \mathcal{N}(0, (t-s) I_d)$$ ([[Gaussian distribution|normal distribution]])
4. (_continuity of the paths_) Almost surely, $t \mapsto B_t$ is [[continuous function|continuous]]

## MATLAB realization

```matlab
%BPATH1  Brownian path simulation

randn('state',100)           % set the state of randn
T = 1; N = 500; dt = T/N;
dW = zeros(1,N);             % preallocate arrays ...
W = zeros(1,N);              % for efficiency

dW(1) = sqrt(dt)*randn;      % first approximation outside the loop ...
W(1) = dW(1);                % since W(0) = 0 is not allowed
for j = 2:N
   dW(j) = sqrt(dt)*randn;   % general increment
   W(j) = W(j-1) + dW(j);
end

plot([0:dt:T],[0,W],'r-')    % plot W against t
xlabel('t','FontSize',16)
ylabel('W(t)','FontSize',16,'Rotation',0)
```

## See also

- [[Euler-Maruyama method]]

---

## References

1. https://galton.uchicago.edu/~lalley/Courses/313/BrownianMotionCurrent.pdf
2. https://sites.me.ucsb.edu/~moehlis/APC591/tutorials/tutorial7/node2.html
3. https://en.wikipedia.org/wiki/Wiener_process
4. https://www.physik.uni-augsburg.de/theo1/hanggi/History/Langevin1908.pdf
5. https://chewisinho.github.io/main.pdf, p. 5
