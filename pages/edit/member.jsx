import * as React from "react";
import supabase from "../../backend/api/supabase";
import useUpdateUser from "../../hooks/useUpdateUser";
import { PlasmicEditmember } from "../../components/plasmic/market_v_2/PlasmicEditmember";

function Editmember() {
  const [values, setValues] = React.useState();
  // TODO: Test authentication once Supabase stops blocking request
  // const userId = supabase.auth.user().id;
  const userId = "2b205512-541f-45fa-8f3c-3426cea85ee6";
  const updateUserMutation = useUpdateUser(userId, values);

  const onMemberProfileFormSubmit = async (data) => {
    console.log({ data });
    setValues({
      ...values,
      ...data,
    });
    updateUserMutation.mutate();
  };

  const onMemberDetailsFormSubmit = async (data) => {
    console.log({ data });
    setValues({
      ...values,
      ...data,
    });
    updateUserMutation.mutate();
  };

  const onMemberSocialFormSubmit = async (data) => {
    console.log({ data });
    setValues({
      ...values,
      ...data,
    });
    updateUserMutation.mutate();
  };

  return (
    <PlasmicEditmember
      // Member Profile Form
      memberProfileForm={{
        defaultValues: {},
        onSubmit: onMemberProfileFormSubmit,
      }}
      // Member Details Form
      memberDetailsForm={{
        defaultValues: {},
        onSubmit: onMemberDetailsFormSubmit,
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
      skillsMultiSelectInput={{
        options: [
          { id: 1, label: "Skill 1" },
          { id: 2, label: "Skill 2" },
          { id: 3, label: "Skill 3" },
          { id: 4, label: "Skill 4" },
          { id: 5, label: "Skill 5" },
          { id: 6, label: "Skill 6" },
          { id: 7, label: "Skill 7" },
          { id: 8, label: "Skill 8" },
          { id: 9, label: "Skill 9" },
        ],
      }}
      interestsMultiSelectInput={{
        options: [
          { id: 1, label: "Interest 1" },
          { id: 2, label: "Interest 2" },
          { id: 3, label: "Interest 3" },
          { id: 4, label: "Interest 4" },
          { id: 5, label: "Interest 5" },
          { id: 6, label: "Interest 6" },
          { id: 7, label: "Interest 7" },
          { id: 8, label: "Interest 8" },
          { id: 9, label: "Interest 9" },
        ],
      }}
      communityMultiSelectInput={{
        options: [
          { id: 1, label: "Community 1" },
          { id: 2, label: "Community 2" },
          { id: 3, label: "Community 3" },
          { id: 4, label: "Community 4" },
          { id: 5, label: "Community 5" },
          { id: 6, label: "Community 6" },
          { id: 7, label: "Community 7" },
          { id: 8, label: "Community 8" },
          { id: 9, label: "Community 9" },
        ],
      }}
      // Member Social Form
      memberSocialForm={{
        defaultValues: {},
        onSubmit: onMemberSocialFormSubmit,
      }}
    />
  );
}

export default Editmember;
