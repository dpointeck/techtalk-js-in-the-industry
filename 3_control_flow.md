# Clean up control flow

## Dummy data
```js

const FAdCElements = [
  {
    id: 1,
    name: 'RSR1',
    type: 'countinghead',
    state: 'ok',
  },
  {
    id: 2,
    name: 'RSR2',
    type: 'countinghead',
    state: 'warning',
  },
  {
    id: 3,
    name: 'RSR3',
    type: 'countinghead',
    state: 'ok',
  },
  {
    id: 4,
    name: 'TS A',
    type: 'tracksection',
    state: 'ok',
  },
  {
    id: 5,
    name: 'TS B',
    type: 'tracksection',
    state: 'partial-traversing',
  },
  {
    id: 100,
    name: 'COM100',
    type: 'com',
    state: 'ok',
  },
];
```
## First iteration
```js
function getResetableTracksection(id, elements) {
    if (id) {
        const element = elements.find(
            (element) => element.id === id
        );

        if (element) {
            const isTracksection = element.type === 'tracksection';

            if (isTracksection) {
                const isResetable = element.state !== 'ok';

                if(isResetable) {
                    return element;
                }
            }
        }
    }
}
```

## Try to clean it up a bit

With this example I want to show how you get rid of the nesting by using guards.

### guards
In computer programming, a guard is a boolean expression that must evaluate to
true if the program execution is to continue in the branch in question. Regardless of
which programming language is used, guard code or a guard clause is a check of
integrity preconditions used to avoid errors during execution.

```js
function getTracksection(id, elements) {
    if (!id) {
        return;
    }

    const element = elements.find((element) => element.id === id);

    if (!element) {
        return;
    }

    const isTracksection = element.type === 'tracksection';

    if (!isTracksection) {
        return;
    }

    const isResetable = element.state !== 'ok';

    if(!isResetable){
        return;
    }

    return element;
}
```
I think that's better because we eliminated the nesting and the code became more readable.

### The feedback from Patrick and Flo according last example

Definitly the shortest version, but I think some parts are a bit trickier to grasp if you have not that mach experience.

```js
function getTracksection(id, elements) {
    return [...elements].filter(element => (
      element.id === id &&
      element.type === "tracksection" &&
      element.state !== "ok"
    )).first()
}
```