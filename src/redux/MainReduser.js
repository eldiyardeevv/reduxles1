let initsate = {
  money: 0,
};

export const Reducer = (state = initsate, action) => {
  switch (action.type) {
    case "ADD_MONEY":
      return { ...state, money: state.money + 1 };
    case "TAKE_MONEY":
      if (state.money === 0) {
        return state;
      } else {
        return { ...state, money: state.money - 1 };
      }
    case "REMOVE_RESET":
      return { ...state, money: state.money < 1 ? 0 : 0 };
    default:
      return state;
  }
};
