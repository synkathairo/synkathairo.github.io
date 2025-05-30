---
layout: post
title:  "Regarding the quandary of the traveling salesman problem"
date:   2022-07-22
# categories: mathematics computation
excerpt: "The traveling salesman problem is stated in simple terms..."
---
<p>The <a
href="https://en.wikipedia.org/wiki/Travelling_salesman_problem">traveling
salesman problem</a> is stated in simple terms: given an arrangement of
cities, and traveling distances between pairs of cities, what is the
shortest possible path to travel between all such cities? It appears
deceptively simple yet, from a computational standpoint, is extremely
inefficient to exhaustively solve. According to the “naive solution”,
the most inefficient solution, the problem is only solved by trying
every possible path between all possible sequences of cities, and then
selecting the path with the shortest total length amongst them. This
solution has expensive computational costs in the order of <math><mrow><mi>O</mi><mo form="prefix" stretchy="false">(</mo><mi>n</mi><mo form="postfix" stretchy="false">!</mo><mo form="postfix" stretchy="false">)</mo></mrow></math>.</p>
<p>Christofides algorithm was considered the most efficient
approximation until a recent <a
href="https://www.quantamagazine.org/computer-scientists-break-traveling-salesperson-record-20201008/">2020
algorithm utilizing random generation was released</a>.</p>
<!-- <p>TODO continue article</p> -->