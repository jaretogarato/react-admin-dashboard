import { createContext, useState, useMemo } from 'react'
import { createTheme } from '@mui/material/styles'
// import { colors } from '@mui/material'

// color design tokens export
export const tokens = (mode) => ({
	...(mode === 'dark'
		? {
				gray: {
					100: '#e0e0e0',
					200: '#c2c2c2',
					300: '#a3a3a3',
					400: '#858585',
					500: '#666666',
					600: '#525252',
					700: '#3d3d3d',
					800: '#292929',
					900: '#141414',
				},
				primary: {
					100: '#cdd2d4',
					200: '#9ba6a9',
					300: '#6a797e',
					400: '#384d53',
					500: '#062028',
					600: '#051a20',
					700: '#041318',
					800: '#020d10',
					900: '#010608',
				},
				greenAccent: {
					100: '#e2fafe',
					200: '#c5f6fd',
					300: '#a8f1fd',
					400: '#8bedfc',
					500: '#6ee8fb',
					600: '#58bac9',
					700: '#428b97',
					800: '#2c5d64',
					900: '#162e32',
				},
				redAccent: {
					100: '#f3d9d6',
					200: '#e7b3ad',
					300: '#db8e85',
					400: '#cf685c',
					500: '#c34233',
					600: '#9c3529',
					700: '#75281f',
					800: '#4e1a14',
					900: '#270d0a',
				},
				blueAccent: {
					100: '#cce3ea',
					200: '#99c7d5',
					300: '#66abc0',
					400: '#338fab',
					500: '#007396',
					600: '#005c78',
					700: '#00455a',
					800: '#002e3c',
					900: '#00171e',
				},
		  }
		: {
				gray: {
					100: '#141414',
					200: '#292929',
					300: '#3d3d3d',
					400: '#525252',
					500: '#666666',
					600: '#858585',
					700: '#a3a3a3',
					800: '#c2c2c2',
					900: '#e0e0e0',
				},
				primary: {
					100: '#010608',
					200: '#020d10',
					300: '#041318',
					400: '#051a20',
					500: '#062028',
					600: '#384d53',
					700: '#6a797e',
					800: '#9ba6a9',
					900: '#cdd2d4',
				},
				greenAccent: {
					100: '#162e32',
					200: '#2c5d64',
					300: '#428b97',
					400: '#58bac9',
					500: '#6ee8fb',
					600: '#8bedfc',
					700: '#a8f1fd',
					800: '#c5f6fd',
					900: '#e2fafe',
				},
				redAccent: {
					100: '#270d0a',
					200: '#4e1a14',
					300: '#75281f',
					400: '#9c3529',
					500: '#c34233',
					600: '#cf685c',
					700: '#db8e85',
					800: '#e7b3ad',
					900: '#f3d9d6',
				},
				blueAccent: {
					100: '#00171e',
					200: '#002e3c',
					300: '#00455a',
					400: '#005c78',
					500: '#007396',
					600: '#338fab',
					700: '#66abc0',
					800: '#99c7d5',
					900: '#cce3ea',
				},
		  }),
})

// mui theme settings
export const themeSettings = (mode) => {
	const colors = tokens(mode)
	return {
		palette: {
			mode: mode,
			...(mode === 'dark'
				? {
						// palette values for dark mode
						primary: {
							main: colors.primary[500],
						},
						secondary: {
							main: colors.greenAccent[500],
						},
						neutral: {
							dark: colors.gray[700],
							main: colors.gray[500],
							light: colors.gray[100],
						},
						background: {
							default: colors.primary[500],
						},
				  }
				: {
						// palette values for light mode
						primary: {
							main: colors.primary[100],
						},
						secondary: {
							main: colors.greenAccent[500],
						},
						neutral: {
							dark: colors.gray[700],
							main: colors.gray[500],
							light: colors.gray[100],
						},
						background: {
							default: '#fcfcfc',
						},
				  }),
		},
		typography: {
			fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
			fontSize: 12,
			h1: {
				fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
				fontSize: 40,
			},
			h2: {
				fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
				fontSize: 32,
			},
			h3: {
				fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
				fontSize: 24,
			},
			h4: {
				fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
				fontSize: 20,
			},
			h5: {
				fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
				fontSize: 16,
			},
			h6: {
				fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
				fontSize: 14,
			},
		},
	}
}

// context for color mode
export const ColorModeContext = createContext({
	toggleColorMode: () => {},
})

export const useMode = () => {
	const [mode, setMode] = useState('dark')

	const colorMode = useMemo(
		() => ({
			toggleColorMode: () =>
				setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
		}),
		[]
	)

	const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
	return [theme, colorMode]
}
