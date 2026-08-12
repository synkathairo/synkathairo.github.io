---
layout: page
title: consensus protocol
aliases:
  - consensus algorithm
type:
reference:
course:
lecture:
statement:
created: 2025-09-30T16:09:38-04:00
tags:
  - cryptography
  - distributed_computing
---
## Overview

Strong form of consensus: given set of processors, each with an initial value:

- *termination*: all non-faulty processes eventually [[effectively decidable|decide]] on a value
- *agreement*: all processes that decide do so on the same value
- *validity*: value that is decided must have been proposed by some process

weaker form: allow that only some non-faulty process decides for termination

## Formal definition (see )

**Consensus protocol** $P$ is an *asynchronous system* of $N \geq 2$ processes. 

#incomplete 

## Notes

- blockchain applications
- addresses the [[Byzantine agreement problem]] (consensus problem) of distributed computing, agreement between network nodes
- [[Fischer-Lynch-Paterson theorem|Fischer-Lynch-Paterson result]]

___
## References

1. Fischer MJ, Lynch NA, Paterson MS. Impossibility of distributed consensus with one faulty process. Journal of the ACM (JACM). 1985 Apr 1;32(2):374-82. https://doi.org/10.1145/3149.214121
2. https://www.the-paper-trail.org/post/2008-08-13-a-brief-tour-of-flp-impossibility/
3. https://en.wikipedia.org/wiki/Consensus_(computer_science)
4. https://www.geeksforgeeks.org/computer-networks/cryptographic-consensus-mechanisms-in-blockchain/
5. https://www.sciencedirect.com/topics/computer-science/consensus-protocol