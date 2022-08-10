import nlp from 'compromise'

// class to separate the entire compromise lexicon into separate parts of speech
// this is to help categorize the lexicon for the purposes of this app

export default class Lexicon {
    debug = false;
    constructor(debug) {
        // array of entire comprimise lexicon
        this.vocabulary = nlp.model().one.lexicon;
        this.pos = new Set(Object.values(nlp.model().one.lexicon).flat());
        this.debug = debug;       
        // parts of speech listed in Set(Object.keys(nlp.model().one.lexicon).flat())
        // not all have been implemented yet
        this.lexicon = new Map();
        // initialize the mapped lexicon
        for(const pos of this.pos) {
            this.lexicon.set(pos, []);
        }

        // todo: handle subarrays
        for(const x in this.vocabulary) {
            let arr;  
            if(Array.isArray(this.vocabulary[x])) {
                arr = this.lexicon.get(this.vocabulary[x][0]);
                arr.push(x);
                arr = this.lexicon.get(this.vocabulary[x][1]);
                arr.push(x);                
            } else {
                arr = this.lexicon.get(this.vocabulary[x]);
                arr.push(x);
            }
        }

        // debug behavior, print lengths of all map arrays

        if(this.debug) {
            console.log('Lexicon Map() size: ' + this.lexicon.size);
            console.log('');
            Array.from(this.pos).forEach(element => {
                console.log(element + ' array size: ' + this.lexicon.get(element).length);
            });
        }
    }
};


