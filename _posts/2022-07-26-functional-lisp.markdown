---
layout: post
title:  "Functional programming, Lisp-like languages, and type theory"
date:   2022-07-26
categories: mathematics computation
excerpt: "I recently came across the concept of functional programming which piqued my interest..."
---
<p>I recently came across the concept of functional programming which
piqued my interest. The concept of functional programming syntactically
follows the convention as established by “Polish notation”; that is,
instead of putting operations between variables (eg. <math><mrow><mn>1</mn><mo>+</mo></mrow><mrow><mn>2</mn></mrow></math> to add 1
and 2), which reflects our linguistic conventions (especially in
subject-verb-object order) and the origins of mathematical expressions
from natural language grammars, we instead list the operation first and
then the variables or numbers involved, which is more logical for
computers.</p>
<p>For example, to add 1 and 2 in Scheme, we write:</p>
<div class="sourceCode" id="cb1"><pre
class="sourceCode scheme"><code class="sourceCode scheme"><span id="cb1-1"><a href="#cb1-1" aria-hidden="true" tabindex="-1"></a>(<span class="op">+</span> <span class="dv">1</span> <span class="dv">2</span>)</span></code></pre></div>
<p>which of course evaluates to 3.</p>
<p>I found the SICP book (<em>Structure and Interpretation of Computer
Programs</em>), linked below, to give a helpful introduction to Scheme.
The book utilizes the simplicity of Scheme to teach programming
concepts. Scheme, as a prominent Lisp derivative, in general follows the
convention of prefix notation-based syntax. The parentheses seem to
indicate a sort of order of operations as you might find in a
mathematical expression, and follows a simple syntactical logic, ie. to
do <math><mrow><mo form="prefix" stretchy="false">(</mo><mn>2</mn><mo>+</mo></mrow><mrow><mn>3</mn><mo form="postfix" stretchy="false">)</mo><mspace width="0.2778em"></mspace><mo form="prefix" stretchy="false">(</mo><mn>5</mn><mo>+</mo></mrow><mrow><mn>6</mn><mo form="postfix" stretchy="false">)</mo></mrow></math>, we use:</p>
<div class="sourceCode" id="cb2"><pre
class="sourceCode scheme"><code class="sourceCode scheme"><span id="cb2-1"><a href="#cb2-1" aria-hidden="true" tabindex="-1"></a>(<span class="op">*</span> (<span class="op">+</span> <span class="dv">2</span> <span class="dv">3</span>) (<span class="op">+</span> <span class="dv">5</span> <span class="dv">6</span>))</span></code></pre></div>
<p>Functional programming languages correspond also mathematically to
the concepts of type theory and formal languages. Agda is a programming
language which has been used in mathematical proofs. Functional
programming is also widely used in some fields such as finance.</p>
<!-- <p><code>TODO write more here</code></p> -->
<p>Resources:
<ul>
<li><a href="https://en.wikipedia.org/wiki/Polish_notation">Polish notation</a></li>
<li><a href="https://en.wikipedia.org/wiki/Lisp_(programming_language)">Lisp
programming language</a></li>
<li><a href="https://staff.math.su.se/anders.mortberg/slides/master_slides.pdf">Anders
Mörtberg - <em>Constructive Algebra in Functional Programming and Type
Theory</em></a></li>
<li><a href="http://fmnt.info/blog/20181029_scheme.html">Scheme for scientific
computing</a></li>
<li><a href="https://beautifulracket.com/">Beautiful
Racket</a></li>
<li><a href="https://staff.math.su.se/anders.mortberg/papers/cubicalagda.pdf">Vezzozi,
Mörtberg, Abel - <em>Cubical Agda: A Dependently Typed Programming
Language with Univalence and Higher Inductive Types</em></a></li>
<li><a href="https://ncatlab.org/nlab/show/cubical+type+theory">Cubical type
theory</a></li>
<li><a href="https://web.mit.edu/6.001/6.037/sicp.pdf">Abelson &amp; Sussman - <em>Structure and Interpretation of Computer Programs</em></a></li>
<li><a href="https://wiki.portal.chalmers.se/agda/pmwiki.php">Agda wiki</a></li>
<li><a href="https://www.haskell.org/">Haskell</a></li>
<li><a href="https://gambitscheme.org/">Gambit Scheme</a></li>
<li><a href="https://www.gnu.org/software/mit-scheme/">MIT/GNU Scheme</a></li>
<li><a href="https://racket-lang.org/">Racket lang</a></li>
<li><a href="https://hardmath123.github.io/perchance-to-scheme.html">Perchance to Scheme</a></li>
</ul>