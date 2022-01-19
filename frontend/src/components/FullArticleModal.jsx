/** @format */

import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Modal, Box } from '@mui/material';
import Iframe from 'react-iframe';

export default function FullArticleModal(props) {
  const { title, url, open, handleShowFullArticle } = props;
  const [isOpen, setIsOpen] = useState(open);
  const handleClose = () => {
    handleShowFullArticle(false);
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <StyledModal>
        <Stylediframe
          title={title}
          url={url}
          frameAncestors='*'
          sandbox='allow-same-origin allow-forms allow-popups'
          allowScripts='true'
        />
      </StyledModal>
    </Modal>
  );
}

const StyledModal = styled(Box)`
  height: 80%;
  width: 80%;
  margin: 2rem auto;
  background-color: #ffffffce;
  margin: 4rem 3rem 10rem 4rem;
`;
const Stylediframe = styled(Iframe)`
  width: 100%;
  height: 100%;
`;
