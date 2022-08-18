import {Lexicon} from './lexicon.js';
import {retext} from 'retext';
import {visit, SKIP} from 'unist-util-visit';
import retextStringify from 'retext-stringify';
import {inspect} from 'unist-util-inspect';
import {matches, selectAll} from 'unist-util-select';
export class Template {
    debug = false;
    constructor(templateText, debug) {
        this.lexicon = new Lexicon();
        this.templateText = templateText;
        this.tags = Array.from(this.lexicon.pos); // ["#Pronoun", "#Adverb", "#Person", "#Noun", "#Verb"];
        this.debug = debug;
        for(let i = 0; i < this.tags.length; i++) {
            this.tags[i] = '#' + this.tags[i];
        }
    }
    
    async init() {
        // creates parse tree
        this.parse_tree = await retext().parse(this.templateText);
        if (this.debug) {
            console.log(inspect(this.parse_tree));
        }
    } 
    
    parseSymbols() {
        let tags_in_text = selectAll('SymbolNode + WordNode', this.parse_tree);
        return tags_in_text;
    }

    genText() {
        let outText;
        visit(this.parse_tree, 'TextNode', (node) => {
            if(this.lexicon.pos.has(node.value)) {
                let new_word = this.lexicon.randomWord(node.value);
                node.value = new_word;
            }
        });
        visit(this.parse_tree, 'SymbolNode', (node, index, parent) => {
            if (node.value === '#') {
                parent.children.splice(index, 1);
                return [SKIP, index];
            }
        });
        outText = retext().use(retextStringify).stringify(this.parse_tree);
        return outText;
    }
}
