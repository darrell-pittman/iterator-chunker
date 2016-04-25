"use strict"
var EventEmitter = require('events').EventEmitter;
var util = require('util');

var privateProps = new WeakMap()

function Chunker (chunkSize) {
  
  EventEmitter.call(this)

  privateProps.set(this, {
    chunkSize : chunkSize
  }) 
    
}

util.inherits(Chunker, EventEmitter)


Chunker.prototype.chunk = function (iterable) {
  let chunkSize = privateProps.get(this).chunkSize
  let iter = iterable[Symbol.iterator]()
  let item = iter.next()
  let chunk = []
  while (!item.done) {
    chunk.push(item.value)    
    
    if(chunk.length == chunkSize) {
      this.emit('chunk', chunk)
      chunk = []
    }
    
    item = iter.next() 
  }
  
  if(chunk.length > 0) {
    this.emit('chunk', chunk)
  }
  this.emit('done')
}



module.exports = Chunker
