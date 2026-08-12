---
layout: page
title: Histogram
type:
  - function
reference: 
course: ECE6123
lecture:
  - ece6123-1-contrastenhancement
statement: $P(l) = n_l / n$
created: 2023-10-21T23:43:17-04:00
---
Histogram of a monochrome image with $L$ possible gray levels, $l = 0, 1, ..., L-1$.
- $P(l) = n_l / n$,  
- $n_l$ is the number of pixels with gray level $l$.  
- $n$ is the total number of pixels in the image.

## Histogram Calculation (Sample Matlab Script)
```matlab
function h = histogram(imgname) 
img = imread(imgname);  
figure; imshow(img);

% method 1
h = zeros(256,1); 
for l = 0:255
	for i = 1:N,
		for j = 1:M,
			if img(i, j) == l,  
				h(l + 1) = h(l + 1) + 1;
			end 	
		end
	end 
end

figure; bar(h);

% method 2
img = double(img); h = zeros(256,1); 
for i=1:M,
	for j=1:N,  
		f = img(i,j);  
		h(f+1) = h(f+1) + 1;
	end 
end

% method 3
h = zeros(256,1); 
for l = 0 : 255,
	h(l + 1)=sum(sum(img == l)); 
end
```

- Photoshop has extensive histogram display tools 
- Matlab: `imhist( )`: can compute and display histograms 
- Python: `matplotlib.pyplot.hist( )`, `numpy.histogram( )`

___

See: [[Histogram Equalization]]