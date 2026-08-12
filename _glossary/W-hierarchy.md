---
layout: entry
title: W-hierarchy
aliases:
  - nondeterministic fixed-parameter hierarchy
  - W
  - weft
type:
  - definition
reference: 
course: 
lecture: 
statement: 
created: 2025-07-15T18:07:48-04:00
tags:
  - complexity_theory
---
## Definition

W\[i\], a problem that can be transformed (in [[class FPT|FPT]] time) into combinatorial circuit with *weft* at most $i$

*weft*: max number of nodes with in-degree $\geq 3$ on directed path from input to output node (in boolean circuit)

**W\[t\]**: class of decision problems of form $(x,k)$, [[parameterized problem|parameter]] $k$, [[class FPT|fixed-parameter reducible]] to *weighted weft-$t$ depth-$h$ circuit SAT* for some constant $h$

## Definition (*W\[1\]*)

**W\[1\]**: class of [[decision problem|decision problems]] of form $(x,k)$ which are [[class FPT|fixed-parameter reducible]] to:

*weighted 3SAT*: given a [[k-SAT problem|3SAT]] formula, does it have a satisfying assignment of *Hamming weight* $k$?

(Hamming weight: non-zero in string, e.g. here, $k$ number of `1` assignments in circuit input)

## Weighted weft $t$ depth circuit satisfiability problem

The **weighted weft $t$ depth $h$ circuit satisfiability problem**, $\operatorname{WCS}(t,h)$:
- input: *weft* $t$ depth $h$ *decision circuit* $C$
- [[parameterized problem|parameter]]: positive integer $k$
- question: does $C$ have a weight $k$ satisfying assignment?

## Notes

- W\[1\] is the weighted analogue of [[class NP|NP]]
	- c.f. NP-complete 3SAT problem 
- [[class FPT|FPT]] $= \mathsf{W}[0] \subseteq \mathsf{W}[1] \subseteq \mathsf{W}[2] \subseteq ... \mathsf{W}[\mathsf{P}]$
	- $\mathsf{W}[\mathsf{P}]$, referring to *weighted circuit satisfiability*, class of decision problems of form $(x,k)$ *fixed-parameter reducible* to, for some constant $h$, the *weighted circuit-SAT* problem
		- *weighted circuit-SAT*: given boolean circuit $C$ with no restriction on depth, does $C$ have satisfying assignment of Hamming weight $k$?
	- $\mathsf{W}[\mathsf{SAT}] \subseteq \mathsf{W}[\mathsf{P}]$, where $\mathsf{W}[\mathsf{SAT}]$ refers to *weighted satisfiability*, class of decision problems of form $(x,k)$ *fixed-parameter reducible* to, for some constant $h$, the *weighted SAT* problem
		- *weighted SAT*: given boolean formula $F$ with no restriction on depth, does $F$ have satisfying assignment of Hamming weight $k$?
			- note: difference with weighted circuit SAT is that this is boolean formula rather than circuit (is this specifically CNF?)
		- see [[Tseytin transformation]], are these classes nonequal?
- see also: [[class XP|XP]] (*slicewise polynomial*) which contains FPT, and *A hierarchy*

___
## References

1. https://en.wikipedia.org/wiki/Parameterized_complexity#W_hierarchy
2. Serge Gaspers, "8. Parameterized intractability: the W-hierarchy", COMP6741: Parameterized and Exact Computation, University of New South Wales, Sydney, 2015. https://webcms3.cse.unsw.edu.au/static/uploads/course/COMP6741/15s2/20ed6d57e24fb1cb18be58447fceb94365dbf1a244192c94f90491c1ea784e31/08-W-LN.pdf
3. I. Bansal, and H. Pulyassary, "A Brief Introduction to Parameterized Complexity", 2023. https://courses.cs.cornell.edu/cs6810/2023fa/Parameterized.pdf
4. R. G. Downey and M. R. Fellows, _Fundamentals of Parameterized Complexity_. in Texts in Computer Science. London: Springer London, 2013, pp. 383–405, 427–459. doi: [10.1007/978-1-4471-5559-1](https://doi.org/10.1007/978-1-4471-5559-1).
5. https://complexityzoo.net/Complexity_Zoo:W
6. https://cstheory.stackexchange.com/questions/36524/positive-1-in-3-sat-fpt-or-fixed-parameter-intractable
7. https://cstheory.stackexchange.com/questions/8074/fpt-vs-wp-parameterized-complexity
8. https://en.wikipedia.org/wiki/Tseytin_transformation
9. <https://people.cs.pitt.edu/~kirk/cs2150/W1-hardness.pdf>
