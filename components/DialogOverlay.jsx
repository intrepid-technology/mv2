import * as React from "react";

import {
  useModal,
  useOverlay,
  usePreventScroll
} from "@react-aria/overlays";

import { PlasmicDialogOverlay } from "./plasmic/market_v_2/PlasmicDialogOverlay";
import { useDialog } from "@react-aria/dialog";

function DialogOverlay_(props, ref) {
  let { children, onClose } = props;
  // Handle interacting outside the dialog and pressing
  // the Escape key to close the modal.
  let dialogRef = React.useRef();
  let { overlayProps } = useOverlay(props, dialogRef);

  // Prevent scrolling while the modal is open, and hide content
  // outside the modal from screen readers.
  usePreventScroll();
  let { modalProps } = useModal();

  // Get props for the dialog and its title
  let { dialogProps } = useDialog(props, dialogRef);

  return (
    <PlasmicDialogOverlay
      root={{ ref }}
      {...props}
      dialogDiv={{
        ...overlayProps,
        ...dialogProps,
        ...modalProps,
        ref: dialogRef,
      }}
      children={children({closeDialog: onClose})}
    />
  );
}

const DialogOverlay = React.forwardRef(DialogOverlay_);

export default DialogOverlay;
