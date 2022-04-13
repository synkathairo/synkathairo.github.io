---
layout: post
title:  Random number generators in R, deterministic systems and the difficulty of modeling stochasticity
date:   2022-04-13 02:06:11 -0500
usemathjax: true
categories: 
---
When using the R language I decided to look up the documentation of the [`Random`](https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/Random) function which actually seems to be quite interesting. This `Random` function in the R `base` library offers several different pseudorandom number generators: the [Wichmann-Hill](https://en.wikipedia.org/wiki/Wichmann%E2%80%93Hill), [Marsaglia-Multicarry](https://en.wikipedia.org/wiki/Multiply-with-carry_pseudorandom_number_generator), Super Duper, [Mersenne-Twister](https://en.wikipedia.org/wiki/Mersenne_Twister), [Knuth-TAOCP-2002](https://www-cs-faculty.stanford.edu/~knuth/news02.html), Knuth-TAOCP, and [L'Ecuyer-CMRG](https://pubsonline.informs.org/doi/abs/10.1287/opre.47.1.159). 

[Another blog](https://coolbutuseless.github.io/2020/07/07/the-quality-of-rs-random-number-generators/) I found has summarized the apparent performance advantages and disadvantages of each of these random number generators (RNGs) so I will link it here. The data in the post is taken from [L'Ecuyer and Simard, 2007](https://www.iro.umontreal.ca/~lecuyer/myftp/papers/testu01.pdf). 

Firstly some overall philosophical notes about the nature of computers as deterministic state machines. It is interesting that such machines require algorithms such as these to even attempt to simulate stochastic behavior! One thinks of human beings as the opposite of computers: it is easier for us to be "stochastic" and it is hard for us to be reliably "deterministic" and implement (for most people) complex algorithms mentally in an efficient manner. In contrast, a computer in the macro sense can only have a certain amount of states, such that we can consider each possible arrangement of bytes at a given moment in CPU registers, in main memory, in storage etc, to be a finite (though large) number of possible states. That is, (classical) computers suffer a discreteness limitation, as their fundamental operation requires this in accordance with their theoretical model of binary logic, as well as the practical implementation of this.

One notes that (pseudo) RNGs tend to utilize certain "seeds" or certain input values to be fed into RNG algorithms to produce a given pseudorandom number. This tends to be something such as the timestamp (which can reliably be said to different between every usage) although this does not prevent certain problems. Some [criticisms](https://scicomp.stackexchange.com/questions/30479/how-good-are-current-implementations-of-rand-in-c) have been noted for example of the default `rand()` function in many C implementations such as that in [glibc](https://sourceware.org/git/?p=glibc.git;a=blob;f=stdlib/rand.c;h=9c90e77af5d797894a1c50f1bb84c136dc5deb80;hb=HEAD). The implementation in [musl](https://git.musl-libc.org/cgit/musl/tree/src/prng/rand.c) is quite simple:

```c
#include <stdlib.h>
#include <stdint.h>

static uint64_t seed;

void srand(unsigned s)
{
	seed = s-1;
}

int rand(void)
{
	seed = 6364136223846793005ULL*seed + 1;
	return seed>>33;
}
```
The method utlized by musl appears to be a [linear congruential generator](https://en.wikipedia.org/wiki/Linear_congruential_generator#:~:text=264-,6364136223846793005,-1), whereas the reference implementation is by Knuth. It is noted that LCGs are [not sufficiently secure for "cryptographic applications"](https://crypto.stackexchange.com/questions/60543/how-are-linear-congruential-generator-multipliers-chosen). The algorithm follows the [formula](https://www.eg.bucknell.edu/~xmeng/Course/CS6337/Note/master/node40.html):

$$X_{i+1} = (aX_i + c) \mod m, i=0,1,2,...$$

Here *a* is the constant multiplier, *c* is the increment, *m* is the modulus, hence in the above musl implementation, the multiplier is 6364136223846793005, the increment is 1, and the modulus is 2<sup>64</sup>.

The glibc `random()` code is interesting because it provides [very extensive comments](https://sourceware.org/git/?p=glibc.git;a=blob;f=stdlib/random.c#l59). The [method utilized by glibc](https://www.redhat.com/en/blog/understanding-random-number-generators-and-their-limitations-linux) involves the formula:

`val = ((state * 1103515245) + 12345) & 0x7fffffff` 

The code comments note:
> In addition to the standard `rand()`/`srand()` like interface, this package also has a special state info interface.  The `initstate()` routine is called with a seed, an array of bytes, and a count of how many bytes are being passed in; this array is then initialized to contain information for random number generation with that much state information.  Good sizes for the amount of state information are 32, 64, 128, and 256 bytes.  The state can be switched by calling the `setstate()` function with the same array as was initialized with `initstate()`.  By default, the package runs with 128 bytes of state information and generates far better random numbers than a linear congruential generator.  If the amount of state information is less than 32 bytes, a simple linear congruential R.N.G. is used.

What method is utilized instead of a linear congruential RNG?
> The random number generation technique is a linear feedback shift register approach, employing trinomials (since there are fewer terms to sum up that way).

A [linear feedback shift register](https://en.wikipedia.org/wiki/Linear-feedback_shift_register) utilizes "a [linear function](https://en.wikipedia.org/wiki/Linearity#Boolean_functions) of its previous state" as the input bit.

`/dev/random` and `/dev/urandom` also 

Let's examine the randomness tests contained within the TestU01 suite proposed by [L’Ecuyer and Simard, 2007](https://www.iro.umontreal.ca/~lecuyer/myftp/papers/testu01.pdf). They first define a "good imitation" of "independent uniform random variables" (colloquially, what we would presumably consider "truly random"):
> RNGs for all types of applications are designed so that their output sequence is a good imitation of a sequence of independent uniform random variables, usually over the real interval \\((0, 1)\\) or over the binary set \\(\{0, 1\}\\). In the first case, the relevant hypothesis \\(H_0^A\\) to be tested is that the successive output values of the RNG, say \\(u_0 , u_1 , u_2 , . . .\\), are independent random variables from the uniform distribution over the interval \\((0, 1)\\), that is, i.i.d. \\(U (0, 1)\\). In the second case, \\(H_0^B\\) says that we have a sequence of independent random bits, each taking the value 0 or 1 with equal probabilities independently of the others.

[Blackman and Vigna, 2018](https://arxiv.org/abs/1805.01407) discuss some of the weaknesses of "F<sub>2</sub>-linear pseudorandom number generators". They propose a [new generator called Xoshiro256\*\*](https://www.pcg-random.org/posts/a-quick-look-at-xoshiro256.html) which addresses the failures of previous RNGs including their own Xoshiro128+.

work in progress to be continued-

salt

