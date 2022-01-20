
## imperative

```js
function multiplyAll(list) {
    for (let i = 0; i < list.length; i++) {
        list[i] *= 2;
    }
}

const listOfNumbers = [1,2,3,4,5];
multiplyAll(listOfNumbers);
console.log(listOfNumbers); // [2,4,6,8,10]
```

Straightforward but we make 2 observations

1. multiplyAll has no retrun value -> **not pure**
2. The original listOfNumbers array gets mutated -> **not immutable**

This two behaviors are very likely to result in bugs, code that's hard to debug.

## declarative

```js
const multipliedNumbers = listOfNumbers.map(n => n * 2)
console.log(multipliedNumbers)
```

1. map has a return value. It's an array altered by the cb. It doesn't change surroundings and given the same cb and input always returns the same values -> **it's pure**
2. listOfNumbers stays untouched. Map will create a new copy of the array for us -> map is **immutable**

