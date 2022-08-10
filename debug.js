/**
 * @class       : debug
 * @author      : jamied (jamied@$HOSTNAME)
 * @created     : Sunday Aug 07, 2022 14:26:46 PDT
 * @description : debug
 */

let nlp = require('compromise');

let out = nlp.model().one.lexicon;

for (let x in out) {
    console.log(out[x] + ' : ' + x);
}


