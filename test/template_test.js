import {describe, it} from 'mocha';
import {expect} from 'chai';
import {inspect} from 'unist-util-inspect';
import {Template} from '../src/template.js';

describe('template', function() {
    describe('initialize', async function() {
        let template = new Template("I saw #Person last night and #Pronoun was fantastic!");
        await template.init();
        it('creates a parse tree from a specified function', function() { 
            expect(template.parse_tree).to.not.be.an('undefined');
        });
    });

    describe('genText()', async function() {
        let template = new Template("I saw #Person last night and #Pronoun was fantastic!");
        await template.init();
        it('should return a string', function() {
            let genned_text = template.genText();
            console.log(genned_text);
            expect(genned_text).to.be.a('string');
        });
    });

    describe('parseSymbols()', async function() {
        let template = new Template("I saw #Person last night and #Pronoun was fantastic!");
        await template.init();
        it('should print out all tags', function() {
            console.log(inspect(template.parseSymbols()));
        });
    });
});
