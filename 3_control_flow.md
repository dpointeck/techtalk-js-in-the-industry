### guards

In computer programming, a guard is a boolean expression that must evaluate to
true if the program execution is to continue in the branch in question. Regardless of
which programming language is used, guard code or a guard clause is a check of
integrity preconditions used to avoid errors during execution.

```js

function getTracksection(boardId, elements) {
    if (boardId) {
        const element = elements.find(
            (element) => element.id === boardId
        );

        if (element) {
            const isTracksection = element.type === 'tracksection';

            if (isTracksection) {
                return element;
            }
        }
    }
}
```

```js

function getTracksection(boardId, elements) {
    if (!boardId) {
        return;
    }

    const element = elements.find((element) => element.id === boardId);

    if (!element) {
        return;
    }

    const isTracksection = element.type === 'tracksection';

    if (!isTracksection) {
        return;
    }

    return element;
}
```

