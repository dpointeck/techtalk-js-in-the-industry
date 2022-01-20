const FAdCElements = [
  {
    id: 1,
    name: "RSR1",
    type: "countinghead",
    state: "ok",
  },
  {
    id: 2,
    name: "RSR2",
    type: "countinghead",
    state: "warning",
  },
  {
    id: 3,
    name: "RSR3",
    type: "countinghead",
    state: "ok",
  },
  {
    id: 4,
    name: "TS A",
    type: "tracksection",
    state: "ok",
  },
  {
    id: 5,
    name: "TS B",
    type: "tracksection",
    state: "partial-traversing",
  },
  {
    id: 100,
    name: "COM100",
    type: "com",
    state: "ok",
  },
];

function getResetableTracksection(id, elements) {
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

const resetableTracksection = getResetableTracksection(4,FAdCElements);

// do something with resetableTracksection...

return;
