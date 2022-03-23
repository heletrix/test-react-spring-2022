import { actionTypes } from 'common/enums';

const defaultState = {
  loading: false,
  list: []
};

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.GET_ALL_JOBS_FETCH: {
      return {
        ...state,
        loading: true
      };
    }

    case actionTypes.GET_ALL_JOBS_SUCCESS: {
      return {
        ...state,
        list: action.payload,
        loading: false
      };
    }

    case actionTypes.GET_ALL_JOBS_ERROR: {
      return {
        ...state,
        loading: false
      };
    }

    default:
      return state;
  }
}

export const selectJobList = (state) => state.job.list;
export const selectJobListLoading = (state) => state.job.loading;

export default reducer;
