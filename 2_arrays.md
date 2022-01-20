## work with array methods

```js
const points = [3,9,7,8,6,2,11];

let totalPoints = 0;

for (const point of points) {
    totalPoints += point;
}

console.log(totalPoints); // 46
```


```js
const totalPoints = points.reduce((total, point) => total + point);

console.log(totalPoints); // 46
```

## be careful with older Array prototype methods

```js
const grades = ["C","A","I","B","F"];

const sortedGrades = grades.sort();
console.log(grades); // ["A", "B", "C", "F", "I"]
```

Weird? Yep, and be also carefull with push, shift, unshift, pop, reverse, splice, sort, and fill

### destructuring for the win
```js
const sortedGrades = [...grades].sort()

console.log(grades); // ["C","A","I","B","F"]
console.log(sortedGrades); // ["A", "B", "C", "F", "I"]
```

