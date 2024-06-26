'use strict';

// '--breakpoint-not-small': 'screen and (min-width: 30em)',
// '--breakpoint-medium': 'screen and (min-width: 30em) and (max-width: 60em)',
// '--breakpoint-large': 'screen and (min-width: 60em)',

module.exports = {
  plugins: [
    require('postcss-import')(),
    require('postcss-simple-vars')(),
    require('autoprefixer')(),
  ],
};
