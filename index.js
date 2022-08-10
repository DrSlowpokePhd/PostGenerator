
// written by Jamie Doherty
//


// Program flow
// 1. require libraries (compromise)
// 2. load the compromise lexicon into an array and split into parts of speech
// 3. parse command line arguments
// 4. filter and replace parts of speech
// 5. output new posts
// more detail available on personal clickup


// require compromise
import nlp from 'compromise';
// require lexicon object
import Lexicon from './src/lexicon.js';

// array of tags to be used in the detect and classify step of the program
// the order of these tags is something to pay attention to, as it can change the
// way the output is produced
const tags = ["#Pronoun", "#Adverb", "#Person", "#Noun", "#Verb",];

// initialize lexicon object
const lexicon = new Lexicon();

// ingest command line arguments
const args = [];
let text = "";
let times = 1;
process.argv.forEach((val) => {args.push(val);});
console.log(args.toString());
// parse command line arguments
// --help : display a help message and exit the program
// --template <text> : take in a string to use as a template

args.forEach((arg) => {
    switch (arg) {
        case "--help":
            console.log("usage: postgen --template <text>");
            // process.exit(1);
            break;
        case "--template":
            text = args.at(args.findIndex((val) => {return val === "--template";}) + 1);
            break;
        case "--times":
            times = args.at(args.findIndex((val) => {return val === "--times";}) + 1);
            break;
        default:
            // process.exit(1);
            // console.log("usage: postgen --template <text>");
            break;
            
    }
});

// let compromise parse text passed in with --template argument
// const doc = nlp(text);

// detect and classify parts of speech to modify
// uses the .has() method to detect part of speech
// and a separate function to replace parts of speech

let outText = [];
// O(n^2) runtime

for (let i = 0; i < times; i++) {
    // create document based on template text
    let docCopy = nlp(text);
    // loop thru all tags
    tags.forEach((x) => { // O(n) ?
    // object containing filtered document
    let filteredDoc;
    // create array of matches
    // if the match function contains successful matches
    if (docCopy.match(x)["ptrs"].length > 0) {
        filteredDoc = docCopy.match(x).map(e => {
            return e.text();
        });     

    // console.log(filteredDoc.toString());
    filteredDoc.forEach( y => { // O(n) len of filteredDoc
        // find and replace an instance of y in doc
        // console.log('key: ' + x.slice(1));
        
        let newWordArray = lexicon.lexicon.get(x.slice(1));
        let newWord = newWordArray[Math.floor(Math.random() * newWordArray.length)];
        docCopy.match(y).replaceWith(newWord);
    });
        outText.push(docCopy.text());
    }
});

}

// print output text
outText.forEach(e => {
    console.log(e);
});


