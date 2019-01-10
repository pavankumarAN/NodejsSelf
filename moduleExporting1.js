const moduleExporting2 = require('./moduleExports2');
const fs = require('fs');

fs.appendFileSync('family.txt', `Hai Pavan We came to know that your father name is ${moduleExporting2.family.father} and your mother name is ${moduleExporting2.family.mother} and your brother name is ${moduleExporting2.family.brother}`);
