# post-generator

post-generator is a simple Natural Language Generation package designed to generate text based off of predefined templates. 

Templates are pieces of text that have tags embedded in them specifying a part of speech. All post-generator does is replace these tags with a matching word in the lexicon.

## Usage

Currently, there are no published packages for post-generator on npm. To use post-generator, ensure you have node installed, clone and navigate to the repo, and type in the following command.

```
node index.js --template <text>

```

You can also use the ```--times``` flag to specify the number of times to run the program.

## Templates

Templates are just strings with tags in them that represent parts of speech, you can think of them as glorified madlibs.

post-generator uses compromise for natural language processing and for its tags. The list of available tags that can be used is available here <https://observablehq.com/@spencermountain/compromise-tags?collection=@spencermountain/nlp-compromise>.


