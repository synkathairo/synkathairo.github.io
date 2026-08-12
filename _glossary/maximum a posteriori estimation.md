---
layout: page
title: maximum a posteriori estimation
aliases:
  - MAP
  - MAP estimation
type:
  - definition
reference: 
course:
  - ECE6123
  - ECE6303
lecture:
  - ece6123-7-imagerecovery
statement: $\hat \theta_{MAP} = \arg \max_{\theta} L(\mathbf{x} | \theta) \pi_{\Theta}(\theta)$
created: 2023-11-02T14:26:24-04:00
tags:
  - probability
---
## Definition
Let $x = (x_1,…,x_n)$ be i.i.d. realizations from [[probability mass function]] $p_X(t; \Theta = \theta)$ (if $X$ discrete), or from density $f_X(t; \Theta = \theta)$ (if $X$ continuous), where $\Theta$ is the [[random variable]] representing the parameter (or vector of parameters). We define the **maximum a posteriori** (MAP) estimator $\hat \theta_{MAP}$  of $\Theta$ to be the parameter which maximizes the *posterior* distribution of $\Theta$ given the data.

$$\hat \theta_{MAP} = \arg \max_{\theta} L(\mathbf{x} | \theta) \pi_{\Theta}(\theta)$$

(same as maximum likelihood, except instead of maximizing likelihood, it is maximizing likelihood multiplied by prior)

where loss function $L(\mathbf{x} | \theta) = \prod_{i=1}^n f_X(x_i | \theta)$ for i.i.d. $f_X$, (compare maximum likelihood estimation)

___
The estimate of $w$, $\hat w$, from the noisy observation $y$, depending on the observed (noisy) value $y$, is also denoted as $\hat w(y)$. To obtain estimate $\hat w$, we will use the maximum a posteriori (MAP) estimator. The MAP estimator is based on the probability density function (pdf) of $w$. Specifically, given an observed value $y$, the MAP estimator asks what value of $w$ is most likely?That is, the MAP estimator looks for the value of w where the probability of $w$ is highest; it looks for the peak value. Therefore, the MAP estimator is defined as
$$\hat w(y) = \arg \max_w p_{w|y}(w|y)$$
where ‘$\arg \max$’ is the value of the argument where the function has its maximum. The pdf $p_{w|y} (w|y)$ is the distribution of $w$ given a specific value $y$, where,
$$p_{w|y}(w|y) = \frac{p_{w,v}(w,y)}{p_y(y)}$$

(The MAP estimate $\hat w$ is the point where the pdf of $p_{w|y} (w|y)$ for some value of $y$ has its peak)

___
If 

#incomplete 

[[Soft thresholding]] softmax

## See also
- [[maximum likelihood estimation]]

___
## References:
1. https://courses.cs.washington.edu/courses/cse312/22wi/files/student_drive/7.5.pdf
2. https://en.wikipedia.org/wiki/Maximum_likelihood_estimation
3. https://en.wikipedia.org/wiki/Maximum_a_posteriori_estimation
4. https://eeweb.engineering.nyu.edu/iselesni/lecture_notes/SoftThresholding.pdf