# iterator-chunker

An Readable stream object that breaks down iterables into array chunks and streams the chunks.

Extends require('stream').Readable.

Eg:

```
var Chunker = require('iterator-chunker')

var chunks = []
var iterable = [1,2,3,4,5,6,7,8,9,10]
var chunker = new Chunker(iterable, 3)  //chunk size = 3

chunker.on('data', function(chunk){
  chunks.push(chunk)
})

chunker.on('end', function(){
  console.log(chunks)
})


//logs:
// [[1,2,3],[4,5,6],[7,8,9],[10]]
```

## Constructor
**Chunker(iterable, chunkSize)**
* takes an iterable and an integer chunkSize.  The iterable will be broken into arrays of length chunksize. Of course the last chunk may be smaller than chunkSize. The chunks are streamed to the 'data' handler.



