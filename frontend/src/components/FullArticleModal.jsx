/** @format */

import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Modal, Box } from '@mui/material';

export default function FullArticleModal(props) {
  const { title, url, open } = props;
  const [isOpen, setIsOpen] = useState(open);
  const handleClose = () => setIsOpen(false);

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <StyledModal>
        <Stylediframe title={title} src={url} width='100%' />
      </StyledModal>
    </Modal>
  );
}

const StyledModal = styled(Box)`
  height: 80%;
  width:80%;
  margin:2rem auto;
   background-color: #ffffffce; */
  /* padding: 2rem; */
  margin: 4rem 3rem 10rem 4rem;
  /* overflow: scroll; */
 
`;
const Stylediframe = styled('iframe')`
  width: 100%;
  height: 100%;
`;
