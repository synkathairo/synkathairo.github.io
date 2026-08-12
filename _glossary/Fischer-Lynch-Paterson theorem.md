---
layout: entry
title: Fischer-Lynch-Paterson theorem
aliases:
  - Fischer-Lynch-Paterson result
  - FLP
  - FLP theorem
  - FLP impossibility result
type:
  - theorem
reference: Fischer MJ, Lynch NA, Paterson MS. Impossibility of distributed consensus with one faulty process. Journal of the ACM (JACM). 1985 Apr 1;32(2):374-82. https://doi.org/10.1145/3149.214121
course:
lecture:
statement:
created: 2024-11-21T17:37:33-05:00
tags:
  - distributed_computing
---

## Theorem

**Fischer-Lynch-Paterson (FLP) result** suggests that you cannot have (deterministic [[consensus protocol|algorithm]] for achieving [[Byzantine agreement problem|consensus]]) agreement in an _asynchronous message passing system_ if even one crash failure is allowed, unless the model is augmented in some way, e.g. randomization or failure detectors.

## Notes

- may design randomized consensus algorithms that achieve _safety_ and _liveness_ with high probability
- [[consensus protocol]] rules: agreement, termination, validity
- consider: synchrony and partial synchrony

## See also

- [[consensus protocol]]
- [[Byzantine agreement problem]]

---

## References

1. Fischer MJ, Lynch NA, Paterson MS. Impossibility of distributed consensus with one faulty process. Journal of the ACM (JACM). 1985 Apr 1;32(2):374-82. https://doi.org/10.1145/3149.214121 https://groups.csail.mit.edu/tds/papers/Lynch/jacm85.pdf
2. https://www.cs.yale.edu/homes/aspnes/pinewiki/FischerLynchPaterson.html
3. https://shachaf.net/w/flp
4. https://www.the-paper-trail.org/post/2008-08-13-a-brief-tour-of-flp-impossibility/
5. https://decentralizedthoughts.github.io/2019-06-01-2019-5-31-models/
6. https://decentralizedthoughts.github.io/2019-12-15-asynchrony-uncommitted-lower-bound/
