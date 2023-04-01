import React from "react";

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { BoxModal } from '../../../template/modal/styles'

interface PropsModal {
  title: string;
  openPopup: boolean;
  setOpenPopup: boolean;
}


export default function ModalPopup<PropsModal>(props) {

  const { title, children, openPopup, setOpenPopup } = props;

  return (
    <>
      <Modal
        keepMounted
        open={openPopup}
        onClose={() => setOpenPopup(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <BoxModal>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            { title }
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            { children }
          </Typography>
        </BoxModal>
      </Modal>
    </>
  );
}
