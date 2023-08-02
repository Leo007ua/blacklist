import React from 'react';
import { SlActionRedo } from 'react-icons/sl';
import { FcBusinessman } from 'react-icons/fc';
import { UserMenuStyled } from './UserMenuStyled';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserName } from 'redux/selectors';
import { logOutThunk } from 'redux/Thunks/authThunk';
import { iconsSize } from 'components/Icon/iconSize';

export const UserMenu = () => {
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(logOutThunk());
  };

  return (
    <UserMenuStyled>
      <p>
        <FcBusinessman size={iconsSize.medium} /> {userName}
      </p>
      <button type="submit" onClick={handleOnClick}>
        <SlActionRedo size={iconsSize.small} />
      </button>
    </UserMenuStyled>
  );
};
