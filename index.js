function myEach(collection, callback) {
    let iterableCollection;

    if (Array.isArray(collection)) {
        iterableCollection = collection;
    } else if (typeof collection === 'object') {
        iterableCollection = Object.values(collection);
    };

    iterableCollection.forEach((element) => {
        callback(element);
    });
    return collection;
}

function myMap(collection, callback) {
    let iterableCollection;
    let transformedArray = [];

    if (Array.isArray(collection)) {
        iterableCollection = collection;
    } else if (typeof collection === 'object') {
        iterableCollection = Object.entries(collection);
    } else {
        throw new Error("Invalid collection type");
    };

    for (let item of iterableCollection) {
        if (Array.isArray(collection)) {
            transformedArray.push(callback(item));
        } else {
        const [key, value] = item;
        transformedArray.push(callback(value, key));
    }
   }
   return transformedArray;
}

function myReduce(collection, callback, acc) {
    let iterableCollection;

    if (Array.isArray(collection)) {
        iterableCollection = collection;
    } else if (typeof collection === 'object') {
        iterableCollection = Object.values(collection);
    };

    let startIndex = 0; 
    if (acc === undefined) {
        acc = iterableCollection[0];
        startIndex = 1;
    }
    for (let i = startIndex; i < iterableCollection.length; i++) {
        acc = callback(acc, iterableCollection[i], collection);
    }
    return acc;
}

function myFind(collection, predicate) {
    let iterableCollection;

    if (Array.isArray(collection)) {
        iterableCollection = collection;
    } else if (typeof collection === 'object') {
        iterableCollection = Object.values(collection);
    };

    for (let element of iterableCollection) {
        if (predicate(element)) {
            return element;
        }
    }
    return undefined;
}

function myFilter(collection, predicate) {
    let iterableCollection;
    let resultArray = [];

    if (Array.isArray(collection)) {
        iterableCollection = collection;
    } else if (typeof collection === 'object') {
        iterableCollection = Object.values(collection);
    };

    for(let item of iterableCollection) {
        if(predicate(item)) {
            resultArray.push(item);
        }
    }
    return resultArray;
}

function mySize(collection) {
    let iterableCollection;

    if (Array.isArray(collection)) {
        iterableCollection = collection;
    } else if (typeof collection === 'object') {
        iterableCollection = Object.values(collection);
    };
    return iterableCollection.length
}

function myFirst(array, n = 1) {
    if (n === 1) {
        return array[0];
    }
    return array.slice(0, n);
}

function myLast(array, n) {
    if (n === undefined) {
        return array[array.length - 1]
    } else {
        return array.slice(-n)
    }   
}

function myKeys(object) {
    const keysArray = [];
    for(let key in object) {
        if (object.hasOwnProperty(key)) {
            keysArray.push(key);
        }
    }
    return keysArray;
}

function myValues(object) {
    return Object.values(object);
}