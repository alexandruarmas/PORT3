/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backdropBlur: {
				sm: '4px',
			  },
			animation: {
				'gradient-slow': 'gradient 15s ease infinite',
				'orbit-slow': 'orbit 25s linear infinite',
				'orbit-reverse-slow': 'orbit-reverse 20s linear infinite',
				'float': 'float 20s ease-in-out infinite',
				'pulse': 'pulse 15s ease-in-out infinite',
				'gradient-xy': 'gradient-xy 3s ease infinite',
				'gradient-x': 'gradient-x 3s ease infinite'
			},
			keyframes: {
				gradient: {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
				},
				orbit: {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' },
				},
				'orbit-reverse': {
					'0%': { transform: 'rotate(360deg)' },
					'100%': { transform: 'rotate(0deg)' },
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-20px)' },
				},
				pulse: {
					'0%, 100%': { transform: 'scale(1)', opacity: '0.5' },
					'50%': { transform: 'scale(1.1)', opacity: '0.7' },
				},
				'gradient-xy': {
					'0%, 100%': {
						'background-size': '400% 400%',
						'background-position': 'left center'
					},
					'50%': {
						'background-size': '200% 200%',
						'background-position': 'right center'
					}
				},
				'gradient-x': {
					'0%, 100%': {
						'background-size': '200% 200%',
						'background-position': 'left center'
					},
					'50%': {
						'background-size': '200% 200%',
						'background-position': 'right center'
					}
				}
			},
			backgroundImage: {
				'noise': "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAElBMVEUAAAD8/vz08vT09PT8+vz///+Tb2H+AAAABnRSTlMCAgICAgLp/mxwAAAAPklEQVQ4y2NgQAX8DKiAH58EhoSShBK6BAsDskRgYKAEFglGNolwJDVwFpLhQFwSCA4kpyC5BckL6IFCCgAAvp4DG2UHxYcAAAAASUVORK5CYII=')",
				'radial-gradient': 'radial-gradient(circle, var(--tw-gradient-from) 0%, var(--tw-gradient-via) 45%, transparent 100%)',
			},
			backgroundSize: {
				'gradient-size': '400% 400%',
				'200': '200% 200%',
			},
		},
	},
	plugins: [],
}
