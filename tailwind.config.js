/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      colorInfo: '#3abff8',
      colorPrimary: '#661ae6',
      colorSuccess: '#36d399',
      colorError: '#f87272',
      colorTextBase: '#000000',
      colorWarning: '#fbbd23',
      colorBgBase: '#2a303c',
    },
  },
  plugins: [daisyui],
  prefix: 'tw-',
  corePlugins: {
    preflight: false,
  },
};
