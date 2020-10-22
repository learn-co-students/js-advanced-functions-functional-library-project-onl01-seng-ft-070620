const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callbackFunc) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)

      newCollection.map(col => callbackFunc(col))

      return collection
    },

    map: function(collection, callbackFunc) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)

      let mappedCollection = newCollection.map(col => callbackFunc(col))

      return mappedCollection
    },

    // reduce: function(collection, callbackFunc, accumulator) {
    //   const reducedCollection = collection.reduce((accumulator, value, collection) => accumulator + callbackFunc(collection), 0) 
    
    //   return reducedCollection
    // },

    reduce: function(c = [], callback = () => {}, acc) {
			let collection = c.slice(0)

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

    find: function(collection, predicate) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      
      
      return newCollection.find(predicate)
    },

    filter: function(collection, predicate) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)

      return newCollection.filter(predicate)
    },

    size: function(collection) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)

      return newCollection.length
    },

    first: function(array, number=1) {
      let firstElements = array.slice(0, number)

      if (firstElements.length === 1) {
        return array[0]
      } else {
        return firstElements
      }
    },

    last: function(collection, start=false) {
      return (start) ? collection.slice(collection.length-start, collection.length) : collection[collection.length-1]
    },

    // last: function(array, number) {
    //   const lastElements = array.slice(array.length - number, array.length)

    //   if (number === array.length) {
    //     return array[array.length-1]
    //   } else {
    //     return lastElements
    //   }

    // },

    compact: function(array) {
      const truthyArray = [] 
     
      for (const element of array) {
        if (!!element === true) {
            truthyArray.push(element)
        }
      }
      return truthyArray
    },

    sortBy: function(array, callbackFunc) {
      const newArray = [...array]
      const sortedArray = newArray.sort(function(a, b){return callbackFunc(a) - callbackFunc(b)})

      return sortedArray
    },

    unpack: function(receiver, arr) {
      for (let val of arr)
        receiver.push(val)
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

    // uniq: function(array, sorted=false, callbackFunc) {
    //   if (sorted){
    //     return [...new Set(array)]
    //   } else if (callbackFunc) {
    //     const callbackArray = array.map(element => callbackFunc(element))
    //     const uniqArray = [...new Set(callbackArray)]
    //     const sortedArray = uniqArray.sort()
    //     return sortedArray
    //   } else { 
    //     const uniqArray = [...new Set(array)]
    //     const sortedArray = uniqArray.sort()
    //     return sortedArray
    //   }
    // },

    uniqSorted: function(collection, iteratee) {
      const sorted = [collection[0]]
      for (let idx = 1; idx < collection.length; idx++) {
        if (sorted[idx-1] !== collection[idx])
          sorted.push(collection[idx])
      }
      return sorted
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

    keys: function(object) {
      let keys = []
      for (let key in object) {
        keys.push(key)
      }
      return keys
    },

    values: function(object) {
      let values = []
      for (let key in object) {
        values.push(object[key])
      }
      return values
    },
     
    functions: function(object) {
      const funcNames = []

      for (let key in object) {
        if (typeof object[key] === "function"){
          funcNames.push(key)
        }
      }
      return funcNames.sort()
    },


  }
})()

fi.libraryMethod()
