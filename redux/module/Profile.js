import { handleActions } from 'redux-actions';

const UPDATE_NICKNAME = 'UPDATE_NICKNAME';
const UPDATE_PASSWORD = 'UPDATE_PASSWORD';

export const updateNickname = (nickname) => {
  return (dispatch, getState) => {
    dispatch({ type: UPDATE_NICKNAME, nickname });
  };
};

export const updatePassword = (password) => {
  return (dispatch, getState) => {
    dispatch({ type: UPDATE_PASSWORD, password });
  };
};

const initialState = {
  dorm: '',
  room: '',
  sid: '',
  nickname: '',
};

const users = handleActions({
  [UPDATE_NICKNAME]: (state, { payload: nickname }) => ({ ...state, nickname }),
  [UPDATE_PASSWORD]: (state, { payload: password }) => ({ ...state, password }),
  initialState,
});

export default users;
