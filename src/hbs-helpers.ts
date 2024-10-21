import * as hbs from 'hbs';

export function registerHelpers() {
  hbs.registerHelper('eq', function (a, b) {
    return a === b;
  });

  // You can add more custom helpers here if needed
}
