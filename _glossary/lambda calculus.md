---
layout: page
title: lambda calculus
aliases:
  - λ-calculus
type:
  - definition
reference:
course:
lecture:
statement:
created: 2025-09-01T14:40:13-04:00
tags:
  - logic
  - PLT
---
## Overview

Three elements, *variables*, *functions*, and *applications*

- *variable*, `<name>`, e.g. `x`
- *function*, `λ<parameters>.<body>`, e.g. `λx.x`
- *application*, `<function><variable or function>`, e.g. `(λx.x)a`, calling function `λx.x` with argument `a`

Free vs bound variables

- `x` is *bound variable* in `λx.x` as it is in both body of function and a parameter
	- (example here `λx.x` is the identity function, equivalent to $f(x) = x$)
- `y` is a *free variable* in `λx.y` as it is not declared beforehand

Evaluation

- using *β-reduction*, i.e. lexically-scoped substitution
- can extend lambda calculus to create multi-parameter functions using *currying*
	- e.g. `(λx.λy.λz.xyz)`
- notation, `λxy.<body>` sometimes written instead of `λx.λy.<body>`

### Church encoding

Boolean logic

- `T` as `λx.λy.x`
- `F` as `λx.λy.y`
- *true* and *false* as choosing for first or second of two values respectively (*Church booleans*)

Numbers

- using Church numerals to encode numbers, as a unary encoding
- `n = λf.fⁿ`
	- `0 = λf.λx.x`
	- `1 = λf.λx.f x`
	- `2 = λf.λx.f(f x)`
- successor function $S(n) = n+1$, 
	- `S = λn.λf.λx.f((n f) x)`

Arithmetic

- can use successor function e.g.
	- `ADD = λab.(a S)b`

## Notes

- formal system to express computation using [[function]] abstraction
- *lambda calculus* can be used to represent any [[Turing machine]] despite lack of numbers, strings, booleans, non-function datatypes
- it is Turing complete (see [[Church-Turing thesis]])

## See also

- [[functional programming]]
- [[Church-Turing thesis]]

___
## References

1. https://learnxinyminutes.com/lambda-calculus/
2. https://pages.cs.wisc.edu/~horwitz/CS704-NOTES/1.LAMBDA-CALCULUS.html
3. https://en.wikipedia.org/wiki/Lambda_calculus
4. https://plato.stanford.edu/entries/lambda-calculus/
5. https://en.wikipedia.org/wiki/Church_encoding