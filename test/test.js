let assert = require('assert');
let Lexicon = require('../src/lexicon');
const nlp = require('compromise')
let expect = require('chai').expect;
describe('lexicon', function() {
    describe('initialize', function() {
        it('creates a map of the lexicon separated into parts of speech', function() {
            let test = new Lexicon(true);
            expect(test.lexicon.size > 0).to.be.true;
            expect(test.lexicon.get('Noun').length > 0).to.be.true;
        });
    
    });
});
