# post-generator

post-generator is a simple Natural Language Generation tool designed to generate text based off of user-defined templates. 

Templates are pieces of text that have tags embedded in them specifying a part of speech. All post-generator does is replace these tags with a matching word in the lexicon.

## Usage

Currently, there are no published packages for post-generator on npm. To use post-generator, ensure you have nodejs and npm installed, clone the repository, navigate to the repository in your terminal, and type in the following command.

```
npm install
```

To use post generator, type this command into your terminal while in the repository
```
$ node index.js --template "Hello, #Person\!"
Hello, carson!
```

You can also use the ```--times``` flag to specify the number of times to run the template through the program.
```
$ node index.js --template "#Noun #PastTense" --times 10
summer careened
flo did over
rex married off
christian chipped in
tb bewildered
col dragged on
gene backfired
newtons bogged up
lane scheduled
bl tunnelled
```

## Templates

Templates are just strings with tags in them that represent parts of speech. In essence, you can think of them as glorified madlibs. The only applicable syntax being used here is the # sign placed before a tag.

```The #Adjective #Color fox #PastTense over the #Adjective dog```

post-generator uses compromise for natural language processing and for its tags. The list of available tags that can be used is available here <https://observablehq.com/@spencermountain/compromise-tags?collection=@spencermountain/nlp-compromise>.


