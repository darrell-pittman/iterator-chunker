# iterator-chunker

An object that breaks down iterables into array chunks and emits the chunks.

Extends EventEmitter.

Eg:

```
var Chunker = require('iterator-chunker')

var chunks = []

var chunker = new Chunker(3)  //chunk size = 3

chunker.on('chunk', function(chunk){
  chunks.push(chunk)
})

chunker.on('done', function(){
  console.log(chunks)
})

chunker.chunk([1,2,3,4,5,6,7,8,9,10])

//logs:
// [[1,2,3],[4,5,6],[7,8,9],[10]]
```

## Constructor
**Chunker(chunkSize)**
* takes an integer chunkSize.  The iterable will be broken into arrays of length chunksize. Of course the last chunk may be smaller than chunkSize

## Methods
**chunk(interable)**
* takes an interable, breaks it into chunks of chunkSize and emits a 'chunk' event for each chunk and a 'done' event when finished.

## Events
**chunk**
* passes chunks of chunkSize to registered handlers

**done**
* calls registered handlers when finished chunking iterable