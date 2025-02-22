/** @type {import('tailwindcss').Config} */
module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "primary": {
          "light": "#3E91E6",
          "DEFAULT": "#2477CC",
          "dark": "#0B5EB3"
        }
      },
    },
    "screens": {
      "legacy-phone": "350px",
      "phone": "400px",
      "phablet": "600px",
      "small-tablet": "700px",
      "tablet": "800px",
      "large-tablet": "900px",
      "laptop": "1000px",
     " desktop": "1200px",
      "desktop-wide": "1400px",
      "wide": "1600px",
      "superwide": "1800px",
      "max": "1920px"
    },
    "fontSize": {
      "xxs": "0.625em",
      "xs": "0.75em",
      "sm": "0.875em",
      "base": "1em",
      "lg": "1.125em",
      "xl": "1.25em",
      "2xl": "1.5em",
      "3xl": "1.625em",
      "4xl": "1.75em",
      "5xl": "1.875em",
      "6xl": "2em"
    }
  },
  "content": {
    "files": [
      // all directories and extensions will correspond to your Nuxt config
      "{srcDir}/components/**/*.{vue,js,jsx,mjs,ts,tsx}",
      "{srcDir}/layouts/**/*.{vue,js,jsx,mjs,ts,tsx}",
      "{srcDir}/pages/**/*.{vue,js,jsx,mjs,ts,tsx}",
      "{srcDir}/plugins/**/*.{js,ts,mjs}",
      "{srcDir}/composables/**/*.{js,ts,mjs}",
      "{srcDir}/utils/**/*.{js,ts,mjs}",
      "{srcDir}/{A,a}pp.{vue,js,jsx,mjs,ts,tsx}",
      "{srcDir}/{E,e}rror.{vue,js,jsx,mjs,ts,tsx}",
      "{srcDir}/app.config.{js,ts,mjs}",
      "{srcDir}/app/spa-loading-template.html"
    ]
  },
  "plugins": []
}

