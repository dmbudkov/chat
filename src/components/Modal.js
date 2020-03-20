import React from "react";
import { withStyles } from "@material-ui/core";
import ModalUI from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs';
import PropTypes from "prop-types"; // web.cjs is required for IE 11 support


const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });
  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

const styles = theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[4],
    padding: theme.spacing(2, 4, 3),
  },
});

export function Modal({ children, classes, open, handleClose }) {
  return (
    <ModalUI
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          { children }
        </div>
      </Fade>
    </ModalUI>
  )
}

Modal.propTypes = {
  children: PropTypes.object,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  open: PropTypes.bool,
  handleClose: PropTypes.func
};

export default withStyles(styles)(Modal);