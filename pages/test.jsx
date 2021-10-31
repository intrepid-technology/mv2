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
      formMultiSelectInput={{
        options: [
          {id: 1, label: 'Neptunium',},
          {id: 2, label: 'Plutonium',},
          {id: 3, label: 'Americium',},
          {id: 4, label: 'Curium',},
          {id: 5, label: 'Berkelium',},
          {id: 6, label: 'Californium',},
          {id: 7, label: 'Einsteinium',},
          {id: 8, label: 'Fermium',},
          {id: 9, label: 'Mendelevium',},
          {id: 10, label: 'Nobelium',}
        ]
      }}
    />
  );
}

export default Test;
