//there are 2 optios either make the type is to 'module' or change file extension js to mjs

//DEFAULT IMPORTNG
import xyz from './module2.mjs'  //here we have written xyz means we can write anything (not necessary to write "c" which is export name in module2) here not necessary to write the name of the default property (whatever we are exporting from module 2) bcoz in anyway the default thing will get exported here weather import and export name are same or not
console.log(xyz);

//IMPORTING NON DEFAULT PROPERTIES(BY NAME)
import {a, b, d} from './module2.mjs' //here we have to write the same name from the module2 from where we are exporting the properties(etc) so here the export and import name should be the same as this is not by default property.
console.log(a);
console.log(b);
console.log(d);