import React from 'react';
import { connect } from 'react-redux';
import Mypage from '../../components/mypage/Mypage';
import { updateNickname } from '../module/Profile';

const ProfileContainer = ({ users, updateNickname }) => {
  return <Mypage users={users} updateNickname={updateNickname} />;
};

const mapStateToProps = (state) => ({
  users: state.users.users,
});

const mapDispatchToProps = (dispatch) => ({
  updateNickname: () => {
    dispatch(updateNickname());
  };
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
