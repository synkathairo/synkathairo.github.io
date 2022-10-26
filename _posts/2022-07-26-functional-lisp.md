---
layout: post
title:  Functional programming, Lisp-like languages, and type theory
date:   2022-07-26
usemathjax: true
categories: [mathematics, computation]
---

I recently came across the concept of functional programming which piqued my interest. The concept of functional programming syntactically follows the convention as established by "Polish notation"; that is, instead of putting operations between variables (eg. \\(1+2)\\ to add 1 and 2), which reflects our linguistic conventions (especially in subject-verb-object order) and the origins of mathematical expressions from natural language grammars, we instead list the operation first and then the variables or numbers involved, which is more logical for computers.

For example, to add 1 and 2 in Scheme, we write:

```scheme
(+ 1 2)
```
which of course evaluates to 3.

I found the SICP book (*Structure and Interpretation of Computer Programs*), linked below, to give a helpful introduction to Scheme. The book utilizes the simplicity of Scheme to teach programming concepts. Scheme, as a prominent Lisp derivative, in general follows the convention of prefix notation-based syntax. The parentheses seem to indicate a sort of order of operations as you might find in a mathematical expression, and follows a simple syntactical logic, ie. to do \\((2+3) \times (5+6)\\), we use:

```scheme
(* (+ 2 3) (+ 5 6))
```

Functional programming languages correspond also mathematically to the concepts of type theory and formal languages. Agda is a programming language which has been used in mathematical proofs. Functional programming is also widely used in some fields such as finance.

`TODO write more here`

Resources:
- [Polish notation](https://en.wikipedia.org/wiki/Polish_notation)
- [Lisp programming language](https://en.wikipedia.org/wiki/Lisp_(programming_language))
- [Anders Mörtberg - *Constructive Algebra in Functional Programming and Type Theory*](https://staff.math.su.se/anders.mortberg/slides/master_slides.pdf)
- [Scheme for scientific computing](http://fmnt.info/blog/20181029_scheme.html)
- [Beautiful Racket](https://beautifulracket.com/)
- [Vezzozi, Mörtberg, Abel - *Cubical Agda: A Dependently Typed Programming Language with Univalence and Higher Inductive Types*](https://staff.math.su.se/anders.mortberg/papers/cubicalagda.pdf)
- [Cubical type theory](https://ncatlab.org/nlab/show/cubical+type+theory)
- [Abelson & Sussman - *Structure and Interpretation of Computer Programs*](https://web.mit.edu/6.001/6.037/sicp.pdf)
- [Agda wiki](https://wiki.portal.chalmers.se/agda/pmwiki.php)
- [Haskell](https://www.haskell.org/)
- [Gambit Scheme](https://gambitscheme.org/)
- [MIT/GNU Scheme](https://www.gnu.org/software/mit-scheme/)
- [Racket lang](https://racket-lang.org/)
