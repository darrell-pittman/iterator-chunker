"use strict"
debugger;
var expect    = require("chai").expect;
var Chunker = require('../index')
var util = require('./util')

describe("Chunker Test", function(){
  
  describe("chunk with exact division", function(){
    it("should return equi-size chunks", function(done){
      let chunks = []
      let chunker = new Chunker([1,2,3,4,5,6,7,8,9,10], 2)
      
      chunker.on('data', function(chunk){
        chunks.push(chunk)
      })
      
      chunker.on('end', function(chunk){
        util.check(done, () => expect(5).to.equal(chunks.length))
      })  
      
    })    
  })
 
  describe("chunk with exact division", function(){
    it("should return correct number of items", function(done){
      let chunks = []
      let chunker = new Chunker([1,2,3,4,5,6,7,8,9,10], 2)
      
      chunker.on('data', function(chunk){
        chunks.push(chunk)
      })
      
      chunker.on('end', function(){
        let count = 0
        chunks.forEach(function(chunk){
          count += chunk.length
        })
        util.check(done, () => expect(10).to.equal(count))
      })        
      
    })    
  })
   
  describe("chunk with exact division", function(){
    it("should return all items", function(done){
      let values = []
      let iterable = [1,2,3,4,5,6,7,8,9,10]
      let chunker = new Chunker(iterable, 2)
      
      chunker.on('data', function(chunk){
        chunk.forEach(function(value){
          values.push(value)
        })
      })
      
      chunker.on('end', function(){
        util.check(done, () => expect(iterable).to.eql(values))
      })

      
    })    
  })
  
  describe("chunk with uneven division", function(){
    it("should return equi-size chunks", function(done){
      let chunks = []
      let chunker = new Chunker([1,2,3,4,5,6,7,8,9,10,11], 4)
      
      chunker.on('data', function(chunk){
        chunks.push(chunk)
      })
      
      chunker.on('end', function(chunk){
        util.check(done, () => expect(3).to.equal(chunks.length))
      })  
      
    })    
  })
  
  describe("chunk with uneven division", function(){
    it("should return differnet size chunks", function(done){
      let chunks = []
      let chunker = new Chunker([1,2,3,4,5,6,7,8,9,10,11], 4)
      
      chunker.on('data', function(chunk){
        chunks.push(chunk)
      })
      
      chunker.on('end', function(chunk){
        util.check(done, () => expect([4,4,3]).to
                   .eql([chunks[0].length, chunks[1].length, chunks[2].length]))
      })    
      
    })    
  })
  
  describe("chunk with uneven division", function(){
    it("should return correct number of items", function(done){
      let chunks = []
      let chunker = new Chunker([1,2,3,4,5,6,7,8,9,10,11], 4)
      
      chunker.on('data', function(chunk){
        chunks.push(chunk)
      })
      
      chunker.on('end', function(){
        let count = 0
        chunks.forEach(function(chunk){
          count += chunk.length
        })
        util.check(done, () => expect(11).to.equal(count))
      })
      
    })    
  })
  
  describe("chunk with uneven division", function(){
    it("should return all items", function(done){
      let values = []
      let iterable = [1,2,3,4,5,6,7,8,9,10,11]
      let chunker = new Chunker(iterable, 4)
      
      chunker.on('data', function(chunk){
        chunk.forEach(function(value){
          values.push(value)
        })
      })
      
      chunker.on('end', function(){
        util.check(done, () => expect(iterable).to.eql(values))
      })      
      
    })    
  })

  
})
