import * as React from "react";

import { PlasmicNotificationSettingsForm } from "./plasmic/market_v_2/PlasmicNotificationSettingsForm";

function NotificationSettingsForm_(props, ref) {

  return (
    <PlasmicNotificationSettingsForm
      root={{ ref }}
      {...props}
      activityMultiCheckboxInput={{
        options: [
          {id: 1, label: "New Subscriber"},
          {id: 2, label: "New Tip"},
          {id: 3, label: "New Review"},
          {id: 4, label: "New Comment"},
          {id: 5, label: "New Follower"},
          {id: 6, label: "New Connection Request"},
          {id: 7, label: "Added to List"},
          {id: 8, label: "New Reaction"},
        ]
      }}
    />
  );
}

const NotificationSettingsForm = React.forwardRef(NotificationSettingsForm_);

export default NotificationSettingsForm;
