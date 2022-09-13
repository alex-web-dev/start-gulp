import * as nodePath from 'path';

const rootFolder = nodePath.basename(nodePath.resolve());
const srcFolder = './src';
const buildFolder = './build';

export const path = {
	srcFolder,
	buildFolder,
	rootFolder,
	src: {
		html: `${srcFolder}`,
		pug: `${srcFolder}/pug`,
		scss: `${srcFolder}/scss`,
		scssEntryFile: 'styles.scss',
		js: `${srcFolder}/js`,
		jsEntryFile: 'index.js',
		img: `${srcFolder}/img`,
		fonts: `${srcFolder}/fonts`,
		svgIcons: `${srcFolder}/icons/svg`,
		favicon: `${srcFolder}/img/favicon.png`,

	},
	build: {
		css: `${buildFolder}/assets/css`,
		js: `${buildFolder}/assets/js`,
		img: `${buildFolder}/assets/img`,
		fonts: `${buildFolder}/assets/fonts`,
		favicon: `${buildFolder}/assets/img`,
	}
};