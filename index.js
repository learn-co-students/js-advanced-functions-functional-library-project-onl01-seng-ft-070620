const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(obj, func) {
      const newObj = (obj instanceof Array) ? obj : Object.values(obj)

      for (let i = 0; i < newObj.length; i ++) {
        func(newObj[i])
      }
      return obj
    },

    map: function(obj, func) {
      if (!(obj instanceof Array)) {
        obj = Object.values(obj)
      }

      const newArray = []

      for (let i = 0; i < obj.length; i ++) {
        newArray.push(func(obj[i]))
      }
      return newArray
    },

    reduce: function(obj, callback = () => {}, starting) {
			if (!starting) {
				starting = obj[0]
				obj = obj.slice(1)
			}

			for (let i = 0; i < obj.length; i++) {
				starting = callback(starting, obj[i], obj)
			}
			return starting;
    },

    find: function(obj, func) {
      if (!(obj instanceof Array)) {
        obj = Object.values(obj)
      }

      for (let i = 0; i < obj.length; i++){
        if (func(obj[i])) {
          return obj[i]
        }
      }

      return undefined
    },

    filter: function(obj, func) {
      if (!(obj instanceof Array)) {
        obj = Object.values(obj)
      }

      const answer = []

      for (let i = 0; i < obj.length; i++) {
        if (func(obj[i])) answer.push(obj[i])
      }
      return answer
    },

    size: function(obj) {
      if (!(obj instanceof Array)) {
        obj = Object.values(obj)
      }

      let total = 0

      for (const i of obj) {
        total += 1
      }

      return total
    },

    first: function(obj, arg) {
      if (!arg) {
        return obj[0]
      } else {
        return obj.slice(0, arg)
      }
    },

    last: function(obj, arg) {
      if (!arg) {
        return obj[obj.length-1]
      } else {
        return obj.slice(obj.length-arg, obj.length)
      }
    },

    compact: function(obj) {
      const arr = []
      for (let i = 0; i < obj.length; i ++) {
        if (!obj[i] === false) {
          arr.push(obj[i])
        }
      }
      return arr
    },

    sortBy: function(obj, func) {
      const arr = [...obj]
      return arr.sort(function(a, b) {
        return func(a) - func(b)
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
      if (!iteratee) {
        return Array.from(new Set(collection))
      } else {
        const mods = new Set()
        const myUniqs = new Set()
        for (let val of collection) {
          const moddedVal = iteratee(val)
          if (!mods.has(moddedVal)) {
            mods.add(moddedVal)
            myUniqs.add(val)
          }
        }
        return Array.from(myUniqs)
      }
    },

    keys: function(obj) {
      const keys = []
      for (let key in obj) {
        keys.push(key)
      }
      return keys
    },

    values: function(obj) {
      const values = []
      for (let key in obj){
        values.push(obj[key])
      }
      return values
    },
    
    functions: function(obj) {
      const funcs = []

      for (let key in obj) {
        if (typeof obj[key] === "function"){
          funcs.push(key)
        }
      }

      return funcs
    },
  }
})()

fi.libraryMethod()