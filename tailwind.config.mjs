/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				'primary': '#0c88a0',
				'secondary': '#F6FF4D',
				't1': '#042E36',
				't2': '#0E5360',
				't3': '#109CA9',
				't4': '#D0F1F8',
				'tl': '#F0FBFD',
				'tm': '#DEF2F6',
				'td': '#DBEAEC',
				'd1': '#222',
				'd2': '#424D4F',
				'd3': '#708083',
				'bg': '#FAFAFA',
				'fw': '#FFF',
				'sg': '#F4F7F8',
				'sy': '#FAFFA0',
				'ig': '#44AA4A',
				'igl': '#D0F8D2',
				'ir': '#DD4D37',
				'irl': '#FFDFDA',
				'iy': '#CC9D1D',
				'iyl': '#FFEFC3',

			},
			fontSize: {
				'desktop/h1': ['72px', {
					lineHeight: '86.4px',
					letterSpacing: 'normal',
					fontWeight: '600',
				}],
				'desktop/h2': ['48px', {
					lineHeight: '57.6px',
					letterSpacing: 'normal',
					fontWeight: '600',
				}],
				'desktop/h3': ['36px', {
					lineHeight: '46.8px',
					letterSpacing: 'normal',
					fontWeight: '400',
				}],
				'desktop/title1': ['28px', {
					lineHeight: '39.2px',
					letterSpacing: 'normal',
					fontWeight: '300',
				}],
				'desktop/title2': ['24px', {
					lineHeight: '33.6px',
					letterSpacing: 'normal',
					fontWeight: '400',
				}],
				'desktop/overline': ['16px', {
					lineHeight: '22.4px',
					letterSpacing: 'normal',
					fontWeight: '400',
				}],
				'desktop/overline/2': ['14px', {
					lineHeight: '19.6px',
					letterSpacing: 'normal',
					fontWeight: '400',
				}],
				'desktop/pointslist': ['18px', {
					lineHeight: '25.2px',
					letterSpacing: 'normal',
					fontWeight: '400',
				}],
				'desktop/sub-title/1': ['18px', {
					lineHeight: '25.2px',
					letterSpacing: 'normal',
					fontWeight: '700',
				}],
				'desktop/sub-title/2': ['18px', {
					lineHeight: '23.4px',
					letterSpacing: 'normal',
					fontWeight: '500',
				}],
				'desktop/sub-title/3': ['16px', {
					lineHeight: '20.8px',
					letterSpacing: 'normal',
					fontWeight: '500',
				}],
				'desktop/body-light': ['20px', {
					lineHeight: '28px',
					letterSpacing: 'normal',
					fontWeight: '300',
				}],
				'desktop/body/small': ['14px', {
					lineHeight: '19.6px',
					letterSpacing: 'normal',
					fontWeight: '400',
				}],
				'desktop/body/regular': ['16px', {
					lineHeight: '22.4px',
					letterSpacing: 'normal',
					fontWeight: '400',
				}],
				'desktop/body/medium': ['18px', {
					lineHeight: '25.2px',
					letterSpacing: 'normal',
					fontWeight: '500',
				}],
				'desktop/body/large': ['20px', {
					lineHeight: '28px',
					letterSpacing: 'normal',
					fontWeight: '400',
				}],
				'desktop/button': ['16px', {
					lineHeight: '22.4px',
					letterSpacing: 'normal',
					fontWeight: '600',
				}],
				'desktop/text/button': ['16px', {
					lineHeight: '19.2px',
					letterSpacing: 'normal',
					fontWeight: '400',
				}],
				'desktop/helper/text': ['14px', {
					lineHeight: '19.6px',
					letterSpacing: 'normal',
					fontWeight: '300',
				}],
				'desktop/disclaimer': ['12px', {
					lineHeight: '15.6px',
					letterSpacing: 'normal',
					fontWeight: '600',
				}],
				'desktop/navigation': ['16px', {
					lineHeight: '22.4px',
					letterSpacing: 'normal',
					fontWeight: '700',
				}],
				'desktop/legend/1': ['20px', {
					lineHeight: '26px',
					letterSpacing: 'normal',
					fontWeight: '700',
				}],
				'desktop/input/label': ['18px', {
					lineHeight: '25.2px',
					letterSpacing: 'normal',
					fontWeight: '700',
				}],
				'desktop/percentage': ['14px', {
					lineHeight: '18.2px',
					letterSpacing: 'normal',
					fontWeight: '500',
				}],
				'desktop/number/small': ['24px', {
					lineHeight: '31.2px',
					letterSpacing: 'normal',
					fontWeight: '500',
				}],
				'desktop/number/display': ['36px', {
					lineHeight: '46.8px',
					letterSpacing: 'normal',
					fontWeight: '600',
				}],
				'desktop/stat/2': ['56px', {
					lineHeight: '72.8px',
					letterSpacing: 'normal',
					fontWeight: '600',
				}],
				'desktop/stat/1': ['80px', {
					lineHeight: '184px',
					letterSpacing: 'normal',
					fontWeight: '600',
				}],

				// Tablet styles
				'tablet/h1': ['56px', {
					lineHeight: '67.2px',
					letterSpacing: 'normal',
					fontWeight: '600',
				}],
				'tablet/h2': ['36px', {
					lineHeight: '43.2px',
					letterSpacing: 'normal',
					fontWeight: '600',
				}],
				'tablet/h3': ['28px', {
					lineHeight: '36.4px',
					letterSpacing: 'normal',
					fontWeight: '400',
				}],
				'tablet/title1': ['24px', {
					lineHeight: '33.6px',
					letterSpacing: 'normal',
					fontWeight: '300',
				}],
				'tablet/title2': ['20px', {
					lineHeight: '28px',
					letterSpacing: 'normal',
					fontWeight: '400',
				}],
				'tablet/overline': ['16px', {
					lineHeight: '22.4px',
					letterSpacing: 'normal',
					fontWeight: '400',
				}],
				'tablet/overline/2': ['14px', {
					lineHeight: '19.6px',
					letterSpacing: 'normal',
					fontWeight: '400',
				}],
				'tablet/pointslist': ['17px', {
					lineHeight: '23.8px',
					letterSpacing: 'normal',
					fontWeight: '400',
				}],
				'tablet/sub-title/1': ['18px', {
					lineHeight: '25.2px',
					letterSpacing: 'normal',
					fontWeight: '700',
				}],
				'tablet/sub-title/2': ['17px', {
					lineHeight: '22.1px',
					letterSpacing: 'normal',
					fontWeight: '500',
				}],
				'tablet/sub-title/3': ['16px', {
					lineHeight: '20.8px',
					letterSpacing: 'normal',
					fontWeight: '500',
				}],
				'tablet/body-light': ['19px', {
					lineHeight: '26.6px',
					letterSpacing: 'normal',
					fontWeight: '300',
				}],
				'tablet/body/small': ['14px', {
					lineHeight: '19.6px',
					letterSpacing: 'normal',
					fontWeight: '400',
				}],
				'tablet/body/regular': ['16px', {
					lineHeight: '22.4px',
					letterSpacing: 'normal',
					fontWeight: '400',
				}],
				'tablet/body/medium': ['17px', {
					lineHeight: '23.8px',
					letterSpacing: 'normal',
					fontWeight: '500',
				}],
				'tablet/body/large': ['19px', {
					lineHeight: '26.6px',
					letterSpacing: 'normal',
					fontWeight: '400',
				}],
				'tablet/button': ['16px', {
					lineHeight: '22.4px',
					letterSpacing: 'normal',
					fontWeight: '600',
				}],
				'tablet/text/button': ['16px', {
					lineHeight: '19.2px',
					letterSpacing: 'normal',
					fontWeight: '400',
				}],
				'tablet/helper/text': ['14px', {
					lineHeight: '19.6px',
					letterSpacing: 'normal',
					fontWeight: '300',
				}],
				'tablet/disclaimer': ['12px', {
					lineHeight: '15.6px',
					letterSpacing: 'normal',
					fontWeight: '600',
				}],
				'tablet/navigation': ['15px', {
					lineHeight: '21px',
					letterSpacing: 'normal',
					fontWeight: '700',
				}],
				'tablet/legend/1': ['18px', {
					lineHeight: '23.4px',
					letterSpacing: 'normal',
					fontWeight: '700',
				}],
				'tablet/input/label': ['16px', {
					lineHeight: '22.4px',
					letterSpacing: 'normal',
					fontWeight: '700',
				}],
				'tablet/percentage': ['13px', {
					lineHeight: '16.9px',
					letterSpacing: 'normal',
					fontWeight: '500',
				}],
				'tablet/number/small': ['22px', {
					lineHeight: '28.6px',
					letterSpacing: 'normal',
					fontWeight: '500',
				}],
				'tablet/number/display': ['32px', {
					lineHeight: '41.6px',
					letterSpacing: 'normal',
					fontWeight: '600',
				}],
				'tablet/stat/2': ['48px', {
					lineHeight: '62.4px',
					letterSpacing: 'normal',
					fontWeight: '600',
				}],
				'tablet/stat/1': ['64px', {
					lineHeight: '83.2px',
					letterSpacing: 'normal',
					fontWeight: '600',
				}],

				// Mobile styles
				'mobile/h1': ['40px', {
					lineHeight: '48px',
					letterSpacing: 'normal',
					fontWeight: '600',
				}],
				'mobile/h2': ['28px', {
					lineHeight: '33.6px',
					letterSpacing: 'normal',
					fontWeight: '600',
				}],
				'mobile/h3': ['24px', {
					lineHeight: '31.2px',
					letterSpacing: 'normal',
					fontWeight: '400',
				}],
				'mobile/title1': ['22px', {
					lineHeight: '38.8px',
					letterSpacing: 'normal',
					fontWeight: '300',
				}],
				'mobile/title2': ['18px', {
					lineHeight: '25.2px',
					letterSpacing: 'normal',
					fontWeight: '400',
				}],
				'mobile/overline': ['14px', {
					lineHeight: '19.6px',
					letterSpacing: 'normal',
					fontWeight: '400',
				}],
				'mobile/overline/2': ['12px', {
					lineHeight: '16.8px',
					letterSpacing: 'normal',
					fontWeight: '400',
				}],
				'mobile/pointslist': ['16px', {
					lineHeight: '22.4px',
					letterSpacing: 'normal',
					fontWeight: '400',
				}],
				'mobile/sub-title/1': ['16px', {
					lineHeight: '22.4px',
					letterSpacing: 'normal',
					fontWeight: '700',
				}],
				'mobile/sub-title/2': ['16px', {
					lineHeight: '20.8px',
					letterSpacing: 'normal',
					fontWeight: '500',
				}],
				'mobile/sub-title/3': ['14px', {
					lineHeight: '18.2px',
					letterSpacing: 'normal',
					fontWeight: '500',
				}],
				'mobile/body-light': ['16px', {
					lineHeight: '22.4px',
					letterSpacing: 'normal',
					fontWeight: '300',
				}],
				'mobile/body/small': ['14px', {
					lineHeight: '19.6px',
					letterSpacing: 'normal',
					fontWeight: '400',
				}],
				'mobile/body/regular': ['16px', {
					lineHeight: '22.4px',
					letterSpacing: 'normal',
					fontWeight: '400',
				}],
				'mobile/body/medium': ['16px', {
					lineHeight: '22.4px',
					letterSpacing: 'normal',
					fontWeight: '500',
				}],
				'mobile/body/large': ['17px', {
					lineHeight: '23.8px',
					letterSpacing: 'normal',
					fontWeight: '400',
				}],
				'mobile/button': ['14px', {
					lineHeight: '19.6px',
					letterSpacing: 'normal',
					fontWeight: '600',
				}],
				'mobile/text/button': ['14px', {
					lineHeight: '16.8px',
					letterSpacing: 'normal',
					fontWeight: '400',
				}],
				'mobile/helper/text': ['12px', {
					lineHeight: '16.8px',
					letterSpacing: 'normal',
					fontWeight: '300',
				}],
				'mobile/disclaimer': ['12px', {
					lineHeight: '15.6px',
					letterSpacing: 'normal',
					fontWeight: '600',
				}],
				'mobile/navigation': ['14px', {
					lineHeight: '19.6px',
					letterSpacing: 'normal',
					fontWeight: '700',
				}],
				'mobile/legend/1': ['16px', {
					lineHeight: '20.8px',
					letterSpacing: 'normal',
					fontWeight: '700',
				}],
				'mobile/input/label': ['14px', {
					lineHeight: '19.6px',
					letterSpacing: 'normal',
					fontWeight: '700',
				}],
				'mobile/percentage': ['12px', {
					lineHeight: '15.6px',
					letterSpacing: 'normal',
					fontWeight: '500',
				}],
				'mobile/number/small': ['20px', {
					lineHeight: '26px',
					letterSpacing: 'normal',
					fontWeight: '500',
				}],
				'mobile/number/display': ['32px', {
					lineHeight: '41.6px',
					letterSpacing: 'normal',
					fontWeight: '600',
				}],
				'mobile/stat/2': ['36px', {
					lineHeight: '46.8px',
					letterSpacing: 'normal',
					fontWeight: '600',
				}],
				'mobile/stat/1': ['48px', {
					lineHeight: '62.4px',
					letterSpacing: 'normal',
					fontWeight: '600',
				}],
			}
		},
	},
	plugins: [],
};
