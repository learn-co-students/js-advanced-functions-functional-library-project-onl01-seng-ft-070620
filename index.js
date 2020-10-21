// pry = require('pryjs')

function helperCollection(collection) {
  if (!(collection instanceof Array)) {
        collection = Object.values(collection)
  }
}

const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, afunction) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)

      for (let i = 0; i < newCollection.length; i++) {
        afunction(newCollection[i])
      }
      return collection
    },

    map: function(collection, afunction) {
      let newArray = []
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)

      for (let i = 0; i < newCollection.length; i++) {
        newArray.push(afunction(newCollection[i]))
      }
      return newArray

    },

    reduce: function(collection, callback = () => {}, acc) {

			if (!acc) {
				acc = collection[0]
				collection = collection.slice(1)
			}

			let len = collection.length;

			for (let i = 0; i < len; i++) {
				acc = callback(acc, collection[i], collection)
			}
			return acc;
    },

    find: function(collection, afunction) {

      helperCollection(collection)
      for (let i = 0; i < collection.length; i++)
        if (afunction(collection[i])) return collection[i]
      return undefined
    },

    filter: function(collection, afunction) {
      let newArray = []
      helperCollection(collection)
      for (let i = 0; i < collection.length; i++)
        if (afunction(collection[i])) newArray.push(collection[i])
      return newArray
    },

    size: function(collection) {
      if (!(collection instanceof Array)) {
        collection = Object.values(collection) 
      }
      return collection.length
    },

    first: function(collection, n) {
      return (n) ? collection.slice(0, n) : collection[0]
    },
  
    last: function(collection, n) {
      return (n) ? collection.slice(collection.length-n, collection.length) : collection[collection.length-1]
    },

    compact: function(collection) {
      const badBad = new Set([false, null, 0, "", undefined, NaN])
      return collection.filter(el => !badBad.has(el))
    },

    sortBy: function(collection, afunction) {
      const newArr = [...collection]
      return newArr.sort(function(a, b) {
        return afunction(a) - afunction(b)
      })
    },

    flatten: function(collection, shallow, newArr=[]) {
      if (!Array.isArray(collection)) return newArr.push(collection)
      if (shallow) {
        for (let val of collection)
          Array.isArray(val) ? this.unpack(newArr, val) : newArr.push(val)
      } else {
        for (let val of collection) {
          this.flatten(val, false, newArr)
        }
      }
      return newArr
    },

    unpack: function(receiver, arr) {
      for (let val of arr)
        receiver.push(val)
    },

    uniq: function(collection, sorted=false, iteratee=false) {
      if (sorted) {
        return fi.uniqSorted(collection, iteratee)
      } else if (!iteratee) {
        return Array.from(new Set(collection))
      } else {
        const modifiedVals = new Set()
        const uniqVals = new Set()
        for (let val of collection) {
          const moddedVal = iteratee(val)
          if (!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal)
            uniqVals.add(val)
          }
        }
        return Array.from(uniqVals)
      }
    },

    
    keys: function(obj) {
      let keys = []
      for (let key in obj){
        keys.push(key)
      }
      return keys
    },

    values: function(obj) {
      let values = []
      for (let key in obj){
        values.push(obj[key])
      }
      return values
    },
    
    


    functions: function(obj) {
      let functionNames = []

      for (let key in obj) {
        if (typeof obj[key] === "function"){
          functionNames.push(key)
        }
      }
      return functionNames.sort()
    },


  }
})()

fi.libraryMethod()

const chai = require('chai')
const spies = require('chai-spies-next')
chai.use(spies)
const expect = chai.expect
const unmodifiedTestArr = [1, 2, 3, 4]
const unmodifiedTestObj = {one: 1, two: 2, three: 3, four: 4}

const intArr = [-1, 4, 0, 1, 3, 2, 3, 4, 5, 6]
const strArr = ["maru", "choux", "doge", "coco", "waychillgoldeneye", "trance"]
const objB = {b: 'b'}
const objArr = [{a: 'a'}, objB]
fi.find(intArr, findCBGenerator(4))
