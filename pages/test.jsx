import * as React from "react";

import { PlasmicTest } from "../components/plasmic/market_v_2/PlasmicTest";

function Test() {
  return (
    <PlasmicTest
      formContext={{
        defaultValues: {
          text: "Default Text",
        },
        onSubmit: async (data) => console.log(data),
      }}
      formSelectInput={{
        options: [
          { id: 1, label: "One" },
          { id: 2, label: "Two" },
          { id: 3, label: "Three" },
        ],
      }}
    />
  );
}

export default Test;
