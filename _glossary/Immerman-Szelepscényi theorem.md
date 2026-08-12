---
layout: entry
title: Immerman-Szelepscényi theorem
aliases:
type:
  - theorem
reference:
course:
lecture:
statement:
created: 2025-07-25T16:18:23-04:00
tags:
  - complexity_theory
---

## Theorem

$\overline{\mathtt{PATH}} \in$ [[class NL|NL]]

(where $\overline{\mathtt{PATH}}$ [[decision problem|language]] accepts tuple $\langle G,s,t \rangle$ when there is no path from $s$ to $t$ in the [[directed graph|graph]], i.e. it is the complement of $\mathtt{PATH}$)

## Corollary

For every space-constructible $S(n) > \log n$, $\mathbf{NSPACE}(S(n)) = \mathbf{coNSPACE}(S(n))$

([[class NSPACE|NSPACE]])

## Notes

- another theorem states that $\mathtt{PATH}$ is $\mathbf{NL}$-complete
- implication is that coNL = [[class NL|NL]]

---

## References

1. S. Arora, B. Barak. _Computational Complexity: A Modern Approach_, Cambridge University Press, 2009, pp. 91-92.
2. https://courses.corelab.ntua.gr/pluginfile.php/8936/mod_folder/content/0/CC_Slides_handouts.pdf
3. N. Immerman, “Nondeterministic Space is Closed under Complementation,” _SIAM J. Comput._, vol. 17, no. 5, pp. 935–938, Oct. 1988, doi: 10.1137/0217058.
4. R. Szelepcsényi, “The method of forced enumeration for nondeterministic automata,” _Acta Informatica_, vol. 26, no. 3, pp. 279–284, Nov. 1988, doi: 10.1007/BF00299636.
