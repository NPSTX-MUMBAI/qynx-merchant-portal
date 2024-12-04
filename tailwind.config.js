/** @type {import('tailwindcss').Config} */



module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      'npst_sidemenu_color': 'var(--npst_sidemenu_color)',
      'npst_header_color': 'var(--npst_header_color)',
      'npst_background_color': 'var(--npst_background_color)',
      'npst_border_color': 'var(--npst_border_color)',
      'npst_button_color': 'var(--npst_button_color)',
      'npst_text_color': 'var(--npst_text_color)',
      'npst_error_color': 'var(--npst_error_color)',
      'npst-header-icon-white': '#ffffff',
      'npst-secondry-color': '#5E6EED',
      'npst-primary-color': 'var(--npst_header_color)',
      'npst-support-color-green': '#00D284',
      'npst-support-color-red': '#FF0854',
      'npst-support-color-sky-blue': '#0DCAF0',
      'npst_powerdby_color_dark_blue': '#001F3F',
      'npst_yellow': 'var(--npst_yellow)',
    },

    extend: {
      fontFamily: {
        geistSans: ['GeistSans', 'sans-serif'],
        geistMono: ['GeistMono', 'monospace'],  // Add GeistMono font similarly
        ubuntu: ['Ubuntu', 'Ubuntu-Regular'],  // Add GeistMono font similarly
        merriweather: ['Merriweather', 'Merriweather-Regular'],  // Add GeistMono font similarly
        inter: ['Inter', 'Inter_28pt-Regular'],
      },


    },
  },



}

