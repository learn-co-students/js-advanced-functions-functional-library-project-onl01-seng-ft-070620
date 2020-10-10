const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(array, fn) {
      const newArray = array instanceof Array ? array : Object.values(array);
      for (let i = 0; i < newArray.length; i++) {
        fn(newArray[i]);
      }
      return array;
    },

    map: function(array, fn) {
      const updatedArray = array instanceof Array ? array : Object.values(array);
      const newArray = []
      for (let i = 0; i < updatedArray.length; i++) {
        newArray.push(fn(updatedArray[i]));
      }
      return newArray;
    },

		reduce: function(array, fn, acc) {
			if (!acc) {
				acc = array[0]
				array = array.slice(1)
			}

			for (let i = 0; i < array.length; i++) {
				acc = fn(acc, array[i], array)
			}
			return acc;
    },
    
    find: function(array, fn) {
      for (let i = 0; i < array.length; i ++) {
        if (fn(array[i])) {
          return array[i];
        }
      }
    },

    filter: function(array, fn) {
      let newArray = []
      for (let i = 0; i < array.length; i++) {
        if (fn(array[i])) {
          newArray.push(array[i]);
        }
      }
      return newArray;
    },

    size: function(array) {
      const updatedArray = array instanceof Array ? array : Object.values(array);
      return updatedArray.length;
    },

    first: function(array, n) {
      return n ? array.slice(0, n) : array[0];
    },

    last: function(array, n) {
      return n ? array.slice((array.length) - n) : array[array.length - 1];
    },

    compact: function(array) {
      const falses = [null, false, 0, "", undefined, NaN]
      const newArray = []
      for (let i = 0; i < array.length; i++) {
        if (!falses.includes(array[i])) {
          newArray.push(array[i]);
        }
      }
      return newArray;
    },

    unpack: function(receiver, arr) {
      for (let val of arr)
        receiver.push(val)
    },

    sortBy: function(array, fn) {
      const newArray = [...array];
      return newArray.sort((a,b) => fn(a) - fn(b));
    },

    // REVIEW!!!
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

    // REVIEW!!!
    // return [...new Set(array)];
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
      let newArray = [];
      for (let key in object) {
        newArray.push(key);
      }
      return newArray;
    },

    values: function(object) {
      let newArray = []
      for (let key in object) {
        newArray.push(object[key]);
      }
      return newArray;
    },

    functions: function(object) {
      let newArray = [];
      for (let key in object) {
        if (typeof object[key] === "function") {
          newArray.push(key);
        }
      }
      return newArray.sort();
    },


  }
})()

fi.libraryMethod()
