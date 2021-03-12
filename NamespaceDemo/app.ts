/// <reference path="./utility-functions.ts" />

const n = Utility.maxBooksAllowed(20);

console.log(n);

import util = Utility.Fees;

const m = util.calculateLateFee(10);

console.log(m);