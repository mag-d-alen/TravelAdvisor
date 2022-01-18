/** @format */
import React, { useState } from 'react';
import FullArticleModal from './FullArticleModal';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
const Article = ({ location }) => {
  const { state = {} } = location;
  const { modal } = state;
  return (
    <div>
      <div className={modal ? 'modal' : undefined}>
        {modal && <Link to='/'>Close</Link>}
        <img src='https://source.unsplash.com/random' />
      </div>
    </div>
  );
};
