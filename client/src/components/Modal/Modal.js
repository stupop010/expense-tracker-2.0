import React, { forwardRef, useState, Children } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Modal = ({
  open,
  handleClose,
  children,
  title,
  actions,
  content = null,
  styles = {},
}) => {
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
        {content && <DialogContent>{content}</DialogContent>}
        <DialogActions>{actions}</DialogActions>
        {children}
      </Dialog>
    </div>
  );
};

export default Modal;
