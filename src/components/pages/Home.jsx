import React from 'react';
import { HomeStyled } from './HomeStyled';
import { HiBookOpen } from "react-icons/hi2"
import { iconsSize } from 'components/Icon/iconSize';

export const Home = () => {
  return (
    <HomeStyled>
      <h2>Welcome to phonebook</h2>
      <HiBookOpen size={iconsSize.large} />
    </HomeStyled>
  );
};

export default Home;
