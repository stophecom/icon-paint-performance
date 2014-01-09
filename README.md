Simple setup to test paint-performance for different ways of including icons.

## Test case
Tested the paint performance while scrolling through 10000 Icons.

### Methods
- SVG Inline
- Icon Font (SVG, Woff, TTF)
- SVG Background (background-image)
- SVG Background Data (`background-image: data[...]`)
- PNG Background (background-image)
- PNG Background Data (background-image: data[...])
- WebP Background (background-image)

## Results
I only tested in Chrome for now. So take these results caution. The results can roughly be summarized as the following:

- Inline SVG and Icon Font rendered at 51FPS __~19ms__
- All solutions using _background_ rendered at __30FPS__ (~32ms)

Interestingly the differences between the different file formats are marginal.

The results in detail:
### Chrome 31.0.1650.63

#### SVG Inline
![SVG Inline](/img/results/1-paint-performance-svg-inline.png)

#### Icon Font (SVG)
![Icon Font (SVG)](/img/results/2a-paint-performance-font-svg.png)

#### Icon Font (WOFF)
![Icon Font (WOFF)](/img/results/2b-paint-performance-font-woff.png)

#### Icon Font (TTF)
![Icon Font (WOFF)](/img/results/2c-paint-performance-font-ttf.png)

#### SVG Background
![SVG Background)](/img/results/3-paint-performance-svg-bg.png)

#### SVG Background Data
![SVG Background Data)](/img/results/4-paint-performance-svg-bg-data.png)

#### PNG Background
![PNG Background)](/img/results/5-paint-performance-png-bg.png)

#### PNG Background Data
![PNG Background Data)](/img/results/6-paint-performance-png-bg-data.png)

#### WebP Background
![WebP Background)](/img/results/7-paint-performance-webp-bg.png)
