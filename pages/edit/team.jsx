import * as React from "react";

import { PlasmicEditteam } from "../../components/plasmic/market_v_2/PlasmicEditteam";

function Editteam() {
  const onTeamProfileFormSubmit = async data => {
    console.log({data})
  }
  
  const onTeamDetailsFormSubmit = async data => {
    console.log({data})
  }

  const onTeamMarketFormSubmit = async data => {
    console.log({data})
  }
 
  const onTeamSocialFormSubmit = async data => {
    console.log({data})
  }

  return (
    <PlasmicEditteam
      // Team Profile Form
      teamProfileForm={{
        defaultValues: {},
        onSubmit: onTeamProfileFormSubmit
      }}

      
      // Team Details Form
      teamDetailsForm={{
        defaultValues: {},
        onSubmit: onTeamDetailsFormSubmit
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
      industrySelectInput={{
        options: [
          { id: 1, label: "Industry 1" },
          { id: 2, label: "Industry 2" },
        ],
      }}
      companySizeSelectInput={{
        options: [
          { id: 1, label: "400" },
          { id: 2, label: "200" },
        ],
      }}
      primaryLanguageSelectInput={{
        options: [
          { id: 1, label: "English" },
          { id: 2, label: "Urdu" },
          { id: 3, label: "Chinese" },
        ],
      }}
      secondaryLanguageSelectInput={{
        options: [
          { id: 1, label: "English" },
          { id: 2, label: "Urdu" },
          { id: 3, label: "Chinese" },
        ],
      }}

      
      // Team Market Form
      teamMarketForm={{
        defaultValues: {},
        onSubmit: onTeamMarketFormSubmit,
      }}
      marketIndustrySelectInput={{
        options: [
          { id: 1, label: "Market Industry 1" },
          { id: 2, label: "Market Industry 2" },
        ],
      }}
      marketCompanySizeSelectInput={{
        options: [
          { id: 1, label: "300" },
          { id: 2, label: "500" },
        ],
      }}
      primaryRateSelectInput={{
        options: [
          { id: 1, label: "50" },
          { id: 2, label: "500" },
          { id: 3, label: "1000" },
        ],
      }}
      secondaryRateSelectInput={{
        options: [
          { id: 1, label: "50" },
          { id: 2, label: "500" },
          { id: 3, label: "1000" },
        ],
      }}


      // Team Social Form
      teamSocialForm={{
        defaultValues: {},
        onSubmit: onTeamSocialFormSubmit
      }}
    />
  );
}

export default Editteam;
