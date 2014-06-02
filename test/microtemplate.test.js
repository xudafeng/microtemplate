var render = require('../index').render;
var content = render('<#key#>',{key:'value'});
console.log(content);
