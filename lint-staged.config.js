module.exports = {
    'src/**/*.{ts,tsx}': () => 'tsc --noEmit',
    'src/**/*.{js,ts,tsx}': 'eslint --fix',
    'src/**/*.{js,ts,tsx,css,scss}': 'stylelint --fix'
};
