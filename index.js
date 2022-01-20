const FAdCEements = [
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

const getResetableELement = (id, elements) => {
    return [...elements].filter(
      element => 
      (
        element.id === id && 
        element.type === "tracksection" &&
        element.state !== "ok"
      )
  ).shift()
}

const resetable = getResetableELement(5, FAdCEements);
return;