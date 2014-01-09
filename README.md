Simple setup to test paint-performance for different ways of including icons.

### Test Setup
Tested the paint performance while scrolling through 10`000 Icons.

![Setup](img/results/test-setup.png)

#### Versions
- SVG Inline (`<svg>`
- Icon Font (SVG, Woff, TTF)
- SVG Background (`background-image: url('path/to/icon.svg')`)
- SVG Background Data (`background-image: url('data:image/svg+xml;...')`)
- PNG Background (`background-image: url('path/to/icon.png');`)
- PNG Background Data (`background-image: url('data:image/png;...')`)
- WebP Background (`background-image: url('path/to/icon.webp');`)

### Results
I only tested in Chrome for now. So take these results with caution. The results can roughly be summarized as the following:

- Inline SVG and Icon Font rendered at __51FPS__ (~19ms)
- All solutions using `background-image rendered at __30FPS__ (~32ms)

Interestingly the differences between the different file formats are marginal.

The results in detail:
#### Chrome 31.0.1650.63

##### SVG Inline
![SVG Inline](img/results/1-paint-performance-svg-inline.png)

##### Icon Font (SVG)
![Icon Font (SVG)](img/results/2a-paint-performance-font-svg.png)

##### Icon Font (WOFF)
![Icon Font (WOFF)](img/results/2b-paint-performance-font-woff.png)

##### Icon Font (TTF)
![Icon Font (WOFF)](img/results/2c-paint-performance-font-ttf.png)

##### SVG Background
![SVG Background)](img/results/3-paint-performance-svg-bg.png)

##### SVG Background Data
![SVG Background Data)](img/results/4-paint-performance-svg-bg-data.png)

##### PNG Background
![PNG Background)](img/results/5-paint-performance-png-bg.png)

##### PNG Background Data
![PNG Background Data)](img/results/6-paint-performance-png-bg-data.png)

##### WebP Background
![WebP Background)](img/results/7-paint-performance-webp-bg.png)
