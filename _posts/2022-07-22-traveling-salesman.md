---
layout: post
title:  Regarding the quandary of the traveling salesman problem
date:   2022-07-22
usemathjax: true
categories: [mathematics, computation]
---

The [traveling salesman problem](https://en.wikipedia.org/wiki/Travelling_salesman_problem) is stated in simple terms: given an arrange of cities, and traveling distances between pairs of cities, what is the shortest possible path to travel between all such cities? It appears deceptively simple yet, from a computational standpoint, is extremely inefficient to exhaustively solve. According to the "naive solution", the most inefficient solution, the problem is only solved by trying every possible path between all possible sequences of cities, and then selecting the path with the shortest total length amongst them. This solution has expensive computational costs in the order of \\(O(n!)\\).

Christofides algorithm was considered the most efficient approximation until a recent [2020 algorithm utilizing random generation was released](https://www.quantamagazine.org/computer-scientists-break-traveling-salesperson-record-20201008/).


TODO continue article
