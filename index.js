const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          callback(collection[i])
        }
      } else {
        for (const key in collection) {
          callback(collection[key])
        }
      }
      return collection
    },

    map: function(collection, callback) {
      let arr = []

      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          arr.push(callback(collection[i]))
        }
      } else {
        for (const key in collection) {
          arr.push(callback(collection[key]))
        }
      }
      return arr
    },

    reduce: function(collection, callback, acc) {
      if (!acc) {
        acc = collection[0]
        for (let i = 1; i < collection.length; i++) {
          acc = callback(acc, collection[i], collection)
        }
      } else {
        for (let i = 0; i < collection.length; i++) {
          acc = callback(acc, collection[i], collection)
        }
      }
      return acc
    },

    find: function(collection, test) {
      for (let i = 0; i < collection.length; i++) {
        if (test(collection[i])) {
          return collection[i]
        }
      }
      return undefined
    },

    filter: function(collection, test) {
      let arr = []
      for (let i = 0; i < collection.length; i++) {
        if (test(collection[i])) {
          arr.push((collection[i]))
        }
      }
      return arr
    },

    size: function(collection) {
      if (Array.isArray(collection)) {
        return collection.length
      } else {
        return Object.keys(collection).length
      }
    },

    first: function(collection, n) {
      return (n !== undefined) ? collection.slice(0, n) : collection[0]
    },

    last: function(collection, n) {
      if (n !== undefined) {
        return collection.slice(collection.length - n)
      } else {
        return collection[collection.length - 1]
      }
    },

    compact: function(arr) {
      let truths = []
      for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
          truths.push(arr[i])
        }
      }
      return truths
    },

    sortBy: function(arr, callback) {
      let copy = [...arr]
      return copy.sort( (a, b) => callback(a) - callback(b) )
    },

    // unsure how to do this
    flatten: function(arr, level) {
      if (level !== undefined) {
        return arr.flat()
      } else {
        return arr.flat(3)
      }
    },

    // idk
    // uniq: function(array, boolean, callback) {
    //
    // },

    keys: function(object) {
      let arr = []
      for (const key in object) {
        arr.push(key)
      }
      return arr
    },

    values: function(object) {
      let arr = []
      for (const [key, val] of Object.entries(object)) {
        arr.push(val)
      }
      return arr
    },

    functions: function(object) {
      let valid = []
      for (const [k, v] of Object.entries(object)) {
        if (typeof v == "function") {
          valid.push(k)
        }
      }

      return valid.sort()
    },


  }
})()

fi.libraryMethod()
