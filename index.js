const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for (const element in collection) {
        callback(collection[`${element}`], element, collection)
      }
      return collection
    },

    map: function(collection, callback) {
      let newArray = []
      for (const element in collection) {
        newArray.push(callback(collection[`${element}`], element, collection))
      }
      return newArray 
    },

    reduce: function(collection, callback, initialValue) {
      let value = !!initialValue ? initialValue : collection[0]
      let i = !!initialValue ? 0 : 1
      for (; i < collection.length; i++) {
        value = callback(value, collection[i], collection)
      }
      return value
    },

    find: function(collection, predicate) {
      for (const element in collection) {
        if (!!predicate(collection[`${element}`])) {
          return collection[`${element}`]
        }
      }
    },

    filter: function(collection, predicate) {
      let filtered = []
      for (const element in collection) {
        if (!!predicate(collection[`${element}`])) {
          filtered.push(collection[`${element}`])
        }
      }
      return filtered
    },

    size: function(collection) {
      let i = 0
      for (const element in collection) {i++}
      return i
    },

    first: function(collection, n = 0) {
      if (!n) {
        return collection[0]
      } else {
        let firstN = []
        for (let i = 0; i < n; i++) {firstN.push(collection[i])}
        return firstN
      }
    },

    last: function(collection, n = 0) {
      if (!n) {
        return collection[collection.length-1]
      } else {
        let lastN = []
        for (let i = n; i > 0; i--) {
          lastN.push(collection[collection.length-i])
        }
        return lastN
      }
    },

    compact: function(collection) {
      let truthy = []
      for (let i = 0; i < collection.length; i++) {
        if (!!collection[i]) {
          truthy.push(collection[i])
        }
      }
      return truthy
    },

    sortBy: function(collection, callback) {
      return [...collection].sort((a,b) => {
        return callback(a)-callback(b)
      })
    },

    flatten: function(collection, shallow) {
      if (!shallow) {
        return collection.flat(Infinity)
      } else {
        return collection.flat()
      }
    },

    uniq: function(array, sorted = false, callback) {
      let uniqArray = []
      if (!!callback) {
        for (const element of array) {
          if (!uniqArray.find(i => callback(i) === callback(element))) {
            uniqArray.push(element)
          }
        }
      } else {
        for (const element of array) {
          if (!uniqArray.find(i => i === element)) {
            uniqArray.push(element)
          }
        }
      }
      return uniqArray
    },

    keys: function(obj) {
      let objKeys = []
      for (const element in obj) {
        objKeys.push(`${element}`)
      }
      return objKeys
    },

    values: function(obj) {
      let objValues = []
      for (const element in obj) {
        objValues.push(obj[`${element}`])
      }
      return objValues
    },

    functions: function(obj) {
      return this.filter(obj, function(value) {
        return typeof value === 'function'
      })
    }

  }
})()

fi.libraryMethod()
