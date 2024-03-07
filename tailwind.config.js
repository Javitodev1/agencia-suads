/* eslint-disable import/no-extraneous-dependencies, global-require */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}',
    './node_modules/astro-boilerplate-components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        "blue-white": "#E2ECEF",
        "oxford-blue": "#002147",
        "crayola-blue": "#2874E5",
        "vivid-sky-blue": "#69E2EB",
        // "vivid-sky-blue": "#5BD5FC",
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
};
