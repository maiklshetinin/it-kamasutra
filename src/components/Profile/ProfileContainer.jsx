import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, onPostChangeActionCreator } from '../Redux/profile-reducer';
import Profile from './Profile';


const mapStateToProps= (state)=> {
  return {
    profilePage:state.profileReducer
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator())
    },

    onPostChange: (text) => {
      dispatch(onPostChangeActionCreator(text))
    }
  }
}

const ProfileContainer=connect(mapStateToProps,mapDispatchToProps)(Profile)

export default ProfileContainer;