import * as React from "react";

import { PlasmicDialogInviteProfessional } from "./plasmic/market_v_2/PlasmicDialogInviteProfessional";

function DialogInviteProfessional_({closeDialog, ...props}, ref) {
  const [data, setData] = React.useState({first_name: "ABC"})

  return (
    <PlasmicDialogInviteProfessional
      root={{ ref }}
      {...props}
      firstNameInput={{
        value: data?.first_name,
        onChange: (first_name) => setData({...data, first_name})
      }}
      lastNameInput={{
        value: data?.last_name,
        onChange: (last_name) => setData({...data, last_name})
      }}
      emailInput={{
        value: data?.email,
        onChange: (email) => setData({...data, email})
      }}
      dialog={{
        cancelButton: {
          onClick: () => {
            closeDialog()
          }
        },
        submitButton: {
          onClick: () => {
            console.log({data})
            closeDialog()
          }
        }
      }}
    />
  );
}

const DialogInviteProfessional = React.forwardRef(DialogInviteProfessional_);

export default DialogInviteProfessional;
