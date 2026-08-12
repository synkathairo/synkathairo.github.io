---
layout: entry
title: chosen ciphertext attack security
aliases:
  - CCA security
  - CCA secure
  - chosen ciphertext attack secure
type: 
reference: 
course:
  - CSCI3210
lecture: 
statement: 
created: 2024-11-14T22:57:32-05:00
tags:
  - security_game
---
## Definition
An encryption scheme $(E,D)$ is _chosen ciphertext attack (CCA) secure_ if every efficient adversary _Mallory_ wins in the following game with probability at most $1/2+negl(n)$:

- Mallory gets $1^n$ where $n$ is the length of the key
    
- For $poly(n)$ rounds, Mallory gets access to the functions m↦Ek(m)m↦Ek​(m) and c↦Dk(c)c↦Dk​(c).
    
- Mallory chooses a pair of messages {m0,m1}{m0​,m1​}, a secret bb is chosen at random in {0,1}{0,1}, and Mallory gets c∗=Ek(mb)c∗=Ek​(mb​).
    
- Mallory now gets another poly(n)poly(n) rounds of access to the functions m↦Ek(m)m↦Ek​(m) and c↦Dk(c)c↦Dk​(c) except that she is not allowed to query c∗c∗ to her second oracle.
    
- Mallory outputs b′b′ and _wins_ if b′=bb′=b.

#incomplete 

___
## References
1. https://intensecrypto.org/public/lec_06_CCA.html
