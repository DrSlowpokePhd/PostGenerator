
import { automatedReadability } from "automated-readability";

export function fitness(input) {
    // this is the fitness function
    // it returns a score based on the given text
    //
    // rubric:
    // 50% -> valid parse tree
    // 50% -> readability
    
    let sentences = 0;
    let words = 0;
    let characters = 0;
    let input_words = input.split(' ');
    input_words.forEach((word) => {
        if(word.match(/[.?!]/)) {
            sentences++;
        }
        words++;
        characters += word.length;
    });
    console.log(sentences);
    const out = automatedReadability({sentence:sentences, word:words, character:characters});
    return out;
}
