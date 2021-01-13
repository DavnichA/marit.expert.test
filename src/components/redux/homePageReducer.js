const SET_DATA = 'my-app/app/SET_DATA';


let initialState = {
  human: [],
  elf: [],
  dworf: [],
  hobbit: [],
};

function homePageReducer(state = initialState, action) {
  switch (action.type) {

    case SET_DATA:
      return {
        ...state,
        human: action.human,
        elf: action.elf, 
        dworf: action.dworf, 
        hobbit: action.hobbit
      }


    default:
      return state;
  }
}

// action
export const setData = (human, elf, dworf, hobbit) => ({ type: SET_DATA, human, elf, dworf, hobbit});

//thunk

export const getData = () => async (dispatch) => {
  const wbs = await new WebSocket('ws://testapi.marit.expert:3004');

  wbs.onopen = function (e) {
    wbs.send({ cmd: "get_list" })
  }

  wbs.onmessage = function (event) {
    const data = JSON.parse(event.data);

    const elf = data.filter(item => {
      return Object.keys(item).some(key => {
          return item[key] === 'Elf'
      })
  });

    const human = data.filter(item => {
      return Object.keys(item).some(key => {
          return item[key] === 'Human' 
      })
  });

    const dworf = data.filter(item => {
        return Object.keys(item).some(key => {
            return item[key] === 'Dworf'
        })
    });

    const hobbit = data.filter(item => {
        return Object.keys(item).some(key => {
            return item[key] === 'Hobbit'
        });
    });

    dispatch(setData(human, elf, dworf, hobbit));
  }
}



export default homePageReducer;