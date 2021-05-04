## Hello

Have few notes:

- I added normalize.css via npm and installed node-sass
- I added skip to query in server (I tried to implement infinite scroll with pagination)
- about form: I wrote reducer with possibility to add own validation function and error on every input, I didn't style it, just wrote a bit logic
- I spent a bit more than 2 hours because of enjoying

P.S. I played a lot with the grid (display: grid && flex) and wanted to create something similar to https://www.smashingmagazine.com/native-css-masonry-layout-css-grid/ but `grid-template-rows: masonry;` works only in Firefox Nightly what is not really popular so that's why I chose columns layout,of course it's not ideal solution and I'm not sure that I choose it on production but it looks really fancy. About images, my idea is that we fetch from backend 2 types of images - compressed and trimmed photos and HQ and load them in picture tag with srcset. For layout we show first ones and in modal we show HQ. IMHO it should be done on server side because we can't do a lot with heavy images.

### Have a great time!
