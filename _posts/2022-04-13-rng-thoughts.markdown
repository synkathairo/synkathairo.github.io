---
layout: post
title:  "Random number generators, deterministic systems and the difficulty of modeling stochasticity"
date:   2022-04-13
# categories: mathematics cryptography randomness
excerpt: "When using the R language I decided to look up the documentation of the <code>Random</code> function which actually seems to be quite interesting..."
codesnippet: true
published: false
---
<p>When using the R language I decided to look up the documentation of
the <a
href="https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/Random"><code>Random</code></a>
function which actually seems to be quite interesting. This
<code>Random</code> function in the R <code>base</code> library offers
several different pseudorandom number generators: the <a
href="https://en.wikipedia.org/wiki/Wichmann%E2%80%93Hill">Wichmann-Hill</a>,
<a
href="https://en.wikipedia.org/wiki/Multiply-with-carry_pseudorandom_number_generator">Marsaglia-Multicarry</a>,
Super Duper, <a
href="https://en.wikipedia.org/wiki/Mersenne_Twister">Mersenne-Twister</a>,
<a
href="https://www-cs-faculty.stanford.edu/~knuth/news02.html">Knuth-TAOCP-2002</a>,
Knuth-TAOCP, and <a
href="https://pubsonline.informs.org/doi/abs/10.1287/opre.47.1.159">L’Ecuyer-CMRG</a>.</p>
<p><a
href="https://coolbutuseless.github.io/2020/07/07/the-quality-of-rs-random-number-generators/">Another
blog</a> I found has summarized the apparent performance advantages and
disadvantages of each of these random number generators (RNGs) so I will
link it here. The data in the post is taken from <a
href="https://www.iro.umontreal.ca/~lecuyer/myftp/papers/testu01.pdf">L’Ecuyer
and Simard, 2007</a>.</p>
<p>Firstly some overall philosophical notes about the nature of
computers as deterministic state machines. It is interesting that such
machines require algorithms such as these to even attempt to simulate
stochastic behavior! One thinks of human beings as the opposite of
computers: it is easier for us to be “stochastic” and it is hard for us
to be reliably “deterministic” and implement (for most people) complex
algorithms mentally in an efficient manner. In contrast, a computer in
the macro sense can only have a certain amount of states, such that we
can consider each possible arrangement of bytes at a given moment in CPU
registers, in main memory, in storage etc, to be a finite (though large)
number of possible states. That is, (classical) computers suffer a
discreteness limitation, as their fundamental operation requires this in
accordance with their theoretical model of binary logic, as well as the
practical implementation of this.</p>
<p>One notes that (pseudo) RNGs tend to utilize certain “seeds” or
certain input values to be fed into RNG algorithms to produce a given
pseudorandom number. This tends to be something such as the timestamp
(which can reliably be said to different between every usage) although
this does not prevent certain problems. Some <a
href="https://scicomp.stackexchange.com/questions/30479/how-good-are-current-implementations-of-rand-in-c">criticisms</a>
have been noted for example of the default <code>rand()</code> function
in many C implementations such as that in <a
href="https://sourceware.org/git/?p=glibc.git;a=blob;f=stdlib/rand.c;h=9c90e77af5d797894a1c50f1bb84c136dc5deb80;hb=HEAD">glibc</a>.
The implementation in <a
href="https://git.musl-libc.org/cgit/musl/tree/src/prng/rand.c">musl</a>
is quite simple:</p>

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

