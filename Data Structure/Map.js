// About Maps 

const map = new Map([['a', 2], ['b', 4], ['c', 6]])

map.set('d',8)                                  // to add new items in map

console.log(map.has('a'));                      // to check if a particular item exists or not

console.log(map.size)                           // to check Map Size

// map.clear()                                  to clear the map

// map.delete('b')                              to delete a particular items in map

for(const [keys, values] of map){               // to accessing the keys and values of Map
    console.log(`${keys}: ${values}`);
}

