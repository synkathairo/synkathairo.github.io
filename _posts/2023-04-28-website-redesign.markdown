---
layout: post
title:  "Website redesign"
date:   2023-04-28
excerpt: "Redesign of the website..."
published: false
---
<p>Redesign of the website to remove the necessity of using <a href="https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll">Jekyll</a> and allowing for greater customizability. Instead, the website relies on vanilla HTML + minimal JS to create a reusable header element (the website title + navbar) using a <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements">reusable Web Component custom element</a> (which creates a <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM">shadow DOM</a>), and CSS for styling. Old markdown files were converted to HTML using <a href="https://pandoc.org/index.html">Pandoc</a>.</p>
<p>Font stacks in CSS are taken from <a href="https://modernfontstacks.com/">modernfontstacks.com</a>. Equations are rendered with browser-native <a href="https://developer.mozilla.org/en-US/docs/Web/MathML">MathML</a> instead of <a href="https://www.mathjax.org/">MathJax</a>. A dark theme is also added using <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme"><code>prefers-color-scheme</code></a> in CSS.</p>
<p>Benefits of redesign: customizability, lightweight. Caveats: may break on old browsers due to use of new HTML5 features.</p>
