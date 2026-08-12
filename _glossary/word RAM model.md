---
layout: entry
title: word RAM model
aliases:
  - word RAM
  - word random-access machine
type:
  - definition
reference:
course:
  - CS9233
lecture:
  - cs9233-7
statement:
created: 2025-03-06T17:24:03-05:00
tags:
  - complexity_theory
---

## Definition

Define an algorithm in the **word RAM model of computation** as follows:

- _Input_, _output_, _working memory_ are each represented as arrays. Initially, input is written while the output and working memory are blank.
- Each entry in an array can store an integer or floating-point number (or arbitrary-precision real numbers) represented in binary up to a certain length. Or, entries may store characters (e.g. ASCII, Unicode).
- Maximum number of bits per entry is called the **word size**
- [[word]] is the unit of operations, $w \geq \log n$ for problem size $n$

Algorithm is sequence of instructions each executing in constant time $O(1)$, e.g.

- arithmetic operations on entries of arrays: add, subtract, multiply, divide, remainder, floor ceiling
  - operations in _constant time_ for numbers fitting in arrays
  - exponentiation may require more care
- condition checks and branches (e.g. _if_ statements)
- accessing any element of an array if we have its index (_address_) stored in a known location, this is the _random access memory_ (RAM) component of the model. If array lengths $\geq m$, then location index requires $\lceil\log_2 (m) \rceil$ bits to write down, word size at least this large.

We may further distinguish these operations taking constant time, by their _circuit complexity_:

- $\mathbf{AC}^0$ operations (see [[class AC hierarchy#$ mathbf{AC} 0$ complexity|AC0]]): polynomial-size circuit in $O(1)$ depth; bitwise logical operations, addition, subtraction, comparison, most significant bit
- $\mathbf{AC}^1$: multiplication, division

## Rank operation

The Rank operation is performed on the packed word $X$ containing $k$ keys, and the objective is to find the number of keys with value greater than $q$. Hence, by subtracting $\hat q$ = `[0 q | 0 q | ... | 0q]` from $X$, where $X$ = `[ 1 x_1 | 1 x_2    | ... | 1 x_k ]` we obtain the rank from `[c1 | 0 | c_2 | 0 ...]` number of $c_i = 1$ due to borrowing which would make $c_i = 0$ if $x_{i} < q$. Hence this is considered $O(1)$ by using $AC_0$ operations of subtraction and significant bits.

## Notes

- word size $w$ is an important parameter of the model, assuming $w \geq \log n$, $n$ number of elements stored in any of the data structures
- _packed word_ when #incomplete

## See also

- [[random access machine]]
- [[Turing machine]]
- _transdichotomous model_

---

## References

1. https://en.wikipedia.org/wiki/Word_RAM
2. https://opendatastructures.org/versions/edition-0.1e/ods-cpp/1_3_Model_Computation.html
3. https://people.seas.harvard.edu/~cs125/fall14/lec6.pdf
4. https://bowaggoner.com/courses/gradalg/notes/lect01-intro.pdf
5. https://www.cs.au.dk/~gerth/slides/afapa08.pdf
