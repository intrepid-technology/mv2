import * as React from "react";

import { PlasmicEditmember } from "../../components/plasmic/market_v_2/PlasmicEditmember";

function Editmember() {
  const onMemberProfileFormSubmit = async data => {
    console.log({data})
  }
  
  const onMemberDetailsFormSubmit = async data => {
    console.log({data})
  }
 
  const onMemberSocialFormSubmit = async data => {
    console.log({data})
  }

  return (
    <PlasmicEditmember
       // Member Profile Form
       memberProfileForm={{
        defaultValues: {},
        onSubmit: onMemberProfileFormSubmit
      }}

      
      // Member Details Form
      memberDetailsForm={{
        defaultValues: {},
        onSubmit: onMemberDetailsFormSubmit
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


      // Member Social Form
      memberSocialForm={{
        defaultValues: {},
        onSubmit: onMemberSocialFormSubmit
      }}
    />
  );
}

export default Editmember;
