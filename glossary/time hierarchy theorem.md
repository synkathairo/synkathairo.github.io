---
layout: entry
title: time hierarchy theorem
aliases:
type:
  - theorem
reference:
course:
lecture:
statement:
created: 2025-11-04T18:33:06-05:00
tags:
  - complexity_theory
---

## Theorem (_time hierarchy_)

If $f,g$ are [[time-constructible function|time-constructible functions]] satisfying $f(n)\log f(x) = o(g(n))$, then 
$$\operatorname{DTIME}(f(n)) \subsetneq \operatorname{DTIME}(g(n))$$
where _time-constructible function_ $f$ means mapping $x \mapsto f(|x|)$ can be computed in $O(f(n))$ time.

([[class DTIME|DTIME]])

### Proof

#incomplete

## Theorem (_non-deterministic time hierarchy_)

If $f,g$ are _time-constructible functions_ satisfying $f(n+1) = o(g(n))$, then 
$$\operatorname{NTIME}(f(n)) \subsetneq \operatorname{NTIME}(g(n))$$

([[class NTIME|NTIME]])

## Notes

- DTIME(f(n)) means the class of functions that can be decided in time f(n)
- so, it means set of functions that may be decided in time f(n) is a strict subset of those that may be decided in time g(n)
  - i.e., allowing TMs more computational time strictly increases the set of languages they can decide
- (analogously for non-deterministic version)

## See also

- [[class DTIME|DTIME]]
- [[class NTIME|NTIME]]
- [[theorem, efficient universal Turing machine|efficient universal Turing machine]]
- [[Turing machine]]
- [[big-Oh notation]]

---

## References

1. S. Arora, B. Barak. _Computational Complexity: A Modern Approach_, Cambridge University Press, 2009, pp. 69-70.
