---
layout: entry
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

Three elements, _variables_, _functions_, and _applications_

- _variable_, `<name>`, e.g. `x`
- _function_, `λ<parameters>.<body>`, e.g. `λx.x`
- _application_, `<function><variable or function>`, e.g. `(λx.x)a`, calling function `λx.x` with argument `a`

Free vs bound variables

- `x` is _bound variable_ in `λx.x` as it is in both body of function and a parameter
  - (example here `λx.x` is the identity function, equivalent to $f(x) = x$)
- `y` is a _free variable_ in `λx.y` as it is not declared beforehand

Evaluation

- using _β-reduction_, i.e. lexically-scoped substitution
- can extend lambda calculus to create multi-parameter functions using _currying_
  - e.g. `(λx.λy.λz.xyz)`
- notation, `λxy.<body>` sometimes written instead of `λx.λy.<body>`

### Church encoding

Boolean logic

- `T` as `λx.λy.x`
- `F` as `λx.λy.y`
- _true_ and _false_ as choosing for first or second of two values respectively (_Church booleans_)

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
- _lambda calculus_ can be used to represent any [[Turing machine]] despite lack of numbers, strings, booleans, non-function datatypes
- it is Turing complete (see [[Church-Turing thesis]])

## See also

- [[functional programming]]
- [[Church-Turing thesis]]

---

## References

1. https://learnxinyminutes.com/lambda-calculus/
2. https://pages.cs.wisc.edu/~horwitz/CS704-NOTES/1.LAMBDA-CALCULUS.html
3. https://en.wikipedia.org/wiki/Lambda_calculus
4. https://plato.stanford.edu/entries/lambda-calculus/
5. https://en.wikipedia.org/wiki/Church_encoding
