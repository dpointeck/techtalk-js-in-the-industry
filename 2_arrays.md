## work with array methods

```js
const resets = [3,9,7,8,6,2,11];

let totalResets = 0;

for (const reset of resets) {
    totalResets += reset;
}

console.log(totalResets); // 46
```


```js
const totalResets = resets.reduce((total, reset) => total + reset);

console.log(totalPoints); // 46
```

## be careful with older Array prototype methods

```js
const elements = ["RSR1","TSA","COM100","RSR2","TSB","RSR3];

const sortedElements = elements.sort();
console.log(grades); // ["A", "B", "C", "F", "I"]
```

Weird? Yep, and be also carefull with push, shift, unshift, pop, reverse, splice, sort, and fill

### destructuring for the win
```js
const sortedGrades = [...grades].sort()

console.log(grades); // ["C","A","I","B","F"]
console.log(sortedGrades); // ["A", "B", "C", "F", "I"]
```

