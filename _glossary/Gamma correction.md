---
layout: page
title: Gamma correction
type:
  - function
reference: 
course: ECE6123
lecture:
  - ece6123-1-imageformation
statement: $g = af^r$, $h= f^{1/r}$, $g=ah^r=af$
created: 2023-10-21T23:35:08-04:00
---
- Displayed light intensity is nonlinearly related to the actual intensity following the Gamma rule
$$g = af^r$$
- Gamma correction pre-compensates this nonlinearity inside the camera
$$h= f^{1/r}$$
$$g=ah^r=af$$
- Gamma value depends on the display device, typically gamma~2.2