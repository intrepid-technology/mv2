import * as React from "react";

import Dialog from './Dialog'
import DialogOverlay from "./DialogOverlay";
import {
  OverlayContainer,
} from "@react-aria/overlays";
import { PlasmicDialogTrigger } from "./plasmic/market_v_2/PlasmicDialogTrigger";
import dynamic from 'next/dynamic'
import { useOverlayTriggerState } from "react-stately";

const DIALOG_COMPONENT_MAP = {
  DialogInviteCompany: dynamic(() => import("./DialogInviteCompany")),
  DialogInviteProfessional: dynamic(() => import("./DialogInviteProfessional")),
}

function DialogTrigger_({children, componentToRender, ...props}, ref) {
  let state = useOverlayTriggerState({});

  const Component = DIALOG_COMPONENT_MAP[componentToRender]

  return (
    <PlasmicDialogTrigger
      root={{ 
        render: (ps) => (
          <>
            <div {...ps} onClick={() => state.open()}>{children}</div>
            {state.isOpen && (
              <OverlayContainer>
                {
                  React.cloneElement(
                    <DialogOverlay>
                      {
                        (ps) => (
                          Component ? <Component {...ps} /> : null
                        )
                      }
                    </DialogOverlay>,
                    {
                      isOpen: state.isOpen,
                      onClose: () => state.close()
                    }
                  )
                }
              </OverlayContainer>
            )}
          </>
        )
       }}
      {...props}
    />
  );
}

const DialogTrigger = React.forwardRef(DialogTrigger_);

export default DialogTrigger;
