import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Modal = ({ open, handleClose, children, title, actions, styles }) => {
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        PaperProps={{ style: styles }}
      >
        <DialogTitle id="modal-title">{title}</DialogTitle>
        <DialogActions>{actions}</DialogActions>
        {children}
      </Dialog>
    </div>
  );
};

Modal.prototype = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  actions: PropTypes.element.isRequired,
  styles: PropTypes.object,
};

Modal.defaultProps = {
  styles: {},
};
export default Modal;
