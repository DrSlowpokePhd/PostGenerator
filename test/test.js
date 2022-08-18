import {describe, it} from 'mocha';
import {Lexicon} from '../src/lexicon.js';
import {expect} from 'chai';
import {fitness} from '../src/fitness.js';
describe('lexicon', function() {
    let test = new Lexicon();
    describe('initialize', function() {

        it('Creates a map of the lexicon separated into parts of speech.', function() {     
            expect(test.lexicon.size > 0).to.be.true;
            expect(test.lexicon.get('Noun').length > 0).to.be.true;
        });
    
    });
    
    describe('get()', function() {
        it('Returns an array of words from the Lexicon based on the input tag.', function() {
            let input_tag = 'Noun';
            expect(test.get(input_tag)[0] === "gal").to.be.true;
        });
    });

    describe('randomWord()', function() {
        it('Returns a random word from the array specified by the input tag', function() {
            let input_tag = 'Noun';
            let input_tag_array = test.get(input_tag);
            let random_word = test.randomWord(input_tag);
            console.log(random_word);
            expect(random_word).to.be.a('string');
            expect(input_tag_array.includes(random_word)).to.be.true;
        }); 
    });
});

describe('fitness', function() {
    it('Computes a score based on the readablity of the input text', function () {
        const fit = fitness("I saw Lady Gaga last night and she was fantastic!");
        // console.log('fitness score: ' + fit);
        expect(fit > 0).to.be.true;
    });
});


