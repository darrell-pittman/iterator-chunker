"use strict"
var Readable = require('stream').Readable;
var util = require('util');

util.inherits(Chunker, Readable)

var privateProps = new WeakMap()

function Chunker (iterable, chunkSize) {
  
  Readable.call(this, {objectMode : true})

  privateProps.set(this, {
    chunkSize : chunkSize,
    iter : iterable[Symbol.iterator]()
  }) 
    
}


Chunker.prototype._read = function() {
  var props = privateProps.get(this)
  var iter = props.iter  
  var item;
  var chunk = []
     
  do {
    item = iter.next()
    if(!item.done){
      chunk.push(item.value)          
    }  
  } while(!item.done && (chunk.length < props.chunkSize))  

  if(chunk.length > 0) {
    this.push(chunk)
  } 

  if(item.done) {
    this.push(null)
  } 
  
}

module.exports = Chunker
