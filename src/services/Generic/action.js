import constants from "./constants";

export const addLottery = (value) => ({
  type: constants.ADD_LOTTERY,
  payload: value,
});

export const deleteLottery = (index) => ({
  type: constants.DELETE_LOTTERY,
  payload: index,
});
