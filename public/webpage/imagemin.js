const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminGifsicle = require('imagemin-gifsicle');
const imageminSvgo = require('imagemin-svgo');

(async () => {
  const files = await imagemin(
    ['src/assets/images/*.{jpg,png,gif,svg}'],
    'dist/assets/images',
    {
      plugins: [
        imageminMozjpeg({ quality: 60 }),
        imageminPngquant({ quality: [0.6, 0.6] }),
        imageminGifsicle({optimizationLevel: 1}),
        imageminSvgo({ plugins: [{ removeViewBox: false }] })
      ]
    }
  );
  console.log('Images have been minified');
})();
