const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const newCollection = collection instanceof Array ? collection : Object.values(collection);
      for (let i=0; i<newCollection.length; i++) {
        callback(newCollection[i]);
      }
      return collection;
    },

    map: function(collection, callback) {
      const newCollection = collection instanceof Array ? collection : Object.values(collection);
      const array = [];
      for (let i=0; i<newCollection.length; i++) {
        array.push(callback(newCollection[i]));
      }
      return array;
    },

    reduce: function(c = [], callback = () => {}, acc) {
      let collection = c.slice(0);
      if (!acc) {
        acc = collection[0];
        collection = collection.slice(1);
      }
      let l = collection.length;
      for (let i=0; i<l; i++) {
        acc = callback(acc, collection[i], collection);
      }
      return acc;
    },

    find: function(collection, predicate) {
      for (let i=0; i<collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i];
        }
      }
    },

    filter: function(collection, predicate) {
      let array = [];
      for (let i=0; i<collection.length; i++) {
        if (predicate(collection[i])) {
          array.push(collection[i]);
        }
      }
      return array;
    },
    
    size: function(collection) {
      return (collection instanceof Array) ? collection.length : Object.keys(collection).length;
    },

    first: function(array, n) {
      return n ? array.slice(0,n) : array[0];
    },

    last: function(array, n) {
      return n ? array.slice((array.length) - n) : array[array.length - 1];
    },

    compact: function(array) {
      const bad = [null, false, 0, NaN, undefined, ""];
      const arr = [];
      for (let i=0;i<array.length;i++) {
        if (!bad.includes(array[i])) {
          arr.push(array[i]);
        }
      }
      return arr;
    },

    sortBy: function(array, callback) {
      const arr = [...array];
      return arr.sort((a,b) => callback(a) - callback(b));
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

    uniqSorted: function(collection, iteratee) {
      const sorted = [collection[0]]
      for (let idx = 1; idx < collection.length; idx++) {
        if (sorted[idx-1] !== collection[idx])
          sorted.push(collection[idx])
      }
      return sorted
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
      const keys = [];
      for (let key in obj) {
        keys.push(key);
      }
      return keys;
    },

    values: function(obj) {
      const values = [];
      for (let key in obj){
        values.push(obj[key]);
      }
      return values;
    },

    functions: function(obj) {
      const functionNames = [];
      for (let key in obj) {
        if (typeof obj[key] === "function") {
          functionNames.push(key);
        }
      }
      return functionNames.sort();
    }

  }
})()

fi.libraryMethod()
