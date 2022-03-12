const imagemin = import('imagemin');
const imageminMozjpeg = import('imagemin-mozjpeg');
const imageminPngquant = import('imagemin-pngquant');
const imageminGifsicle = import('imagemin-gifsicle');
const imageminSvgo = import('imagemin-svgo');

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
