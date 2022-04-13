---
layout: post
title:  Random number generators in R, deterministic systems and the difficulty of modeling stochasticity
date:   2022-04-13 02:06:11 -0500
categories: 
---
When using the R language I decided to look up the documentation of the [`Random`](https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/Random) function which actually seems to be quite interesting. This `Random` function in the R `base` library offers several different pseudorandom number generators: the [Wichmann-Hill](https://en.wikipedia.org/wiki/Wichmann%E2%80%93Hill), [Marsaglia-Multicarry](https://en.wikipedia.org/wiki/Multiply-with-carry_pseudorandom_number_generator), Super Duper, [Mersenne-Twister](https://en.wikipedia.org/wiki/Mersenne_Twister), [Knuth-TAOCP-2002](https://www-cs-faculty.stanford.edu/~knuth/news02.html), Knuth-TAOCP, and [L'Ecuyer-CMRG](https://pubsonline.informs.org/doi/abs/10.1287/opre.47.1.159). 

[Another blog](https://coolbutuseless.github.io/2020/07/07/the-quality-of-rs-random-number-generators/) I found has summarized the apparent performance advantages and disadvantages of each of these random number generators (RNGs) so I will link it here. The data in the post is taken from [L'Ecuyer and Simard, 2007](https://www.iro.umontreal.ca/~lecuyer/myftp/papers/testu01.pdf). 

Firstly some overall philosophical notes about the nature of computers as deterministic state machines. It is interesting that such machines require algorithms such as these to even attempt to simulate stochastic behavior! One thinks of human beings as the opposite of computers: it is easier for us to be "stochastic" and it is hard for us to be reliably "deterministic" and implement (for most people) complex algorithms mentally in an efficient manner. In contrast, a computer in the macro sense can only have a certain amount of states, such that we can consider each possible arrangement of bytes at a given moment in CPU registers, in main memory, in storage etc, to be a finite (though large) number of possible states. That is, (classical) computers suffer a discreteness limitation, as their fundamental operation requires this in accordance with their theoretical model of binary logic, as well as the practical implementation of this.

One notes that (pseudo) RNGs tend to utilize certain "seeds" or certain input values to be fed into RNG algorithms to produce a given pseudorandom number. This tends to be something such as the timestamp (which can reliably be said to different between every usage) although this does not prevent certain problems. Some [criticisms](https://scicomp.stackexchange.com/questions/30479/how-good-are-current-implementations-of-rand-in-c) have been noted for example of the default `rand()` function in many C implementations such as that in [glibc](https://sourceware.org/git/?p=glibc.git;a=blob;f=stdlib/random.c). The implementation in [musl](https://git.musl-libc.org/cgit/musl/tree/src/prng/rand.c) seems to be even simpler:

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
The method utlized by musl appears to be a [linear congruential generator](https://en.wikipedia.org/wiki/Linear_congruential_generator#:~:text=264-,6364136223846793005,-1), which was originally a method described by Knuth. It is noted that LCGs are [not sufficiently secure for "cryptographic applications"](https://crypto.stackexchange.com/questions/60543/how-are-linear-congruential-generator-multipliers-chosen). The algorithm follows the [formula](https://www.eg.bucknell.edu/~xmeng/Course/CS6337/Note/master/node40.html):

{% katex display %}
X_{i+1} = (aX_i + c) \mod m, i=0,1,2,...
{% endkatex %}

*a* is the constant multiplier, *c* is the increment, *m* is the modulus, hence in the above musl implementation, the multiplier is 6364136223846793005, the increment is 1, and the modulus is 2<sup>64</sup>.

work in progress to be continued-
