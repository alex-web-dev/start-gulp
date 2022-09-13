import browserSync from 'browser-sync';

import { html } from './html.js';
import { pug } from './pug.js';
import { styles } from './styles.js';
import { scripts } from './scripts.js';
import { img } from './img.js';
import { svg } from './svg.js';
import { fonts } from './fonts.js';

function reload(done) {
  browserSync.reload();
  done();
};

export const watcher = () => {
  app.gulp.watch(`${app.path.src.html}/**/*.html`, app.gulp.series(html, reload));
  app.gulp.watch(`${app.path.src.pug}/**/*.pug`, app.gulp.series(pug, reload));
  app.gulp.watch(`${app.path.src.scss}/**/*.+(sass|scss)`, app.gulp.series(styles, reload));
  app.gulp.watch(`${app.path.src.img}/**/*.{jpg,jpeg,png,gif,svg}`, app.gulp.series(img, reload));
  app.gulp.watch(`${app.path.src.svgIcons}/**/*.svg`, app.gulp.series(svg, reload));
  app.gulp.watch(`${app.path.src.favicon}`, app.gulp.series(reload));
  app.gulp.watch(`${app.path.src.js}/**/*.js`, app.gulp.series(scripts, reload));
  app.gulp.watch(`${app.path.src.fonts}/**/*.ttf`, app.gulp.series(fonts, reload));
}