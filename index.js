const fi = (function() {
  return {
    libraryMethod: function() 
    {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, method) 
    {
      if (Array.isArray(collection))
      {
        for(let thing of collection)
        {
          method(thing, collection.indexOf(thing), collection)
        }
      }
      else
      {
        for(let key in collection)
        {
          method(collection[key], key, collection)
        }
      }
      return collection
    },

    map: function(collection, method) 
    {
      let newCollection = []
      if(Array.isArray(collection))
      {
        for(let thing of collection)
        {
          newCollection.push(method(thing, collection.indexOf(thing), collection))
        }
      }
      else
      {
        for(let key in collection)
        {
          newCollection.push(method(collection[key], key, collection))
        }
      }
      return newCollection
    },

    reduce: function(collection, method, start = collection[0]) 
    {
      let memo = start
      for(let thing of collection)
      {
        if((thing != start || start != collection[0]))
        memo = method(memo, thing, collection)
      }
      return memo 
    },

    find: function(arr, method)
    {
      for(let thing of arr)
      {
        if(method(thing))
        {
          return thing
        }
      }
    },

    filter: function(arr, method)
    {
      let newCollection = []
      for(let thing of arr)
      {
        if(method(thing))
        {
          newCollection.push(thing)
        }
      }
      return newCollection
    },

    size: function(arr)
    {
      if(Array.isArray(arr))
      {
        let count = 0
        for(let thing of arr)
        {
          count += 1
        }
        return count
      }
      else
      {
        let count = 0
        for(let thing in arr)
        {
          count += 1
        }
        return count
      }
    },

    first: function(collection, num = 1)
    {
      let firsts = []
      for(let i = 0; i < num; i++)
      {
        firsts.push(collection[i])
      }
      if (firsts.length == 1)
      {
        return firsts[0]
      }
      else
      {
        return firsts
      }
    },

    last: function(collection, num = 1)
    {
      let lasts = []
      for(let i = collection.length - 1; i > collection.length - num - 1; i--)
      {
        lasts.unshift(collection[i])
      }
      if (lasts.length == 1)
      {
        return lasts[0]
      }
      else
      {
        return lasts
      }
    },

    compact: function(collection)
    {
      let newCollection = []
      for(let thing of collection)
      {
        if(!!thing)
        {
          newCollection.push(thing)
        }
      }
      return newCollection
    },

    sortBy: function(arr, method)
    {
      let newCollection = []
      for(let thing of arr)
      {
        newCollection.push(thing)
        
      }
      newCollection.sort((a, b) => {return method(a) - method(b)})
      return newCollection

    },

    flatten: function(array, justOneLevel = false)
    {
      if (justOneLevel)
      {
        return array.flat(1)
      }
      else
      {
        return array.flat(Infinity)
      }
    },

    uniq: function(collection, sorted, transform = (thing) => {return thing})
    {
      let newCollection = []
      for(let thing of collection)
      {
        if(newCollection.indexOf(transform(thing)) == -1)
        {
          newCollection.push(transform(thing))
        }
      }
      return newCollection
    },

    keys: function(obj)
    {
      let keysArr = []
      for(let thing in obj)
      {
        keysArr.push(thing)
      }
      return keysArr
    },

    values: function(obj)
    {
      let valuesArr = []
      for(let thing in obj)
      {
        valuesArr.push(obj[thing])
      }
      return valuesArr
    },

    functions: function(object)
    {
      let methods = [];
      for(let thing in object) {
        if(typeof object[thing] == "function") {
            methods.push(thing)
        }
      }
      return methods;
    },


  }
})()

fi.libraryMethod()
