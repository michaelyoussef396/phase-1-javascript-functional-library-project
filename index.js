function myEach(collection, callback) {
    for (let key in collection) {
      if (collection.hasOwnProperty(key)) {
        callback(collection[key]);
      }
    }
    return collection;
  }
  
  function myMap(collection, callback) {
    let result = [];
    for (let key in collection) {
      if (collection.hasOwnProperty(key)) {
        result.push(callback(collection[key]));
      }
    }
    return result;
  }
  
  function myReduce(collection, callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : collection[Object.keys(collection)[0]];
    let startIndex = initialValue !== undefined ? 0 : 1;
  
    if (Array.isArray(collection)) {
      for (let i = startIndex; i < collection.length; i++) {
        accumulator = callback(accumulator, collection[i]);
      }
    } else if (typeof collection === 'object' && collection !== null) {
      const keys = Object.keys(collection);
      for (let i = startIndex; i < keys.length; i++) {
        const key = keys[i];
        accumulator = callback(accumulator, collection[key]);
      }
    }
  
    return accumulator;
  }
  
  
  
  function myFind(collection, callback) {
    for (let key in collection) {
      if (collection.hasOwnProperty(key) && callback(collection[key])) {
        return collection[key];
      }
    }
    return undefined;
  }
  
  function myFilter(collection, callback) {
    let result = [];
    for (let key in collection) {
      if (collection.hasOwnProperty(key) && callback(collection[key])) {
        result.push(collection[key]);
      }
    }
    return result;
  }
  
  function mySize(collection) {
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
  }
  
  function myFirst(collection, n = 1) {
    return n === 1 ? collection[0] : collection.slice(0, n);
  }
  
  function myLast(collection, n = 1) {
    return n === 1 ? collection[collection.length - 1] : collection.slice(-n);
  }
  
  function myKeys(obj) {
    return Object.keys(obj);
  }
  
  function myValues(obj) {
    return Object.values(obj);
  }
  