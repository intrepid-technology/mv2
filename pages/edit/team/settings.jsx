import * as React from "react";

import { PlasmicEditteamsettings } from "../../../components/plasmic/market_v_2/PlasmicEditteamsettings";

function Editteamsettings() {
  const onTeamSettingsFormSubmit = (data) => {
    console.log({data})
  }

  const onTeamNotificationsFormSubmit = (data) => {
    console.log({data})
  }

  return (
    <PlasmicEditteamsettings
      // Team Settings Form
      settingsForm={{
        defaultValues: {},
        onSubmit: onTeamSettingsFormSubmit
      }}
      countrySelectInput={{
        options: [
          { id: 1, label: "Country 1" },
          { id: 2, label: "Country 2" },
          { id: 3, label: "Country 3" },
          { id: 4, label: "Country 4" },
        ],
      }}
      citySelectInput={{
        options: [
          { id: 1, label: "City 1" },
          { id: 2, label: "City 2" },
        ],
      }}
      taxCountrySelectInput={{
        options: [
          { id: 1, label: "Country 1" },
          { id: 2, label: "Country 2" },
          { id: 3, label: "Country 3" },
          { id: 4, label: "Country 4" },
        ],
      }}
      
      // Team Notifications Form
      notificationsForm={{
        defaultValues: {},
        onSubmit: onTeamNotificationsFormSubmit
      }}
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
      
      leaveTeamButton={{
        onClick: () => {
          console.log("Leave Team Clicked`")
        }
      }}

      deleteAccountButton={{
        onClick: () => {
          console.log("Delete Account Clicked`")
        }
      }}
    />
  );
}

export default Editteamsettings;