<p>The method utlized by musl appears to be a <a
href="https://en.wikipedia.org/wiki/Linear_congruential_generator#:~:text=264-,6364136223846793005,-1">linear
congruential generator</a>, whereas the reference implementation is by
Knuth. It is noted that LCGs are <a
href="https://crypto.stackexchange.com/questions/60543/how-are-linear-congruential-generator-multipliers-chosen">not
sufficiently secure for “cryptographic applications”</a>. The algorithm
follows the <a
href="https://www.eg.bucknell.edu/~xmeng/Course/CS6337/Note/master/node40.html">formula</a>:</p>
<p><math display="block" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>X</mi><mrow><mi>i</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><mrow><mo stretchy="true" form="prefix">(</mo><mi>a</mi><msub><mi>X</mi><mi>i</mi></msub><mo>+</mo><mi>c</mi><mo stretchy="true" form="postfix">)</mo></mrow><mrow><mspace width="0.444em"></mspace><mo>mod</mo><mspace width="0.222em"></mspace><mi>m</mi></mrow><mo>,</mo><mi>i</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>.</mi><mi>.</mi><mi>.</mi></mrow><annotation encoding="application/x-tex">X_{i+1} = (aX_i + c) \mod m, i=0,1,2,...</annotation></semantics></math></p>
<p>Here <em>a</em> is the constant multiplier, <em>c</em> is the
increment, <em>m</em> is the modulus, hence in the above musl
implementation, the multiplier is 6364136223846793005, the increment is
1, and the modulus is 2<sup>64</sup>.</p>
<p>The glibc <code>random()</code> code is interesting because it
provides <a
href="https://sourceware.org/git/?p=glibc.git;a=blob;f=stdlib/random.c#l59">very
extensive comments</a>. The code comments note:
<blockquote>In addition to the
standard <code>rand()</code>/<code>srand()</code> like interface, this
package also has a special state info interface. The
<code>initstate()</code> routine is called with a seed, an array of
bytes, and a count of how many bytes are being passed in; this array is
then initialized to contain information for random number generation
with that much state information. Good sizes for the amount of state
information are 32, 64, 128, and 256 bytes. The state can be switched by
calling the <code>setstate()</code> function with the same array as was
initialized with <code>initstate()</code>. By default, the package runs
with 128 bytes of state information and generates far better random
numbers than a linear congruential generator. If the amount of state
information is less than 32 bytes, a simple linear congruential R.N.G.
is used.</blockquote></p>
<p>What method is utilized instead of a linear congruential RNG?
<blockquote>The random number generation technique is a linear feedback shift
register approach, employing trinomials (since there are fewer terms to
sum up that way).</blockquote></p>
<p>The man page states: 
<blockquote>The <code>random()</code> function uses a
nonlinear additive feedback random number generator employing a default
table of size 31 long integers to return successive pseudo-random
numbers in the range from 0 to <code>RAND_MAX</code>. The period of this
random number generator is very large, approximately 16 * ((2^31) -
1).</blockquote></p>
<p><a
href="https://sourceware.org/git/?p=glibc.git;a=blob;f=stdlib/random.c#l146">In
the code</a> we observe the table:</p>
```c
static int32_t randtbl[DEG_3 + 1] =
  {
    TYPE_3,
    -1726662223, 379960547, 1735697613, 1040273694, 1313901226,
    1627687941, -179304937, -2073333483, 1780058412, -1989503057,
    -615974602, 344556628, 939512070, -1249116260, 1507946756,
    -812545463, 154635395, 1388815473, -1926676823, 525320961,
    -1009028674, 968117788, -123449607, 1284210865, 435012392,
    -2017506339, -911064859, -370259173, 1132637927, 1398500161,
    -205601318,
  };
```
<p>Which such trinomials are utilized? <a
href="https://sourceware.org/git/?p=glibc.git;a=blob;f=stdlib/random.c#l94">The
code</a> details 4 types of RNGs, with <code>TYPE_0</code> being the
simple linear congruential method, the others being trinomials:
<code>TYPE_1</code>
<math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi>x</mi><mn>7</mn></msup><mo>+</mo><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">x^7 + x^3 + 1</annotation></semantics></math>,
<code>TYPE_2</code>
<math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi>x</mi><mn>15</mn></msup><mo>+</mo><mi>x</mi><mo>+</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">x^15 + x + 1</annotation></semantics></math>,
and <code>TYPE_3</code>
<math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi>x</mi><mn>31</mn></msup><mo>+</mo><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">x^31 + x^3 + 1</annotation></semantics></math>.
These three trinomial equations intersect at the points (0,1), (1,3) and
(-1,-1), while additional intersections exist between the pairs at
non-integer points:</p>
<p><img src="/assets/2022/04/desmos-graph.png" alt="plot_trinomials" width="50%" /></p>
<p>These trinomials are important enough that <a
href="https://www.unf.edu/~cwinton/html/cop4300/s09/class.notes/c1-VLP-RNGs.pdf">lists
have been published of them</a> and they have been subject of study.</p>
<p>The <a
href="https://www.redhat.com/en/blog/understanding-random-number-generators-and-their-limitations-linux">method
utilized by glibc</a> in <code>random_r()</code> involves the <a
href="https://github.com/lattera/glibc/blob/master/stdlib/random_r.c#L364">formula</a>:</p>
```c
int32_t val = ((state[0] * 1103515245U) + 12345U) & 0x7fffffff;
```
<p>In the GNU man page is detailed the differences between
<code>random()</code> and <code>random_r()</code>:
<blockquote>The <code>random_r()</code> function is like <code>random(3)</code>, except
that instead of using state information maintained in a global variable,
it uses the state information in the argument pointed to by buf, which
must have been previously initialized by <code>initstate_r()</code>. The
generated random number is returned in the argument result.</blockquote></p>
<p>A <a
href="https://en.wikipedia.org/wiki/Linear-feedback_shift_register">linear
feedback shift register</a> utilizes “a <a
href="https://en.wikipedia.org/wiki/Linearity#Boolean_functions">linear
function</a> of its previous state” as the input bit.</p>
<p>Another set of random number generators in UNIX and UNIX-like systems
(such as macOS, BSD, Linux) occurs in the exposed
<code>/dev/random</code> and <code>/dev/urandom</code> “files”. Under
the UNIX paradigm “everything is a file” so these “files” can be handled
by utilities such as <code>cat</code> as if they were files, allowing
pipelining to files etc. These produce continuous streams of random
bytes which are considered <a
href="https://en.wikipedia.org/wiki//dev/random#Linux">“cryptographically
secure”</a>.</p>
<p>Let’s examine the randomness tests contained within the TestU01 suite
proposed by <a
href="https://www.iro.umontreal.ca/~lecuyer/myftp/papers/testu01.pdf">L’Ecuyer
and Simard, 2007</a>. They first define a “good imitation” of
“independent uniform random variables” (colloquially, what we would
presumably consider “truly random”): <blockquote>RNGs for all types of
applications are designed so that their output sequence is a good
imitation of a sequence of independent uniform random variables, usually
over the real interval
<math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="true" form="prefix">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy="true" form="postfix">)</mo></mrow><annotation encoding="application/x-tex">(0, 1)</annotation></semantics></math>
or over the binary set
<math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false" form="prefix">{</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy="false" form="postfix">}</mo></mrow><annotation encoding="application/x-tex">\{0, 1\}</annotation></semantics></math>.
In the first case, the relevant hypothesis
<math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><msubsup><mi>H</mi><mn>0</mn><mi>A</mi></msubsup><annotation encoding="application/x-tex">H_0^A</annotation></semantics></math>
to be tested is that the successive output values of the RNG, say
<math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>u</mi><mn>0</mn></msub><mo>,</mo><msub><mi>u</mi><mn>1</mn></msub><mo>,</mo><msub><mi>u</mi><mn>2</mn></msub><mo>,</mo><mi>.</mi><mi>.</mi><mi>.</mi></mrow><annotation encoding="application/x-tex">u_0 , u_1 , u_2 , . . .</annotation></semantics></math>,
are independent random variables from the uniform distribution over the
interval
<math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="true" form="prefix">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy="true" form="postfix">)</mo></mrow><annotation encoding="application/x-tex">(0, 1)</annotation></semantics></math>,
that is, i.i.d.
<math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>U</mi><mrow><mo stretchy="true" form="prefix">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy="true" form="postfix">)</mo></mrow></mrow><annotation encoding="application/x-tex">U (0, 1)</annotation></semantics></math>.
In the second case,
<math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><msubsup><mi>H</mi><mn>0</mn><mi>B</mi></msubsup><annotation encoding="application/x-tex">H_0^B</annotation></semantics></math>
says that we have a sequence of independent random bits, each taking the
value 0 or 1 with equal probabilities independently of the others.</blockquote></p>
<p>The paper discusses many methods of testing (implemented in their
testing suite), a few are given below:</p>
<ol type="1">
<li><p><em>Statistical two-level statistical test</em>
<blockquote>Several
authors have advocated and/or applied a two-level (or second-order)
procedure for testing RNGs [Fishman 1996; Knuth 1998; L’Ecuyer 1992;
Marsaglia 1985]. The idea is to generate N “independent” copies of Y ,
say
<math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>Y</mi><mn>1</mn></msub><mo>,</mo><mi>.</mi><mi>.</mi><mi>.</mi><mo>,</mo><msub><mi>Y</mi><mi>N</mi></msub></mrow><annotation encoding="application/x-tex">Y_1 , . . . , Y_N</annotation></semantics></math>,
by replicating the first-order test N times on disjoint subsequences of
the generator’s output. Let F be the theoretical distribution function
of Y under
<math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><msub><mi>H</mi><mn>0</mn></msub><annotation encoding="application/x-tex">H_0</annotation></semantics></math>.
If F is continuous, the transformed observations
<math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>U</mi><mn>1</mn></msub><mo>=</mo><mi>F</mi><mrow><mo stretchy="true" form="prefix">(</mo><msub><mi>Y</mi><mn>1</mn></msub><mo stretchy="true" form="postfix">)</mo></mrow></mrow><annotation encoding="application/x-tex">U_1 = F (Y_1)</annotation></semantics></math>,
. . . ,
<math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>U</mi><mi>N</mi></msub><mo>=</mo><mi>F</mi><mrow><mo stretchy="true" form="prefix">(</mo><msub><mi>Y</mi><mi>N</mi></msub><mo stretchy="true" form="postfix">)</mo></mrow></mrow><annotation encoding="application/x-tex">U_N = F (Y_N )</annotation></semantics></math>
are i.i.d.
<math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>U</mi><mrow><mo stretchy="true" form="prefix">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy="true" form="postfix">)</mo></mrow></mrow><annotation encoding="application/x-tex">U (0, 1)</annotation></semantics></math>
random variables under
<math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><msub><mi>H</mi><mn>0</mn></msub><annotation encoding="application/x-tex">H_0</annotation></semantics></math>
. One way of performing the two-level test is to compare the empirical
distribution of these
<math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><msub><mi>U</mi><mi>j</mi></msub><annotation encoding="application/x-tex">U_j</annotation></semantics></math>
’s to the uniform distribution, via a goodness-of-fit (GOF) test such as
those of Kolmogorov- Smirnov, Anderson-Darling, Crámer-von Mises, etc.
<br /> […] <br /> The p-value of the GOF test statistic is computed and
<math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><msub><mi>H</mi><mn>0</mn></msub><annotation encoding="application/x-tex">H_0</annotation></semantics></math>
is rejected if this p-value is deemed too extreme, as usual.</blockquote></p></li>
<li><p><em>Testing a stream of real numbers</em>, this involves
“measuring global uniformity”, “measuring clustering” (if the numbers
tend to be clustered in a certain manner), and “run and gap tests”
(counts gap between successive values that land in a certain interval,
using the heuristic of Lebesgue measure).</p></li>
<li><p><em>“Testing for n subsequences of length t”</em></p></li>
<!-- <li><p>*Testing for</p></li> -->
</ol>
<p><a href="https://arxiv.org/abs/1805.01407">Blackman and Vigna,
2018</a> discuss some of the weaknesses of “F<sub>2</sub>-linear
pseudorandom number generators”. They propose a new generator called <a
href="https://prng.di.unimi.it/">xoshiro256**</a> which supposedly
addresses the failures of previous RNGs including their own Xoshiro128+.
This in turn was criticized by <a
href="https://www.pcg-random.org/posts/a-quick-look-at-xoshiro256.html">O’Neill,
2018</a>, where she compares it to her own <a
href="https://www.pcg-random.org/paper.html">PCG</a> random number
generator algorithms.</p>
<!-- <p>work in progress to be continued-</p>
<p>salt</p> -->