import { actionTypes } from 'common/enums';

export const getAllJobsFetch = () => ({
  type: actionTypes.GET_ALL_JOBS_FETCH
});

export const getAllJobsSuccess = (payload) => ({
  type: actionTypes.GET_ALL_JOBS_SUCCESS,
  payload
});

export const getAllJobsError = (payload) => ({
  type: actionTypes.GET_ALL_JOBS_ERROR,
  payload
});
