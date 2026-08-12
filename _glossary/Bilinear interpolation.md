---
layout: entry
title: Bilinear interpolation
type:
  - image filter
reference: 
course:
  - ECE6123
lecture:
  - ece6123-4-imagesampling
statement: "`O[2m,2n+1]=(I[m,n]+I[m,n+1])/2 O[2m+1,2n]=(I[m,n]+I[m+1,n])/2 O[2m+1,2n+1]=(I[m,n]+I[m,n+1]+I[m+1,n]+I[m+1,n+1])/4`"
created: 2023-10-25T00:47:48-04:00
---
(M=2)
```
O[2m,2n]=I[m,n]  
O[2m,2n+1]=(I[m,n]+I[m,n+1])/2 O[2m+1,2n]=(I[m,n]+I[m+1,n])/2 O[2m+1,2n+1]=(I[m,n]+I[m,n+1]+I[m+1,n]+I[m+1,n+1])/4
```
Equivalent 1D Filter `h=[0.5, 1, 0.5]`

`cv2.INTER_LINEAR`
used in [[Gaussian pyramid]]

___
References:
1. https://theailearner.com/2018/12/29/image-processing-bilinear-interpolation/
