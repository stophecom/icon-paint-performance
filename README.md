Simple setup to test paint-performance for different ways of including icons.

### Test Setup
Tested the paint performance displaying icons.

#### Versions
- 1 SVG Inline `<svg>` (used [iconmelon](http://iconmelon.com/))
- 2 Icon Font (SVG, Woff, TTF - used [fontcustom](http://fontcustom.com/))
- 3a SVG Background `background-image: url('path/to/icon.svg')`
- 3b SVG Background Data `background-image: url('data:image/svg+xml;...')`
- 4a PNG Background `background-image: url('path/to/icon.png');`
- 4b PNG Background Data `background-image: url('data:image/png;...')`
- 5 WebP Background `background-image: url('path/to/icon.webp');`

### Results
It's really hard to compare paint-performance in general. (Mostly just visual) For now I only tested in Chrome, as it is the only browser which allows you to track this kind of information.
Still, to get universal results is almost impossible as the performance depends on so many factors. My results can roughly be summarized as the following (take these results with caution):

- Inline SVG and Icon Font rendered fastest
- PNG, WebP via `background-image` rendered approx. 25% slower
- SVG via `background-image` rendered rendered approx. 50% slower

The results in detail:

#### Chrome 32.0.1700.72 beta
Paint Performance with __10`000__ Icons.
![Setup](img/results/test-setup.png)

##### 1 SVG Inline
![SVG Inline](img/results/chrome32/1-paint-time.png)

##### 2a Icon Font (SVG)
![Icon Font (SVG)](img/results/chrome32/2-paint-time.png)

##### 3a SVG Background
![SVG Background)](img/results/chrome32/3a-paint-time.png)

##### 3b SVG Background Data
![SVG Background Data)](img/results/chrome32/3b-paint-time.png)

##### 4a PNG Background
![PNG Background)](img/results/chrome32/4a-paint-time.png)

##### 4b PNG Background Data
![PNG Background Data)](img/results/chrome32/4b-paint-time.png)

##### 5 WebP Background
![WebP Background)](img/results/chrome32/5-paint-time.png)


#### Chrome Beta 32.0.1700.94 (Android 4.4.2)
Paint Performance with __1`000__ Icons.
![Setup](img/results/test-setup-m.png)

##### 1 SVG Inline
![SVG Inline](img/results/chrome32m/1-paint-time.png)

##### 2a Icon Font (SVG)
![Icon Font (SVG)](img/results/chrome32m/2-paint-time.png)

##### 3a SVG Background
![SVG Background)](img/results/chrome32m/3a-paint-time.png)

##### 4a PNG Background
![PNG Background)](img/results/chrome32m/4a-paint-time.png)

##### 5 WebP Background
![WebP Background)](img/results/chrome32m/5-paint-time.png)
