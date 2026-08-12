---
layout: entry
title: Histogram Equalization
type:
  - function
reference: 
course: ECE6123
lecture:
  - ece6123-1-contrastenhancement
statement: "Transform function (continuous version): $g(f)=\\int_0^f p_F(t)dt$"
created: 2023-10-22T00:14:27-04:00
---
Transforms an image with an arbitrary [[Histogram|histogram]] to one with a flat histogram
- Suppose $f$ has PDF $p_F(f)$, $0≤f≤1$
- Transform function (continuous version): $g(f)=\int_0^f p_F(t)dt$
- $g$ is uniformly distributed in $(0, 1)$

Discrete Implementation
- For a discrete image f which takes values $k=0,...,K-1$, use
$$\tilde{g}(l) = \sum_{k=0}^l p_F (k), \, l=0,1,...,K-1$$
- To convert the transformed values to the range of $(0, L- 1)$:
$$g(l)= round \left\{ \left( \sum_{k=0}^l p_F (k) \right) * (L-1)\right\}$$

## Proof of continuous version:
$$\begin{aligned}
g(f) = \int_{f_\min}^f p_F (t) dt \\
p_G (g) = \frac{p_F(f)}{|\frac{dg}{df}|}, \, g \in (0,1) \\
\frac{dg}{df} = p_F(f)\\
p_G(g) = 1, \, g \in (0,1)
\end{aligned}$$

## Example code
### Example MATLAB code

```matlab
function histogram_eq(inimgname)

img=imread(imgname); 
figure; imshow(img); 
[M,N]=size(img);

H=imhist(img); 
H=H/(M*N); 
figure; bar(H);

%Computing the mapping function
for (k=1:256) 
	C(k)=uint8(sum(H(1:k))*255);
end;
% C = uint8(cumsum(H)*255);

figure;plot(C);

%perform mapping
for (i=1:M) 
	for (j=1:N)
		f=double(img(i,j))+1;
		histeqimg(i,j)=C(f); 
	end;
end;

%note the above loop can be replaced by: %histeqimg=C(double(img)+1);  
%this will be much faster!

figure; 
imshow(histeqimg);
```

### Example Python code
```python
import cv2  
import numpy as np  
from matplotlib import pyplot as plt

# read the image using openCV

img = cv2.imread('kid.jpg',0)  
# Calculate the histogram and corresponding bins hist,bins = np.histogram(img.flatten(),256,[0,256])  
# Calculate the cdf and normalize the values to 0-255 cdf = hist.cumsum()  
cdf_normalized = cdf * 255/ cdf[-1]  
# Replace the vales with normalized cdf values img_histeq = cdf_normalized[img]

#display results

fig = plt.figure()  
ax1 = plt.subplot(2,2,1) ax1.get_xaxis().set_visible(False) ax1.get_yaxis().set_visible(False) plt.imshow(img,cmap=plt.cm.gray)  
ax2 = plt.subplot(2,2,2) plt.hist(img.ravel(),256,[0,256])  
ax3 = plt.subplot(2,2,3) ax3.get_xaxis().set_visible(False) ax3.get_yaxis().set_visible(False) plt.imshow(img_histeq,cmap=plt.cm.gray) ax4 = plt.subplot(2,2,4) plt.hist(img_histeq.ravel(),256,[0,256]) plt.show()
```

## Problems with Histogram Equalization
- An image may have a good contrast globally (some region very dark, some very bright) 
- But local details are hard to see
	- -> local histogram equalization
- Using the same transformation function may not be best everywhere
	- -> adaptive histogram equalization

## Adaptive histogram equalization
Using non-overlapping blocks to compute the histograms and the mapping function for each block center.

The pixel’s mapping function $f_{s,t}(I)$ is determined by interpolating the 4 mapping functions of the four block centers

Using blinear weights determined based on its distance to the block centers $(s,t), (1-s,t), (s,1-t), (1-s,1-t)$

$$f_{s,t}(I)=(1-s)(1-t)f_{00}(I)+s(1-t)f_{10}(I)+(1-s)tf_{01}(I)+stf_{11}(I)$$

___
References:
1. Richard Szeliski, [Computer Vision: Algorithms and Applications, 2nd ed.](https://szeliski.org/Book/) (2022)
