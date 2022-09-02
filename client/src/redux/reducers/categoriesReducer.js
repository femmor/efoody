import { GET_CATEGORIES } from '../constants/categoriesConstants';

const INITIAL_STATE = {
  categories: [],
};

const categoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };

    default:
      return state;
  }
};

export default categoriesReducer;
