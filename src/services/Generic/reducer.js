import constants from "./constants";

const initState = {
  lotteries: [],
};

export default function (state = initState, action) {
  switch (action.type) {
    case constants.ADD_LOTTERY:
      return { ...state, lotteries: [...state?.lotteries, action.payload] };

    case constants.DELETE_LOTTERY:
      state?.lotteries?.splice(action?.payload, 1);
      return { ...state, lotteries: [...state?.lotteries] };
    default:
      return state;
  }
}
