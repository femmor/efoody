import axios from 'axios';
import { GET_CATEGORIES } from '../constants/categoriesConstants';
import { START_LOADING, STOP_LOADING } from '../constants/loadingConstants';
import { SHOW_ERROR_MESSAGE } from '../constants/messageConstants';

export const getCategories = () => async dispatch => {
  try {
    dispatch({
      type: START_LOADING,
    });
    const response = await axios.get('/api/category');

    dispatch({
      type: STOP_LOADING,
    });
    dispatch({
      type: GET_CATEGORIES,
      payload: response.data.categories,
    });
  } catch (error) {
    dispatch({
      type: STOP_LOADING,
    });
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: error.response.errorMessage,
    });
  }
};
