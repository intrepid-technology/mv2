import * as React from "react";

import { PlasmicTest } from "../components/plasmic/market_v_2/PlasmicTest";
import { useTeams } from "../backend/team";

function Test() {
  const {isLoading, data} = useTeams()
  
  return (
    <PlasmicTest
      formContext={{
        defaultValues: {
          text: "Default Text",
          multi_checkbox: [
            {id: 1, label: 'Apple'},
            {id: 3, label: 'Orange'},
          ]
        },
        onSubmit: async (data) => console.log(data),
      }}
      formSelectInput={{
        options: data
      }}
      formMultiCheckboxInput={{
        options: [
          { id: 1, label: "Apple" },
          { id: 2, label: "Banana" },
          { id: 3, label: "Orange" },
          { id: 4, label: "Grapes" },
        ],
      }}
    />
  );
}

export default Test;
