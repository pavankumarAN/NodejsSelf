const _ = require('lodash');

console.log(_.isString("Pavan"));
console.log(_.isString(1));

var filArr = _.uniq([1,1,"Pavan","Pavan","Jeevan"]);
console.log(filArr);