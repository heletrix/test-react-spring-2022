import { actionTypes } from 'common/enums';

const defaultState = {
  list: []
};

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.GET_ALL_JOBS_SUCCESS: {
      return {
        ...state,
        list: action.payload
      };
    }

    default:
      return state;
  }
}

export const selectJobList = (state) => state.job.list;

export default reducer;
