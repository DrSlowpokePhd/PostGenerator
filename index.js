import {Lexicon} from './src/lexicon.js';
import {Template} from './src/template.js';

const lexicon = new Lexicon();

// array of tags to be used in the detect and classify step of the program
// the order of these tags is something to pay attention to, as it can change the
// way the output is produced

let tags = Array.from(lexicon.pos); 
for(let i = 0; i < tags.length; i++) {
    tags[i] = '#' + tags[i];
}

const args = [];
let text = "";
let times = 1;
let debug = false;
process.argv.forEach((val) => {args.push(val);});

// parse command line arguments
// --help : display a help message and exit the program
// --template <text> : take in a string to use as a template
// --times : amount of times to run the template through PostGenerator

args.forEach((arg) => {
    switch (arg) {
        case "--help":
            console.log("usage: postgen --template <text> --times <number>");
            // process.exit(1);
            break;
        case "--template":
            text = args.at(args.findIndex((val) => {return val === "--template";}) + 1);
            break;
        case "--times":
            times = args.at(args.findIndex((val) => {return val === "--times";}) + 1);
            break;
        case "--debug":
            debug = true;
            break;
        default:
            break; 
    }
});

let outText = [];

for (let i = 0; i < times; i++) {
    let template = new Template(text, debug);
    await template.init();
    let add_out_text = template.genText();
    outText.push(add_out_text);
}

// print output text
outText.forEach((e) => {
    console.log(e);
}); 
