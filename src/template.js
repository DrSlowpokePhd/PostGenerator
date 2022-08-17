import {Lexicon} from './lexicon.js';
import {retext} from 'retext';
import {visit} from 'unist-util-visit';
import retextStringify from 'retext-stringify';
export class Template {
    constructor(templateText) {
        this.lexicon = new Lexicon();
        this.templateText = templateText;
        this.tags = Array.from(this.lexicon.pos); // ["#Pronoun", "#Adverb", "#Person", "#Noun", "#Verb"];
        for(let i = 0; i < this.tags.length; i++) {
            this.tags[i] = '#' + this.tags[i];
        }
    }
    
    async init() {
        // creates parse tree
        this.parse_tree = await retext().parse(this.templateText);
    }
    
    genText() {
        let outText;
        visit(this.parse_tree, 'TextNode', (node) => {
            if(this.lexicon.pos.has(node.value)) {
                let new_word = this.lexicon.randomWord(node.value);
                node.value = new_word;
            }
        });
        outText = retext().use(retextStringify).stringify(this.parse_tree);
        return outText;
    }
}
