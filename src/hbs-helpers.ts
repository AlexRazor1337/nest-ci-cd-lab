import * as hbs from 'hbs';

export function registerHelpers() {
  hbs.registerHelper('eq', function (a, b) {
    return a === b;
  });
  hbs.registerHelper('json', function (content) {
    return JSON.stringify(content);
});
  // You can add more custom helpers here if needed
}


