import {
	defineConfig,
	presetAttributify,
	presetWebFonts,
	presetTypography,
	presetIcons,
	transformerAttributifyJsx
} from 'unocss';
import presetWind4 from '@unocss/preset-wind4';

export default defineConfig({
	presets: [
		presetAttributify(),
		presetWind4(),
		presetWebFonts({
			provider: 'bunny',
			fonts: {
				base: 'Inter:400,500,600,700,800,900'
			}
		}),
		presetTypography(),
		presetIcons()
	],
	transformers: [transformerAttributifyJsx()],

});
