import * as React from "react";

import { PAGE_TAB_NAVIGATIONS, PAGE_TAB_NAVIGATION_KEY } from "constants/page-tab-navigations";

import { PlasmicEditmembersettings } from "../../../components/plasmic/market_v_2/PlasmicEditmembersettings";

function Editmembersettings() {

  const handlePasswordResetClick = (e) => {
    console.log("Reset Password Click")
  }

  const onEmailFormSubmit = async (data) => {
    console.log({data})
  }
 
  const onAddressFormSubmit = async (data) => {
    console.log({data})
  }

  const onMobileFormSubmit = async (data) => {
    console.log({data})
  }
 
  const onNotificationsFormSubmit = async (data) => {
    console.log({data})
  }

  // Login Connection Handles
  const handleGoogleConnectionChange = (hasGoogleConnection) => {}
  const handleFacebookConnectionChange = (hasFacebookConnection) => {}
  const handleLinkedInConnectionChange = (hasLinkedInConnection) => {}
  const handleGithubConnectionChange = (hasGithubConnection) => {}
  const handleTwitterConnectionChange = (hasTwitterConnection) => {}

  const handleDeleteAccount = (e) => {
    console.log("Delete Account")
  }

  return (
    <PlasmicEditmembersettings
      passwordResetButton={{
        onClick: (e) => handlePasswordResetClick(e)
      }}

      emailForm={{
        defaultValues: {},
        onSubmit: onEmailFormSubmit
      }}

      mobileForm={{
        defaultValues: {},
        onSubmit: onMobileFormSubmit
      }}
      mobileCountrySelectInput={{
        options: [
          { id: 1, label: "Country 1" },
          { id: 2, label: "Country 2" },
          { id: 3, label: "Country 3" },
          { id: 4, label: "Country 4" },
        ],
      }}

      addressForm={{
        defaultValues: {},
        onSubmit: onAddressFormSubmit
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

      notificationsForm={{
        defaultValues: {},
        onSubmit: onNotificationsFormSubmit
      }}

      // Login Connections
      googleSwitchInput={{
        onChange: handleGoogleConnectionChange
      }}
      facebookSwitchInput={{
        onChange: handleFacebookConnectionChange
      }}
      twitterSwitchInput={{
        onChange: handleTwitterConnectionChange
      }}
      linkedInSwitchInput={{
        onChange: handleLinkedInConnectionChange
      }}
      githubSwitchInput={{
        onChange: handleGithubConnectionChange
      }}

      deleteAccountButton={{
        onClick: e => handleDeleteAccount(e)
      }}
    />
  );
}

export default Editmembersettings;

Editmembersettings.tabNavigations = PAGE_TAB_NAVIGATIONS[PAGE_TAB_NAVIGATION_KEY.EDIT_MEMBER]